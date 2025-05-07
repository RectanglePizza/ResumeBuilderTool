import '/home/coder/project/workspace/cvapp_project/src/styles/hobbies.css'
import {useState} from 'react'
function Hobbies({hobbies,setHobbies}){
    
    let addHobby = () => {
        let newHobbies = {hobbyname:''}
        setHobbies([...hobbies,newHobbies])
    }
    let changeHobby = (id,prop,value) => {
        let existingHobbies = [...hobbies]
        existingHobbies[id] = {...existingHobbies[id],[prop] : value}
        setHobbies(existingHobbies)
    }
    return(
        <>
        <div className='hobbies'>
            <h5>Hobbies</h5>
            {hobbies.map((hobby,index) => {
                return(<div className='hobbies_content'>
                    <label for="hobby">Hobby</label>
                    <textarea 
                    onChange={(e) => {
                        changeHobby(index,'hobbyname',e.target.value)
                    }}
                    value={hobbies[index].hobbyname}
                    id='hobby' placeholder='Enter your hobby, and explain why you would like to talk about it'></textarea>
                </div>)
            })}
            <button onClick={() => {
                addHobby()
            }}>+</button>
        </div>
            {/* <div className="hobbies">
                <h5>Hobbies</h5>
                <div className="hobbies_content">
                    <label for="hobby">Hobby</label>
                    <textarea id="hobby" placeholder="Enter your hobby, and explain why you would like to talk about it"></textarea>
                </div>
                <button>+</button>
            </div> */}
        </>
    )
}
export default Hobbies