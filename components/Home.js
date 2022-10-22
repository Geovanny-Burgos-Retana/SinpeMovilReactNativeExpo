import { StatusBar, View, Text, StyleSheet } from "react-native";
import Movements from "./Movements";

export default function Home() {
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