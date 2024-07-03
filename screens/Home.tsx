import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.home}>
      <View style={[styles.roundedRectangle, styles.roundedBorder]} />
      <View style={styles.groupParentPosition}>
        <View style={styles.groupParentPosition}>
          <View style={styles.v960Ning051} />
        </View>
        <View style={[styles.groupWrapper, styles.groupPosition]}>
          <View style={[styles.groupWrapper, styles.groupPosition]}>
            <View style={[styles.groupWrapper, styles.groupPosition]}>
              <View style={styles.frameParent}>
                <View style={[styles.wrapper, styles.wrapperLayout]}>
                  <Text style={[styles.text, styles.textFlexBox]}>9:40</Text>
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
                    <View
                      style={[styles.batteryWrapper, styles.capIconPosition]}
                    >
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
      </View>
      <View style={[styles.groupContainer, styles.groupPosition]}>
        <View
          style={[
            styles.gradientBlueAbstractBackgroParent,
            styles.groupPosition,
          ]}
        >
          <Image
            style={[
              styles.gradientBlueAbstractBackgroIcon,
              styles.groupParentPosition,
            ]}
            contentFit="cover"
            source={require("../assets/gradientblueabstractbackgroundsmoothdarkbluewithblackvignettestudio-1.png")}
          />
          <View style={[styles.groupFrame, styles.groupFrameLayout]}>
            <View style={[styles.welcomeParent, styles.groupFrameLayout]}>
              <Text style={[styles.welcome, styles.welcomeFlexBox]}>
                Welcome!
              </Text>
              <Text style={[styles.celestine, styles.welcomeFlexBox]}>
                Celestine
              </Text>
            </View>
          </View>
          <Image
            style={[styles.groupChild, styles.groupPosition]}
            contentFit="cover"
            source={require("../assets/group-226.png")}
          />
        </View>
        <View style={[styles.rectangleParent, styles.groupItemLayout]}>
          <View style={[styles.groupItem, styles.groupItemLayout]} />
          <View style={[styles.iconlybulkhomeParent, styles.parentPosition]}>
            <Image
              style={[styles.iconlybulkhome, styles.iconlybulkhomeLayout]}
              contentFit="cover"
              source={require("../assets/iconlybulkhome4.png")}
            />
            <Text style={[styles.home1, styles.shotsTypo]}>Home</Text>
          </View>
          <Pressable
            style={[styles.iconlylightprofileParent, styles.parentPosition]}
            onPress={() => navigation.navigate("Profile")}
          >
            <Image
              style={[styles.iconlylightprofile, styles.iconlybulkhomeLayout]}
              contentFit="cover"
              source={require("../assets/iconlylightprofile3.png")}
            />
            <Text style={[styles.profile, styles.shotsTypo]}>Profile</Text>
          </Pressable>
          <Pressable
            style={[styles.frameGroup, styles.wrapperLayout]}
            onPress={() => navigation.navigate("TopDoctors")}
          >
            <Image
              style={styles.groupInner}
              contentFit="cover"
              source={require("../assets/frame-52.png")}
            />
            <Text style={[styles.profile, styles.shotsTypo]}>Book</Text>
          </Pressable>
        </View>
        <View style={[styles.roundedRectangle1, styles.roundedBorder]} />
      </View>
      <Text style={styles.upcomingEvents}>Upcoming events</Text>
      <Text style={[styles.date, styles.dateTypo]}>Date</Text>
      <Text style={[styles.influenzaShot, styles.text1Typo]}>
        Influenza shot
      </Text>
      <Text style={[styles.text1, styles.text1Typo]}>13/10/24</Text>
      <Text style={[styles.event, styles.dateTypo]}>Event</Text>
      <View style={[styles.groupView, styles.groupViewLayout]}>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.rectangleView, styles.groupLayout]} />
          <Text style={[styles.influenzaShots, styles.shotsTypo]}>
            Influenza shots
          </Text>
          <Text style={[styles.text2, styles.textTypo]}>0</Text>
        </View>
        <View style={[styles.rectangleContainer, styles.groupViewLayout]}>
          <View style={[styles.groupChild1, styles.groupLayout]} />
          <Image
            style={[styles.chill1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/chill-1.png")}
          />
          <Text style={[styles.pneumococcalShots, styles.shotsTypo]}>
            Pneumococcal shots
          </Text>
          <Text style={[styles.text3, styles.textTypo]}>1</Text>
        </View>
      </View>
      <Image
        style={[styles.breathing1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/breathing-1.png")}
      />
      <View style={[styles.groupWrapper, styles.groupPosition]}>
        <View style={[styles.groupWrapper, styles.groupPosition]}>
          <View style={styles.frameParent}>
            <View style={[styles.wrapper, styles.wrapperLayout]}>
              <Text style={[styles.text, styles.textFlexBox]}>9:40</Text>
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
  roundedBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  groupPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  wrapperLayout: {
    width: 30,
    position: "absolute",
  },
  textFlexBox: {
    alignItems: "center",
    display: "flex",
    color: Color.colorGray_100,
  },
  capIconPosition: {
    right: 0,
    position: "absolute",
  },
  groupParentPosition: {
    height: 640,
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupFrameLayout: {
    height: 69,
    width: 261,
    position: "absolute",
  },
  welcomeFlexBox: {
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppins,
    left: 0,
    position: "absolute",
  },
  groupItemLayout: {
    height: 79,
    width: 360,
    left: 0,
    position: "absolute",
  },
  parentPosition: {
    bottom: "20.25%",
    top: "20.25%",
    height: "59.49%",
    position: "absolute",
  },
  iconlybulkhomeLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "48.94%",
    top: "0%",
    height: "51.06%",
    position: "absolute",
    overflow: "hidden",
  },
  shotsTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontWeight: "500",
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  dateTypo: {
    top: 376,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontWeight: "500",
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  text1Typo: {
    fontSize: FontSize.size_smi,
    top: 407,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  groupViewLayout: {
    height: 145,
    position: "absolute",
  },
  groupLayout: {
    width: 139,
    height: 145,
    top: 0,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_11xl,
    top: 80,
    fontWeight: "500",
    textAlign: "center",
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  iconLayout: {
    height: 37,
    width: 37,
    position: "absolute",
  },
  roundedRectangle: {
    top: "46.38%",
    right: "8.61%",
    bottom: "46.63%",
    left: "8.06%",
    backgroundColor: Color.colorWhitesmoke,
    borderColor: "rgba(156, 60, 60, 0.1)",
    borderRadius: Border.br_7xs,
    width: "83.33%",
    height: "7%",
    borderStyle: "solid",
  },
  v960Ning051: {
    top: 640,
    width: 640,
    height: 360,
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    left: 0,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_sm,
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    alignItems: "center",
    display: "flex",
    width: 30,
    left: 0,
    top: 0,
    position: "absolute",
  },
  wrapper: {
    height: 21,
    left: 0,
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
  groupWrapper: {
    height: 45,
    top: 0,
  },
  gradientBlueAbstractBackgroIcon: {
    opacity: 0.64,
  },
  welcome: {
    fontSize: 36,
    width: 221,
    height: 34,
    fontWeight: "500",
    textAlign: "left",
    top: 0,
  },
  celestine: {
    top: 43,
    fontSize: 24,
    fontWeight: "300",
    height: 26,
    textAlign: "left",
    width: 261,
  },
  welcomeParent: {
    left: 0,
    top: 0,
  },
  groupFrame: {
    top: 170,
    left: 30,
  },
  groupChild: {
    top: 274,
    height: 424,
  },
  gradientBlueAbstractBackgroParent: {
    height: 698,
    top: 0,
  },
  groupItem: {
    shadowColor: "rgba(0, 0, 0, 0.13)",
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    top: 0,
    backgroundColor: Color.colorWhite,
    height: 79,
  },
  iconlybulkhome: {
    width: "66.67%",
    right: "16.67%",
    left: "16.67%",
  },
  home1: {
    color: Color.colorDodgerblue_100,
    top: 29,
    fontSize: FontSize.size_xs,
    left: 0,
  },
  iconlybulkhomeParent: {
    width: "10%",
    right: "45%",
    left: "45%",
  },
  iconlylightprofile: {
    width: "63.16%",
    right: "18.42%",
    left: "18.42%",
  },
  profile: {
    color: Color.colorGray_500,
    top: 29,
    fontSize: FontSize.size_xs,
    left: 0,
  },
  iconlylightprofileParent: {
    width: "10.56%",
    right: "10.56%",
    left: "78.89%",
  },
  groupInner: {
    left: 3,
    width: 24,
    height: 24,
    top: 0,
    position: "absolute",
  },
  frameGroup: {
    top: 16,
    left: 46,
    height: 47,
  },
  rectangleParent: {
    top: 721,
  },
  roundedRectangle1: {
    top: "38%",
    right: "7.5%",
    bottom: "55%",
    left: "9.17%",
    backgroundColor: "#c2d8fb",
    borderColor: Color.colorGray_400,
    borderRadius: Border.br_7xs,
    width: "83.33%",
    height: "7%",
    borderStyle: "solid",
  },
  groupContainer: {
    top: 0,
    height: 800,
    width: 360,
  },
  upcomingEvents: {
    top: 320,
    left: 108,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontWeight: "500",
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  date: {
    left: 88,
  },
  influenzaShot: {
    left: 191,
  },
  text1: {
    left: 85,
  },
  event: {
    left: 198,
  },
  rectangleView: {
    backgroundColor: Color.colorRosybrown,
    left: 0,
    borderRadius: Border.br_7xs,
  },
  influenzaShots: {
    top: 53,
    left: 24,
    width: 99,
    alignItems: "center",
    display: "flex",
    color: Color.colorGray_100,
  },
  text2: {
    left: 56,
  },
  rectangleGroup: {
    left: 0,
  },
  groupChild1: {
    left: 110,
    backgroundColor: Color.colorAntiquewhite,
    borderRadius: Border.br_7xs,
  },
  chill1Icon: {
    top: 15,
    left: 0,
  },
  pneumococcalShots: {
    top: 54,
    left: 118,
    color: Color.colorGray_100,
    fontSize: FontSize.size_xs,
  },
  text3: {
    left: 171,
  },
  rectangleContainer: {
    left: 51,
    width: 249,
    top: 0,
  },
  groupView: {
    top: 471,
    left: 29,
    width: 300,
  },
  breathing1Icon: {
    top: 486,
    left: 241,
  },
  home: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
    backgroundColor: Color.colorWhite,
  },
});

export default Home;
