import { StyleSheet, View, Text, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import AppLoading from 'expo-app-loading';
import * as Contacts from 'expo-contacts';
import SectionListContacts from 'react-native-sectionlist-contacts'

export default function ContactList(props) {
    let [isReady, setIsReady] = useState(false);
    let [error, setError] = useState(undefined);
    let [contacts, setContacts] = useState(undefined);
  
    useEffect(() => {
      (async () => {
        const { status } = await Contacts.requestPermissionsAsync();
        if (status === "granted") {
          const { data } = await Contacts.getContactsAsync({
            fields: [ Contacts.Fields.FirstName, Contacts.Fields.LastName/* , Contacts.Fields.PhoneNumbers */]
          });
  
          if (data.length > 0) {
            console.log('dataContacts is: ', JSON.stringify(data, null, 4));
            setContacts(data);
            setIsReady(true);
          } else {
            setError("No contacts found");
          }
        } else {
          setError("Permission to access contacts denied.");
        }
      })();
    }, []);

    let _renderHeader = (params) =>  {
        return (
            <View>
                <Text>{params.key}</Text>
            </View>
        )
    }

    let _renderItem = (item, idex, section) => {
        return (
            <View>
                <View>
                    <Text>{item.name}</Text>
                </View>
            </View>
        )
    }


    if(!isReady) {
        return <AppLoading />
    }

    return (
        <View>
            <View>
                <TextInput
                    placeholder="Buscá por nombre o número"
                    returnKeyType="search"
                    onChangeText={(text) => {}}
                ></TextInput>
            </View>
            <View>
                <SectionListContacts
                    ref={s=>sectionList=s}
                    sectionListData={contacts}
                    sectionHeight={50}
                    initialNumToRender={contacts.length}
                    showsVerticalScrollIndicator={false}
                    SectionListClickCallback={(item,index)=>{
                       console.log('---SectionListClickCallback--:',item,index)
                    }}
                    otherAlphabet="#"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

});