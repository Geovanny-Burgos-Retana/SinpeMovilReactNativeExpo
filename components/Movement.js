import { StyleSheet, View, Text } from "react-native";
import React, { useState } from "react";

export default function Movement(props) {
    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <Text>SINPE móvil - Contacto {props.movement.id}</Text>
                <Text>Fecha</Text>
            </View>
            <View style={styles.container2}>
                <Text style={styles.amount}>- $500</Text>
                <Text></Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container2: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    amount: {
        fontWeight: 'bold',
        color: '#F44336',
        textAlign: "right"
    },
    title: {
        color: "#3E3E3E"
    },
    date: {
        color: "#787878" 
    }
});