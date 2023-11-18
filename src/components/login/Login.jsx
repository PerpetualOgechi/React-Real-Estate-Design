import React, {useState} from 'react'
import "./Login.css"

const Login = () => {
  // const [userName, setUserName] = useState('')
  const [disabled, setDisabled] = useState(true)

  const handlePassword = (e) => {
    if(e.target.value.length >= 6) {
      setDisabled(false)
    }else{
      setDisabled(true)
    }

  }

  const handleName = (e) => {
    
    if(e.target.value.length <= 1) {
      setDisabled(false)
    }else{
      setDisabled(true)
    }

  }

  
  
  return (
    <section className="l-wrapper">
      <div className="paddings innerWidth flexCenter l-container">
        <form action="" className='form'>
          <input  type="text" placeholder='Name'  onChange={handleName} /><br/>

          <input  type="email" placeholder='Email' /><br/>
          <input  type="password" placeholder='Password' onChange={handlePassword} /><br/>
          <button disabled={disabled} className='button' >Submit</button>
        </form>

        {/* right side */} 
        <div className="relative">
          <div className='logo-two' width={100}>
            <img src="logo2.png" alt="" />
          </div>
          <div className='r-one' width={100}>
            <img src="r1.png" alt="" />
          </div>
          <div className='r-two' width={100}>
            <img src="r2.png" alt=""  />

          </div>
          <div className='r-three' width={100}>
            <img src="r3.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login