import { StyleSheet, View, Text } from "react-native";
import React, { useState } from "react";
import moment from "moment";
import 'moment/locale/es';

export default function Movement(props) {
    const [today, setToday] = useState(new Date(new Date().setHours(0,0,0,0)));

    const getDateFormated = () => {
        if(props.movement.createdAt - today > 0) {
            return "Hoy " + (moment(new Date(props.movement.createdAt)).format("HH:mm a")).toString();
        } else {
            return (moment(new Date(props.movement.createdAt)).format("DD/MM/YY HH:mm a")).toString();
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <Text style={styles.title}>SINPE móvil - {props.movement.contact}</Text>
                <Text style={styles.date}>{getDateFormated()}</Text>
            </View>
            <View style={styles.container3}>
                <Text style={styles.amount}>- ₡ {parseInt(props.movement.amount).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</Text>
                <Text></Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        flex: 1
    },
    container2: {
        width: 250,
    },
    container3: {
        width: 80,
    },
    amount: {
        /* Body/Regular */
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 14,
        lineHeight: 19,
        fontWeight: 'bold',
        /* Semantic/Error */
        color: '#F44336',
        /* identical to box height */
        textAlign: "right"
    },
    title: {
        /* Body/Regular */
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 14,
        lineHeight: 19,
        /* Text-color/Default */
        color: "#3E3E3E"
    },
    date: {
        /* Body/Regular */
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 16,
        /* Text-color/Default */
        color: '#787878',
    }
});