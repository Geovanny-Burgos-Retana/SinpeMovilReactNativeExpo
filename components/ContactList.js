import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import SectionListContacts from 'react-native-sectionlist-contacts';
import * as Contacts from 'expo-contacts';


export default function ContactList(props) {
    const [dataArray, setDataArray] = useState([/* {
            "lookupKey": "2375i5aef24c28cb4a1be.3789r596-293F53294B45294B295929414545533943.2399r603-293F53294B45294B295929414545533943",
            "firstname": "Álvaro",
            "name": "Alvaro Araya Moovin",
            "id": "597",
            "imageAvailable": false,
            "middleName": "Araya",
            "contactType": "person",
            "lastname": "Moovin"
        },
        {
            "lookupKey": "2375i24173f8d8b44c3c7.3789r646-2D294B3F394337454D2D452D",
            "firstname": "☆Carlinhos☆ ⚔️",
            "name": "☆Carlinhos☆ ⚔️ COC ⚔️",
            "id": "648",
            "imageAvailable": false,
            "middleName": "COC",
            "contactType": "person",
            "lastname": "⚔️"
        },
        {
            "lookupKey": "2375i7101182e0ec79e5d.3789r616-3D31593F454B2D452D",
            "firstname": "🍃Keylor🍃",
            "name": "🍃Keylor🍃 COC",
            "id": "617",
            "imageAvailable": false,
            "contactType": "person",
            "lastname": "COC"
        } */
    ]);

    useEffect(() => {
        (async () => {
          const { status } = await Contacts.requestPermissionsAsync();
          if (status === "granted") {
            const { data } = await Contacts.getContactsAsync({
              fields: [ Contacts.Fields.FirstName, Contacts.Fields.LastName, Contacts.Fields.PhoneNumbers]
            });

            if (data.length > 0) {
              data.forEach(element => {
                element["firstname"] = element["firstName"];
                element["lastname"] = element["lastName"];
                if (element.phoneNumbers === undefined) {
                    element["phone"] = "Sin teléfono";
                } else {
                    element["phone"] = element.phoneNumbers[0].number;   
                }
              });
              setDataArray(data);
              setIsReady(true);
            } else {
              setError("No contacts found");
            }
          } else {
            setError("Permission to access contacts denied.");
          }
        })();
      }, []);
    
    const _renderHeader = (params) => {
        return (
          <View style={styles.sectionView}>
            <Text style={styles.sectionText}>{params.key}</Text>
          </View>
        );
      };
    
    const  _renderItem = (item, index, section) => {
        return (
            <TouchableHighlight onPress={() => props.navigation.navigate('CreateMovement', { contact: item, navigation: props.navigation })}>
                <View style={styles.itemView}>
                    <View style={styles.itemTextView}>
                        <Text style={styles.itemFirstName}>{item.firstname}</Text>
                        <Text style={styles.itemLastName}>{item.lastname}</Text>
                    </View>
                </View>
            </TouchableHighlight>
          
        );
      };

    

    return (
    <View style={styles.container}>
        <View style={{ height: 65, backgroundColor: '#161616' }}>
            <View style={styles.searchBox}>
                <Image
                    source={require('../assets/Search.png')}
                    style={{ marginLeft: 7, marginRight: 7 }}
                />
                <TextInput
                    placeholder="Search"
                    placeholderTextColor="#8E8E93"
                    style={styles.inputText}
                    returnKeyType="search"
                    keyboardAppearance="dark"
                    onChangeText={(text) => {}}
                ></TextInput>
            </View>
        </View>
        <View style={styles.container}>
            <SectionListContacts
                sectionListData={dataArray}
                initialNumToRender={dataArray.length}
                SectionListClickCallback={(item, index, section) => props.navigation.navigate('CreateMovement', { contact: item })}
                showAlphabet={false}
                otherAlphabet="#"
                letterViewStyle={styles.letterView}
                letterTextStyle={styles.letterText}
            />
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
      },
      headerView: {
        height: 44,
        marginTop: 44,
        marginLeft: 16,
        marginRight: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      groupsText: {
        fontFamily: 'normal',
        fontSize: 17,
        color: '#0A84FF',
        letterSpacing: -0.41,
        lineHeight: 22,
      },
      headerContactsView: {
        height: 41,
        marginTop: 12,
        marginLeft: 16,
        alignItems: 'flex-start',
        justifyContent: 'center',
      },
      headerContacts: {
        fontFamily: 'SFProDisplay-Bold',
        fontSize: 34,
        color: '#FFFFFF',
        letterSpacing: -0.41,
        lineHeight: 41,
      },
      searchBox: {
        marginTop: 12,
        height: 37,
        marginLeft: 16,
        marginRight: 16,
        borderRadius: 10,
        backgroundColor: '#2C2C2E',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
      inputText: {
        fontFamily: 'normal',
        fontSize: 17,
        color: '#8E8E93',
        letterSpacing: -0.41,
        lineHeight: 22,
      },
      avatar: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 16,
      },
      accountText: {
        fontFamily: 'SFProDisplay-Semibold',
        fontSize: 20,
        color: '#FFFFFF',
        letterSpacing: 0.38,
      },
      introText: {
        fontFamily: 'normal',
        fontSize: 13,
        color: '#FFFFFF',
        letterSpacing: 0.38,
        lineHeight: 18,
      },
      sectionView: {
        height: 28,
        backgroundColor: '#2C2C2E',
        alignItems: 'flex-start',
        justifyContent: 'center',
      },
      sectionText: {
        marginLeft: 16,
        fontFamily: 'SFProDisplay-Semibold',
        fontSize: 17,
        color: '#FFFFFF',
      },
      itemView: {
        height: 44,
        backgroundColor: 'rgba(22,22,22,0.75)',
      },
      itemTextView: {
        height: 44,
        marginLeft: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
      itemFirstName: {
        fontFamily: 'normal',
        fontSize: 17,
        color: '#FFFFFF',
      },
      itemLastName: {
        marginLeft: 5,
        fontFamily: 'SFProText-Semibold',
        fontSize: 17,
        color: '#FFFFFF',
      },
      letterText: {
        fontFamily: 'SFProText-Semibold',
        fontSize: 11,
        color: '#007AFF',
      },
});