import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

interface AddTaskProps{
    OpenAddTaskModal: () => void;
}

const AddTask = ({ OpenAddTaskModal }: AddTaskProps):JSX.Element => {
    return(
        <TouchableOpacity style={styles.button} onPress={OpenAddTaskModal}>
            <Ionicons name="add" size={60} color="white" style={styles.addIcon}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        position: "absolute",
        right: 25,
        bottom: 25,
        height: 60,
        width: 60,
        borderRadius: 50,
        backgroundColor: "#7cd164",
        shadowColor: "black",
    },
    addIcon:{
        marginBottom: 5,
        position: "relative",
        bottom: 2,
        left: 2,
    }
});

export { AddTask };