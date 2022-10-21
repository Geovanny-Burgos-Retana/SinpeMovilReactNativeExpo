import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const accountId = '8620317d-9051-4a2c-922c-cfbeabbcf768';
const urlApi = 'https://ucszxe1fz2.execute-api.us-west-2.amazonaws.com/account';
var records = 10;
var page = 0;

const getAccount = async () => {
  /*return fetch(urlApi + '/' + accountId + '?records=' + records + '&page=' + page, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((error) => {
      console.error(error);
    });*/

    const response = await fetch(urlApi + '/' + accountId + '?records=' + records + '&page=' + page);
    const json = await response.json();
    return json.account;
};

export default function Account() {
  var account = getAccount();
  console.log(account);
  
  return (
    <View style={styles.container}>
      {account.banking_movements.forEach(element => {
        return <Text>{element.id}</Text>
      })}
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
