import style from './style.module.css'

export const ItemTodo = ({id,title, done, ChangeDone, removeTask})=>{

    const onClickHandler =()=>{
        removeTask(id)
    }

    return(
        <div className={style.formInput}>

            <input className={style.checkbox} type="checkbox"
            onChange={(event)=>{
                ChangeDone (id, event.target.checked)
            }
        }
            value={done}
            />

            <p className={done ? style.done : style.task}>{title}</p>
            
            <button className={style.button} 
                    onClick={onClickHandler}>
                        Delete
            </button>
        </div>
    )
}