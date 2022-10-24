import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableHighlight } from 'react-native';
import SectionListContacts from 'react-native-sectionlist-contacts';
import * as Contacts from 'expo-contacts';
import EnterpriseStyles from './common/EnterpriseStyles';


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
              console.log('result is: ', JSON.stringify(data, null, 4));
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
    
    const _renderItem = (item, index, section) => {
        return (
            <TouchableHighlight onPress={() => props.navigation.navigate('CreateMovement', { contact: item, navigation: props.navigation })}>
                <View style={styles.contact}>
                    <View style={styles.user}>
                        <View style={EnterpriseStyles.enterpriseOval}>
                            <Text style={EnterpriseStyles.enterpriseInitials}>{item.firstName === undefined ? 'N/A' : (item.firstName[0] + (item.lastName === undefined ? '' : item.lastName[0]))}</Text>
                        </View>
                    </View>
                    <View style={styles.information}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.phone}>{item.phone}</Text>
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
                renderItem={_renderItem}
                renderHeader={_renderHeader}
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
        backgroundColor: '#FFFFFF',
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
        backgroundColor: '#FFFFFF',
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderWidth: 3,
        borderTopColor: "#4C51F7",
        borderBottomColor: "#FFFFFF",
        borderLeftColor: "#FFFFFF",
        borderRightColor: "#FFFFFF",
        borderRadius: 4,
        margin: 10
      },
      sectionView2: {
        padding:16,
        borderWidth: 1,
        borderTopColor: "#4C51F7"
      },
      sectionText: {
        position: "absolute",
        height: 16,
        left: 16,
        right: 16,
        top: 8,

        fontFamily: "normal",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 16,

        color: "#4C51F7"
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
    contact: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 16
    },
    user: {
        width: 48,
        height: 48,

        flex: 0,
        flexGrow: 0
    },
    information: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: 10,

        /* width: 279,
        height: 44, */

        flex: 0,
        flexGrow: 1
    },
    name: {
        /* width: 279,
        height: 24, */

        fontFamily: "normal",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 14,
        lineHeight: 19,

        display: "flex",
        alignItems: "center",

        color: "#3E3E3E",

        flex: 0,
        alignSelf: "stretch",
        flexGrow: 0,
    },
    phone: {
        /* width: 279,
        height: 16, */

        fontFamily: "normal",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 16,

        display: "flex",
        alignItems: "center",

        color: "#4C51F7",

        flex: 0,
        alignSelf: "stretch",
        flexGrow: 0,
    }
});