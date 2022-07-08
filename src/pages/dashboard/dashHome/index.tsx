import './style.css'
import {AiOutlineSearch} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useUser } from '../../../context/user'
import { DB } from '../../../assets/api'
import RectangleTask from '../../../components/Tasks/RectangleTask'
import TaskCompleted from '../../../components/Tasks/TaskCompleted'
import TaskProgress from '../../../components/Tasks/TaskProgress'

const DashHome =() => {
    const {openCloseTask} = useUser()
    const user = DB.filter(item => (item.name == "jerlysson"))
    const taskIncomplete = user[0].tasks.filter(item => !item.completed)
    const taskCompleted = user[0].tasks.filter(item => item.completed)
    const listIncomplete = taskIncomplete.slice(0,3)
    return (
        <div className="dashHome">
            <div className='head'>
                <span></span>
                <h1>Tarefas</h1>
                <div className="search-box">
                    <input type="text" className="input-search" placeholder="Digite aqui..."/>
                    <Link className="icon" to=""><AiOutlineSearch/></Link>
                </div>
            </div>
            <div className='box-task'>
                <h2>A FAZER</h2>
                {listIncomplete.map((task, idx) => 
                    <RectangleTask 
                    key={idx}
                    completed={task.completed}
                    category={task.category}
                    title={task.title}
                    description={task.description}
                    />
                )}
                {
                    (user[0].tasks.length > 3) ? 
                    <span className='all-span'>Ver todos</span>
                    :
                    ""
                }
            </div>
            <div className='box-progress'>
                <h2>EM PROGRESSO</h2>
                <div className="scroll">
                    {
                        taskIncomplete.map((task,idx) => 
                        <TaskProgress 
                        key={idx}
                        id={task.id}
                        category={task.category}
                        title={task.title}
                        description={task.description}
                        />
                        )
                    }
                </div>
                <span className='all-span'>Ver todos</span>
            </div>
            <div className="completed">
                <h2>CONCLUÍDO</h2>
                {
                    taskCompleted.map((item, idx) => 
                    <TaskCompleted 
                        key={idx}
                        title={item.title}
                        description={item.description}                    
                    />                    
                    )
                }
            </div>
        </div>
    )
}

export default DashHome
