import { Modalize } from 'react-native-modalize';
import { AddModal, EditModal } from '../components';
import { Task } from '../interfaces';

type ContainerType = "ADD_CONTAINER" | "EDIT_CONTAINER";

interface PropsModal {
    container: ContainerType;
    modalRef: any;

    addTask: (title: string, desc: string) => void;

    taskEdit: Task;
    taskEditFC: (newTask: Task) => void;

    deleteTask: (task: Task)  => void;
}

interface PropsRender {
    container: ContainerType;
}

const Modal = ({ deleteTask, taskEditFC, taskEdit, container, modalRef, addTask}:PropsModal): JSX.Element =>{

    const Render = ( {container} : PropsRender ): JSX.Element =>{
        if (container === "ADD_CONTAINER"){
            return (
                <AddModal  addTask={addTask}/>
            )
        }
        if (container === "EDIT_CONTAINER"){
            return(
                <EditModal data={taskEdit}
                        taskEditFC={taskEditFC}
                        deleteTask={deleteTask}/>
            )
        }
        return <></>
    }
    
    return(
        <Modalize ref={modalRef} adjustToContentHeight>
            <Render container={container}/>
        </Modalize>
    )
}

export { Modal, ContainerType }