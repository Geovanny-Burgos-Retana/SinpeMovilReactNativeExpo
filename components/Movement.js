import { StyleSheet, View, Text } from "react-native";
import React, { useState } from "react";

export default function Movement(props) {
    console.log(props.movement);
    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <Text style={styles.title}>SINPE móvil - {props.movement.contact}</Text>
                <Text style={styles.date}>{props.movement.createdAt}</Text>
            </View>
            <View style={styles.container3}>
                <Text style={styles.amount}>- $ {props.movement.amount}</Text>
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