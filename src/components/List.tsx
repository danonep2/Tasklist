import { FlatList } from "react-native";

import { Task } from "../interfaces";
import { TaskComponent } from "./TaskComponent";

interface ListProps {
    tasks: Task[];
    filter: string;
    openEditTaskModal: (taskEdit: Task) => void;
}

const List = ({ openEditTaskModal, tasks, filter }: ListProps): JSX.Element => {
    return(
        <FlatList 
            data={tasks}
            keyExtractor={(item) => 'key'+item}
            renderItem={({ item }) => 
                <TaskComponent data={item}
                                filter={filter}
                                openEditTaskModal={openEditTaskModal}/>}
        />
    )
}
export { List };