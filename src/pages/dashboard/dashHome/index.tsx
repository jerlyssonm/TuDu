import './style.css'
import {AiOutlineSearch} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const DashHome =() => {
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
                <div className='task type1'>
                    <input type="checkbox" className='check'/>
                    <div>
                        <h5>Desafio de Desigh UI/UX</h5>
                        <p>Descrição descrição descrição</p>
                    </div>
                </div>
                <div className='task type2'>
                    <input type="checkbox" className='check'/>
                    <div>
                        <h5>Entrevista com a Empresa</h5>
                        <p>Descrição descrição descrição</p>
                    </div>
                </div>
                <div className='task type3'>
                    <input type="checkbox" className='check'/>
                    <div>
                        <h5>Contratação</h5>
                        <p>Descrição descrição descrição</p>
                    </div>
                </div>
                <span className='all-span'>Ver todos</span>
            </div>
            <div className='box-progress'>
                <h2>EM PROGRESSO</h2>
                <div className="scroll">
                    <div className="percent type2">
                        <h5>Entrevista</h5>
                        <p>Descrição des...</p>
                    </div>
                    <div className="percent type1">
                        <h5>Desafio</h5>
                        <p>Descrição des...</p>
                    </div>
                    <div className="percent type3">
                        <h5>Contratação</h5>
                        <p>Descrição des...</p>
                    </div>
                </div>
                <span className='all-span'>Ver todos</span>
            </div>
        </div>
    )
}

export default DashHome
