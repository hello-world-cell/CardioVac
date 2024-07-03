import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const TopDoctors = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.topDoctors}>
      <View style={[styles.groupParent, styles.groupParentPosition]}>
        <View style={[styles.vaccinationsWrapper, styles.frameIconLayout]}>
          <Text style={[styles.vaccinations, styles.textTypo]}>
            Vaccinations
          </Text>
        </View>
        <View style={[styles.doctor2, styles.doctorLayout]}>
          <Pressable
            style={[styles.rectangleParent, styles.groupLayout]}
            onPress={() => navigation.navigate("Pneumococcal")}
          >
            <View style={[styles.groupChild, styles.borderBorder]} />
            <View style={[styles.imageParent, styles.imageLayout]}>
              <Image
                style={[styles.imageIcon, styles.imageLayout]}
                contentFit="cover"
                source={require("../assets/image.png")}
              />
              <Text style={[styles.takenOnceIn, styles.takenTypo]}>
                Taken once in a lifetime
              </Text>
              <View
                style={[
                  styles.iconlyboldlocationParent,
                  styles.iconlyboldlocationPosition1,
                ]}
              >
                <Image
                  style={[
                    styles.iconlyboldlocation,
                    styles.iconlyboldlocationPosition,
                  ]}
                  contentFit="cover"
                  source={require("../assets/iconlyboldlocation1.png")}
                />
                <Text style={styles.pcv13}>PCV13</Text>
              </View>
              <Text style={[styles.pneumococal1, styles.influenzaTypo]}>
                Pneumococal 1
              </Text>
            </View>
            <Image
              style={styles.influenza1Icon}
              contentFit="cover"
              source={require("../assets/influenza-1.png")}
            />
          </Pressable>
          <View style={[styles.rectangleGroup, styles.groupLayout]}>
            <View style={[styles.groupChild, styles.borderBorder]} />
            <View style={[styles.imageParent, styles.imageLayout]}>
              <Image
                style={[styles.imageIcon, styles.imageLayout]}
                contentFit="cover"
                source={require("../assets/image.png")}
              />
              <View
                style={[
                  styles.iconlyboldlocationGroup,
                  styles.iconlyboldlocationPosition1,
                ]}
              >
                <Image
                  style={[
                    styles.iconlyboldlocation1,
                    styles.iconlyboldlocationPosition,
                  ]}
                  contentFit="cover"
                  source={require("../assets/iconlyboldlocation1.png")}
                />
                <Text style={styles.pcv13}>PPSV23</Text>
              </View>
              <Text style={[styles.pneumococal1, styles.influenzaTypo]}>
                Pneumococal 2
              </Text>
            </View>
            <Text style={[styles.takenOnceIn1, styles.takenTypo]}>
              Taken once in a lifetime
            </Text>
            <Image
              style={styles.hand1Icon}
              contentFit="cover"
              source={require("../assets/hand-1.png")}
            />
          </View>
          <View style={[styles.doctor1, styles.doctorLayout]}>
            <View style={[styles.doctor1, styles.doctorLayout]}>
              <Pressable
                style={[styles.groupChild, styles.borderBorder]}
                onPress={() => navigation.navigate("Influenza")}
              />
              <View
                style={[styles.takenOnceAYearParent, styles.parentPosition1]}
              >
                <Text style={[styles.takenOnceA, styles.influenzaPosition]}>
                  Taken once a year
                </Text>
                <Image
                  style={styles.groupIcon}
                  contentFit="cover"
                  source={require("../assets/group-15.png")}
                />
                <View style={[styles.groupView, styles.rectangleParentLayout]}>
                  <View
                    style={[styles.rectangleView, styles.groupChild1Position]}
                  />
                  <Image
                    style={[
                      styles.iconlyboldstar,
                      styles.iconlyboldstarPosition,
                    ]}
                    contentFit="cover"
                    source={require("../assets/iconlyboldstar.png")}
                  />
                  <Text style={[styles.youAreEligible, styles.youTypo]}>
                    You are eligible to take this
                  </Text>
                  <Image
                    style={[styles.ellipseIcon, styles.rectangleParentLayout]}
                    contentFit="cover"
                    source={require("../assets/ellipse-79.png")}
                  />
                </View>
                <Text
                  style={[styles.influenza, styles.influenzaPosition]}
                >{`Influenza `}</Text>
                <View
                  style={[
                    styles.rectangleParent1,
                    styles.rectangleParentLayout,
                  ]}
                >
                  <View
                    style={[styles.groupChild1, styles.groupChild1Position]}
                  />
                  <Image
                    style={[
                      styles.iconlyboldstar1,
                      styles.iconlyboldstarPosition,
                    ]}
                    contentFit="cover"
                    source={require("../assets/iconlyboldstar1.png")}
                  />
                  <Text style={[styles.youAreNot, styles.youTypo]}>
                    You are not eligible to take this
                  </Text>
                  <Image
                    style={[styles.ellipseIcon, styles.rectangleParentLayout]}
                    contentFit="cover"
                    source={require("../assets/ellipse-79.png")}
                  />
                </View>
                <View
                  style={[
                    styles.rectangleParent2,
                    styles.rectangleParentLayout,
                  ]}
                >
                  <View
                    style={[styles.rectangleView, styles.groupChild1Position]}
                  />
                  <Image
                    style={[
                      styles.iconlyboldstar,
                      styles.iconlyboldstarPosition,
                    ]}
                    contentFit="cover"
                    source={require("../assets/iconlyboldstar.png")}
                  />
                  <Text style={[styles.youAreEligible, styles.youTypo]}>
                    You are eligible to take this
                  </Text>
                  <Image
                    style={[styles.ellipseIcon, styles.rectangleParentLayout]}
                    contentFit="cover"
                    source={require("../assets/ellipse-79.png")}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.topBarWrapper, styles.groupParentPosition]}>
          <View style={[styles.topBarWrapper, styles.groupParentPosition]}>
            <View style={[styles.frameParent, styles.parentPosition1]}>
              <View style={[styles.wrapper, styles.textLayout]}>
                <Text style={[styles.text, styles.textLayout]}>9:40</Text>
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
        <View style={[styles.rectangleParent3, styles.groupChild5Layout]}>
          <View style={[styles.groupChild5, styles.groupChild5Layout]} />
          <View style={[styles.iconlybulkhomeParent, styles.parentPosition]}>
            <Image
              style={[styles.iconlybulkhome, styles.iconlybulkhomePosition]}
              contentFit="cover"
              source={require("../assets/iconlybulkhome3.png")}
            />
            <Text style={[styles.home, styles.homeTypo]}>Home</Text>
          </View>
          <View
            style={[styles.iconlylightprofileParent, styles.parentPosition]}
          >
            <Image
              style={[styles.iconlylightprofile, styles.iconlybulkhomePosition]}
              contentFit="cover"
              source={require("../assets/iconlylightprofile3.png")}
            />
            <Text style={[styles.home, styles.homeTypo]}>Profile</Text>
          </View>
          <View style={[styles.frameGroup, styles.textLayout]}>
            <Image
              style={[styles.frameIcon, styles.frameIconLayout]}
              contentFit="cover"
              source={require("../assets/frame-5.png")}
            />
            <Text style={[styles.book, styles.homeTypo]}>Book</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupParentPosition: {
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameIconLayout: {
    height: 24,
    position: "absolute",
  },
  textTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    color: Color.colorGray_100,
    left: 0,
    top: 0,
  },
  doctorLayout: {
    height: 155,
    width: 155,
  },
  groupLayout: {
    height: 151,
    width: 152,
  },
  borderBorder: {
    borderWidth: 0.5,
    borderColor: "#b2c3ef",
    borderStyle: "solid",
    borderRadius: Border.br_md,
    position: "absolute",
  },
  imageLayout: {
    height: 102,
    position: "absolute",
  },
  takenTypo: {
    color: Color.colorBlueDark,
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_3xs,
    top: 114,
    position: "absolute",
  },
  iconlyboldlocationPosition1: {
    flexDirection: "row",
    left: 15,
    position: "absolute",
  },
  iconlyboldlocationPosition: {
    left: 0,
    top: 0,
  },
  influenzaTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_3xs,
    left: 0,
    top: 0,
  },
  groupChild1Position: {
    height: 47,
    width: 228,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconlyboldstarPosition: {
    left: 11,
    height: 18,
    position: "absolute",
  },
  youTypo: {
    fontSize: FontSize.size_xs,
    color: Color.colorGray700,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  rectangleParentLayout: {
    height: 47,
    width: 228,
  },
  parentPosition1: {
    height: 146,
    left: 14,
    top: 16,
    position: "absolute",
  },
  influenzaPosition: {
    width: 120,
    color: Color.colorBlueDark,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  textLayout: {
    height: 21,
    position: "absolute",
  },
  capIconPosition: {
    height: 13,
    position: "absolute",
  },
  groupChild5Layout: {
    height: 70,
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
  },
  parentPosition: {
    height: 42,
    top: 14,
    position: "absolute",
  },
  iconlybulkhomePosition: {
    height: 24,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  homeTypo: {
    color: Color.colorGray700,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    left: 0,
    top: 0,
    position: "absolute",
  },
  vaccinations: {
    fontSize: FontSize.size_xs,
  },
  vaccinationsWrapper: {
    width: 118,
    left: 0,
    top: 0,
  },
  groupChild: {
    height: 151,
    width: 152,
    borderWidth: 0.5,
    borderColor: "#b2c3ef",
    borderStyle: "solid",
    borderRadius: Border.br_md,
    position: "absolute",
  },
  imageIcon: {
    width: 152,
    borderRadius: Border.br_md,
    left: 0,
    top: 0,
  },
  takenOnceIn: {
    left: 20,
    width: 111,
  },
  iconlyboldlocation: {
    height: 15,
    width: 12,
  },
  pcv13: {
    fontSize: FontSize.size_2xs,
    color: Color.colorBlueDark,
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    left: 18,
    top: 0,
    position: "absolute",
  },
  iconlyboldlocationParent: {
    width: 37,
    top: 94,
  },
  pneumococal1: {
    width: 104,
    color: Color.colorGray700,
    fontSize: FontSize.size_3xs,
  },
  imageParent: {
    width: 152,
    left: 0,
    top: 0,
  },
  influenza1Icon: {
    height: 23,
    width: 24,
    top: 0,
    left: 0,
    position: "absolute",
  },
  rectangleParent: {
    top: 8,
    left: 205,
    position: "absolute",
  },
  iconlyboldlocation1: {
    width: 15,
    height: 15,
  },
  iconlyboldlocationGroup: {
    width: 52,
    top: 94,
  },
  takenOnceIn1: {
    left: 20,
    width: 111,
  },
  hand1Icon: {
    height: 22,
    width: 22,
    top: 0,
    left: 0,
    position: "absolute",
  },
  rectangleGroup: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  takenOnceA: {
    top: 0,
  },
  groupIcon: {
    width: 32,
    height: 32,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleView: {
    borderRadius: Border.br_sm,
    backgroundColor: Color.colorWhite,
  },
  iconlyboldstar: {
    width: 18,
    top: 15,
  },
  youAreEligible: {
    top: 15,
    left: 34,
  },
  ellipseIcon: {
    width: 9,
    height: 9,
    left: 219,
    top: 0,
    position: "absolute",
  },
  groupView: {
    top: 36,
    left: 0,
    position: "absolute",
  },
  iconlyboldstar1: {
    width: 18,
    top: 15,
  },
  youAreNot: {
    top: 15,
    left: 34,
  },
  rectangleParent1: {
    top: 81,
    left: 0,
    position: "absolute",
  },
  rectangleParent2: {
    top: 36,
    left: 0,
    position: "absolute",
  },
  takenOnceAYearParent: {
    width: 228,
  },
  doctor1: {
    width: 156,
  },
  doctor2: {
    top: 60,
    left: 0,
    position: "absolute",
  },
  text: {
    fontWeight: "600",
    fontSize: FontSize.size_mid,
    color: Color.colorGray700,
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    left: 0,
    top: 0,
  },
  wrapper: {
    width: 38,
    left: 0,
    top: 0,
  },
  cellularConnectionIcon: {
    width: 20,
    height: 20,
    display: "none",
    overflow: "hidden",
  },
  batteryWrapper: {
    width: 24,
    right: 0,
    top: 0,
  },
  cellularConnectionParent: {
    width: 88,
    height: 21,
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameParent: {
    width: 320,
  },
  topBarWrapper: {
    height: 39,
  },
  groupChild5: {
    backgroundColor: Color.colorGray100,
  },
  iconlybulkhome: {
    width: 20,
  },
  home: {
    width: 35,
    color: Color.colorGray700,
  },
  iconlybulkhomeParent: {
    left: 34,
    width: 35,
  },
  iconlylightprofile: {
    width: 21,
  },
  iconlylightprofileParent: {
    left: 293,
    width: 29,
  },
  frameIcon: {
    left: 0,
  },
  book: {
    left: 4,
  },
  frameGroup: {
    left: 159,
    width: 32,
    top: 17,
  },
  rectangleParent3: {
    top: 738,
  },
  groupParent: {
    height: 807,
  },
  topDoctors: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default TopDoctors;

