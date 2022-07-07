import {
    AiOutlineHome,
    AiOutlineCalendar,
    AiOutlineUser,
    AiFillPlusCircle

} from "react-icons/ai"
import { Link } from "react-router-dom"
import { useUser } from "../../context/user"
import DashHome from "./dashHome"
import FormTask from "./formTask"
import './style.css'
import Task from "./task"

const Dashboard = () =>{
    const {
        openCloseForm,
        formTask,
        // openCloseTask,
        task
    } = useUser()

    return(
        <div className="box-dashboard">
            {(formTask) ? <FormTask /> :
            (task) ? <Task /> : 
            <DashHome /> }
            <nav className="menu">
                <Link to="/dashboard" onClick={()=>openCloseForm(false)}><AiOutlineHome/></Link>
                <Link to="" onClick={()=>openCloseForm(false)}><AiOutlineCalendar/></Link>
                <Link to="" onClick={()=>openCloseForm(false)}><AiOutlineUser/></Link>
                <span></span>
                <Link to="" onClick={()=>openCloseForm(true)} className="add"><AiFillPlusCircle/></Link>
            </nav>
            <div className="box-border">
                <div className="border">  
                </div>
            </div>
        </div>
    )
}

export default Dashboard