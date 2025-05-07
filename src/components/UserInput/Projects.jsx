// import '/home/coder/project/workspace/cvapp_project/src/styles/projects.css'
import '../../styles/projects.css'
import {useState} from 'react'
function Projects({projects,setProjects}){
    let addProject = () => {
        let newProject = {title:'',description:''}
        setProjects([...projects,newProject])
    }
    let handleChange = (id,prop,value) => {
        let alreadyExistingProject = [...projects]
        alreadyExistingProject[id][prop] = value 
        setProjects(alreadyExistingProject)
    }
    return(
        <>
            <div className='projects'>
                <h5>Enter your project details</h5>
                {projects.map((project,id) => {
                    return <div className='project_content'>
                        <h5>Project:{id+1}</h5>
                        <label>Project title:</label>
                        <input 
                        onChange={(e) => {
                            handleChange(id,'title',e.target.value)
                        }}
                        value={projects[id].title}
                        type='text' placeholder='Enter your project name'></input>

                        <label>Project description</label>
                        <textarea 
                        onChange={(e) => {
                            handleChange(id,'description',e.target.value)
                        }}
                        value={projects[id].description}
                        placeholder='Enter your project description'></textarea>
                    </div>
                })}
                <button onClick={() => {
                    addProject()
                }}>+</button>
            </div>
            {/* <div className="projects">
                <h5>Enter your project details</h5>

                <div className='project_content'>
                    <label>Project title:</label>
                    <input type="text" placeholder="Enter the project name"></input>
                    
                    <label>Project description</label>
                    <textarea placeholder="Enter your project description"></textarea>
                </div>

                <button>+</button>
            </div> */}
        </>
    )
}

export default Projects