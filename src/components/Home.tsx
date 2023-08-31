import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';

import { AddTask, Modal, List, Search, Check } from '../components';
import { useHome } from '../hooks/Home';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {Button} from 'react-native';


const Home = (): JSX.Element => {
    const {
        tasks,
        filter,
        containerModal,
        isComplet,
        modalRef,
        taskEdit,
        filterTasks,
        setFilter,
        setIsComplet,
        addTask,
        editTask,
        deleteTask,
        openAddTaskModal,
        openEditTaskModal 
    } = useHome();

    return (<>
        <GestureHandlerRootView style={{flex: 1}}>
            <Search setFilter={setFilter} />
            <Check onChange={setIsComplet} check={isComplet}/>

            <List tasks={filterTasks(tasks, isComplet)} filter={filter.toLocaleLowerCase().trim()} openEditTaskModal={openEditTaskModal}/>

            <Modal 
                container={containerModal}
                addTask={addTask}
                modalRef={modalRef}
                taskEdit={taskEdit}
                taskEditFC={editTask}
                deleteTask={deleteTask}/>
            <AddTask OpenAddTaskModal={openAddTaskModal} />

        </GestureHandlerRootView>
        <Toast />
    </>
    );
}


export { Home };