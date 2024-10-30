import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './RegistrationForm.css'

function RegistrationForm() {
    const[formValues,setFormValues] = useState({
        name: "",
        username: "",
        email: "",
        mobile: "",
        checkbox: false,
    })

    const[errors,setErrors] = useState({
        name: null,
        username: null,
        email: null,
        mobile: null,
        checkbox: null,
    })

    const handleChange =(e) =>{
       setFormValues({...formValues,[e.target.name]:e.target.value})
    }

    const navigate = useNavigate();

    const handleSignUp = () =>{

        let isErrors = false;
       if(formValues.name.trim().length === 0){
         setErrors((prev) =>({...prev, name : "Name is Required"}))
         isErrors = true;
       }
        else{
            setErrors((prev) =>({...prev,name : null}))
        }
       if(formValues.username.trim().length === 0) {
        setErrors((prev) =>({...prev, username:"Username is Required"}))
        isErrors = true;
       }
       else{
        setErrors((prev) =>({...prev,username : null}))
    }
       if(formValues.email.trim().length === 0) {
        setErrors((prev) =>({...prev, email:"Email is Required"}))
        isErrors = true;
       }
       else{
        setErrors((prev) =>({...prev,email : null}))
    }
       if(formValues.mobile.trim().length === 0) {
        setErrors((prev) =>({...prev, mobile:"Number is Required"}))
        isErrors = true;
       }
       else{
        setErrors((prev) =>({...prev,mobile : null}))
    }
       if(formValues.checkbox === false) {
        setErrors((prev) =>({...prev, checkbox:"Please accept the terms and conditions."}))
        isErrors = true;
       }
       else{
        setErrors((prev) =>({...prev,checkbox : null}))
    } 
    console.log("isErrors : ",isErrors)
    if(!isErrors){
       localStorage.setItem("userInfo",JSON.stringify(formValues));
        navigate("/movies");
    }
    
}

    
  return (
    <div className='page1' style={{ width: "100%",height:"100%", display: "flex", justifyContent: "center", alignItems: "center", background: "#000000" }}>
      <img src="./src/assets/register.png" className='introImage' />
      <h1 className='imageText'>Discover new things on <br /> Superapp</h1>
      <div className='RegistrationPage' >
        <div className='upper-part'>
           <h1 >Super app</h1>
           <p>Create Your new account</p>
        </div>
        <form className='Form' autoComplete='off' autoFocus='on'>

          <input type='text' placeholder='Name' value={formValues.name} onChange={handleChange} name="name"/>

          {errors.name ? <p style={{color: "red"}}>{errors.name}</p> : <></>}

          <input type='text' placeholder='Username' value={formValues.username} onChange={handleChange} name="username" />

          {errors.username ? <p style={{color: "red"}}>{errors.username}</p> : <></>}

          <input type='email' placeholder='Email' value={formValues.email} onChange={handleChange} name="email" />

          {errors.email ? <p style={{color: "red"}}>{errors.email}</p> : <></>}

          <input type='text' placeholder='Number' value={formValues.mobile} onChange={handleChange} name="mobile" />

          {errors.mobile ? <p style={{color: "red"}}>{errors.mobile}</p> : <></>}

          <div className='check-box'>
            <input type="checkbox" id='checkbox' value={formValues.checkbox} name="checkbox" onChange={handleChange} />
            <label htmlFor='checkbox'style={{color:"#7C7C7C"}}>Share my registration date with SuperApp</label>
          </div>
            {errors.checkbox ? <p style={{color: "red"}}>{errors.checkbox}</p> : <></>}
            <button className='signUp' onClick={handleSignUp} style={{color:"white",fontWeight:600,font:"roboto"}}>SIGN UP</button>
            
       </form>
         <div className="term-condition">
          <p>By Clicking on Sign up.you agree to Superapp <span style={{ color: "#72DB73" }}>Terms and Conditions of Use</span></p>
          <p>To learn more about how Superapp collects,uses,shares and protects your personal data please head Superapp <span style={{ color: "#72DB73" }}>Privacy Policy</span></p>
        </div>
    </div>
    </div>
    
  )
}

export default RegistrationForm
