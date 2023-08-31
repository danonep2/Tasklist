
const formatDate = (date: Date): string => {
    const day = date.getDay().toString().padStart(2,'0');
    const mouth = date.getMonth().toString().padStart(2,'0');
    const year = date.getFullYear().toString().padStart(2,'0');

    const hour = date.getHours().toString().padStart(2,'0');
    const minute = date.getMinutes().toString().padStart(2,'0');

    return `${day}/${mouth}/${year} ${hour}:${minute}`;
}

export { formatDate };