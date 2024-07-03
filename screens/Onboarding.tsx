import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const Onboarding = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.onboarding3}>
      <View style={[styles.onboarding3Inner, styles.onboarding3InnerPosition]}>
        <View
          style={[styles.onboarding3Inner, styles.onboarding3InnerPosition]}
        >
          <View
            style={[styles.onboarding3Inner, styles.onboarding3InnerPosition]}
          >
            <View
              style={[styles.onboarding3Inner, styles.onboarding3InnerPosition]}
            >
              <View
                style={[
                  styles.onboarding3Inner,
                  styles.onboarding3InnerPosition,
                ]}
              >
                <View style={styles.frameParent}>
                  <View style={styles.wrapper}>
                    <Text style={styles.text}>9:40</Text>
                  </View>
                  <View style={styles.cellularConnectionParent}>
                    <Image
                      style={styles.cellularConnectionIcon}
                      contentFit="cover"
                      source={require("../assets/cellular-connection.png")}
                    />
                    <Image
                      style={styles.cellularConnectionIcon}
                      contentFit="cover"
                      source={require("../assets/wifi.png")}
                    />
                    <View
                      style={[styles.batteryWrapper, styles.capIconPosition]}
                    >
                      <View
                        style={[styles.batteryWrapper, styles.capIconPosition]}
                      >
                        <View style={[styles.border, styles.borderBorder]} />
                        <Image
                          style={[styles.capIcon, styles.capIconPosition]}
                          contentFit="cover"
                          source={require("../assets/cap.png")}
                        />
                        <View style={styles.capacity} />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.groupParent, styles.parentLayout]}>
        <View
          style={[styles.bookAnAppointmentTodayParent, styles.parentLayout]}
        >
          <Text
            style={styles.bookAnAppointment}
          >{`Book an appointment today `}</Text>
          <Text style={styles.headline}>Let’s get started!</Text>
        </View>
        <View style={styles.groupView}>
          <Pressable
            style={[styles.rectangleParent, styles.rectanglePosition]}
            onPress={() => navigation.navigate("Registration")}
          >
            <View style={[styles.groupChild, styles.groupPosition]} />
            <Text style={[styles.signUp, styles.signTypo]}>Sign Up</Text>
          </Pressable>
          <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
            <Pressable
              style={[styles.groupItem, styles.groupPosition]}
              onPress={() => navigation.navigate("SignIn")}
            />
            <Text style={[styles.signIn, styles.signTypo]}>Sign in</Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.img83512Icon}
        contentFit="cover"
        source={require("../assets/img-8351-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  onboarding3InnerPosition: {
    left: 0,
    top: 0,
  },
  capIconPosition: {
    right: 0,
    position: "absolute",
  },
  borderBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  parentLayout: {
    width: 300,
    position: "absolute",
  },
  rectanglePosition: {
    height: "43.75%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  groupPosition: {
    borderRadius: Border.br_13xl,
    height: "100%",
    bottom: "0%",
    left: "0%",
    top: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  signTypo: {
    fontFamily: FontFamily.inter,
    top: "28.57%",
    lineHeight: 24,
    fontSize: FontSize.size_base,
    textAlign: "center",
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_sm,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppins,
    width: 30,
    left: 0,
    top: 0,
    position: "absolute",
  },
  wrapper: {
    width: 30,
    height: 21,
    left: 0,
    top: 0,
    position: "absolute",
  },
  cellularConnectionIcon: {
    width: 16,
    height: 11,
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: Color.colorGray_100,
    width: 17,
    opacity: 0.35,
    height: 11,
    top: 0,
    position: "absolute",
  },
  capIcon: {
    top: 4,
    width: 1,
    height: 4,
    opacity: 0.4,
  },
  capacity: {
    top: 2,
    right: 3,
    borderRadius: 1,
    backgroundColor: Color.colorGray_100,
    width: 14,
    height: 7,
    position: "absolute",
  },
  batteryWrapper: {
    width: 19,
    height: 11,
    top: 0,
  },
  cellularConnectionParent: {
    height: "52.38%",
    width: "22.26%",
    top: "23.81%",
    bottom: "23.81%",
    left: "77.74%",
    right: "0%",
    position: "absolute",
  },
  frameParent: {
    top: 12,
    left: 25,
    width: 310,
    height: 21,
    position: "absolute",
  },
  onboarding3Inner: {
    width: 360,
    height: 45,
    position: "absolute",
  },
  bookAnAppointment: {
    top: 32,
    letterSpacing: 1,
    color: Color.colorGray_500,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    width: 300,
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    left: 0,
    position: "absolute",
  },
  headline: {
    fontSize: 22,
    lineHeight: 30,
    fontWeight: "700",
    left: "0%",
    top: "0%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppins,
    position: "absolute",
    width: "100%",
  },
  bookAnAppointmentTodayParent: {
    height: 56,
    left: 0,
    top: 0,
  },
  groupChild: {
    borderColor: Color.colorDodgerblue_100,
    borderWidth: 1,
    borderStyle: "solid",
  },
  signUp: {
    left: "38%",
    fontWeight: "500",
    color: Color.colorDodgerblue_100,
  },
  rectangleParent: {
    top: "56.25%",
    bottom: "0%",
  },
  groupItem: {
    backgroundColor: Color.colorDodgerblue_100,
  },
  signIn: {
    left: "39.6%",
    fontWeight: "600",
    color: Color.colorWhite,
  },
  rectangleGroup: {
    bottom: "56.25%",
    top: "0%",
    height: "43.75%",
  },
  groupView: {
    height: "56.64%",
    width: "83.33%",
    top: "43.36%",
    right: "8.33%",
    left: "8.33%",
    bottom: "0%",
    position: "absolute",
  },
  groupParent: {
    top: 375,
    left: 30,
    height: 226,
  },
  img83512Icon: {
    top: 184,
    left: 108,
    width: 164,
    height: 164,
    position: "absolute",
  },
  onboarding3: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Onboarding;
