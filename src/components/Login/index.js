import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './index.css'

const Login = ({users,usrGetter}) => {
  let [usrName,setUsrName] = useState('')
  let [usrPwd,setUsrPwd] = useState('')
 let [filterdUser,setFiltredUser] = useState([]) 
  
 let findUser = () => {
  let logedUsr = users.find( (usr)=> usr.userName === usrName && usr.password === usrPwd )
  setFiltredUser(logedUsr)
  usrGetter(filterdUser)
  
  }
 
  return (
    
    <>
    <div className="login">
    <input type="text" placeholder="Username" id="username" onChange={(e)=>{setUsrName(e.target.value)}}/>  
  <input type="password" placeholder="password" id="password" onChange={(e)=>{setUsrPwd(e.target.value)}}/>  
  <Link to="#" className="forgot"> forgot password </Link>
  <input type="submit" value="Sign In" onClick={()=>findUser()}/>
  {filterdUser === undefined ? <p style={{textAlign: "center",display: "block",margin: 20,fontSize: 10,color: "red"}}>Not valid user</p> : "" }
</div>
<div className="shadow"></div>
</>
  )
}

export default Login