import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from "moment";
import 'moment/locale/es';

export default function CreateMovement(props) {
    console.log('result is: ', JSON.stringify(props, null, 4));
    return (
        <View style={styles.screen}>
            <Text style={styles.transfer}>Transferir a</Text>
            <View style={styles.contact}>
                <View style={styles.user}>
                    <View style={styles.oval}>
                        <Text style={styles.initials}>CN</Text>
                    </View>
                </View>
                <View style={styles.information}>
                    <Text style={styles.name}>{props.route.params.contact.name}</Text>
                    <Text style={styles.phone}>{props.route.params.contact.phone}</Text>
                </View>
            </View>
            <View style={styles.view_box_amount}>
                <Text style={styles.titleAmount}>Monto</Text>
                <View style={styles.inputBoxAmount}>
                    <TextInput style={styles.inputAmount}></TextInput>
                </View>
            </View>
            <View style={styles.input_box_detail}>
                <Text style={styles.titleAmount}>Detalle</Text>
                <View style={styles.inputBoxAmount}>
                    <TextInput style={styles.inputA}></TextInput>
                </View>
            </View>
            <TouchableOpacity onPress={() => props.navigation.navigate('Home')} style={styles.backButton}>
                <Text style={styles.backText}>Confirmar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        position: "relative",
        width: 360,
        height: 660,
        backgroundColor: "#FFFFFF"
    },
    transfer: {
        position: "absolute",
        width: 88,
        height: 21,
        left: 16,
        top: 60,

        fontFamily: "normal",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 16,
        lineHeight: 21,
        display: "flex",
        alignItems: "center",

        color: "#4C51F7"
    },
    contact: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 16,

        position: "absolute",
        width: 360,
        height: 72,
        left: 1,
        top: 95,
    },
    user: {
        width: 48,
        height: 48,

        flex: 0,
        flexGrow: 0
    },
    initials: {
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
    oval: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,

        backgroundColor: "#C6C7FF",
        borderRadius: 24
    },
    information: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: 10,

        width: 279,
        height: 44,

        flex: 0,
        flexGrow: 1
    },
    name: {
        width: 279,
        height: 24,

        fontFamily: "normal",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 18,
        lineHeight: 24,

        display: "flex",
        alignItems: "center",

        color: "#3E3E3E",

        flex: 0,
        alignSelf: "stretch",
        flexGrow: 0,
    },
    phone: {
        width: 279,
        height: 16,

        fontFamily: "normal",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 16,

        display: "flex",
        alignItems: "center",

        color: "#4C51F7",

        flex: 0,
        alignSelf: "stretch",
        flexGrow: 0,
    },
    view_box_amount: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: 8,

        position:"absolute",
        width: 343,
        height: 77,
        left: 8,
        top: 190
    },
    titleAmount: {
        width: 343,
        height: 21,
        
        fontFamily: 'normal',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 16,
        lineHeight: 21,

        color: "#4C51F7",
        
        flex: 0,
        alignSelf: "stretch",
        flexGrow: 0
    },
    inputBoxAmount: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        marginTop: 10,

        width: 330,
        height: 48,

        background: "#FFFFFF",

        borderWidth: 1,
        borderColor: "#CECECE",
        borderRadius: 24,

        flex: 0,
        alignSelf: "stretch",
        flexGrow: 0
    },
    inputAmount: {
        width:311,
        height: 19,

        fontFamily: "normal",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 14,
        lineHeight: 19,

        color: "#3E3E3E",

        flex: 0,
        flexGrow: 1
    },
    input_box_detail: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: 8,

        position:"absolute",
        width: 343,
        height: 77,
        left: 8,
        top: 290
    },
    input: {
        width:311,
        height: 19,

        fontFamily: "normal",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 14,
        lineHeight: 19,

        color: "#3E3E3E",

        flex: 0,
        flexGrow: 1
    },
    title: {
        width: 343,
        height: 21,
        
        fontFamily: 'normal',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 16,
        lineHeight: 21,

        color: "#4C51F7",
        
        flex: 0,
        alignSelf: "stretch",
        flexGrow: 0
    },
    backButton: {
        /* Buttons */
        position: "absolute",
        width: 343,
        height: 48,
        top:570,
        backgroundColor:"#4C51F7",
        borderRadius: 24,
        margin:10
    },
    backText: {
        /* action */
        padding:10,
        /* Body/Regular */
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 16,
        lineHeight: 21,
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        /* Text-color/Default */
        color: '#FFFFFF',
    }
});