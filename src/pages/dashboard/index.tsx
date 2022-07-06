import {
    AiOutlineHome,
    AiOutlineCalendar,
    AiOutlineUser,
    AiFillPlusCircle

} from "react-icons/ai"
import { Link } from "react-router-dom"
import DashHome from "./dashHome"
import './style.css'

const Dashboard = () =>{
    return(
        <div className="box-dashboard">
            <DashHome />
            <nav className="menu">
                <Link to=""><AiOutlineHome/></Link>
                <Link to=""><AiOutlineCalendar/></Link>
                <Link to=""><AiOutlineUser/></Link>
                <span></span>
                <Link to="" className="add"><AiFillPlusCircle/></Link>
            </nav>
            <div className="box-border">
                <div className="border">  
                </div>
            </div>
        </div>
    )
}

export default Dashboard