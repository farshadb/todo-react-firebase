import React from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CloudDoneIcon from '@mui/icons-material/CloudDone';

import { calendarItems } from '../constants'

function Calendar() {
    
    return (
        <div className='Calendar'>
            <div className="header">
                <div className="title">
                    <CalendarMonthIcon size="18"/>
                    <p>Calendar</p>
                </div>
                <div className="btns">
                    <span>
                        <CloudDoneIcon size="20" />
                    </span>
                </div>
            </div>
            <div className="items">
                {
                    calendarItems.map( item => 
                        <div className="item" key={item}>
                            {item}
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Calendar