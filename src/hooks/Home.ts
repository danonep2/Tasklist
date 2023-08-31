import { useState, useRef, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Modalize } from "react-native-modalize";
import { Toast } from "react-native-toast-message/lib/src/Toast";

import { formatDate } from '../utils/formateDate';

import { ContainerType } from '../components/Modal';
import { Task } from "../interfaces";


const tempTask: Task = {
    id: -1,
    title:'',
    desc: '',
    create_date: '',
    complet_date: '',
}

const useHome = () => {
    const [idTasks, setIDTasks] = useState(0);
    const [tasks, setTasks] = useState<Task[]>([]);

    const [filter, setFilter] = useState('');
    const [isComplet, setIsComplet] = useState(false)

    const [containerModal, setContainerModal] = useState<ContainerType>("ADD_CONTAINER");
    const [taskEdit, setTaskEdit] = useState<Task>(tempTask);

    const modalRef = useRef<Modalize>(null);

    const filterTasks = (tasks: Task[], isComplets: boolean) => {
        return tasks.filter((task) => {
            if (isComplets && task.complet_date ||
                !isComplet && task.complet_date === null) {
                return true;
            }
            return false;
        })
    }

    const addTask = (title: string, desc: string) => {
        if (!title) {
            Toast.show({
                text1: "Campo inválido",
                text2: 'Preencha o campo de titulo.',
                type: 'error'
            });
            return;
        }

        const newTask: Task = {
            id: idTasks,
            title,
            desc,
            create_date: formatDate(new Date),
            complet_date: null,
        }

        setIDTasks(prev => prev + 1);

        Toast.show({
            text1: title,
            text2: 'Tarefa adicionada com sucesso 🙂',
            type: 'success'
        })

        setTasks(prev => [...prev, newTask])
        modalRef.current?.close();
    }

    const openModal = () => {
        modalRef.current?.open();
    }


    useEffect(() => {
        const getStorageData = async () => {
            try {
                const jsonValueForTasks = await AsyncStorage.getItem('tasks');
                const data = jsonValueForTasks ? JSON.parse(jsonValueForTasks) : null

                if (!data) {
                    const newStorageData = {
                        id: 0,
                        tasks: []
                    }
                    await AsyncStorage.setItem('tasks', JSON.stringify(newStorageData));
                    return
                }

                setTasks(data.tasks);
                setIDTasks(data.id)

            } catch (e) {
                Toast.show({
                    text1: 'Erro ao buscar dados',
                    type: 'error'
                })
            }
        }
        getStorageData()
    }, [])

    useEffect(() => {
        const setStorageData = async () => {
            try {
                const data = {
                    id: idTasks,
                    tasks,
                }

                await AsyncStorage.setItem('tasks', JSON.stringify(data));
            } catch (e) {
                Toast.show({
                    text1: 'Erro ao armazenar os dados',
                    type: 'error',
                })
            }
        }
        setStorageData()
    }, [tasks])

    const openAddTaskModal = () => {
        setContainerModal('ADD_CONTAINER')
        openModal();
    }

    const openEditTaskModal = (taskEdit: Task) => {
        if (taskEdit.complet_date !== null) {
            return;
        }

        setTaskEdit(taskEdit);
        setContainerModal('EDIT_CONTAINER');
        openModal();
    }

    const editTask = (newTask: Task) => {
        const newData = tasks.map((task) => {
            if (task.id === newTask.id) {
                return newTask;
            }
            return task;
        });

        modalRef.current?.close()

        setTasks(newData);
    }

    const deleteTask = (deleteTask: Task) => {
        const newData = tasks.filter((task) => task.id !== deleteTask.id);
        Toast.show({
            text1: deleteTask.title,
            text2: 'Tarefa apagada ☹️',
            type: 'error'
        });

        modalRef.current?.close();

        setTasks(newData);
    }

    return {
        tasks,
        filter,
        containerModal,
        isComplet,
        modalRef,
        taskEdit,
        setFilter,
        setIsComplet,
        addTask,
        filterTasks,
        editTask,
        deleteTask,
        openAddTaskModal,
        openEditTaskModal,
    };
}

export { useHome };