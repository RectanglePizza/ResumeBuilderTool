import '/home/coder/project/workspace/cvapp_project/src/styles/skills.css'
import '../../styles/skills.css'
import {useState} from 'react'
function Skills({mySkills,setSkills}){
    let skills = [
        {id:0,skill:'cpp'},
        {id:1,skill:'java'},
        {id:2,skill:'python'},
        {id:3,skill:'rust'},
        {id:4,skill:'javascript'},
        {id:5,skill:'Cloud computing'}
    ]
    let handleCheckbox = (value) => {
        if(mySkills.includes(value)) {
            setSkills(mySkills.filter(skill => skill !== value))
        }else{
            setSkills([...mySkills,value])
        }
    }
    return(
        <>
            <div className='skill_set'>
                {skills.map((skill,id) => {
                    return (<div key={id}>
                            <label>{skill.skill}</label>
                            <input 
                            onChange={() => {
                                handleCheckbox(skill.skill)
                            }}
                            checked={mySkills.includes(skill.skill)}
                            value={skill.skill}
                            type='checkbox'></input>
                        </div>)
                })}
            </div>
        </>
    )
}

export default Skills