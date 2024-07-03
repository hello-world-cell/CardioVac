import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const SetUp = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.setUp}>
      <View style={styles.setUpInner}>
        <View style={styles.setUpInner}>
          <View style={styles.setUpInner}>
            <View style={styles.setUpInner}>
              <View style={styles.frameParent}>
                <View style={[styles.wrapper, styles.wrapperLayout]}>
                  <Text style={styles.text}>9:40</Text>
                </View>
                <View
                  style={[
                    styles.cellularConnectionParent,
                    styles.roundedParentPosition,
                  ]}
                >
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
                    <View
                      style={[styles.batteryWrapper, styles.capIconPosition]}
                    >
                      <View style={styles.border} />
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
      <View style={styles.rectangleParent}>
        <View style={styles.groupChildShadowBox} />
        <View style={[styles.frameGroup, styles.wrapperLayout]}>
          <Image
            style={styles.groupItem}
            contentFit="cover"
            source={require("../assets/frame-52.png")}
          />
          <Text style={styles.book}>Book</Text>
        </View>
      </View>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChildShadowBox} />
        <View style={[styles.frameGroup, styles.wrapperLayout]}>
          <Image
            style={styles.groupItem}
            contentFit="cover"
            source={require("../assets/frame-52.png")}
          />
          <Text style={styles.book}>Book</Text>
        </View>
      </View>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChildShadowBox} />
        <View style={[styles.frameGroup, styles.wrapperLayout]}>
          <Image
            style={styles.groupItem}
            contentFit="cover"
            source={require("../assets/frame-52.png")}
          />
          <Text style={styles.book}>Book</Text>
        </View>
      </View>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChildShadowBox} />
        <Pressable
          style={[styles.frameGroup, styles.wrapperLayout]}
          onPress={() => navigation.navigate("TopDoctors")}
        >
          <Image
            style={styles.groupItem}
            contentFit="cover"
            source={require("../assets/frame-52.png")}
          />
          <Text style={styles.book}>Book</Text>
        </Pressable>
        <View style={[styles.iconlylightprofileParent, styles.parentPosition]}>
          <Image
            style={[styles.iconlylightprofile, styles.iconlybulkhomeLayout]}
            contentFit="cover"
            source={require("../assets/iconlylightprofile2.png")}
          />
          <Text style={[styles.profile, styles.homeTypo]}>Profile</Text>
        </View>
        <Pressable
          style={[styles.iconlybulkhomeParent, styles.parentPosition]}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={[styles.iconlybulkhome, styles.iconlybulkhomeLayout]}
            contentFit="cover"
            source={require("../assets/iconlybulkhome2.png")}
          />
          <Text style={[styles.home, styles.homeTypo]}>Home</Text>
        </Pressable>
      </View>
      <View style={styles.groupParent}>
        <View style={styles.roundedRectangleParent}>
          <View style={[styles.roundedRectangle, styles.roundedBorder]} />
          <Text style={styles.fullNameContainerTypo}>
            <Text style={styles.fullName}>Full Name</Text>
            <Text style={styles.text1}> *</Text>
          </Text>
        </View>
        <View
          style={[styles.roundedRectangleGroup, styles.roundedParentPosition]}
        >
          <View style={[styles.roundedRectangle1, styles.roundedBorder]} />
          <Text style={styles.fullNameContainerTypo}>
            <Text style={styles.fullName}>Birth date</Text>
            <Text style={styles.text1}> *</Text>
          </Text>
        </View>
        <View
          style={[
            styles.roundedRectangleContainer,
            styles.roundedParentPosition,
          ]}
        >
          <View style={[styles.roundedRectangle2, styles.roundedBorder]} />
          <Text
            style={[styles.anyExistingConditions, styles.fullNameContainerTypo]}
          >
            Any existing conditions
          </Text>
        </View>
        <View
          style={[styles.roundedRectangleParent1, styles.roundedParentPosition]}
        >
          <View style={[styles.roundedRectangle3, styles.roundedBorder]} />
          <Text
            style={[styles.anyExistingConditions, styles.fullNameContainerTypo]}
          >
            Any drug allergies
          </Text>
        </View>
        <View style={styles.roundedRectangleParent2}>
          <View style={[styles.roundedRectangle4, styles.roundedBorder]} />
          <Text
            style={[styles.anyExistingConditions, styles.fullNameContainerTypo]}
          >
            Past vaccination records
          </Text>
        </View>
        <View
          style={[styles.roundedRectangleParent3, styles.roundedParentPosition]}
        >
          <View style={[styles.roundedRectangle5, styles.roundedBorder]} />
          <Text style={styles.fullNameContainerTypo}>
            <Text style={styles.fullName}>{`NRIC `}</Text>
            <Text style={styles.text1}>*</Text>
          </Text>
        </View>
      </View>
      <Image
        style={styles.roundedRectangleIcon}
        contentFit="cover"
        source={require("../assets/rounded-rectangle.png")}
      />
      <Text style={styles.submit}>Submit</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperLayout: {
    width: 30,
    position: "absolute",
  },
  roundedParentPosition: {
    right: "0%",
    position: "absolute",
  },
  capIconPosition: {
    right: 0,
    position: "absolute",
  },
  parentPosition: {
    bottom: "20.25%",
    top: "14.43%",
    height: "65.32%",
    position: "absolute",
  },
  iconlybulkhomeLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "53.68%",
    height: "46.32%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  homeTypo: {
    top: 34,
    textAlign: "left",
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppins,
    left: 0,
    position: "absolute",
  },
  roundedBorder: {
    borderColor: Color.colorGray_400,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_7xs,
    bottom: "0%",
    left: "0%",
    borderWidth: 1,
    borderStyle: "solid",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  fullNameContainerTypo: {
    fontWeight: "600",
    left: 14,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    top: 0,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_sm,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppins,
    width: 30,
    left: 0,
    top: 0,
    position: "absolute",
  },
  wrapper: {
    height: 21,
    left: 0,
    width: 30,
    top: 0,
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
    borderWidth: 1,
    borderStyle: "solid",
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
  },
  frameParent: {
    top: 12,
    left: 25,
    width: 310,
    height: 21,
    position: "absolute",
  },
  setUpInner: {
    height: 45,
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChildShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowColor: "rgba(0, 0, 0, 0.13)",
    height: 79,
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  groupItem: {
    left: 3,
    width: 24,
    height: 24,
    top: 0,
    position: "absolute",
  },
  book: {
    top: 29,
    textAlign: "left",
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    color: Color.colorGray_500,
    fontFamily: FontFamily.poppins,
    left: 0,
    position: "absolute",
  },
  frameGroup: {
    top: 16,
    left: 46,
    height: 47,
  },
  rectangleParent: {
    top: 721,
    height: 79,
    width: 360,
    left: 0,
    position: "absolute",
  },
  iconlylightprofile: {
    width: "61.42%",
    right: "38.58%",
    left: "0%",
  },
  profile: {
    color: Color.colorRoyalblue,
  },
  iconlylightprofileParent: {
    width: "10.58%",
    right: "12.78%",
    left: "76.64%",
  },
  iconlybulkhome: {
    width: "65%",
    right: "30%",
    left: "5%",
  },
  home: {
    color: Color.colorGray_500,
    top: 34,
  },
  iconlybulkhomeParent: {
    width: "10%",
    right: "45%",
    left: "45%",
  },
  roundedRectangle: {
    height: "64.77%",
    top: "35.23%",
  },
  fullName: {
    color: Color.colorGray_100,
  },
  text1: {
    color: Color.colorFirebrick,
  },
  roundedRectangleParent: {
    height: "15.28%",
    bottom: "84.72%",
    left: "0%",
    top: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  roundedRectangle1: {
    height: "65.68%",
    top: "34.32%",
  },
  roundedRectangleGroup: {
    height: "15.06%",
    top: "34.1%",
    bottom: "50.83%",
    left: "0%",
    width: "100%",
    right: "0%",
  },
  roundedRectangle2: {
    height: "66.15%",
    top: "33.85%",
  },
  anyExistingConditions: {
    color: Color.colorGray_100,
  },
  roundedRectangleContainer: {
    height: "14.96%",
    top: "51.15%",
    bottom: "33.89%",
    left: "0%",
    width: "100%",
    right: "0%",
  },
  roundedRectangle3: {
    height: "66.63%",
    top: "33.37%",
  },
  roundedRectangleParent1: {
    height: "14.85%",
    top: "68.21%",
    bottom: "16.94%",
    left: "0%",
    width: "100%",
    right: "0%",
  },
  roundedRectangle4: {
    height: "67.11%",
    top: "32.89%",
  },
  roundedRectangleParent2: {
    height: "14.74%",
    top: "85.26%",
    bottom: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  roundedRectangle5: {
    height: "65.22%",
    top: "34.78%",
  },
  roundedRectangleParent3: {
    height: "15.17%",
    top: "17.05%",
    bottom: "67.78%",
    left: "0%",
    width: "100%",
    right: "0%",
  },
  groupParent: {
    height: "70.82%",
    width: "83.33%",
    top: "9.94%",
    right: "8.32%",
    bottom: "19.25%",
    left: "8.35%",
    position: "absolute",
  },
  roundedRectangleIcon: {
    height: "4.38%",
    width: "51.11%",
    top: "82.88%",
    right: "25.56%",
    bottom: "12.74%",
    left: "23.33%",
    borderRadius: Border.br_7xs,
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  submit: {
    top: 669,
    left: 145,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontWeight: "500",
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  setUp: {
    flex: 1,
    height: 795,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    width: "100%",
  },
});

export default SetUp;
