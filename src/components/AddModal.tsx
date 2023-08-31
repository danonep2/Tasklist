import { Text, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

interface PropsAdd {
    addTask:  (title: string, desc: string) => void;
}

const AddModal = ({ addTask }: PropsAdd): JSX.Element =>{
    const [title, setTitle ] = useState('');
    const [desc, setDesc] = useState('');

    return (
        <View>
            <Text style={styles.title}>Adicionar Tarefa</Text>

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

            <TouchableOpacity style={styles.button} 
                onPress={() => {
                    addTask(title,desc);
                    setDesc('');
                    setTitle('');
                }}>
                <Text style={styles.textButton}>Adicionar</Text>
            </TouchableOpacity>
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
        marginHorizontal: 25,
        marginVertical: 25,
        padding: 15,
        backgroundColor: "#7cd164",
        borderRadius: 15
    },
    textButton:{
        color:"white",
        fontSize: 20,
        textAlign: "center",        
    }
})

export { AddModal, PropsAdd };