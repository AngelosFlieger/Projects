import { ScrollView, View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import axios from 'axios';


function signup() {
  const [email, setEmail] = useState('');
  const [emailVerify, setEmailVerify] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState(false);



  function handleSubmit() {
    const userData = {
      email: email,
      password: password
    };
    if (emailVerify && passwordVerify) {
      axios.post("http://192.168.2.6:5001/signup", userData)
        .then(res => {
          console.log(res.data);
          if (res.data.status == 'ok'){
            Alert.alert('Registration Successfull!');

          } else if (res.data.data === "User already exists!") {
            Alert.alert('User already exists!');
          } else {
            Alert.alert('Error', res.data.data || 'Something went wrong');
          }
        })
        .catch(e => console.log(e));
    }
  }


  function handleEmail(e) {
    const emailVar = e.nativeEvent.text;
    setEmail(emailVar);
    setEmailVerify(false)
    if (emailVar.length > 1) {
      setEmailVerify(true);
    }
  }

  function handlePassword(e) {
    const passwordVar = e.nativeEvent.text;
    setPassword(passwordVar);
    setPasswordVerify(false)
    if (passwordVar.length > 1) {
      setPasswordVerify(true);
    }
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps={"handled"}>
      <View style={styles.container}>
        <Text>SignUp</Text>
        <View style={styles.inputContainer}>
          <TextInput placeholder="email" placeholderTextColor="gray" style={styles.input} onChange={e => handleEmail(e)} />
          <TextInput placeholder="password" placeholderTextColor="gray" style={styles.input} onChange={e => handlePassword(e)} />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the view takes up the full screen
    backgroundColor: "white", // Sets the background color to white
    justifyContent: "center", // Centers content vertically
    alignItems: "center", // Centers content horizontally
  },
  inputContainer: {
    width: '80%', // Optional: Set width for the input container
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20, // Optional: Add margin for better spacing
  },
  input: {
    width: "100%",
    borderWidth: 1, // Add border for better visibility
    borderColor: "gray",
    padding: 10, // Add padding for better UX
    color: "black", // This sets the text color to black
  },
  button: {
    backgroundColor: '#007bff', // Blue background color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5, // Rounded corners
    marginTop: 20, // Margin for spacing
  },
  buttonText: {
    color: 'white', // White text color
    fontSize: 16, // Font size
    fontWeight: 'bold', // Bold text
    textAlign: 'center', // Center the text inside the button
  },
});

export default signup;