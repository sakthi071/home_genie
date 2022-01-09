
import './App.css';
import {useState}from "react";
import { collection,  getDocs } from "firebase/firestore";
import db from './firebase (1)';





function App() {
const[Fname ,setFname] = useState("")
const[Lname ,setLname] = useState("")
const[Uname ,setUname] = useState("")
const[Pnum ,setPnum] = useState("")
const[Email ,setEmail] = useState("")
const[Home ,setHome] = useState("")
const[Offfice ,setOffice] = useState("")
const[Password ,setPassword] = useState("")
const[Cpassword ,setCpassword] = useState("")
const [country , setcountry] = useState("")
let sakthi = ["country","India","america","China","Japan"]
const[gender ,setGender] = useState({})
const regex = /^[a-zA-Z]+(?:-[a-zA-Z]+)*$/;
const [gettheDatafirebase ,setgettheDatafirebase] = useState([]);

const getData = async() =>{
  const querySnapshot = await getDocs(collection(db, "sakthi"));
let sss = [];
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  sss.push(doc.data())
  console.log(doc.data())

});
setgettheDatafirebase(sss)


}
return (
  <div className="main">
    <div className ="sakthi">

        <center><h1> Register</h1></center>
       
        
        
        <div className="one"><input  onChange = {(inputProperties)=>{setFname(inputProperties.target.value)}} type="text" placeholder="First Name"/><input onChange = {(inputProperties)=>{setLname(inputProperties.target.value)}} type="text" placeholder="Last Name"/>
        </div><div className="ss"><span>{Fname.length ===0 ?"please enter the first name":regex.test(Fname)===false ?"please enter alphabets only":""}</span><span>{Lname.length ===0 ?"please enter the last name":regex.test(Lname)===false?"please enter valid name":""}</span></div><br></br>
        <div className="two"><input onChange = {(inputProperties)=>{setUname(inputProperties.target.value)}} type="text" placeholder="Username"/> <input onChange = {(inputProperties)=>{setPnum(inputProperties.target.value)}} type="number" placeholder="PhoneNo"/>
        </div><div className='s1'><span>{Uname.length ===0 ?"please enter the username":""}</span><span>{Pnum.length !== 10 ?"please enter 10 digit number":""}</span></div><br></br>
        <div className="three"><input id="sp" onChange = {(inputProperties)=>{setEmail(inputProperties.target.value)}}  type="email" placeholder="Your E-Mail Address"/>
        </div><div className='s2'><span>{Email.length ===0 ?"please enter the valid email":!(Email.includes("@") && Email.includes(".com")) ?"please enter the correct email id ":""}</span></div><br></br>
        <input id="g" type="date" placeholder="Date of Birth DD/MM/YY"/>
        <input onChange={(tochange)=>{setGender({male : tochange.target.checked})}} id="sm" type="radio" name="gender"/><span>male</span><br></br>
        <input id="e2"  onChange={(tochange)=>{setGender({female : tochange.target.checked})}} id="smv" type="radio" name="gender"/><span>female</span>
        {console.log(gender)}
    <br></br>    
        <div className="five"><select onChange={(sak)=>{setcountry(sakthi[sak.target.options.selectedIndex])}}>
            <option>country</option>
            <option>India</option>
            <option>america</option>
            <option>China</option>
            <option>Japan</option>
            
        </select>
        <select name="state" id="tamil" type="text" >
            <option>State</option>
        </select>
    </div><br></br>
    <div className="ss"><span>{country=="country"?"please enter country":""}</span></div>
        <div className="six"><input  onChange = {(inputProperties)=>{setHome(inputProperties.target.value)}} type="text" placeholder="home Address"/><input  onChange = {(inputProperties)=>{setOffice(inputProperties.target.value)}}  type="text" placeholder="Office Address"/>
        </div><div className='s3'><span>{Home.length ===0 ?"please enter the home address":""}</span><span>{Offfice.length ===0 ?"please enter the office address":""}</span></div><br></br>
        <div className="sevan"><i><input  onChange = {(inputProperties)=>{setPassword(inputProperties.target.value)}} type="password" placeholder="Password"/></i><input onChange = {(inputProperties)=>{setCpassword(inputProperties.target.value)}} type="password" placeholder="Confirm Password"/>
        </div><div className='s4'><span>{Password.length !== 8 ?"please enter the paassword":""}</span><span>{Cpassword!=Password ?"password doesn't match":""}</span></div><br></br>
        
        
         <button id="po" onClick={getData}>Sumbit</button>
         

         
    
    
   
      
    
    </div>
    <div className="fg">
    <table>
    <tr>
      <th>username</th>
      <th>gender</th>
      <th>dob</th>
      <th>number</th>
      <th>email</th>
    </tr>
    {gettheDatafirebase.map(k=>(
    <tr>
      <td>{k.username}</td>
      <td>{k.gender}</td>
      <td>{k.DOB}</td>
      <td>{k.number}</td>
      <td>{k.email}</td>

    </tr>
    ))}
    
  </table>
  </div>
  </div>
  );
}
export default App;
 