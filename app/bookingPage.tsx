import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const BookingScreen = () => {
    const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
    const slots = [
    '08:30 AM', '09:00 AM', '09:30 AM',
    '10:00 AM', '11:30 AM', '12:00 PM',
    '12:30 PM', '01:30 PM'
  ];

  const handleSlotPress = (slot: string) => {
    setSelectedSlot(slot);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book your Influenza shot</Text>
      <View style={styles.medicalCentreInfo}>
        <Text style={styles.centreName}>Finest Health Medical Centre</Text>
        <Text style={styles.address}>19 Lorong 7 Toa Payoh, #01-268 Kim Keat Palm, Singapore 310019</Text>
        <Text style={styles.distance}>800m away</Text>
        <Text style={styles.phone}>+ 65 6264 0852</Text>
        <Text style={styles.hours}>Opening Hours</Text>
        <Text style={styles.hoursDetail}>Weekdays: 8 AM-2 PM</Text>
        <Text style={styles.hoursDetail}>Saturday: 9 AM-1 PM</Text>
      </View>
      <View style={styles.datePicker}>
        <Pressable style={styles.dateButton}><Text style={styles.dateText}>Mon 21</Text></Pressable>
        <Pressable style={styles.dateButton}><Text style={styles.dateText}>Tue 22</Text></Pressable>
        <Pressable style={[styles.dateButton, styles.selectedDate]}><Text style={styles.dateText}>Wed 23</Text></Pressable>
        <Pressable style={styles.dateButton}><Text style={styles.dateText}>Thu 24</Text></Pressable>
        <Pressable style={styles.dateButton}><Text style={styles.dateText}>Fri 25</Text></Pressable>
      </View>
      <View style={styles.slotsContainer}>
        {slots.map((slot, index) => (
          <Pressable
            key={index}
            style={[styles.slotButton, selectedSlot === slot && styles.selectedSlot]}
            onPress={() => handleSlotPress(slot)}
          >
            <Text style={styles.slotText}>{slot}</Text>
          </Pressable>
        ))}
      </View>
      <Pressable style={styles.bookButton}>
        <Text style={styles.bookButtonText}>Book Appointment</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  medicalCentreInfo: {
    marginBottom: 16,
  },
  centreName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  address: {
    fontSize: 14,
    color: '#666',
  },
  distance: {
    fontSize: 14,
    color: '#666',
  },
  phone: {
    fontSize: 14,
    color: '#666',
  },
  hours: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 8,
  },
  hoursDetail: {
    fontSize: 14,
    color: '#666',
  },
  datePicker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  dateButton: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#f0f0f0',
  },
  dateText: {
    fontSize: 14,
  },
  selectedDate: {
    backgroundColor: '#007bff',
  },
  slotsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  slotButton: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#f0f0f0',
    marginBottom: 8,
    width: '48%',
    alignItems: 'center',
  },
  selectedSlot: {
    backgroundColor: '#007bff',
  },
  slotText: {
    fontSize: 14,
  },
  bookButton: {
    padding: 16,
    borderRadius: 4,
    backgroundColor: '#007bff',
    alignItems: 'center',
  },
  bookButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default BookingScreen;
