import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const SpalshScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={[styles.spalshScreen, styles.screenLayout]}
      onPress={() => navigation.navigate("Onboarding")}
    >
      <View style={[styles.splashScreen, styles.splashScreenPosition]}>
        <Image
          style={styles.splashScreenChild}
          contentFit="cover"
          source={require("../assets/group-144.png")}
        />
        <View
          style={[styles.protectPreventProsperWrapper, styles.protectLayout]}
        >
          <Text style={[styles.protectPreventProsper, styles.textFlexBox]}>
            Protect, Prevent, Prosper
          </Text>
        </View>
        <View style={[styles.topBarWrapper, styles.splashScreenPosition]}>
          <View style={[styles.topBarWrapper, styles.splashScreenPosition]}>
            <View style={styles.frameParent}>
              <View style={[styles.wrapper, styles.textPosition]}>
                <Text style={[styles.text, styles.textPosition]}>9:40</Text>
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
                    <View style={[styles.border, styles.borderPosition]} />
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
      <Image
        style={styles.img83511Icon}
        contentFit="cover"
        source={require("../assets/img-8351-1.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  screenLayout: {
    height: 800,
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
  },
  splashScreenPosition: {
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
  },
  protectLayout: {
    height: 58,
    width: 211,
    position: "absolute",
  },
  textFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_sm,
  },
  textPosition: {
    width: 30,
    left: 0,
    top: 0,
    position: "absolute",
  },
  capIconPosition: {
    right: 0,
    position: "absolute",
  },
  borderPosition: {
    top: 0,
    height: 11,
  },
  splashScreenChild: {
    height: "100%",
    width: "100.39%",
    top: "0.13%",
    right: "-0.22%",
    bottom: "-0.12%",
    left: "-0.17%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  protectPreventProsper: {
    fontWeight: "600",
    color: "#213359",
    height: 58,
    width: 211,
    position: "absolute",
    left: 0,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_sm,
    top: 0,
  },
  protectPreventProsperWrapper: {
    top: 476,
    left: 76,
  },
  text: {
    color: Color.colorGray_100,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_sm,
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
    borderStyle: "solid",
    borderColor: Color.colorGray_100,
    borderWidth: 1,
    width: 17,
    opacity: 0.35,
    height: 11,
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
    right: "0%",
    bottom: "23.81%",
    left: "77.74%",
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
    height: 45,
  },
  splashScreen: {
    overflow: "hidden",
    height: 800,
    backgroundColor: Color.colorWhite,
  },
  img83511Icon: {
    top: 284,
    left: 87,
    width: 204,
    height: 204,
    position: "absolute",
  },
  spalshScreen: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
  },
});

export default SpalshScreen;
