import { TextInput, StyleSheet, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

interface SearchProps {
    setFilter: (text: string) => void;
}

const Search = ({ setFilter }: SearchProps):JSX.Element =>{
    return(
    <View style={styles.container}>
        <TextInput onChangeText={setFilter} style={styles.input} placeholder="Pesquisar tarefa"/>
        <Ionicons name="search" style={styles.icon}/>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderWidth: 1,
        flexDirection: 'row',
        marginHorizontal: 30,
        marginBottom: 5,
        borderRadius: 15,
        justifyContent: 'center'
    },
    input:{
        flex: 1,
        marginLeft: 15
    },
    icon:{
        position:'relative',
        marginTop: 8,
        marginRight: 10
    }
})

export { Search };