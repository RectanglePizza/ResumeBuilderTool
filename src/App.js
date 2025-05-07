import MainHeading from "./components/Header";
import Preview from "./components/Preview";
import EducationDetails from "./components/UserInput/Education";
import Hobbies from "./components/UserInput/Hobbies";
import PersonalData from "./components/UserInput/PersonalData";
import Projects from "./components/UserInput/Projects";
import Skills from "./components/UserInput/Skills";
import html2pdf from 'html2pdf.js'
//styles
import '/home/coder/project/workspace/cvapp_project/src/styles/data.css'
import {useRef, useState} from 'react' 
function App() {
  // grade 10 states
  let [grade10SchoolName,setgrade10SchoolName] = useState("")
  let [grade10GPA,setgrade10GPA] = useState('')
  let [grade10Year,setgrade10Year] = useState('')

  // grade 12 states
  let [grade12SchoolName,setgrade12SchoolName] = useState('')
  let [grade12GPA,setgrade12GPA] = useState('')
  let [grade12Year,setgrade12Year] = useState('')

  // graduation states
  let [graduationName,setgraduationName] = useState('')
  let [graduationGrade,setgraduationGrade] = useState('')
  let [graduationYear,setgraduationYear] = useState('') 

  // personal data
  let [firstName,setfirstName] = useState('')
  let [lastName,setlastName] = useState('')
  let [email,setEmail] = useState('')
  let [phoneNumber,setphoneNumber] = useState('')
  let [facebookAcc,setfacebookAcc] = useState('')
  let [linkedinAcc,setlinkedinAcc] = useState('')

  // skills state
  let [mySkills,setSkills] = useState([])

  // projects
  let [projects,setProjects] = useState([{title:'',description:''}])

  // hobbies
  let [hobbies,setHobbies] = useState([{hobbyname:''}])

  let resumeref = useRef()
  let download = () => {
    html2pdf().from(resumeref.current).save("myFirstResume.pdf")
  }
  return (
    <>
      <MainHeading></MainHeading>   
      <div className="blocks">
        <div className="dataArea">
          <EducationDetails 
            grade10SchoolName={grade10SchoolName} 
            setgrade10SchoolName={setgrade10SchoolName}
            
            grade10GPA={grade10GPA}
            setgrade10GPA={setgrade10GPA}

            grade10Year={grade10Year}
            setgrade10Year={setgrade10Year}

            grade12SchoolName={grade12SchoolName}
            setgrade12SchoolName={setgrade12SchoolName}

            grade12GPA={grade12GPA}
            setgrade12GPA={setgrade12GPA}

            grade12Year={grade12Year}
            setgrade12Year={setgrade12Year}

            graduationName={graduationName}
            setgraduationName={setgraduationName}

            graduationGrade={graduationGrade}
            setgraduationGrade={setgraduationGrade}

            graduationYear={graduationYear}
            setgraduationYear={setgraduationYear}
            ></EducationDetails>

          <PersonalData 
          firstName={firstName}
          setfirstName={setfirstName}

          lastName={lastName}
          setlastName={setlastName}

          email={email}
          setEmail={setEmail}

          phoneNumber={phoneNumber}
          setphoneNumber={setphoneNumber}

          facebookAcc={facebookAcc}
          setfacebookAcc={setfacebookAcc}

          linkedinAcc={linkedinAcc}
          setlinkedinAcc={setlinkedinAcc}
          ></PersonalData>
          
          <Skills mySkills={mySkills} setSkills={setSkills}></Skills>
          <Projects projects={projects} setProjects={setProjects}></Projects>
          <Hobbies hobbies={hobbies} setHobbies={setHobbies}></Hobbies>
        </div>
        <div ref={resumeref} className="previewarea">
          <Preview 
          grade10SchoolName={grade10SchoolName} 
          grade10GPA={grade10GPA}
          grade10Year={grade10Year}
          
          grade12SchoolName={grade12SchoolName}
          grade12GPA={grade12GPA}
          grade12Year={grade12Year}
          
          graduationName={graduationName}
          graduationGrade={graduationGrade}
          graduationYear={graduationYear}
          
          firstName={firstName}
          lastName={lastName}
          email={email}
          phoneNumber={phoneNumber}
          facebookAcc={facebookAcc}
          linkedinAcc={linkedinAcc}

          mySkills={mySkills}

          projects={projects}

          hobbies={hobbies}
          ></Preview>
        </div>
        
      </div>
      <div className="download_cont">
      <button 
      onClick={() => {
        download()
      }}
      className="finalDownload">Download PDF</button>
      </div>
    </>
  );
}

export default App;
