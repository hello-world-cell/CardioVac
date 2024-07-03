import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import { CheckBox } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation, NavigationProp, ParamListBase } from "@react-navigation/native";

const conditionsList = [
  "Asthma",
  "Diabetes",
  "Heart Disease",
  "Chronic Lung Disease",
];

const allergiesList = [
  "Penicillin",
  "Sulfa Drugs",
  "Aspirin",
  "None",
];

const Profile = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const [userInfo, setUserInfo] = useState({
    name: "",
    age: "",
    existingConditions: [] as string[],
    drugAllergies: [] as string[],
    pneumococcalDate: new Date(),
    influenzaDate: new Date(),
    isPneumococcalGiven: false,
    isInfluenzaGiven: false,
  });

  const handleConditionChange = (condition: string) => {
    setUserInfo(prevState => ({
      ...prevState,
      existingConditions: prevState.existingConditions.includes(condition)
        ? prevState.existingConditions.filter(c => c !== condition)
        : [...prevState.existingConditions, condition],
    }));
  };

  const handleAllergyChange = (allergy: string) => {
    setUserInfo(prevState => ({
      ...prevState,
      drugAllergies: prevState.drugAllergies.includes(allergy)
        ? prevState.drugAllergies.filter(a => a !== allergy)
        : [...prevState.drugAllergies, allergy],
    }));
  };

  const handleDateChange = (event: any, selectedDate: Date | undefined, type: string) => {
    if (selectedDate) {
      setUserInfo(prevState => ({
        ...prevState,
        [type]: selectedDate,
      }));
    }
  };

  return (
    <ScrollView style={styles.profile}>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={userInfo.name}
          onChangeText={(text) => setUserInfo({ ...userInfo, name: text })}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Age</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your age"
          keyboardType="numeric"
          value={userInfo.age}
          onChangeText={(text) => setUserInfo({ ...userInfo, age: text })}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Existing Conditions</Text>
        {conditionsList.map((condition, index) => (
          <CheckBox
            key={index}
            title={condition}
            checked={userInfo.existingConditions.includes(condition)}
            onPress={() => handleConditionChange(condition)}
          />
        ))}
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Drug Allergies</Text>
        {allergiesList.map((allergy, index) => (
          <CheckBox
            key={index}
            title={allergy}
            checked={userInfo.drugAllergies.includes(allergy)}
            onPress={() => handleAllergyChange(allergy)}
          />
        ))}
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Vaccination Records</Text>
        <View style={styles.vaccineGroup}>
          <Text style={styles.vaccineLabel}>Pneumococcal Vaccine</Text>
          <CheckBox
            title="Given"
            checked={userInfo.isPneumococcalGiven}
            onPress={() => setUserInfo({ ...userInfo, isPneumococcalGiven: !userInfo.isPneumococcalGiven })}
          />
          {userInfo.isPneumococcalGiven && (
            <DateTimePicker
              value={userInfo.pneumococcalDate}
              mode="date"
              display="default"
              onChange={(event: any, date: Date | undefined) => handleDateChange(event, date, 'pneumococcalDate')}
            />
          )}
        </View>
        <View style={styles.vaccineGroup}>
          <Text style={styles.vaccineLabel}>Influenza Vaccine</Text>
          <CheckBox
            title="Given"
            checked={userInfo.isInfluenzaGiven}
            onPress={() => setUserInfo({ ...userInfo, isInfluenzaGiven: !userInfo.isInfluenzaGiven })}
          />
          {userInfo.isInfluenzaGiven && (
            <DateTimePicker
              value={userInfo.influenzaDate}
              mode="date"
              display="default"
              onChange={(event: any, date: Date | undefined) => handleDateChange(event, date, 'influenzaDate')}
            />
          )}
        </View>
      </View>
      <Pressable style={styles.button} onPress={() => console.log(userInfo)}>
        <Text style={styles.buttonText}>Save</Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    borderRadius: 4,
  },
  vaccineGroup: {
    marginBottom: 16,
  },
  vaccineLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 16,
    borderRadius: 4,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Profile;
