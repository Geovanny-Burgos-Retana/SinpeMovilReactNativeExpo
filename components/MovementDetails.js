import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from "moment";
import 'moment/locale/es';
import EnterpriseStyles from "./common/EnterpriseStyles";

export default function MovementDetails(props) {
    moment.locale('es');
    // console.log((moment(new Date(props.route.params.movement.createdAt)).format("d MMMM yyyy, HH:mm a")).toString().replace(/\s/, ' de '));
    
    return (
        <View style={EnterpriseStyles.enterpriseScreen}>
            <View style={styles.user}>
                <View style={EnterpriseStyles.enterpriseOval}>
                    <Text style={EnterpriseStyles.enterpriseInitials}>CN</Text>
                </View>
            </View>
            <Text style={[styles.title, EnterpriseStyles.bodyRegular]}>SINPE móvil - {props.route.params.movement.contact}</Text>
            <Text style={styles.amount}>₡{parseInt(props.route.params.movement.amount).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</Text>
            <View style={styles.details}>
                <View style={styles.viewDateDescripType}>
                    <Text style={[styles.dateTitle, EnterpriseStyles.captionRegular]}>Fecha</Text>
                    <Text style={[styles.date, EnterpriseStyles.bodyRegular]}>{(moment(new Date(props.route.params.movement.createdAt)).format("d MMMM yyyy, HH:mm a")).toString().replace(/\s/, ' de ')}</Text>
                </View>
                <View style={styles.viewDateDescripType}>
                    <Text style={[styles.dateTitle, EnterpriseStyles.captionRegular]}>Descripción</Text>
                    <Text style={[styles.date, EnterpriseStyles.bodyRegular]}>Fiesta de Hallowink</Text>
                </View>
                <View style={styles.viewDateDescripType}>
                    <Text style={[styles.dateTitle, EnterpriseStyles.captionRegular]}>Tipo de movimiento</Text>
                    <Text style={[styles.date, EnterpriseStyles.bodyRegular]}>SINPE móvil</Text>
                </View>
            </View>
            <TouchableOpacity onPress={() => props.navigation.navigate('Home')} style={EnterpriseStyles.enterpriseButton}>
                <Text style={styles.backText}>Volver</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    user: {
        position: "absolute",
        width: 48,
        height: 48,
        left: 163,
        top: 80
    },
    title: {
        position: "absolute",
        width: 320,
        height: 20,
        left: 27,
        top: 152,
        
        display: "flex",
        alignItems: "center",
        textAlign: "center"
    },
    amount: {
        position: "absolute",
        width: 134,
        height: 50,
        left: 120,
        top: 180,

        fontFamily: "normal",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 22,
        lineHeight: 29,
        display: "flex",
        alignItems: "center",
        textAlign: "center",

        color: '#3E3E3E',

        fontWeight: 'bold'
    },
    details: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: 16,

        position: "absolute",
        width: 375,
        height: 224,
        left: 0,
        top: 240
    },
    viewDateDescripType: {
        width: 360,
        height: 64,

        flex: 0,
        flexGrow: 0,
    },
    dateTitle: {
        position: "absolute",
        height: 16,
        left: 16,
        right: 16,
        top: 12
    },
    date: {
        position: "absolute",
        height: 19,
        left: 16,
        right: 16,
        top: 36
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