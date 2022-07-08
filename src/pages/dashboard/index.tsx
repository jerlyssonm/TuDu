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
import Planner from "./planner"
import Profile from "./profile"
import './style.css'
import Task from "./task"

const Dashboard = () =>{
    const {
        openCloseForm,
        formTask,
        openClosePlanner,
        openCloseProfile,
        setDefault,
        task,
        planner,
        profile,
    } = useUser()

    return(
        <div className="box-dashboard">
            {(formTask) ? <FormTask /> :
            (planner) ? <Planner /> :
            (profile) ? <Profile /> :
            (task) ? <Task /> :
            <DashHome /> }
            <nav className="menu">
                <Link to="/dashboard" onClick={()=>setDefault()}><AiOutlineHome/></Link>
                <Link to="" onClick={()=>openClosePlanner(true)}><AiOutlineCalendar/></Link>
                <Link to="" onClick={()=>openCloseProfile(true)}><AiOutlineUser/></Link>
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