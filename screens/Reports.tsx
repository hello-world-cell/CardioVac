import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const Reports = () => {
  return (
    <View style={styles.reports}>
      <View style={styles.reportsInner}>
        <View style={styles.reportsInner}>
          <View style={styles.reportsInner}>
            <View style={styles.reportsInner}>
              <View style={[styles.frameParent, styles.wrapperLayout]}>
                <View style={[styles.wrapper, styles.textPosition]}>
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
      <View style={[styles.rectangleParent, styles.groupChildLayout1]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.heartRate, styles.text1Typo]}>Heart rate</Text>
        <Text style={[styles.text1, styles.text1Typo]}>97</Text>
        <Text style={[styles.bpm, styles.aTypo]}>bpm</Text>
        <Image
          style={styles.groupItem}
          contentFit="cover"
          source={require("../assets/vector-12.png")}
        />
      </View>
      <View style={styles.groupParent}>
        <View style={[styles.rectangleGroup, styles.groupLayout1]}>
          <View style={[styles.groupInner, styles.groupLayout1]} />
          <Image
            style={[styles.bloodDropDropletOilWaterIIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/4753012-blood-drop-droplet-oil-water-icon-1.png")}
          />
          <Text style={[styles.bloodGroup, styles.weightTypo]}>
            Blood Group
          </Text>
          <Text style={[styles.a, styles.aTypo]}>A+</Text>
        </View>
        <View style={[styles.rectangleContainer, styles.groupLayout1]}>
          <View style={[styles.rectangleView, styles.groupLayout1]} />
          <Text style={[styles.weight, styles.weightTypo]}>Weight</Text>
          <Text style={[styles.a, styles.aTypo]}>103lbs</Text>
          <Image
            style={[styles.bloodDropDropletOilWaterIIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/weightliftingupsvgrepocom-1.png")}
          />
        </View>
      </View>
      <Text
        style={[styles.latestReport, styles.weightTypo]}
      >{`Latest report `}</Text>
      <View style={[styles.groupContainer, styles.groupLayout]}>
        <View style={[styles.articleWrapper, styles.groupLayout]}>
          <View style={[styles.articleWrapper, styles.groupLayout]}>
            <View style={[styles.articleChild, styles.groupLayout]} />
            <View style={[styles.articleInner, styles.articleInnerLayout]}>
              <View
                style={[styles.generalReportParent, styles.articleInnerLayout]}
              >
                <Text style={styles.generalReport}>General report</Text>
                <Text
                  style={[styles.jul102023, styles.weightTypo]}
                >{`Jul 10, 2023 `}</Text>
              </View>
            </View>
          </View>
        </View>
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group-249.png")}
        />
        <Image
          style={styles.horizontal3DotsDotsIcon1}
          contentFit="cover"
          source={require("../assets/7122363-horizontal-3-dots-dots-icon-1.png")}
        />
      </View>
      <View style={[styles.groupView, styles.groupLayout]}>
        <View style={[styles.articleWrapper, styles.groupLayout]}>
          <View style={[styles.articleWrapper, styles.groupLayout]}>
            <View style={[styles.articleChild, styles.groupLayout]} />
            <View style={[styles.articleInner, styles.articleInnerLayout]}>
              <View
                style={[styles.generalReportParent, styles.articleInnerLayout]}
              >
                <Text style={styles.generalReport}>General report</Text>
                <Text
                  style={[styles.jul102023, styles.weightTypo]}
                >{`Jul 5, 2023 `}</Text>
              </View>
            </View>
          </View>
        </View>
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group-249.png")}
        />
        <Image
          style={styles.horizontal3DotsDotsIcon1}
          contentFit="cover"
          source={require("../assets/7122363-horizontal-3-dots-dots-icon-1.png")}
        />
      </View>
      <View style={[styles.rectangleParent1, styles.groupChild2Layout]}>
        <View style={[styles.groupChild2, styles.groupChild2Layout]} />
        <View style={[styles.iconlybulkhomeParent, styles.parentPosition]}>
          <Image
            style={[styles.iconlybulkhome, styles.iconlybulkhomeLayout]}
            contentFit="cover"
            source={require("../assets/iconlybulkhome1.png")}
          />
          <Text style={styles.home}>Home</Text>
        </View>
        <View style={[styles.iconlylightprofileParent, styles.parentPosition]}>
          <Image
            style={[styles.iconlylightprofile, styles.iconlybulkhomeLayout]}
            contentFit="cover"
            source={require("../assets/iconlylightprofile1.png")}
          />
          <Text style={styles.home}>Profile</Text>
        </View>
        <View
          style={[
            styles.notificationBellAlertIcon1Parent,
            styles.frameGroupPosition,
          ]}
        >
          <Image
            style={[styles.notificationBellAlertIcon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/7503212-notification-bell-alert-icon-1.png")}
          />
          <Text style={[styles.notification, styles.reports1Typo]}>
            Notification
          </Text>
        </View>
        <View style={[styles.frameGroup, styles.frameGroupPosition]}>
          <Image
            style={[styles.frameIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/frame-51.png")}
          />
          <Text style={[styles.reports1, styles.reports1Typo]}>Reports</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperLayout: {
    height: 21,
    position: "absolute",
  },
  textPosition: {
    width: 30,
    left: 0,
    top: 0,
  },
  textFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  capIconPosition: {
    right: 0,
    position: "absolute",
  },
  borderBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    top: 0,
  },
  groupChildLayout1: {
    height: 131,
    width: 300,
    position: "absolute",
  },
  groupChildLayout: {
    borderRadius: Border.br_7xs,
    left: 0,
  },
  text1Typo: {
    fontWeight: "600",
    color: Color.colorGray_100,
  },
  aTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  groupLayout1: {
    width: 139,
    height: 145,
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  weightTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  groupLayout: {
    height: 67,
    width: 300,
    position: "absolute",
  },
  articleInnerLayout: {
    height: 31,
    width: 173,
    position: "absolute",
  },
  groupChild2Layout: {
    height: 79,
    width: 360,
    left: 0,
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
    top: "0%",
    height: "46.32%",
    position: "absolute",
    overflow: "hidden",
  },
  frameGroupPosition: {
    height: 47,
    top: 16,
    position: "absolute",
  },
  reports1Typo: {
    top: 29,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontWeight: "500",
    fontFamily: FontFamily.poppins,
    left: 0,
    position: "absolute",
  },
  text: {
    color: Color.colorGray_100,
    fontSize: FontSize.size_sm,
    width: 30,
    left: 0,
    top: 0,
  },
  wrapper: {
    height: 21,
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
  },
  reportsInner: {
    height: 45,
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: "rgba(64, 124, 226, 0.19)",
    height: 131,
    width: 300,
    position: "absolute",
    top: 0,
  },
  heartRate: {
    fontSize: FontSize.size_base,
    fontWeight: "600",
    left: 20,
    top: 20,
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  text1: {
    top: 50,
    fontSize: 56,
    width: 66,
    height: 61,
    left: 20,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  bpm: {
    top: 90,
    left: 86,
    color: Color.colorGray_100,
    fontSize: FontSize.size_sm,
  },
  groupItem: {
    top: 31,
    left: 144,
    width: 136,
    height: 69,
    position: "absolute",
  },
  rectangleParent: {
    top: 65,
    left: 30,
  },
  groupInner: {
    backgroundColor: Color.colorRosybrown,
    borderRadius: Border.br_7xs,
    left: 0,
  },
  bloodDropDropletOilWaterIIcon: {
    left: 20,
    top: 20,
    overflow: "hidden",
  },
  bloodGroup: {
    width: 99,
    fontWeight: "500",
    top: 51,
    textAlign: "left",
    left: 20,
    color: Color.colorGray_100,
    fontSize: FontSize.size_sm,
    alignItems: "center",
    display: "flex",
  },
  a: {
    top: 80,
    fontSize: FontSize.size_11xl,
    fontWeight: "500",
    left: 20,
    color: Color.colorGray_100,
  },
  rectangleGroup: {
    left: 0,
  },
  rectangleView: {
    backgroundColor: Color.colorAntiquewhite,
    borderRadius: Border.br_7xs,
    left: 0,
  },
  weight: {
    fontWeight: "500",
    top: 51,
    textAlign: "left",
    left: 20,
    color: Color.colorGray_100,
    fontSize: FontSize.size_sm,
  },
  rectangleContainer: {
    left: 161,
  },
  groupParent: {
    top: 216,
    height: 145,
    width: 300,
    left: 30,
    position: "absolute",
  },
  latestReport: {
    top: 381,
    fontWeight: "600",
    color: Color.colorGray_100,
    fontSize: FontSize.size_base,
    left: 30,
  },
  articleChild: {
    borderColor: Color.colorGray_400,
    borderRadius: Border.br_7xs,
    left: 0,
    borderWidth: 1,
    borderStyle: "solid",
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  generalReport: {
    lineHeight: 14,
    width: 173,
    textAlign: "left",
    fontWeight: "600",
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_sm,
    left: 0,
    top: 0,
    position: "absolute",
  },
  jul102023: {
    fontSize: FontSize.size_2xs,
    color: Color.colorGray_300,
    width: 71,
    fontWeight: "500",
    top: 20,
    height: 11,
    alignItems: "center",
    display: "flex",
    left: 0,
  },
  generalReportParent: {
    left: 0,
    top: 0,
  },
  articleInner: {
    top: 18,
    left: 76,
  },
  articleWrapper: {
    left: 0,
    top: 0,
  },
  groupIcon: {
    top: 7,
    left: 10,
    width: 54,
    height: 53,
    position: "absolute",
  },
  horizontal3DotsDotsIcon1: {
    top: 15,
    left: 265,
    width: 20,
    height: 20,
    position: "absolute",
    overflow: "hidden",
  },
  groupContainer: {
    top: 420,
    left: 30,
  },
  groupView: {
    top: 502,
    left: 30,
  },
  groupChild2: {
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
  },
  iconlybulkhome: {
    width: "65%",
    right: "21.39%",
    left: "13.61%",
  },
  home: {
    top: 34,
    color: Color.colorGray_500,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontWeight: "500",
    fontFamily: FontFamily.poppins,
    left: 0,
    position: "absolute",
  },
  iconlybulkhomeParent: {
    width: "10%",
    right: "79.44%",
    left: "10.56%",
  },
  iconlylightprofile: {
    width: "61.1%",
    right: "38.9%",
    left: "0%",
  },
  iconlylightprofileParent: {
    width: "10.64%",
    right: "10.56%",
    left: "78.81%",
  },
  notificationBellAlertIcon1: {
    left: 23,
    top: 0,
    overflow: "hidden",
  },
  notification: {
    color: Color.colorGray_500,
  },
  notificationBellAlertIcon1Parent: {
    left: 183,
    width: 70,
  },
  frameIcon: {
    left: 12,
    top: 0,
  },
  reports1: {
    color: Color.colorDodgerblue_100,
  },
  frameGroup: {
    left: 105,
    width: 47,
  },
  rectangleParent1: {
    top: 721,
  },
  reports: {
    flex: 1,
    width: "100%",
    height: 795,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Reports;
