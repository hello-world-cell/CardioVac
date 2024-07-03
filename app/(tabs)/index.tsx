import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "@/components/GlobalStyles";
import { FIREBASE_AUTH } from "@/FirebaseConfig";
import { onAuthStateChanged } from "@firebase/auth";


const Home = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handleLogout = () => {
    FIREBASE_AUTH.signOut()
      .then(() => {
        navigation.navigate("signin");
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  const [userEmail, setUserEmail] = React.useState<string | null>(null);


  React.useEffect(() => {
    const auth = FIREBASE_AUTH;
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        setUserEmail(null);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <View style={styles.home}>
      <View style={[styles.roundedRectangle, styles.roundedBorder]} />

      <View style={[styles.groupContainer, styles.groupPosition]}>
        <View
          style={[
            styles.gradientBlueAbstractBackgroParent,
            styles.groupPosition,
          ]}
        >
          <View style={[styles.groupFrame, styles.groupFrameLayout]}>
            <View style={[styles.welcomeParent, styles.groupFrameLayout]}>
              <Text style={[styles.welcome, styles.welcomeFlexBox]}>
                Welcome user! {userEmail ? userEmail : "User"}
              </Text>   
            </View>
          </View>
          <Image
            style={[styles.groupChild, styles.groupPosition]}
            source={require("../../assets/group-226.png")}
          />
        </View>
        <View style={[styles.groupItemLayout]}>
          <Pressable
            style={styles.logoutButton}
            onPress={handleLogout}
          >
            <Text style={styles.logoutText}>Logout</Text>
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
          <Image
            style={[styles.chill1Icon, styles.iconLayout]}
            source={require("../../assets/chill-1.png")}
            //source={require("../../assets/breathing-1.png")}
          />
          <Text style={[styles.influenzaShots, styles.shotsTypo]}>
            Influenza shots
          </Text>
          <Text style={[styles.text2, styles.textTypo]}>0</Text>
        </View>
       
      </View>
      <View style={[styles.groupView2, styles.groupViewLayout]}>

        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.rectangleView, styles.groupLayout]} />
          <Image
            style={[styles.chill1Icon, styles.iconLayout]}
            source={require("../../assets/breathing-1.png")}
          />
          <Text style={[styles.influenzaShots, styles.shotsTypo]}>
          Pneumococcal  shots
          </Text>
          <Text style={[styles.text2, styles.textTypo]}>0</Text>
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
  textFlexBox: {
    alignItems: "center",
    display: "flex",
    color: Color.colorGray_100,
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
    fontFamily: FontFamily.poppinsSemiBold,
    left: 0,
    position: "absolute",
  },
  groupItemLayout: {
    height: 79,
    width: 360,
    left: 0,
    position: "absolute",
  },
  shotsTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontWeight: "500",
    fontFamily: FontFamily.poppinsSemiBold,
    position: "absolute",
  },
  dateTypo: {
    top: 376,
    color: Color.colorBlack,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    fontWeight: "500",
    fontFamily: FontFamily.poppinsSemiBold,
    position: "absolute",
  },
  text1Typo: {
    fontSize: FontSize.size_sm,
    top: 407,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily:FontFamily.poppinsSemiBold,
    position: "absolute",
  },
  groupViewLayout: {
    height: 145,
    position: "absolute",
    right: 221,
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
    fontFamily:FontFamily.poppinsSemiBold,
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
  gradientBlueAbstractBackgroIcon: {
    opacity: 0.64,
  },
  welcome: {
    fontSize: 32,
    //width: 221,
    //height: 34,
    fontWeight: "300",
    textAlign: "left",
    top: 10,
    fontFamily: FontFamily.interMedium,
  },
  celestine: {
    top: 43,
    fontSize: 22,
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
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontWeight: "500",
    fontFamily: FontFamily.poppinsSemiBold,
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
    left: 100,
    backgroundColor: Color.colorAntiquewhite,
    borderRadius: Border.br_7xs,
  },
  chill1Icon: {
    top: 15,
    left: 50,
  },
  pneumococcalShots: {
    top: 54,
    left: 15,
    color: Color.colorGray_100,
    width: 108,
    alignItems: "center",
    display: "flex",
  },
  text3: {
    left: 60,
  },
  rectangleContainer: {
    left: 221,
    width: 139,
    right: 221,
  },
  groupView: {
    top: 451,
    left: 41,
    width: 360,
  },
  groupView2: {
    top: 451,
    left: 200,
    width: 360,
  },
  breathing1Icon: {
    top: 538,
    left: 207,
  },
  logoutButton: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    top: 100,
    //transform: [{ translateX: "-50%" }],
    padding: 20,
    width: 120,
    height: 10,
    backgroundColor: Color.colorDodgerblue_200,
    borderRadius: Border.br_7xs,
  },
  logoutText: {
    color: Color.colorDimgray,
    fontSize: 12,
    textAlign: 'center',
    fontFamily:FontFamily.poppinsSemiBold,
    position: 'absolute',
    top: 10,
    left: 40,

  },
  home: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Home;
