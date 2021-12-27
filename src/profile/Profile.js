import React from "react";
import PropTypes from "prop-types"
function Profile(props) {
    const {fullName, bio, power, handelName , children} = props;
    return (
      <div style={{display :"flex", flexDirection :"column", alignItems:"center", margin :"auto", padding: "20px", borderRadius : "20px", width: "401px", backgroundColor:"CaptionText", color:"wheat"}}>
        <h1>{fullName}</h1>
        <p>{fullName} my best caracter in {bio}</p>
             <div>{children}</div>
        <button onClick={()=>{handelName(power)}}>click me</button>
      </div>
    );
  }
  Profile.defaultProps={
    fullName :"<<tag name of caracter>>",
    bio : "<<tag name of anim>>",
    power : "none",
    handelName :"nothing"
  }
  Profile.prototype ={
      handelName : PropTypes.func,
      fullName : PropTypes.string
  }
  
  export default Profile;
  