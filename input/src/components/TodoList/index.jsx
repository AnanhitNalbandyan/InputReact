import { useEffect, useState } from "react"
import { AddInputForm } from "../AddInputForm"
import { ItemTodo } from "../ItemTodo"
import style from './style.module.css'

export const TodoList =()=>{


    const write = (tasks)=>{

        localStorage.setItem('tasks', JSON.stringify(tasks))

    }

    const read =()=>{
        return JSON.parse(localStorage.getItem('tasks')) ?? []
    }
    
    const [tasks, setTasks]=useState(()=>{
        return read()
    })

useEffect (()=>{
    write(tasks)
}, [])




    const addTask = (title)=>{
    
        const task ={
            id:new Date().getTime(),
            title:title,
            done:false
        }

        setTasks([...tasks, task])
    }

    const ChangeDone = (changedId, completed)=>{

        tasks.find(({id})=>id===changedId).completed=completed

        setTasks([...tasks])
    }

    const removeTask = (removeId)=>{
        setTasks( tasks.filter(({id})=>id!==removeId))
    }

    return(
        <div className={style.list}>
            <AddInputForm addTask={addTask}/>
            {
                tasks.length === 0
                ? <p>There is no todo task</p>
                :tasks.map((item)=>(

                    <ItemTodo key={item.id} {...item}
                    removeTask={removeTask}
                    ChangeDone={ChangeDone}/>
                ))
            }
        </div>
    )
}