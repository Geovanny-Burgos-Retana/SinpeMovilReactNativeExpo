import { StyleSheet, FlatList, View, StatusBar, SafeAreaView, Text } from "react-native";
import Movement from "./Movement";
import { useState } from "react";

var DATA = [
    {
        createdAt: 1666069021000,
        amount: 9000,
        id: "c46ceb13-8a5a-48c9-af10-bc869b61ffa8",
        phoneTwo: "+506 6765-4322",
        phone: "+506 6765-4321",
        contact: "Gonzalo Zanabria"
    },
    {
        createdAt: 1666061131000,
        amount: 2000,
        id: "54a98f5f-8839-46e8-81b7-cabef9645ce6",
        phoneTwo: "+506 6765-4322",
        phone: "+506 6765-4321",
        contact: "Gonzalo Zanabria"
    },
    {
        createdAt: 1666058438000,
        amount: 2000,
        id: "f8e6673d-e9e3-4dba-97d6-360ffdb3a48f",
        phoneTwo: "+506 6765-4322",
        phone: "+506 6765-4321",
        contact: "Gonzalo Zanabria"
    },
    {
        createdAt: 1666058433000,
        amount: 4000,
        id: "2aff17da-4c06-4ccd-a118-19a5bc4fdadb",
        phoneTwo: "+506 6765-4322",
        phone: "+506 6765-4321",
        contact: "Gonzalo Zanabria"
    },
    {
        createdAt: 1666058425000,
        amount: 5000,
        id: "e78f5b34-f613-485d-ab9b-b9e6dd077416",
        phoneTwo: "+506 6765-4322",
        phone: "+506 6765-4321",
        contact: "Gonzalo Zanabria"
    },
    {
        createdAt: 1666058421000,
        amount: 1000,
        id: "ed18020c-378b-4b6a-b5fc-04f9bce13b3b",
        phoneTwo: "+506 6765-4322",
        phone: "+506 6765-4321",
        contact: "Gonzalo Zanabria"
    },
    {
        createdAt: 1666057780000,
        amount: 7000,
        id: "682c42a1-62ed-4e65-8b34-4fc114873577",
        phoneTwo: "+506 6765-4322",
        phone: "+506 6765-4321",
        contact: "Gonzalo Zanabria"
    },
    {
        createdAt: 1666057463000,
        amount: 3000,
        id: "9b0e8f01-c5e7-45c7-b98d-ca62044cf5d2",
        phoneTwo: "+506 6765-4322",
        phone: "+506 6765-4321",
        contact: "Gonzalo Zanabria"
    },
    {
        createdAt: 1666057463000,
        amount: 3000,
        id: "9b0e8f01-c5e7-45c7-b98d-ca62044cf5d3",
        phoneTwo: "+506 6765-4322",
        phone: "+506 6765-4321",
        contact: "Gonzalo Zanabria"
    }
];

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

export default function Movements() {
    const [titleText, setTitleText] = useState("Movement List");
    
    const renderItem = ({ item }) => (
        <Item title={item.id} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList nestedScrollEnabled
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
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