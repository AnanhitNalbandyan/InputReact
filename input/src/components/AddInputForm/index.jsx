
import style from './style.module.css'

export const AddInputForm = ({addTask})=>{

    const onSubmit =(event)=>{
        event.preventDefault()
        const title = event.target.title.value
        addTask(title)
        event.target.reset()
        
    }

    const onEnter = (event)=>{
        if(event.key === 'Enter'){
            event.preventDefault()
            const title = event.target.value
            addTask(title)
            event.target.value=''
            //event.target.reset()
        }
    }

    return(
        <form className={style.formInput}
            onSubmit={onSubmit}
            onKeyDown={onEnter}
            >
            <input className={style.input} 
                    type="text"
                    name='title'
                    placeholder='input your new task'    
            />
            <button type="submit">Submit</button>
        </form>
    )
}