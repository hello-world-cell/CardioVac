import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Pneumococcal = () => {
  return (
    <View style={styles.pneumococcal}>
      <Image
        style={styles.phoneCall1Icon}
        contentFit="cover"
        source={require("../assets/phonecall-1.png")}
      />
      <View style={styles.groupParent}>
        <View style={[styles.buttonParent, styles.buttonLayout]}>
          <Image
            style={[styles.buttonIcon, styles.buttonLayout]}
            contentFit="cover"
            source={require("../assets/button.png")}
          />
          <Text style={[styles.bookYourPneumococal, styles.bookTypo]}>
            Book your Pneumococal PCV13 shot
          </Text>
        </View>
        <View style={styles.groupContainer}>
          <View
            style={[styles.iconlyboldlocationParent, styles.parentPosition1]}
          >
            <Image
              style={styles.iconlyboldlocation}
              contentFit="cover"
              source={require("../assets/iconlyboldlocation.png")}
            />
            <Text
              style={styles.lorong7Toa}
            >{`19 Lorong 7 Toa Payoh, #01-268 Kim Keat Palm, Singapore 310019
800m away`}</Text>
          </View>
          <Text style={[styles.finestHealthMedical, styles.frameIconPosition]}>
            Finest Health Medical Centre
          </Text>
        </View>
        <Text style={[styles.openingHoursWeekdaysContainer, styles.homeTypo]}>
          <Text style={styles.text}>{`+ 65 6264 0852
`}</Text>
          <Text style={styles.openingHoursWeekdays8}>{`Opening Hours
Weekdays: 8 AM-2 PM
Saturday: 9 AM-1 PM
`}</Text>
          <Text style={styles.blankLine}> </Text>
        </Text>
        <View style={[styles.image2Parent, styles.dateLayout]}>
          <Image
            style={[styles.image2Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/image-2.png")}
          />
          <Image
            style={[styles.image3Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/image-3.png")}
          />
          <View style={[styles.date, styles.dateLayout]}>
            <View style={[styles.rectangleParent, styles.groupParentLayout]}>
              <View style={[styles.groupChild, styles.groupChildBorder1]} />
              <Text style={[styles.tue, styles.tueTypo]}>Tue</Text>
              <Text style={[styles.text1, styles.textTypo1]}>22</Text>
            </View>
            <View style={[styles.rectangleGroup, styles.groupParentLayout]}>
              <View style={[styles.groupItem, styles.groupParentLayout]} />
              <Text style={[styles.wed, styles.tueTypo1]}>Wed</Text>
              <Text style={[styles.text2, styles.textTypo1]}>23</Text>
            </View>
            <View style={[styles.rectangleContainer, styles.groupParentLayout]}>
              <View style={[styles.groupChild, styles.groupChildBorder1]} />
              <Text style={[styles.thu, styles.tueTypo]}>Thu</Text>
              <Text style={[styles.text3, styles.textTypo]}>24</Text>
            </View>
            <View style={[styles.groupView, styles.groupParentLayout]}>
              <View style={[styles.groupChild, styles.groupChildBorder1]} />
              <Text style={[styles.fri, styles.tueTypo]}>Fri</Text>
              <Text style={[styles.text3, styles.textTypo]}>25</Text>
            </View>
            <View style={[styles.rectangleParent1, styles.groupChild1Layout]}>
              <View style={[styles.groupChild1, styles.groupChild1Layout]} />
              <Text style={[styles.sat, styles.satTypo]}>Sat</Text>
              <Text style={[styles.text5, styles.satTypo]}>26</Text>
            </View>
            <View style={[styles.groupParent1, styles.groupParentLayout]}>
              <View style={[styles.groupParent1, styles.groupParentLayout]}>
                <View style={[styles.groupChild, styles.groupChildBorder1]} />
              </View>
              <Text style={[styles.mon, styles.tueTypo]}>Mon</Text>
              <Text style={[styles.text6, styles.textTypo1]}>21</Text>
            </View>
          </View>
        </View>
        <View style={styles.groupParent2}>
          <View style={[styles.rectangleParent2, styles.groupChildLayout]}>
            <View style={[styles.groupChild3, styles.groupChildBorder]} />
            <Text style={[styles.am, styles.amPosition]}>08:30 AM</Text>
          </View>
          <View style={[styles.rectangleParent3, styles.groupChildLayout]}>
            <View style={[styles.groupChild3, styles.groupChildBorder]} />
            <Text style={[styles.am1, styles.am1Typo]}>10:00 AM</Text>
          </View>
          <View style={[styles.rectangleParent4, styles.groupChildLayout]}>
            <View style={[styles.groupChild3, styles.groupChildBorder]} />
            <Text style={[styles.pm, styles.amPosition]}>12:30 PM</Text>
          </View>
          <View
            style={[styles.rectangleParent5, styles.rectangleParentPosition1]}
          >
            <View style={[styles.groupChild3, styles.groupChildBorder]} />
            <Text style={[styles.am2, styles.am1Typo]}>09:00 AM</Text>
          </View>
          <View
            style={[styles.rectangleParent6, styles.rectangleParentPosition1]}
          >
            <View style={[styles.groupChild7, styles.groupChildLayout]} />
            <Text style={[styles.am3, styles.amPosition]}>11:30 AM</Text>
          </View>
          <View style={[styles.rectangleParent7, styles.groupChild8Layout]}>
            <View style={[styles.groupChild8, styles.groupChild8Layout]} />
            <Text style={[styles.selectedSlot, styles.satTypo]}>
              Selected slot
            </Text>
          </View>
          <View
            style={[styles.rectangleParent8, styles.rectangleParentPosition1]}
          >
            <View style={[styles.groupChild3, styles.groupChildBorder]} />
            <Text style={[styles.am2, styles.am1Typo]}>01:30 PM</Text>
          </View>
          <View
            style={[styles.rectangleParent9, styles.rectangleParentPosition]}
          >
            <View style={[styles.groupChild3, styles.groupChildBorder]} />
            <Text style={[styles.am4, styles.am1Typo]}>09:30 AM</Text>
          </View>
          <View
            style={[styles.rectangleParent10, styles.rectangleParentPosition]}
          >
            <View style={[styles.groupChild3, styles.groupChildBorder]} />
            <Text style={[styles.pm, styles.amPosition]}>12:00 PM</Text>
          </View>
          <View style={styles.groupChild12Position}>
            <View style={[styles.groupChild12, styles.groupChild12Position]} />
            <Text style={[styles.availableSlots, styles.satTypo]}>
              Available slots
            </Text>
          </View>
        </View>
        <View style={[styles.rectangleParent12, styles.groupChild13Layout]}>
          <View style={[styles.groupChild13, styles.groupChild13Layout]} />
          <Text style={[styles.bookApointment, styles.text7Typo]}>
            Book Apointment
          </Text>
        </View>
        <View style={styles.topBarWrapper}>
          <View style={styles.topBarWrapper}>
            <View style={styles.frameParent}>
              <View style={[styles.wrapper, styles.text7Layout]}>
                <Text style={[styles.text7, styles.text7Layout]}>9:40</Text>
              </View>
              <View
                style={[
                  styles.cellularConnectionParent,
                  styles.parentPosition1,
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
                  <View style={[styles.batteryWrapper, styles.capIconPosition]}>
                    <View style={[styles.border, styles.groupChildBorder1]} />
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
        <View style={[styles.rectangleParent13, styles.groupChild14Layout]}>
          <View style={[styles.groupChild14, styles.groupChild14Layout]} />
          <View style={[styles.iconlybulkhomeParent, styles.parentPosition]}>
            <Image
              style={[styles.iconlybulkhome, styles.iconlybulkhomePosition]}
              contentFit="cover"
              source={require("../assets/iconlybulkhome.png")}
            />
            <Text style={[styles.home, styles.tueTypo]}>Home</Text>
          </View>
          <View
            style={[styles.iconlylightprofileParent, styles.parentPosition]}
          >
            <Image
              style={[styles.iconlylightprofile, styles.iconlybulkhomePosition]}
              contentFit="cover"
              source={require("../assets/iconlylightprofile.png")}
            />
            <Text style={[styles.home, styles.tueTypo]}>Profile</Text>
          </View>
          <View style={[styles.frameGroup, styles.text7Layout]}>
            <Image
              style={[styles.frameIcon, styles.frameIconPosition]}
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
  buttonLayout: {
    height: 40,
    position: "absolute",
  },
  bookTypo: {
    fontFamily: FontFamily.poppins,
    textAlign: "left",
  },
  parentPosition1: {
    right: "0%",
    position: "absolute",
  },
  frameIconPosition: {
    height: 24,
    top: 0,
    position: "absolute",
  },
  homeTypo: {
    fontWeight: "500",
    fontSize: FontSize.size_xs,
  },
  dateLayout: {
    height: 71,
    position: "absolute",
  },
  iconLayout: {
    height: 22,
    top: 25,
    width: 22,
    position: "absolute",
  },
  groupParentLayout: {
    width: 46,
    height: 71,
    top: 0,
    position: "absolute",
  },
  groupChildBorder1: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  tueTypo: {
    color: Color.colorGray_500,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  textTypo1: {
    fontSize: FontSize.size_lg,
    top: 30,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    position: "absolute",
  },
  tueTypo1: {
    fontSize: FontSize.size_3xs,
    top: 14,
  },
  textTypo: {
    left: 11,
    fontSize: FontSize.size_lg,
    fontWeight: "600",
  },
  groupChild1Layout: {
    height: 64,
    width: 46,
    top: 0,
    position: "absolute",
  },
  satTypo: {
    fontFamily: FontFamily.inter,
    textAlign: "left",
    position: "absolute",
  },
  groupChildLayout: {
    width: 86,
    height: 37,
    left: 0,
    position: "absolute",
  },
  groupChildBorder: {
    borderColor: Color.colorDodgerblue_400,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorWhite,
  },
  amPosition: {
    left: 15,
    top: 11,
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  am1Typo: {
    top: 11,
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  rectangleParentPosition1: {
    left: 107,
    width: 86,
    height: 37,
    position: "absolute",
  },
  groupChild8Layout: {
    height: 30,
    width: 112,
    top: 0,
    position: "absolute",
  },
  rectangleParentPosition: {
    left: 214,
    width: 86,
    height: 37,
    position: "absolute",
  },
  groupChild12Position: {
    width: 107,
    height: 30,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChild13Layout: {
    height: 51,
    width: 300,
    position: "absolute",
  },
  text7Typo: {
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppins,
  },
  text7Layout: {
    width: 30,
    position: "absolute",
  },
  capIconPosition: {
    right: 0,
    position: "absolute",
  },
  groupChild14Layout: {
    height: 79,
    width: 360,
    position: "absolute",
  },
  parentPosition: {
    bottom: "20.25%",
    top: "13.29%",
    height: "66.46%",
    position: "absolute",
  },
  iconlybulkhomePosition: {
    bottom: "54.67%",
    top: "0%",
    height: "45.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  phoneCall1Icon: {
    top: 192,
    left: 38,
    width: 12,
    height: 12,
    position: "absolute",
  },
  buttonIcon: {
    width: 40,
    left: 0,
    top: 0,
  },
  bookYourPneumococal: {
    left: 34,
    textAlign: "left",
    color: Color.colorGray_100,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppins,
    top: 8,
    position: "absolute",
  },
  buttonParent: {
    top: 65,
    left: 30,
    width: 324,
  },
  iconlyboldlocation: {
    height: "34.86%",
    width: "4.15%",
    top: "2.7%",
    right: "95.85%",
    bottom: "62.43%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  lorong7Toa: {
    left: 20,
    color: Color.colorGray_300,
    width: 286,
    height: 37,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    top: 0,
    position: "absolute",
  },
  iconlyboldlocationParent: {
    height: "54.41%",
    top: "45.59%",
    bottom: "0%",
    left: "0%",
    width: "100%",
    right: "0%",
  },
  finestHealthMedical: {
    left: 1,
    width: 265,
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  groupContainer: {
    height: "8.09%",
    width: "66.81%",
    top: "16.53%",
    right: "21.18%",
    bottom: "75.39%",
    left: "12.01%",
    position: "absolute",
  },
  text: {
    textDecoration: "underline",
    color: Color.colorDodgerblue_100,
  },
  openingHoursWeekdays8: {
    color: Color.colorBlack,
  },
  blankLine: {
    color: Color.colorDodgerblue_100,
  },
  openingHoursWeekdaysContainer: {
    top: 228,
    left: 75,
    lineHeight: 20,
    width: 281,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  image2Icon: {
    left: 322,
  },
  image3Icon: {
    left: 0,
  },
  groupChild: {
    borderColor: Color.colorGray_400,
    borderRadius: Border.br_mini,
    width: 46,
    height: 71,
    top: 0,
    position: "absolute",
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  tue: {
    fontSize: FontSize.size_3xs,
    top: 14,
    left: 14,
  },
  text1: {
    height: 27,
    left: 12,
    width: 22,
    fontSize: FontSize.size_lg,
    color: Color.colorGray_100,
  },
  rectangleParent: {
    left: 58,
  },
  groupItem: {
    backgroundColor: Color.colorDodgerblue_100,
    borderRadius: Border.br_mini,
    left: 0,
  },
  wed: {
    color: Color.colorWhite,
    left: 12,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  text2: {
    color: Color.colorWhite,
    left: 12,
  },
  rectangleGroup: {
    left: 116,
  },
  thu: {
    left: 13,
    fontSize: FontSize.size_3xs,
    top: 14,
  },
  text3: {
    top: 30,
    left: 11,
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  rectangleContainer: {
    left: 174,
  },
  fri: {
    left: 16,
    fontSize: FontSize.size_3xs,
    top: 14,
  },
  groupView: {
    left: 232,
  },
  groupChild1: {
    borderColor: Color.colorAzure,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  sat: {
    color: Color.colorDarkgray,
    fontSize: FontSize.size_3xs,
    top: 14,
    left: 14,
  },
  text5: {
    top: 28,
    color: Color.colorGray_200,
    left: 11,
    fontSize: FontSize.size_lg,
    fontWeight: "600",
  },
  rectangleParent1: {
    left: 348,
  },
  groupParent1: {
    left: 0,
  },
  mon: {
    left: 12,
    fontSize: FontSize.size_3xs,
    top: 14,
  },
  text6: {
    left: 14,
    color: Color.colorGray_100,
  },
  date: {
    left: 33,
    width: 394,
    top: 0,
  },
  image2Parent: {
    top: 337,
    left: 31,
    width: 427,
  },
  groupChild3: {
    width: 86,
    height: 37,
    left: 0,
    position: "absolute",
    top: 0,
  },
  am: {
    color: Color.colorBlack,
  },
  rectangleParent2: {
    top: 43,
  },
  am1: {
    left: 16,
    color: Color.colorBlack,
  },
  rectangleParent3: {
    top: 94,
  },
  pm: {
    color: Color.colorGray_100,
  },
  rectangleParent4: {
    top: 145,
  },
  am2: {
    left: 16,
    color: Color.colorGray_100,
  },
  rectangleParent5: {
    top: 43,
  },
  groupChild7: {
    backgroundColor: Color.colorDodgerblue_100,
    borderRadius: Border.br_mini,
    top: 0,
  },
  am3: {
    color: Color.colorWhite,
    fontWeight: "600",
  },
  rectangleParent6: {
    top: 94,
  },
  groupChild8: {
    backgroundColor: Color.colorDodgerblue_100,
    borderRadius: Border.br_mini,
    left: 0,
  },
  selectedSlot: {
    width: 79,
    height: 15,
    left: 18,
    color: Color.colorWhite,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.inter,
    top: 8,
    fontWeight: "600",
  },
  rectangleParent7: {
    left: 117,
  },
  rectangleParent8: {
    top: 145,
  },
  am4: {
    left: 17,
    color: Color.colorBlack,
  },
  rectangleParent9: {
    top: 43,
  },
  rectangleParent10: {
    top: 94,
  },
  groupChild12: {
    borderColor: Color.colorDodgerblue_400,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorWhite,
  },
  availableSlots: {
    width: 81,
    left: 13,
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.inter,
    top: 8,
    height: 12,
  },
  groupParent2: {
    top: 431,
    left: 45,
    height: 182,
    width: 300,
    position: "absolute",
  },
  groupChild13: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.colorDodgerblue_100,
    left: 0,
    top: 0,
  },
  bookApointment: {
    top: 15,
    left: 86,
    width: 128,
    color: Color.colorWhite,
    textAlign: "left",
    fontWeight: "600",
    position: "absolute",
  },
  rectangleParent12: {
    top: 634,
    left: 50,
  },
  text7: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppins,
    color: Color.colorGray_100,
    left: 0,
    top: 0,
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
  topBarWrapper: {
    height: 45,
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChild14: {
    shadowColor: "rgba(0, 0, 0, 0.13)",
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  iconlybulkhome: {
    width: "65%",
    right: "30%",
    left: "5%",
  },
  home: {
    top: 35,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    left: 0,
  },
  iconlybulkhomeParent: {
    width: "10%",
    right: "45%",
    left: "45%",
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
  frameIcon: {
    left: 3,
    width: 24,
  },
  book: {
    top: 29,
    color: Color.colorDodgerblue_100,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    left: 0,
    position: "absolute",
  },
  frameGroup: {
    top: 16,
    left: 46,
    height: 47,
  },
  rectangleParent13: {
    top: 762,
    left: 18,
  },
  groupParent: {
    top: -41,
    left: -18,
    width: 458,
    height: 841,
    position: "absolute",
  },
  pneumococcal: {
    flex: 1,
    height: 794,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Pneumococcal;
