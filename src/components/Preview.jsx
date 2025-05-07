
// import '/home/coder/project/workspace/cvapp_project/src/styles/preview.css'
import '../styles/preview.css'
function Preview({grade10SchoolName,grade10GPA,grade10Year,
                    grade12SchoolName,grade12GPA,grade12Year,
                    graduationName,graduationGrade,graduationYear,
                    firstName,lastName,email,phoneNumber,facebookAcc,linkedinAcc,
                    mySkills,projects,hobbies}){
    
    
                        let fullName = firstName +' '+ lastName
    return(
        <>
            <div className="main_preview_cont">
                <header className='head_content'>
                    <h2 className='fName'>{fullName}</h2>
                    <h4 className='email'>{email}</h4>
                    <h4 className='phone'>{phoneNumber}</h4>
                    <h5 className='facebook'>{facebookAcc}</h5>
                    <h5 className='linkedin'>{linkedinAcc}</h5>
                </header>
                <main>
                    <div className='sub_section_main'>
                        <p>Acquired skill set</p>
                        <ul>
                            {mySkills.map(skill => {
                                return (
                                    <li>{skill}</li>
                                )
                            })}
                        </ul>

                        <div className='sub_hobbies'>
                            <p>Hobbies</p>
                            <ul>
                            {hobbies.map(hobby => {
                                return <div>
                                    {hobby.hobbyname && <li>{hobby.hobbyname}</li>}
                                </div>
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className='super_section_main'>
                        <p>Projects</p>
                        {projects.map(project => {
                            return <div>
                                <h5>{project.title}</h5>
                                <ul>
                                    {project.description && <li className='p'>
                                        {project.description}
                                    </li>}
                                </ul>
                            </div>
                        })}
                        <div className='acads'>
                            <p>Grade 10 details</p>
                            <ul>
                                {grade10SchoolName && <li>{grade10SchoolName}</li>}
                                {grade10GPA && <li>{grade10GPA}</li>}
                                {grade10Year && <li>{grade10Year}</li>}
                            </ul>
                            <p>Grade 12 details</p>
                            <ul>
                                {grade12SchoolName && <li>{grade12SchoolName}</li>}
                                {grade12GPA && <li>{grade12GPA}</li>}
                                {grade12Year && <li>{grade12Year}</li>}
                            </ul>
                            <p>Graduation Details:</p>
                            <ul>
                                {graduationName && <li>{graduationName}</li>}
                                {graduationGrade && <li>{graduationGrade}</li>}
                                {graduationYear && <li>{graduationYear}</li>}
                            </ul>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Preview