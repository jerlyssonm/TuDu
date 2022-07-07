import {
    AiOutlineEllipsis,
    BsArrowLeft,
    AiOutlineCalendar,
    AiOutlineTag,
    AiFillPlusCircle,
    MdSubdirectoryArrowRight,
    AiOutlinePaperClip,
} from "react-icons/all";
import { useUser } from "../../../context/user";
import "./style.css"


const Task = ()=>{
    const { openCloseTask} = useUser()
    return(
        <div className="task-open">
            <div className="tag-head">
                <BsArrowLeft  onClick={()=>openCloseTask(false)}/>
                <AiOutlineEllipsis />
            </div>
            <div className="box-high">
                <div className="title">
                    <h1>Desafio de Design UI/UX</h1>
                    <p>Descrição descriçao descrição</p>
                </div>
                <div className="high-field">
                    <AiOutlineCalendar />
                    <span>30 de junho</span>
                </div>
                <div className="high-field">
                    <AiOutlineTag />
                    <span>Categoria</span>
                </div>
                <div className="high-field members">
                    <div className="member">
                        <span></span>
                    </div>
                    <div className="member">
                        <span></span>
                    </div>
                    <div className="add-member">
                        <AiFillPlusCircle />
                    </div>
                </div>
                <div className="high-field">
                    <AiOutlinePaperClip />
                    <span>Anexos</span>
                </div>
            </div>
            <hr />
            <div className="box-middle">
                <div className="box-subTask">
                    <input type="checkbox" checked/>
                    <label >Wireframes</label>
                </div>
                <div className="box-subTask">
                    <input type="checkbox"/>
                    <label >Apresentação</label>
                </div>
                <div className="box-subTask">
                    <input type="checkbox"/>
                    <label >enviar</label>
                </div>
                <div className="box-subTask">
                    <MdSubdirectoryArrowRight />
                    <p> Adcionar sub-tarefas</p>
                </div>
            </div>
            <hr />
            <div className="box-low">
                <input type="text" placeholder="Adicionar comentarios"/>
                <div className="box-comment">
                    <span></span>
                    <div>
                        <div className="comment">
                            <h6>nome da silva</h6>
                            <p>2 dias antes</p>
                        </div>
                        <p>Comentarios comentarios comentarios</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Task
