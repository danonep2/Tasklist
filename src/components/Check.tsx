import { View, Text, StyleSheet } from "react-native";
import Checkbox from 'expo-checkbox';

interface CheckPros {
    onChange: (b:boolean) => void;
    check: boolean;
}

const Check = ({ onChange, check}: CheckPros): JSX.Element => {
    return(
        <View style={styles.containter}>
            <Text>Vizualizar tarefas completas </Text>
            <Checkbox
                value={check}
                onValueChange={onChange}
                color={check ? '#acc1a5' : undefined}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    containter: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 5
    },
})

export { Check };