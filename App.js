import React,{ Component } from 'react';
function myApp(){
  return (
    <div>
      <h1>Simple Registration Form</h1><br></br> 
     <br></br>
     <center>
     <form>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      Enter Name:<input type="text" name="name"></input><br></br><br></br>
      Enter Email:<input type="text" name="email"></input><br></br><br></br>
      Enter Password:<input type="text" name="password"></input><br></br><br></br>
      Enter Age:<input type="text" name="age"></input><br></br><br></br>
      Enter Contact Number:<input type="text" name="contact"></input><br></br><br></br>

      <input type="submit" value="submit"></input>
     </form>
     </center>
    </div>
  );
}
export default myApp;