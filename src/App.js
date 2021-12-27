
import './App.css';
import Profile from './profile/Profile';
import myPhoto from "./profile/goten.png";
function App() {
  const handelName =(name)=>{
     alert(`hello i'm ${name}`);
  }
  return (
    <div className="App">
      <div>
      <Profile fullName ="Son goten" bio ="Dragon ball supper" power ="super sian" handelName = {handelName}> <img src ={myPhoto} alt='caracter' style={{width : "400px", borderRaduis :"20px"}}/></Profile>
      </div>
    </div>
  );
}



export default App;

   //