import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Alert, RefreshControl } from 'react-native';
import axios from 'axios';
import { Image } from 'expo-image'; // Import from expo-image

// Define the structure of an event
interface Event {
  _id: string; // Assuming _id as MongoDB identifier
  title: string;
  description: string;
  imageUrl: string;
}

export default function EventListingScreen() {
  const [events, setEvents] = useState<Event[]>([]); // State to store the list of events
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false); // State for pull-to-refresh


  // Fetch events from the backend
  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://192.168.2.6:5001/eventRoute'); // Make sure the URL matches your backend route
      setEvents(response.data); // Assuming the backend returns an array of events
    } catch (error) {
      console.error('Error fetching events:', error);
      Alert.alert('Error', 'Could not fetch events.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch events when the component mounts
  useEffect(() => {
    fetchEvents();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true); // Start refreshing
    await fetchEvents(); // Fetch events again
    setRefreshing(false); // End refreshing
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Loading events...</Text>
      </View>
    );
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <Text style={styles.title}>Event Listings</Text>
      {events.length > 0 ? (
        events.map((event) => (
          <View key={event._id} style={styles.eventCard}>
            <Text style={styles.eventTitle}>{event.title}</Text>
            <Text style={styles.eventDescription}>{event.description}</Text>
            {event.imageUrl && (
              <Image
                source={{ uri: event.imageUrl }}
                style={styles.eventImage}
                contentFit="cover" // This helps with image aspect ratio
                placeholder={require('../../assets/images/placeholder.png')}// Optional placeholder image
              />
            )}
          </View>
        ))
      ) : (
        <Text style={styles.noEventsText}>No events found.</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  eventCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  eventDescription: {
    fontSize: 14,
    marginBottom: 10,
    color: '#333',
  },
  eventImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  noEventsText: {
    textAlign: 'center',
    color: '#999',
  },
});
