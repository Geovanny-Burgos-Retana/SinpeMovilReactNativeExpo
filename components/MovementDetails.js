import { StyleSheet, View, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function MovementDetails(props) {
    console.log('props MovementDetails is: ', JSON.stringify(props, null, 4));

    return (
        <View>
            <Text>Icon iniciales nombre</Text>
            <Text>SINPE móvil - {props.route.params.movement.contact}</Text>
            <Text>₡{parseInt(props.route.params.movement.amount).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</Text>
            <Text>Fecha</Text>
            <Text>{props.route.params.movement.createdAt}</Text>
            <Text>Descripción</Text>
            <Text>Fiesta de Hallowink</Text>
            <Text>Tipo de movimiento</Text>
            <Text>SINPE móvil</Text>
            <Text></Text>
        </View>
    );
};

const styles = StyleSheet.create({
    
});