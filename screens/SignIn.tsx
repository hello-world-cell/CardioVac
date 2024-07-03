import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const SignIn = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.signIn}>
      <View style={[styles.topParent, styles.topParentPosition]}>
        <View style={[styles.top, styles.topPosition]}>
          <Text style={styles.signIn1}>Sign In</Text>
          <Image
            style={[styles.buttonIcon, styles.topPosition]}
            contentFit="cover"
            source={require("../assets/button1.png")}
          />
        </View>
        <View style={[styles.groupParent, styles.groupPosition]}>
          <View
            style={[
              styles.roundedRectangleParent,
              styles.rectangleParentPosition,
            ]}
          >
            <View style={[styles.roundedRectangle, styles.roundedBorder]} />
            <Text style={[styles.enterYourEmail, styles.enterYourEmailTypo]}>
              Enter your email or username
            </Text>
            <Image
              style={[styles.iconUserOutline, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/icon--useroutline.png")}
            />
          </View>
          <View style={[styles.roundedRectangleGroup, styles.groupPosition]}>
            <View style={[styles.roundedRectangle, styles.roundedBorder]} />
            <Text style={[styles.enterYourEmail, styles.enterYourEmailTypo]}>
              Enter your password
            </Text>
            <Image
              style={[styles.iconEyeSlash, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/icon--eye-slash.png")}
            />
            <Image
              style={[styles.iconUserOutline, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/icon--password.png")}
            />
          </View>
          <Text style={[styles.forgotPassword, styles.enterYourEmailTypo]}>
            Forgot password?
          </Text>
        </View>
        <View style={[styles.groupContainer, styles.groupPosition]}>
          <View
            style={[styles.rectangleParent, styles.rectangleParentPosition]}
          >
            <Pressable
              style={styles.groupChild}
              onPress={() => navigation.navigate("Home")}
            />
            <Text style={[styles.signIn2, styles.signTypo]}>Sign In</Text>
          </View>
          <Pressable
            style={[styles.dontHaveAnContainer, styles.topParentPosition]}
            onPress={() => navigation.navigate("Registration")}
          >
            <Text style={styles.text}>
              <Text style={styles.dontHaveAnAccount}>
                <Text
                  style={styles.dontHaveAn}
                >{`Don’t have an account? `}</Text>
                {` `}
              </Text>
              <Text style={[styles.signUp, styles.signTypo]}>Sign up</Text>
            </Text>
          </Pressable>
        </View>
        <View style={styles.groupView}>
          <View style={[styles.lineParent, styles.lineParentPosition]}>
            <View style={styles.groupItem} />
            <View style={[styles.groupInner, styles.lineParentPosition]} />
            <Text style={[styles.or, styles.signTypo1]}>OR</Text>
          </View>
          <View
            style={[styles.roundedRectangleContainer, styles.roundedPosition]}
          >
            <View style={[styles.roundedRectangle2, styles.roundedBorder]} />
            <Text style={[styles.signInWith, styles.signTypo]}>
              Sign in with Google
            </Text>
            <Image
              style={[styles.googleIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/google.png")}
            />
          </View>
          <View
            style={[styles.roundedRectangleParent1, styles.roundedPosition]}
          >
            <View style={[styles.roundedRectangle2, styles.roundedBorder]} />
            <Text style={[styles.signInWith1, styles.signTypo]}>
              Sign in with Facebook
            </Text>
            <Image
              style={[styles.facebookIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/facebook.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.topBarWrapper}>
        <View style={styles.topBarWrapper}>
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
                  <View style={[styles.border, styles.roundedBorder]} />
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
  groupPosition: {
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  rectangleParentPosition: {
    top: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  roundedBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  enterYourEmailTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "28.57%",
    width: "8%",
    height: "42.86%",
    top: "28.57%",
    position: "absolute",
    overflow: "hidden",
  },
  signTypo: {
    fontWeight: "600",
    fontFamily: FontFamily.poppins,
  },
  lineParentPosition: {
    height: 32,
    top: 0,
    position: "absolute",
  },
  signTypo1: {
    fontSize: FontSize.size_base,
    textAlign: "center",
    lineHeight: 24,
    position: "absolute",
  },
  roundedPosition: {
    height: "28.87%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  iconLayout: {
    bottom: "32.14%",
    width: "6.67%",
    height: "35.71%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "32.14%",
    position: "absolute",
    overflow: "hidden",
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
  signIn1: {
    top: 8,
    left: 119,
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    textAlign: "center",
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppins,
    lineHeight: 24,
    position: "absolute",
  },
  buttonIcon: {
    width: 40,
  },
  top: {
    width: 181,
  },
  roundedRectangle: {
    backgroundColor: Color.colorWhitesmoke,
    borderColor: Color.colorGray_400,
    borderRadius: Border.br_7xs,
    borderWidth: 1,
    bottom: "0%",
    height: "100%",
    top: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  enterYourEmail: {
    left: "21.33%",
    lineHeight: 21,
    color: Color.colorGray_300,
    fontSize: FontSize.size_sm,
    top: "32.14%",
    textAlign: "left",
  },
  iconUserOutline: {
    right: "83.67%",
    left: "8.33%",
  },
  roundedRectangleParent: {
    bottom: "67.06%",
    height: "32.94%",
  },
  iconEyeSlash: {
    right: "8.33%",
    left: "83.67%",
  },
  roundedRectangleGroup: {
    top: "47.65%",
    bottom: "19.41%",
    height: "32.94%",
  },
  forgotPassword: {
    width: "40.33%",
    top: "89.41%",
    left: "59.67%",
    fontSize: FontSize.size_smi,
    lineHeight: 18,
    fontWeight: "500",
    color: Color.colorDodgerblue_100,
  },
  groupParent: {
    height: "27.42%",
    top: "11.29%",
    bottom: "61.29%",
  },
  groupChild: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.colorDodgerblue_100,
    bottom: "0%",
    height: "100%",
    top: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  signIn2: {
    left: "41%",
    color: Color.colorWhite,
    fontSize: FontSize.size_base,
    textAlign: "center",
    lineHeight: 24,
    position: "absolute",
    top: "28.57%",
    fontWeight: "600",
  },
  rectangleParent: {
    height: "65.12%",
    bottom: "34.88%",
  },
  dontHaveAn: {
    letterSpacing: 1,
  },
  dontHaveAnAccount: {
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppins,
  },
  signUp: {
    color: Color.colorDodgerblue_100,
  },
  text: {
    fontSize: FontSize.size_sm,
    textAlign: "center",
  },
  dontHaveAnContainer: {
    left: 31,
  },
  groupContainer: {
    height: "13.87%",
    top: "46.77%",
    bottom: "39.35%",
  },
  groupItem: {
    top: 16,
    borderTopWidth: 1,
    width: 301,
    height: 1,
    borderColor: Color.colorGray_400,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  groupInner: {
    left: 132,
    width: 37,
    backgroundColor: Color.colorWhite,
  },
  or: {
    marginTop: -12,
    marginLeft: -11,
    top: "50%",
    left: "50%",
    color: Color.colorDarkgray,
    fontFamily: FontFamily.poppins,
  },
  lineParent: {
    left: 0,
    width: 300,
  },
  roundedRectangle2: {
    borderColor: Color.colorGainsboro,
    borderRadius: Border.br_7xs,
    borderWidth: 1,
    bottom: "0%",
    height: "100%",
    top: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
  signInWith: {
    left: "21.67%",
    fontSize: FontSize.size_base,
    textAlign: "center",
    lineHeight: 24,
    position: "absolute",
    top: "28.57%",
    fontWeight: "600",
    color: Color.colorGray_100,
  },
  googleIcon: {
    right: "86.67%",
    left: "6.67%",
  },
  roundedRectangleContainer: {
    top: "29.38%",
    bottom: "41.75%",
  },
  signInWith1: {
    left: "25%",
    fontSize: FontSize.size_base,
    textAlign: "center",
    lineHeight: 24,
    position: "absolute",
    top: "28.57%",
    fontWeight: "600",
    color: Color.colorGray_100,
  },
  facebookIcon: {
    right: "87.33%",
    left: "6%",
  },
  roundedRectangleParent1: {
    top: "71.13%",
    bottom: "0%",
  },
  groupView: {
    top: 426,
    height: 194,
    left: 0,
    width: 300,
    position: "absolute",
  },
  topParent: {
    left: 30,
    height: 620,
    width: 300,
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
    left: 0,
    top: 0,
    position: "absolute",
  },
  signIn: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default SignIn;
