import { StyleSheet, FlatList, View, StatusBar, SafeAreaView, Text } from "react-native";
import Movement from "./Movement";
import React, { useState, useEffect } from "react";
import uuid from 'react-native-uuid';

const accountId = '8620317d-9051-4a2c-922c-cfbeabbcf768';
const urlApi = 'https://ucszxe1fz2.execute-api.us-west-2.amazonaws.com/account';
var records = 10;
var page = 0;
var init = true;

var DATA = [
    {
        id: "1"
    },
    {
        id: "2"
    },
    {
        id: "3"
    },
    {
        id: "4"
    },
    {
        id: "5"
    },
    {
        id: "6"
    },
    {
        id: "7"
    },
    {
        id: "8"
    },
    {
        id: "9"
    }
];

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
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
    const [movements, setMovements] = useState([]);


    const getAccount = async () => {
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
    }, []);
    
    const renderItem = ({ item }) => (
        <Item title={item.id} />
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
            <FlatList nestedScrollEnabled
                data={movements}
                extraData={movements}
                renderItem={renderItem}
                progressViewOffset={10}
                onScroll={({nativeEvent}) => {
                    if (isCloseToBottom(nativeEvent)) {
                        getMoreMovements();
                    }
                }}
            />
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container2: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});