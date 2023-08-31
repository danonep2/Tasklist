import { Toast } from "react-native-toast-message/lib/src/Toast";

import { Task } from "../interfaces";
import { formatDate } from "../utils/formateDate";

const editTask = (
    complet:boolean,
    data: Task,
    taskEditFC: (task: Task) => void,
    title: string,
    desc: string,
    ): void => {
    const newTask = {...data};
    
    if (complet){
        const completTime = formatDate(new Date());
        newTask.complet_date = completTime;

        
        Toast.show({
            text1: data.title,
            text2: 'Tarefa concluida com sucesso!',
            type: 'success'
        });
        return taskEditFC(newTask);
    }

    Toast.show({
        text1: title,
        text2: 'Tarefa editada com sucesso!',
        type: 'success'
    });

    newTask.title = title;
    newTask.desc = desc;
    
    taskEditFC(newTask);
}

export  { editTask };