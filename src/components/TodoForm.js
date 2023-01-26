import React from 'react'
import Modal from './Modal'
import AddAlertIcon from '@mui/icons-material/AddAlert';
import TodayIcon from '@mui/icons-material/Today';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import PaletteIcon from '@mui/icons-material/Palette';
import CloseIcon from '@mui/icons-material/Close';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';


function TodoForm({
    handleSubmit,
    heading = false,
    text, setText,
    day, setDay,
    time, setTime,
    projects,
    showButtons = false,
    setShowModal = false
}){

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <form onSubmit={handleSubmit} className='TodoForm'>
                <div className="text">
                    {
                        heading && 
                        <h3>{heading}</h3>
                    }
                    <input
                        type='text'
                        value={text}
                        onChange={e => setText(e.target.value)}
                        placeholder='To do ...'
                        autoFocus
                    />
                </div>
                <div className="remind">
                    <AccessAlarmIcon />
                    <p>Remind Me!</p>
                </div>
                <div className="pick-day">
                    <div className="title">
                        <TodayIcon />
                        <p>Choose a day</p>
                    </div>
                    <DesktopDatePicker
                            label="Date desktop"
                            inputFormat="mm/dd/yyyy"
                            value={day}
                            onChange={setDay}
                            renderInput={(params) => <TextField {...params} />}
                        />
                </div>
                <div className="pick-time">
                    <div className="title">
                        <AccessAlarmIcon />
                        <p>Choose time</p>
                    </div>
                    <TimePicker
                            label="Time"
                            value={time}
                            onChange={setTime}
                            renderInput={(params) => <TextField {...params} />}
                        />
                </div>
                <div className="pick-project">
                    <div className="title">
                        <PaletteIcon />
                        <p>Choose a project</p>
                    </div>
                    <div className="projects">
                        {
                            projects.map( project => 
                                <div className="project" key={project.id}>
                                    {project.name}
                                </div>    
                            )
                        }
                    </div>
                </div>
                {
                    showButtons &&
                    <div>
                        <div className="cancel" onClick={() => setShowModal(false)}>
                            <CloseIcon size='40' />
                        </div>
                        <div className="confirm">
                            <button>+ Add to do</button>
                        </div>
                    </div>
                }
            </form>
            </LocalizationProvider>
    )
}

export default TodoForm
