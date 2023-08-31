import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';

import { Task } from "../interfaces";
import { editTask } from "../hooks/EditTask";

interface PropsEdit {
    data: Task;
    taskEditFC: (newTask: Task) => void;
    deleteTask: (task: Task) => void;
}

const EditModal = ({ deleteTask, taskEditFC, data }: PropsEdit): JSX.Element =>{
    const [title, setTitle ] = useState(data.title);
    const [desc, setDesc] = useState(data.desc);

    const callEdit = (complet: boolean) =>{
        editTask(
            complet,
            data,
            taskEditFC,
            title,
            desc);
    }

    return (
        <View>
            <Text style={styles.title}>Editar Tarefa</Text>

            <Text style={styles.label}>Titulo</Text>
            <TextInput 
                style={styles.input}
                onChangeText={setTitle}
                value={title}
                />

            <Text style={styles.label}>Descrição</Text>
            <TextInput 
                style={styles.input}
                onChangeText={setDesc}
                value={desc}
                />

            <TouchableOpacity style={[styles.button,styles.editButton]} 
                onPress={() => callEdit(false)}>
                <Text style={styles.textButton}>Editar</Text>
            </TouchableOpacity>

            <View style={styles.buttonsView}>
                <TouchableOpacity style={[styles.button,styles.completButton]}
                onPress={() => callEdit(true)}>
                    <Text style={styles.textButton}>Concluir tarefa</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.deleteButton}
                    onPress={() => deleteTask(data)}>
                    <Ionicons name="trash" size={25} color='white' style={styles.trash}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        textAlign: "center",
        fontSize: 25,
        marginVertical: 15,
    },
    label:{
        fontSize: 20,
        marginLeft: 15,
        marginBottom: 2,
        marginTop: 5,
    },
    input:{ 
        borderWidth: 1,
        marginHorizontal: 15,
        borderRadius: 5,
        paddingHorizontal: 5,
    },
    button:{
        flex: 1,
        padding: 15,
        backgroundColor: "#7cd164",
        borderRadius: 15
    },
    editButton: {
        marginHorizontal: 25,
        marginTop: 25,
    },
    completButton:{
        marginTop: 10,
        marginBottom: 25
    },
    deleteButton:{
        marginTop: 10,
        backgroundColor: '#b91010',
        padding: 16,
        height: 'auto',
        borderRadius: 15,
        marginLeft: 10,
        alignSelf: "flex-start"
    },
    trash:{
        width: 25,
        height: 25,
    },
    textButton:{
        color:"white",
        fontSize: 20,
        textAlign: "center",        
    },
    buttonsView:{
        flexDirection:"row",
        marginHorizontal: 25,
    }
})


export { EditModal };