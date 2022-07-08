import './style.css'

const TaskCompleted = ({title, description}: any) => {
    return (
        <div className='task box-completed'>
            <input type="checkbox" checked className='check' />
            <div>
                <h6>{title}</h6>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default TaskCompleted