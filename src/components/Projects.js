import React, { useState}from 'react'

import AddNewProject from './AddNewProject'
import Project from './Project'

import CreateIcon from '@mui/icons-material/Create';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import CloudDoneIcon from '@mui/icons-material/CloudDone';





function Projects(){
  const [showMenu, setShowMenu] = useState(true);
  const [edit, setEdit] = useState(false)
  const pencilColor = edit ? "#1EC94C" : "#000000"

  const projects = [
      { id : 1, name : "personal", numOfTodos : 0 },
      { id : 2, name : "work", numOfTodos : 1 },
      { id : 3, name : "other", numOfTodos : 2 }
  ]
    return (
      <div className='Projects'>
            <div className="header">
                <div className="title">
                    <ColorLensIcon size="18" />
                    <p>Projects</p>
                </div>
                <div className="btns">
                    {
                        showMenu && projects.length > 0 &&
                        <span className='edit' onClick={ () => setEdit(edit => !edit)}>
                            <CreateIcon size="15" color={pencilColor}/>
                        </span>
                    }
                    <AddNewProject />
                    <span className='arrow'>
                        <CloudDoneIcon size="20" />
                    </span>
                </div>
            </div>
            <div className="items">
                {
                    projects.map( project => 
                        <Project
                            project={project}
                            key={project.id}
                            edit={edit}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Projects