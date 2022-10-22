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
    <View style={styles.item}>
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

export default function Movements() {
    const [isLoading, setLoading] = useState(true);
    const [account, setAccount] = useState({});
    const [movements, setMovements] = useState([
        {
            id: "1",
            createdAt: 1666327751000,
            amount: 1000,
            contact: "Andrea Burgos"
        },
        {
            id: "2",
            createdAt: 1666327751000,
            amount: 2000,
            contact: "Marlen Retana"
        },
        {
            id: "3",
            createdAt: 1666327751000,
            amount: 3000,
            contact: "María Centeno"
        },
        {
            id: "4",
            createdAt: 1666327751000,
            amount: 4000,
            contact: "Katia Hidalgo"
        },
        {
            id: "5",
            createdAt: 1666327751000,
            amount: 5000,
            contact: "Natalia Montoya"
        },
        {
            id: "6",
            createdAt: 1666327751000,
            amount: 6000,
            contact: "Arelys Mejía"
        },
        {
            id: "7",
            createdAt: 1666327751000,
            amount: 7000,
            contact: "Julio Arley"
        },
        {
            id: "8",
            createdAt: 1666327751000,
            amount: 8000,
            contact: "Mauricio Madrigal"
        },
        {
            id: "9",
            createdAt: 1666327751000,
            amount: 9000,
            contact: "Adelia Martinez"
        }
    ]);

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
            <View style={styles.view2}>
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
    item: {
        /* backgroundColor: '#f9c2ff', */
        padding: 10,
        marginVertical: 0,
    },
    title: {
        fontSize: 32,
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
    },
    view2: {
        padding: 10
    },
    view3: {
        backgroundColor: "yellow"
    }
});