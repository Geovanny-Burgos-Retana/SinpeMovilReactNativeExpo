import { StyleSheet } from "react-native";

const EnterpriseStyles = StyleSheet.create({
    enterpriseScreen: {
        position: "relative",
        width: 360,
        height: 660,
        backgroundColor: "#FFFFFF"
    },
    enterpriseButton: {
        position: "absolute",
        width: 330,
        height: 48,
        left: 16,
        top:570,

        backgroundColor:"#4C51F7",
        borderRadius: 24
    },
    enterpriseInitials: {
        position: "absolute",
        height: 24,
        left: 0,
        right: 0,
        top: 12 ,
        
        fontFamily: "normal",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 18,
        lineHeight: 24,

        display: "flex",
        alignItems: "center",
        textAlign: "center",

        color: "#3130C6"
    },
    enterpriseOval: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,

        backgroundColor: "#C6C7FF",
        borderRadius: 24
    },
    bodyRegular: {
        fontFamily: "normal",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 14,
        lineHeight: 19,

        color: "#3E3E3E"
    },
    captionRegular: {
        fontFamily: "normal",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 16,

        color: "#787878"
    }
});

export default EnterpriseStyles;