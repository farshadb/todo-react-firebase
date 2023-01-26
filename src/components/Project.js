import React , { useState } from 'react'
import Modal from './Modal'
import RenameProject from './RenameProject'

//Icons

import BorderColorIcon from '@mui/icons-material/BorderColor';

import HighlightOffIcon from '@mui/icons-material/HighlightOff';

function Project({project, edit}) {
    const [showModal, setShowModal] = useState(false)
    
    return (
        <div className='Project'>
            <div className="name">
                {project.name}
            </div>
            <div className="btns">
                {
                    edit ?
                    <div className="edit-delete">
                        <span
                            className="edit"
                            onClick={ () => setShowModal(true)}
                        >
                            <BorderColorIcon size="13" />
                        </span>
                        <span className="delete">
                            <HighlightOffIcon size="13" />
                        </span>
                    </div>
                    :
                    project.numOfTodos === 0 ?
                    ""
                    :
                    <div className="total-todos">
                        {project.numOfTodos}
                    </div>
                }
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <RenameProject project={project} setShowModal={setShowModal}/>
            </Modal>
        </div>
    )
}

export default Project