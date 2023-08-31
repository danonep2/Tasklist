interface Task {
    id: number;
    title: string;
    desc: string;
    create_date: string;
    complet_date: string | null;
}

export { Task };