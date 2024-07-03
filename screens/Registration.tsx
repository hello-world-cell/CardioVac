import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import And from "../components/And";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Registration = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.registration}>
      <View style={[styles.topParent, styles.topParentPosition]}>
        <View style={[styles.top, styles.topPosition]}>
          <Text style={[styles.signUp, styles.text1Typo]}>Sign Up</Text>
          <Image
            style={[styles.buttonIcon, styles.topPosition]}
            contentFit="cover"
            source={require("../assets/button1.png")}
          />
        </View>
        <View style={[styles.groupParent, styles.groupParentPosition]}>
          <Pressable
            style={[styles.rectangleParent, styles.groupParentPosition]}
            onPress={() => navigation.navigate("Onboarding")}
          >
            <View style={[styles.groupChild, styles.groupChildPosition]} />
            <Text style={[styles.signUp1, styles.signTypo]}>Sign Up</Text>
          </Pressable>
          <Pressable
            style={[styles.haveAnAccountContainer, styles.topParentPosition]}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text style={styles.text}>
              <Text style={[styles.haveAnAccount, styles.text1Typo]}>
                <Text style={styles.haveAnAccount1}>{`Have an account? `}</Text>
                {` `}
              </Text>
              <Text style={[styles.signIn, styles.signTypo]}>Sign In</Text>
            </Text>
          </Pressable>
        </View>
        <View style={[styles.groupContainer, styles.groupParentPosition]}>
          <View style={[styles.roundedRectangleParent, styles.roundedPosition]}>
            <View style={[styles.roundedRectangle, styles.borderBorder]} />
            <Text style={[styles.enterYourName, styles.enterYourNameTypo]}>
              Enter your name
            </Text>
            <Image
              style={[styles.iconUserOutline, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/icon--useroutline1.png")}
            />
          </View>
          <View style={[styles.roundedRectangleGroup, styles.roundedPosition]}>
            <View style={[styles.roundedRectangle, styles.borderBorder]} />
            <Text style={[styles.enterYourName, styles.enterYourNameTypo]}>
              Enter your email
            </Text>
            <Image
              style={[styles.iconUserOutline, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/icon--useroutline.png")}
            />
          </View>
          <View
            style={[
              styles.termsOfServicePrivacyAgr,
              styles.checkboxIconPosition,
            ]}
          >
            <Text style={[styles.iAgreeToContainer, styles.enterYourNameTypo]}>
              <Text
                style={styles.iAgreeTo}
              >{`I agree to the healthcare `}</Text>
              <Text style={styles.termsOfService}>Terms of Service</Text>
              <And />
              <Text style={styles.termsOfService}>Privacy Policy</Text>
            </Text>
            <Image
              style={[styles.checkboxIcon, styles.checkboxIconPosition]}
              contentFit="cover"
              source={require("../assets/checkbox.png")}
            />
          </View>
          <View
            style={[styles.roundedRectangleContainer, styles.roundedPosition]}
          >
            <View style={[styles.roundedRectangle, styles.borderBorder]} />
            <Text style={[styles.enterYourName, styles.enterYourNameTypo]}>
              Enter your password
            </Text>
            <Image
              style={[styles.iconEyeSlash, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/icon--eye-slash.png")}
            />
            <Image
              style={[styles.iconUserOutline, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/icon--password.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.topBarWrapper, styles.checkboxIconPosition]}>
        <View style={[styles.topBarWrapper, styles.checkboxIconPosition]}>
          <View style={styles.frameParent}>
            <View style={[styles.wrapper, styles.text1Position]}>
              <Text style={[styles.text1, styles.text1Position]}>9:40</Text>
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
              <View style={[styles.batteryWrapper, styles.capIconPosition]}>
                <View style={[styles.batteryWrapper, styles.capIconPosition]}>
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
  );
};

const styles = StyleSheet.create({
  topParentPosition: {
    top: 65,
    position: "absolute",
  },
  topPosition: {
    height: 40,
    left: 0,
    top: 0,
    position: "absolute",
  },
  text1Typo: {
    fontFamily: FontFamily.poppins,
    color: Color.colorGray_100,
  },
  groupParentPosition: {
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  groupChildPosition: {
    height: "100%",
    top: "0%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  signTypo: {
    fontWeight: "600",
    fontFamily: FontFamily.poppins,
  },
  roundedPosition: {
    height: "20.82%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  borderBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  enterYourNameTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "28.57%",
    width: "8%",
    height: "42.86%",
    top: "28.57%",
    position: "absolute",
    overflow: "hidden",
  },
  checkboxIconPosition: {
    left: 0,
    position: "absolute",
  },
  text1Position: {
    width: 30,
    left: 0,
    top: 0,
    position: "absolute",
  },
  capIconPosition: {
    right: 0,
    position: "absolute",
  },
  signUp: {
    top: 8,
    left: 115,
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    textAlign: "center",
    color: Color.colorGray_100,
    lineHeight: 24,
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  buttonIcon: {
    width: 40,
  },
  top: {
    width: 185,
  },
  groupChild: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.colorDodgerblue_100,
    position: "absolute",
  },
  signUp1: {
    left: "39.67%",
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    top: "28.57%",
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 24,
    position: "absolute",
  },
  rectangleParent: {
    height: "65.12%",
    bottom: "34.88%",
    top: "0%",
  },
  haveAnAccount1: {
    letterSpacing: 1,
  },
  haveAnAccount: {
    color: Color.colorGray_100,
  },
  signIn: {
    color: Color.colorDodgerblue_100,
  },
  text: {
    fontSize: FontSize.size_sm,
    textAlign: "center",
  },
  haveAnAccountContainer: {
    left: 55,
  },
  groupParent: {
    height: "12.46%",
    top: "87.54%",
    bottom: "0%",
    left: "0%",
  },
  roundedRectangle: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorWhitesmoke,
    borderColor: Color.colorGray_400,
    height: "100%",
    top: "0%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  enterYourName: {
    top: "32.14%",
    left: "21.33%",
    lineHeight: 21,
    color: Color.colorGray_300,
    fontSize: FontSize.size_sm,
  },
  iconUserOutline: {
    right: "83.67%",
    left: "8.33%",
  },
  roundedRectangleParent: {
    bottom: "79.18%",
    top: "0%",
  },
  roundedRectangleGroup: {
    top: "30.11%",
    bottom: "49.07%",
  },
  iAgreeTo: {
    color: Color.colorGray_100,
  },
  termsOfService: {
    color: Color.colorDodgerblue_100,
  },
  iAgreeToContainer: {
    left: 40,
    fontSize: FontSize.size_smi,
    lineHeight: 18,
    width: 244,
    top: 0,
  },
  checkboxIcon: {
    borderRadius: 8,
    width: 24,
    height: 24,
    top: 0,
    overflow: "hidden",
  },
  termsOfServicePrivacyAgr: {
    top: 233,
    right: 16,
    height: 36,
  },
  iconEyeSlash: {
    right: "8.33%",
    left: "83.67%",
  },
  roundedRectangleContainer: {
    top: "60.22%",
    bottom: "18.96%",
  },
  groupContainer: {
    height: "38.99%",
    top: "10.14%",
    bottom: "50.87%",
  },
  topParent: {
    left: 30,
    width: 300,
    height: 690,
  },
  text1: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppins,
  },
  wrapper: {
    height: 21,
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
  topBarWrapper: {
    width: 360,
    height: 45,
    top: 0,
  },
  registration: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Registration;
