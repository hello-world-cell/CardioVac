import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, Alert, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import { format, addDays, isWeekend } from 'date-fns';

import { getAuth } from '@firebase/auth'; // Import getAuth for Firebase Authentication

import saveAppointment from '../Firebase/SaveAppointment'; // Import saveAppointment function

const getNextWeekdays = () => {
  const weekdays = [];
  let currentDate = new Date();

  while (weekdays.length < 5) {
    currentDate = addDays(currentDate, 1);
    if (!isWeekend(currentDate)) {
      weekdays.push(currentDate);
    }
  }

  return weekdays;
};

const BookingScreen = () => {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);  // <--- Add this line
  const nextWeekdays = getNextWeekdays();
  const slots = [
    '08:30 AM', '09:00 AM', '09:30 AM',
    '10:00 AM', '11:30 AM', '12:00 PM',
    '12:30 PM', '01:30 PM'
  ];

  console.log("Component Rendered");


  const handleSlotPress = (slot: string) => {
    setSelectedSlot(slot);
  };

  const handleDatePress = (date: Date) => {
    setSelectedDate(date);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const handleConfirm = (date: Date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  const handleBookPress = async () => {
    if (!selectedSlot || !selectedDate) {
      Alert.alert("Error", "Please select a date and time slot.");
      return;
    }
  

    // Get the current user's ID
    const auth = getAuth();
    const user = auth.currentUser;
    if (!user) {
      Alert.alert("Error", "User not authenticated.");
      return;
    }

    const userId = user.uid;
    const appointment = {
      date: selectedDate as Date,
      time: selectedSlot as string,
      place: 'Finest Health Medical Centre',
      vaccinationShot: 'Influenza'
    };

    try {
      await saveAppointment(userId, appointment);
      Alert.alert("Success", "Appointment booked successfully!");
    } catch (error) {
      Alert.alert("Error", "Failed to book appointment.");
      console.error("Error booking appointment: ", error);
    }
  
  }
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
      <Pressable style={styles.calendarIcon} onPress={showDatePicker}>
        <Text style={styles.datePickerText}>Select Date</Text>
      </Pressable>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        date={selectedDate || new Date()}
      />
      <Text>Selected Date: {selectedDate ? format(selectedDate, 'PPP') : 'None'}</Text>

      <View style={styles.datePicker}>
        {nextWeekdays.map((date, index) => (
          <Pressable
            key={index}
            style={[styles.dateButton, selectedDate && format(selectedDate, 'PPP') === format(date, 'PPP') ? styles.selectedDate : undefined]}
            onPress={() => setSelectedDate(date)}
          >
            <Text style={styles.dateText}>{format(date, 'EEE dd')}</Text>
          </Pressable>
        ))}
      </View>
      <View style={styles.slotsContainer}>
        {slots.map((slot: any, index: any) => (
          <Pressable
            key={index}
            style={[styles.slotButton, selectedSlot === slot && styles.selectedSlot]}
            onPress={() => handleSlotPress(slot)}
          >
            <Text style={styles.slotText}>{slot}</Text>
          </Pressable>
        ))}
      </View>

      <View style={styles.summary}>
        <Text style={styles.summaryTitle}>Appointment Summary</Text>
        <Text style={styles.summaryDetail}>Location: Finest Health Medical Centre</Text>
        <Text style={styles.summaryDetail}>Vaccine: Influenza</Text>
        <Text style={styles.summaryDetail}>Date: {selectedDate ? format(selectedDate, "PPP") : "N/A"}</Text>
        <Text style={styles.summaryDetail}>Time: {selectedSlot || "N/A"}</Text>
      </View>

      <Pressable style={styles.bookButton}  onPress={handleBookPress}>
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
  calendarIcon: {
    alignSelf: 'flex-start',
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
    marginBottom: 10,
  },
  datePickerText: {
    color: '#fff',
    fontSize: 14,
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
  summary: {
    marginBottom: 16,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  summaryDetail: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
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
