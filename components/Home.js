import { StatusBar, View, Text, StyleSheet, Button } from "react-native";
import Movements from "./Movements";
import React, { useState, useEffect } from "react";
import AppLoading from 'expo-app-loading';
import { Entypo } from '@expo/vector-icons';
import EnterpriseStyles from "./common/EnterpriseStyles";
import { useFocusEffect } from "@react-navigation/native";

export default function Home(props) {
  const [data, setData] = useState();
  let [isLoading, setIsLoading] = useState(false);
  let [isReady, setIsReady] = useState(false);
  const [err, setErr] = useState('');

  let fetchApiAccount = async () => {
    setIsLoading(true);
    var jsonResponse = null;
    try {
      const response = await fetch("https://ucszxe1fz2.execute-api.us-west-2.amazonaws.com/account/8620317d-9051-4a2c-922c-cfbeabbcf768?records=10&offset=0");
      
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      // console.log('result is: ', JSON.stringify(result, null, 4));

      setData(result);

      jsonResponse = result;

    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
    return Promise.all(jsonResponse);
  };

  useFocusEffect(
    React.useCallback(() => {
      setIsReady(false);
      const loadResources = async () => {
        await fetchApiAccount();
        setIsReady(true);
      };
  
      loadResources();
    }, [])
  );

  useEffect(() => {
    const loadResources = async () => {
      await fetchApiAccount();
      setIsReady(true);
    };

    loadResources();
  }, []);

    
  if(!isReady) {
    return <AppLoading />
  }

  return (
    <View style={EnterpriseStyles.enterpriseScreen} isReady = {false}>
      <StatusBar></StatusBar>
      <Text style={styles.wallet}>Cuenta Colones</Text>
      <Text style={styles.balance}>Saldo disponible</Text>
      <Text style={styles.amount}>₡{parseInt(data.account.amount).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</Text>
      <Text style={styles.whatDo}>¿Qué querés hacer?</Text>
      <View style={styles.viewSinpe}>
        <View style={styles.boxIconSinpeMovil}>
          <Entypo name="cycle" size={30} color="#4C51F7" onPress={() => props.navigation.navigate('Contacts')}/>
        </View>
        <Text style={styles.sinpeMovil}>
          SINPE
          móvil
        </Text>
      </View>
      <Movements movements={data.account.banking_movements} navigation={props.navigation}></Movements>
    </View>
  );
}

const styles = StyleSheet.create({
  wallet: {
    position: "absolute",
    width: 360,
    height: 50,
    left: 16,
    top: 15,

    fontSize: 32,
    color: "#4C51F7",
    fontWeight: 'bold'
  },
  balance: {
    position: "absolute",
    width: 360,
    height: 16,
    left: 16,
    top: 70,

    fontSize: 12,
    color: "#3E3E3E"
  },
  amount: {
    position: "absolute",
    width: 360,
    height: 42,
    left: 16,
    top: 95,

    fontSize: 32,
    color: "#3E3E3E",
    fontWeight: 'bold'
  },
  whatDo: {
    position: "absolute",
    width: 360,
    height: 16,
    left: 16,
    top: 160,

    fontFamily: "normal",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 16,

    color: "#3E3E3E"
  },
  viewSinpe: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 0,
    gap: 8,

    position: "absolute",
    width: 64,
    height: 96,
    left: 156,
    top: 200,
  },
  boxIconSinpeMovil: {
    width: 56,
    height: 56,
    paddingTop: 10,

    flex: 0,
    flexGrow: 0,

    borderWidth: 1,
    borderColor: "#DBDBDB",
    borderRadius: 28,
    borderTopColor: "#FFFFFF",
    borderLeftColor: "#FFFFFF",
    borderRightColor: "#FFFFFF",
    shadowRadius: 1,

    alignItems: "center",
    marginBottom: 5
  },
  sinpeMovil: {
    width: 64,
    height: 32,

    fontFamily: "normal",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 12,
    lineHeight: 16,
    display: "flex",
    alignItems: "center",
    textAlign: "center",

    color: "#4C51F7",

    flex: 0,
    flexGrow: 0
  }
});