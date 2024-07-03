import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const TopDoctors = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const vaccines = [
    {
      name: 'Influenza',
      info: 'Taken once a year',
      icon: require("../../assets/influenza-1.png"),
      eligibility: true,
    },
    {
      name: 'Pneumococcal 1',
      info: 'Taken once in a lifetime',
      icon: require("../../assets/hand-1.png"),
      eligibility: true,
    },
    {
      name: 'Pneumococcal 2',
      info: 'Taken once in a lifetime',
      icon: require("../../assets/hand-1.png"),
      eligibility: false,
    },
  ];

  const handlePress = (vaccine: { name?: string; info?: string; icon?: any; eligibility: any; }) => {
    if (vaccine.eligibility) {
      navigation.navigate("bookingPage");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.vaccinations}>Vaccinations</Text>
      {vaccines.map((vaccine, index) => (
        <Pressable
          key={index}
          style={[styles.vaccineContainer, !vaccine.eligibility && styles.disabled]}
          onPress={() => handlePress(vaccine)}
          disabled={!vaccine.eligibility}
        >
          <Image style={styles.icon} source={vaccine.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.vaccineName}>{vaccine.name}</Text>
            <Text style={styles.vaccineInfo}>{vaccine.info}</Text>
            <Text style={vaccine.eligibility ? styles.eligibility : styles.notEligible}>
              {vaccine.eligibility ? 'You are eligible to take this' : 'You are not eligible to take this'}
            </Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    top: 80,
  },
  vaccinations: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  vaccineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  vaccineName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  vaccineInfo: {
    fontSize: 14,
    color: '#666',
  },
  eligibility: {
    fontSize: 14,
    color: '#4caf50',
  },
  notEligible: {
    fontSize: 14,
    color: '#f44336',
  },
  disabled: {
    opacity: 0.6,
  },
});

export default TopDoctors;
