import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { Task } from '../interfaces';

interface TaskComponentProps {
    data: Task;
    filter: string;
    openEditTaskModal: (taskEdit: Task) => void;
}

const TaskComponent = ({ openEditTaskModal, data, filter }: TaskComponentProps): JSX.Element | null => {
    const { id, title, desc, create_date, complet_date} = data;

    return((title.toLowerCase().trim().includes(filter))
        ? <TouchableOpacity onPress={() => openEditTaskModal(data)} style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.desc}>Descrição: {desc.trim() ? desc : 'Não possue descrição' }</Text>
            <Text style={styles.date}>Criada em {create_date}</Text>
            { complet_date 
                &&<Text style={styles.date}>Completa em {complet_date}</Text>
        }
        </TouchableOpacity>
        : null
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#2eb8ac",
        marginHorizontal: 15,
        marginTop: 10,
        borderRadius: 10,
        paddingHorizontal: 5,
        paddingVertical: 10,
    },
    title:{
        color: "#FFF",
        fontSize: 20,
        marginHorizontal: 10
    },
    desc: {
        marginHorizontal: 10,
        color: "#FFF"
    },
    date:{
        marginHorizontal: 10,
        fontSize: 10,
        color: "#FFF"
    },
})
export { TaskComponent }