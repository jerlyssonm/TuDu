import { useState } from 'react';
import { AiOutlineEllipsis } from 'react-icons/ai';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import './style.css'

const Planner =() => {
    const [value, onChange] = useState(new Date());
    console.log(value.getDay())
    return(
        <div className='planner'>
            <div className='p-header'>
                <span></span>
                <h1>Planner</h1>                
                <AiOutlineEllipsis />
            </div>
            <Calendar onChange={onChange} value={value} />
            <div>
                
            </div>
        </div>
    )
}

export default Planner