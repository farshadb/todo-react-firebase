import React, { useState }from 'react'
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


function AddNewTodo() {
    const [showModal, setShowModal] = useState(false)
    const [text, setText] = useState('')
    const [day, setDay] = useState(new Date())
    const [time, setTime] = useState(new Date())

    // Use the useMedia hook to check the screen size
 
    
    return (
        <div className="AddNewTodo">
        <div className="btn">
        <button onClick={ () => setShowModal(true)}>
                + New Todo
           </button>
        </div>
         
        <Modal showModal={showModal} setShowModal={setShowModal}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <form>
                        <div className="text">
                            <h3>Add new to do!</h3>
                            <input
                                type='text'
                                value={text}
                                onChange={e => setText(e.target.value)}
                                placeholder='To do ...'
                                autoFocus
                            />
                        </div>
                        <div className="remind">
                            <AddAlertIcon/>
                            <p>Remind Me!</p>
                        </div>
                        <div className="pick-day">
                            <div className="title">
                                <TodayIcon />
                                <p>Choose a day</p>
                            </div>
                        </div>
                        <DesktopDatePicker
                            label="Date desktop"
                            inputFormat="mm/dd/yyyy"
                            value={day}
                            onChange={setDay}
                            renderInput={(params) => <TextField {...params} />}
                        />
                            {/* <MobileDatePicker
                            label="Date mobile"
                            inputFormat="mm/dd/yyyy"
                            value={day}
                            onChange={setDay}
                            renderInput={(params) => <TextField {...params} />}
                        /> */}
                        <div className="pick-time">
                            <div className="title">
                                <AccessAlarmIcon />
                                <p>Choose time</p>
                            </div>
                        </div>
                        <TimePicker
                            label="Time"
                            value={time}
                            onChange={setTime}
                            renderInput={(params) => <TextField {...params} />}
                        />
                        <div className="pick-project">
                            <div className="title">
                                <PaletteIcon />
                                <p>Choose a project</p>
                            </div>
                            <div className="projects">
                                <div className="project active">
                                    personal
                                </div>
                                <div className="project">
                                    work
                                </div>
                                <div className="project">
                                    work
                                </div>
                            </div>
                        </div>
                        <div className="cancel" onClick={() => setShowModal(false)}>
                            <CloseIcon size='40' />
                        </div>
                        <div className="confirm">
                            <button>+ Add to do</button>
                        </div>
                    </form>
                    </LocalizationProvider>
        </Modal>
        </div>
    )
}

export default AddNewTodo