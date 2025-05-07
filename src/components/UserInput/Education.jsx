import '/home/coder/project/workspace/cvapp_project/src/styles/data_align.css'
import {useState} from 'react'
function EducationDetails({grade10SchoolName,setgrade10SchoolName,
                            grade10GPA,setgrade10GPA,
                            grade10Year,setgrade10Year,
                            grade12SchoolName,setgrade12SchoolName,
                            grade12GPA,setgrade12GPA,
                            grade12Year,setgrade12Year,
                            graduationName,setgraduationName,
                            graduationGrade,setgraduationGrade,
                            graduationYear,setgraduationYear}){
    
    return(
        <>
            <div className="edu_details">
                <h5>Tell us about your education</h5>
                <form className='edu_details_form'>
                    
                    <label>Grade 10:</label>
                    <input 
                    onChange={(e) => {
                        setgrade10SchoolName(e.target.value)
                    }}
                    value={grade10SchoolName}
                    className="grade_10_input" type="text" placeholder="Name of the school"  required></input>

                    <input
                    onChange={(e) => {
                        setgrade10GPA(e.target.value)
                    }}
                    value={grade10GPA}
                    className="grade_10_input" type="number" placeholder="Grade obtained" required></input>

                    <input
                    onChange={(e) => {
                        setgrade10Year(e.target.value)
                    }}
                    value={grade10Year}
                    className="grade_10_input" type="number" placeholder="year of completion" required></input>

                    <label>Grade 12:</label>
                    <input
                    onChange={(e) => {
                        setgrade12SchoolName(e.target.value)
                    }}
                    value={grade12SchoolName}
                    className="grade_12_input" type="text" placeholder="Name of the school"  required></input>
                    <input 
                    onChange={(e) => {
                        setgrade12GPA(e.target.value)
                    }}
                    value={grade12GPA}
                    className="grade_12_input" type="number" placeholder="Grade obtained"    required></input>
                    <input
                    onChange={(e) => {
                        setgrade12Year(e.target.value)
                    }}
                    value={grade12Year}
                    className="grade_12_input" type="number" placeholder="year of completion" required></input>

                    <label>Graduation:</label>
                    <input
                    onChange={(e) => {
                        setgraduationName(e.target.value)
                    }} 
                    value={graduationName}
                    className="graduation" type="text" placeholder="Name of the school"   required></input>
                    <input 
                     onChange={(e) => {
                        setgraduationGrade(e.target.value)
                     }}
                     value={graduationGrade}
                    className="graduation" type="number" placeholder="Grade obtained"     required></input>
                    <input 
                    onChange={(e) => {
                        setgraduationYear(e.target.value)
                    }}
                    value={graduationYear}
                    className="graduation" type="number" placeholder="year of completion" required></input>
                </form>
            </div>
        </>
    )
}

export default EducationDetails