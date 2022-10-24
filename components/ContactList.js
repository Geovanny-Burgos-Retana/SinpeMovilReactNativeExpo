import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableHighlight } from 'react-native';
import SectionListContacts from 'react-native-sectionlist-contacts';
import * as Contacts from 'expo-contacts';
import EnterpriseStyles from './common/EnterpriseStyles';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function ContactList(props) {
    const [dataArray, setDataArray] = useState([]);
    const [dataFilterArray, setDataFilterArray] = useState([]);

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
              setDataFilterArray(data);
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
                <View style={styles.boxContact}>
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
                    <AntDesign style={styles.arrow} name="right" size={20} color="black" />
                </View>
            </TouchableHighlight>
          
        );
      };

    const searchFilterFuntion = (filter) => {
      if(filter) {
        const newData = dataArray.filter(item => {
          const itemName = item.name ? item.name.toUpperCase() : '';
          const itemPhone = item.phone ? item.phone.toUpperCase() : '';
          const filterData = filter.toUpperCase();
          return (itemName.indexOf(filterData) > -1) || (itemPhone.indexOf(filterData) > -1);
        });
        setDataFilterArray(newData);
      } else {
        setDataFilterArray(dataArray);
      }
    }

    return (
    <View style={EnterpriseStyles.enterpriseScreen}>
        <View style={styles.searchBox}>
            <View style={styles.searchBoxBox}>
                <View>
                    <Ionicons name="md-search-sharp" size={20} color="blue" margin="10"/>
                </View>
                <TextInput 
                    placeholder="Buscá por nombre o número"
                    placeholderTextColor="#8E8E93"
                    style={styles.searchInput}
                    returnKeyType="search"
                    keyboardAppearance="dark"
                    onChangeText={(event) => {searchFilterFuntion(event)}}
                ></TextInput>
            </View>
        </View>
        <View style={styles.container}>
            <SectionListContacts
                sectionListData={dataFilterArray}
                initialNumToRender={dataFilterArray.length}
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
        top: 80
      },
      image: {
        position: "absolute",
        left: 14,
        right: 15,
        top: 14,
        bottom: 15
      },
      searchImage: {
        width: 24,
        height: 24,

        flex: 0,
        flexGrow: 0
      },
      searchInput: {
        width: 279,
        height: 19,
        left: 10,

        /* Body/Regular */

        fontFamily: "normal",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 14,
        lineHeight: 19,

        color: "#787878",

        flex: 0,
        flexGrow: 1,
      },      
      searchBox: {
        display: "flex",
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: "flex-start",
        padding: 0,

        position: 'absolute',
        width: 343,
        height: 48,
        left: 16,
        top: 20
      },
      searchBoxBox: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 12,

        width: 330,
        height: 48,

        /* Neutral/100 */

        background: "#FFFFFF",
        /* Neutral/400 */

        /* border: 1px solid #CECECE; */
        borderWidth: 1,
        borderColor: "#CECECE",
        borderRadius: 24,

        /* Inside auto layout */

        flex: 0,
        alignSelf: "stretch",
        flexGrow: 0
      },
      inputText: {
        fontFamily: 'normal',
        fontSize: 17,
        color: '#8E8E93',
        letterSpacing: -0.41,
        lineHeight: 22,
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
      letterText: {
        fontFamily: 'SFProText-Semibold',
        fontSize: 11,
        color: '#007AFF',
      },
    boxContact: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 16,

        flex: 0,
        order: 0,
        alignSelf: "stretch",
        flexGrow: 0
    },
    contact: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    arrow: {
        color: "#4C51F7",
        right: 20
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