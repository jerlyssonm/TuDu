import { useUser } from "../../context/user"

const RectangleTask = ({id, completed, category, title, description}: any) => {
    const {openCloseTask, setId} = useUser()
    const handle = () => {
        openCloseTask(true)
        setId(id)
    }
    let classe = '';
    if (category == "trabalho"){
        classe = 'task type1'
    }else if(category == "entrevista"){
        classe = 'task type2'
    }else{
        classe = 'task type3'
    }
    return(
    <div className={classe}>
        {
            (completed==true) ? 
            <input type="checkbox" className='check' checked/>:
            <input type="checkbox" className='check'/>

        }
        <div onClick={()=> handle()}>
            <h5>{title}</h5>
            <p>{description}</p>
        </div>
    </div>
    )
}
export default RectangleTask