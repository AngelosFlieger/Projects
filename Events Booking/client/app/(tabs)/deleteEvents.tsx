import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Alert, RefreshControl, Button } from 'react-native';
import axios from 'axios';
import { Image } from 'expo-image'; // Import from expo-image

interface Event {
  _id: string;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
}

export default function EventListingScreen() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  // Fetch events from the backend
  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://192.168.2.6:5001/eventRoute');
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
      Alert.alert('Error', 'Could not fetch events.');
    } finally {
      setLoading(false);
    }
  };

  // Function to delete an event
  const deleteEvent = async (eventId: string) => {
    try {
      console.log(`Deleting event with ID: ${eventId}`); // Logging event ID

      const response = await axios.delete(`http://192.168.2.6:5001/eventRoute/${eventId}`);
      console.log('Delete response:', response.data); // Log response from backend

      // Filter out the deleted event from the state
      setEvents(events.filter((event) => event._id !== eventId));
      Alert.alert('Success', 'Event deleted successfully');
    } catch (error) {
      console.error('Error deleting event:', error.response || error.message);
      Alert.alert('Error', 'Could not delete the event.');
    }
  };

  // Fetch events when the component mounts
  useEffect(() => {
    fetchEvents();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchEvents();
    setRefreshing(false);
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
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      <Text style={styles.title}>Event Listings</Text>
      {events.length > 0 ? (
        events.map((event) => (
          <View key={event._id} style={styles.eventCard}>
            <Text style={styles.eventTitle}>{event.title}</Text>
            <Text style={styles.eventDescription}>{event.description}</Text>
            <Text style={styles.eventPrice}>{event.price}</Text>
            {event.imageUrl && (
              <Image
                source={{ uri: event.imageUrl }}
                style={styles.eventImage}
                contentFit="cover"
                placeholder={require('../../assets/images/placeholder.png')}
              />
            )}
            <Button
              title="Delete"
              color="red"
              onPress={() => {
                Alert.alert(
                  'Confirm Delete',
                  'Are you sure you want to delete this event?',
                  [
                    { text: 'Cancel', style: 'cancel' },
                    {
                      text: 'Delete',
                      onPress: () => deleteEvent(event._id), // Call delete function
                    },
                  ]
                );
              }}
            />
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
    marginTop: 20,
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
  eventPrice: {
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
