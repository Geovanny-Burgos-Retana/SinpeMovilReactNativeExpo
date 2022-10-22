import { StyleSheet, FlatList, View, SafeAreaView, Text, TouchableHighlight } from "react-native";
import Movement from "./Movement";
import React, { useState } from "react";

var records = 10;
var page = 1;

const Item = ({ movement }) => (
    <View style={styles.container2}>
        <Movement movement={movement}></Movement>
    </View>
);

export default function Movements(props) {
    const [movements, setMovements] = useState(props.movements);
    
    const renderItem = ({ item }) => (
        <TouchableHighlight onPress={() => props.navigation.navigate('MovementDetails', { movement: item, navigation: props.navigation })}>
            <Item movement={item} />
        </TouchableHighlight>
        
    );

    const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
        const paddingToBottom = 20;
        return layoutMeasurement.height + contentOffset.y >=
            contentSize.height - paddingToBottom;
    };

    const fetchApiAccount = async () => {
        try {
            const response = await fetch('https://ucszxe1fz2.execute-api.us-west-2.amazonaws.com/account/8620317d-9051-4a2c-922c-cfbeabbcf768?records=' + records + '&offset=' + page);
        
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
        
            const result = await response.json();
        
            // console.log('result is: ', JSON.stringify(result, null, 4));
        
            setMovements([...movements, ...result.account.banking_movements]);

            page = page + 1;
    
        } catch (err) {
            setErr(err.message);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container2}>
                <Text style={styles.movements}>Movimientos</Text>
            </View>
            <View>
                <FlatList nestedScrollEnabled
                    data={movements}
                    extraData={movements}
                    renderItem={renderItem}
                    progressViewOffset={10}
                    onScroll={({nativeEvent}) => {
                        if (isCloseToBottom(nativeEvent)) {
                            fetchApiAccount();
                        }
                    }}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 375,
        height: 270,
        top: 214
    },
    container2: {
        padding: 10
    },
    movements: {
        /* Title/H5 */
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 20,
        lineHeight: 26,
        letterSpacing: 0.0022,
        /* Text-color/Default */
        color: "#3E3E3E"
    }
});