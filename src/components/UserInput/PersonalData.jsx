// import '/home/coder/project/workspace/cvapp_project/src/styles/data_align.css'
import '../../styles/data_align.css'
import {useState} from 'react'
function PersonalData({firstName,setfirstName,
                        lastName,setlastName,
                        email,setEmail,
                        phoneNumber,setphoneNumber,
                        facebookAcc,setfacebookAcc,
                        linkedinAcc,setlinkedinAcc}){
    return(
        <>
            <div className='edu_details'>
                <h5>Enter your personal details</h5>
                <form className='edu_details_form'>
                    <label for="firstname">First name:</label>
                    <input
                    onChange={(e) => {
                        setfirstName(e.target.value)
                    }}
                    value={firstName}
                    id="firstname" name="firstname" type="text" placeholder="Enter your first name" required></input>

                    <label for="lastname">Last name:</label>
                    <input 
                    onChange={(e) => {
                        setlastName(e.target.value)
                    }}
                    value={lastName}
                    type="text" id="lastname" name="lastname" placeholder="Enter your last name" required></input>

                    <label for="email">Email:</label>
                    <input 
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                    value={email}
                    id="email" name="email" type="email" placeholder="Enter your email" required></input>

                    <label for="phone">Phone Number:</label>
                    <input 
                    onChange={(e) => {
                        setphoneNumber(e.target.value)
                    }}
                    value={phoneNumber}
                    id="phone" name="phone" type="text" placeholder="Enter your phonenumber" required></input>

                    <label for="linkedin">LinkedIn: (optional)</label>
                    <input 
                    onChange={(e) => {
                        setlinkedinAcc(e.target.value)
                    }}
                    value={linkedinAcc}
                    id="linkedin" name="linkedin" type="text" placeholder="Enter your linkedin url"></input>

                    <label for="facebook">Facebook: (optional)</label>
                    <input 
                    onChange={(e) => {
                        setfacebookAcc(e.target.value)
                    }}
                    value={facebookAcc}
                    id="facebook" name="facebook" type="text" placeholder="Enter your facebook url"></input>
                </form>
            </div>
        </>
    )
}

export default PersonalData