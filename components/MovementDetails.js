import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from "moment";
import 'moment/locale/es';

export default function MovementDetails(props) {
    moment.locale('es');
    // console.log((moment(new Date(props.route.params.movement.createdAt)).format("d MMMM yyyy, HH:mm a")).toString().replace(/\s/, ' de '));

    return (
        <View>
            <View>
                <Text>Icon iniciales nombre</Text>
            </View>
            <Text style={styles.title}>SINPE móvil - {props.route.params.movement.contact}</Text>
            <Text style={styles.amount}>₡{parseInt(props.route.params.movement.amount).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</Text>
            <View style={styles.container}>
                <Text style={styles.dateTitle}>Fecha</Text>
                <Text style={styles.date}>{(moment(new Date(props.route.params.movement.createdAt)).format("d MMMM yyyy, HH:mm a")).toString().replace(/\s/, ' de ')}</Text>
                <Text style={styles.dateTitle}>Descripción</Text>
                <Text style={styles.date}>Fiesta de Hallowink</Text>
                <Text style={styles.dateTitle}>Tipo de movimiento</Text>
                <Text style={styles.date}>SINPE móvil</Text>
            </View>
            <TouchableOpacity onPress={() => props.navigation.navigate('Home')} style={styles.backButton}>
                <Text style={styles.backText}>Volver</Text>
            </TouchableOpacity>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        /* Auto layout */
        /* display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: 0,
        gap: 16,

        position: "absolute",
        width: 375,
        height: 224,
        left: 0,
        top: 280 */
    },  
    title: {
        /* Body/Regular */
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 14,
        lineHeight: 19,
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        /* Text-color/Default */
        color: "#3E3E3E"
    },
    amount: {
        /* Body/Regular */
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 22,
        lineHeight: 29,
        fontWeight: 'bold',
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        /* Semantic/Error */
        color: '#3E3E3E'
    },
    dateTitle: {
        /* Body/Regular */
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 16,
        /* Text-color/Default */
        color: '#787878',
    },
    date: {
        /* Body/Regular */
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 14,
        lineHeight: 19,
        /* Text-color/Default */
        color: '#3E3E3E',
    },
    backButton: {
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