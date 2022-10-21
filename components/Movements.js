import { StyleSheet, FlatList, View, StatusBar, SafeAreaView, Text } from "react-native";
import Movement from "./Movement";
import React, { useState, useEffect } from "react";
import uuid from 'react-native-uuid';

const accountId = '8620317d-9051-4a2c-922c-cfbeabbcf768';
const urlApi = 'https://ucszxe1fz2.execute-api.us-west-2.amazonaws.com/account';
var records = 10;
var page = 0;

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

export default function Movements() {
    const [isLoading, setLoading] = useState(true);
    const [account, setAccount] = useState({});

    const getAccount = async () => {
        try {
            const response = await fetch(urlApi + '/' + accountId + '?records=' + records + '&page=' + page);
            const json = await response.json();
            setAccount(json.account);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }
   
    useEffect(() => {
        getAccount();
    }, []);

    const fetchData = () => {
        getMoreMovements();
    };

    const onRefresh = () => {
        fetchData();
    };
    
    const renderItem = ({ item }) => (
        <Item title={item.id} />
    );

    const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
        const paddingToBottom = 20;
        return layoutMeasurement.height + contentOffset.y >=
            contentSize.height - paddingToBottom;
    };

    const getMoreMovements = () => {
        var idNew = uuid.v4();
        console.log(idNew);
        for (let i = 0; i < 5; i++) {
            var newMovement = {
                id: idNew
            };
            movements.push(newMovement);
        }
        console.log("Obtener más movimientos!");
        console.log(JSON.stringify(movements, null, 2));
        console.log(movements.length);
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList nestedScrollEnabled
                data={account.banking_movements}
                extraData={account.banking_movements}
                renderItem={renderItem}
                progressViewOffset={100}
                onScroll={({nativeEvent}) => {
                    if (isCloseToBottom(nativeEvent)) {
                        onRefresh();
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