import { StatusBar, View, Text, StyleSheet, Button } from "react-native";
import Movements from "./Movements";
import React, { useState } from "react";

const fetchApiCall = () => {
  fetch("https://ucszxe1fz2.execute-api.us-west-2.amazonaws.com/account/8620317d-9051-4a2c-922c-cfbeabbcf768?records=10&offset=0")
    .then(response => response.json())
    .then(response => {
      setQuote(response.content);
      setSource(response.originator.name)
    })
    .catch(err => {
      console.log(err);
    });
}


export default function Home() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');

  const fetchApiAccount = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://ucszxe1fz2.execute-api.us-west-2.amazonaws.com/account/8620317d-9051-4a2c-922c-cfbeabbcf768?records=10&offset=0");
      
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      console.log('result is: ', JSON.stringify(result, null, 4));

      setData(result);

    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(data);

  return (
    <View>
      <StatusBar></StatusBar>
      <Text style={styles.wallet}>Cuenta Colones</Text>
      <Text style={styles.balance}>Saldo disponible</Text>
      <Text style={styles.amount}>$36,000.00</Text>
      <Text style={styles.balance}>¿Qué querés hacer?</Text>
      <View>
        <View>
          <Text>Imagen miedo</Text>
        </View>
        <Text>
          SINPE
          móvil
        </Text>
      </View>
      <Movements></Movements>
      <Button
        title="Make Request!!"
        onPress={fetchApiAccount}
      />
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