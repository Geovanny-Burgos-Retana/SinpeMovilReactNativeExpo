import { StyleSheet, FlatList, View, StatusBar, SafeAreaView, Text } from "react-native";
import Movement from "./Movement";
import React, { useState, useEffect } from "react";
import uuid from 'react-native-uuid';

const accountId = '8620317d-9051-4a2c-922c-cfbeabbcf768';
const urlApi = 'https://ucszxe1fz2.execute-api.us-west-2.amazonaws.com/account';
var records = 10;
var page = 0;
var init = true;

const Item = ({ movement }) => (
    <View style={styles.container2}>
        <Movement movement={movement}></Movement>
    </View>
);

const getMoreMovementsDB = () => {
    return fetch(urlApi + '/' + accountId + '?records=' + records + '&offset=' + page)
        .then((response) => response.json())
        .then((json) => {
            return json;
        })
        .catch((error) => {
            console.error(error);
        });
};

export default function Movements(props) {
    const [isLoading, setLoading] = useState(true);
    const [account, setAccount] = useState({});
    const [movements, setMovements] = useState(props.movements);

    /*const getAccount = async () => {
        try {
            const response = await fetch(urlApi + '/' + accountId + '?records=' + records + '&offset=' + page);
            console.log(urlApi + '/' + accountId + '?records=' + records + '&offset=' + page);
            const json = await response.json();
            console.log("BEFORE");
            console.log(JSON.stringify(movements));
            console.log(movements.length);
            setAccount(json.account);
            setMovements([...movements, ...json.account.banking_movements]);
            page = page + 1;
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getAccount();
    }, []);*/
    
    const renderItem = ({ item }) => (
        <Item movement={item} />
    );

    const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
        const paddingToBottom = 20;
        return layoutMeasurement.height + contentOffset.y >=
            contentSize.height - paddingToBottom;
    };

    const getMoreMovements = () => {
        console.log("Obtener más movimientos!");

        if(init) {
            getAccount();
        }
        init = false;
        
        console.log("Obtener más movimientos!");
        console.log("AFTER");
        console.log(JSON.stringify(movements));
        console.log(movements.length);
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
                            //getMoreMovements();
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
        height: 362,
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