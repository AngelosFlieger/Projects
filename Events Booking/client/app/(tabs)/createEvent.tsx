import React, { useState } from 'react';
import { ScrollView, Button, View, TextInput, Text, Alert, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

export default function AdminScreen() {
  const [title, setTitle] = useState<string>('');  // Explicitly set title type
  const [description, setDescription] = useState<string>('');  // Explicitly set description type
  const [price, setPrice] = useState<string>('');
  const [image, setImage] = useState<string | null>(null);  // Explicitly set image type

  // Function to pick an image
  const pickImage = async () => {
    // Request permission to access the image library
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert("Permission to access camera roll is required!");
      return;
    }

    // Launch the image picker
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.7,
    });

    // Check if the user canceled the operation
    if (result.canceled) {
      return; // If canceled, just return
    }

    // If the user did not cancel the operation, set the image URI
    setImage(result.assets[0].uri); // Access the first asset's URI
  };

  const submitForm = async () => {
    if (!title || !description) {
        Alert.alert('Error', 'Title and description are required!');
        return;
    }

    try {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('price', price);

        // Append the image if it exists
        if (image) {
            const uriParts = image.split('.');
            const fileType = uriParts[uriParts.length - 1];

            // Create a File object compatible with FormData
            const fileToUpload = {
                uri: image,
                name: `photo.${fileType}`, // Create a name for the file
                type: `image/${fileType}`, // Set the correct MIME type
            };

            formData.append('image', fileToUpload); // Append the image to FormData
        }

        // Log the FormData object for debugging
        console.log('FormData Object:', formData);

        // Make a POST request to your backend
        const response = await axios.post('http://192.168.2.6:5001/eventRoute', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        console.log('Response:', response.data); // Log the response data
        Alert.alert('Success', 'Event created successfully!');
        // Reset the form fields
        setTitle('');
        setDescription('');
        setPrice('');
        setImage(null);
    } catch (error) {
        console.error('Error:', error.response || error.message); // Log the error
        Alert.alert('Error', 'Something went wrong while uploading!');
    }
};


  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps={"handled"}>
      <View style={styles.container}>
        <Text style={styles.title}>Create Event</Text>
        <TextInput
          placeholder="Enter Title"
          value={title}
          onChangeText={setTitle}
          style={styles.input}
        />
        <TextInput
          placeholder="Enter Description"
          value={description}
          onChangeText={setDescription}
          style={styles.input}
          multiline
        />
        <TextInput
          placeholder="Enter Price"
          value={price}
          onChangeText={setPrice}
          style={styles.input}
          multiline
        />
        <Button title="Pick an Image" onPress={pickImage} />
        {image && <Image source={{ uri: image }} style={styles.image} />}
        <Button title="Submit" onPress={submitForm} />
      </View>
    </ScrollView>
  );
}

// Basic styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#282c34',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    color: 'white',
    width: '100%',
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 15,
  },
});
