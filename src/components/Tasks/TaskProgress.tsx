import { useUser } from "../../context/user"
import "./style.css"

const TaskProgress = ({category, title, description}: any) => {
    const {openCloseTask} = useUser()
    let classe = '';
    if (category == "trabalho"){
        classe = 'percent type1'
    }else if(category == "entrevista"){
        classe = 'percent type2'
    }else{
        classe = 'percent type3'
    }
    return(
        <div className={classe} onClick={()=>openCloseTask(true)}>
            <h5>{title.split(' ')[0]}</h5>
            <p>{description.slice(0,17)+'...'}</p>
        </div>
    )
}
export default TaskProgress