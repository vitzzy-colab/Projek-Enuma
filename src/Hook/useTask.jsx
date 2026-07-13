import { useState } from "react";

function useTask() {
    const [tasks , setTasks] = useState("");
    //usestate mendeteksi kalau ada perubahan maka akan refresh web

    useEffect(()=>{
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]); //otomatis berlajan

    const addTask = (task)=>{
        const newTask ={
            id: +new Date(),
            description: task.trim(),
            dtatus: "0"
        }
        setTasks((prevTasks) => [...prevTasks,newTask])
    };  
    const deleteTask = ()=>{};
    const updateTask = ()=>{};
    //sama seperti function nama(){};

    return(tasks, addTask);
}

export default useTask;