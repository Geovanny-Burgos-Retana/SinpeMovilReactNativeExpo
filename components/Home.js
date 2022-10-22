import { StatusBar, View, Text, StyleSheet, Button } from "react-native";
import Movements from "./Movements";
import React, { useState, useEffect } from "react";
import AppLoading from 'expo-app-loading';

export default function Home() {
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

      console.log('result is: ', JSON.stringify(result, null, 4));

      setData(result);

      jsonResponse = result;

    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
    return Promise.all(jsonResponse);
  };

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

  console.log(data);

  return (
    <View isReady = {false}>
      <StatusBar></StatusBar>
      <Text style={styles.wallet}>Cuenta Colones</Text>
      <Text style={styles.balance}>Saldo disponible</Text>
      <Text style={styles.amount}>₡{parseInt(data.account.amount).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</Text>
      <Text style={styles.balance}>¿Qué querés hacer?</Text>
      <View>
        <View>
          <Text>Imagen miedo</Text>
        </View>
        <Text>
          SINPE
          móvil
        </Text>
        <Button
          title="Make Sinpe!!"
          onPress={<Text></Text>}
        />
      </View>
      <Movements movements={data.account.banking_movements}></Movements>
    </View>
  );
}

const styles = StyleSheet.create({
  wallet: {
    fontSize: 32,
    color: "#4C51F7",
    fontWeight: 'bold'
  },
  balance: {
    fontSize: 12,
    color: "#3E3E3E"
  },
  amount: {
    fontSize: 32,
    color: "#3E3E3E",
    fontWeight: 'bold'
  }
});