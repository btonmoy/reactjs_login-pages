import React from "react";

const Login = () => {
    return(
        <> 
<div className="container-fluid">
   <div className='row'> 
    <div className="col-lg-4 m-auto dash"> 
  <div className="login">
    <div class="custom-shape-divider-top-1618512135">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>
    <form action="">
    <h1>Welcome to ABC</h1> 
      <div className="form1"> 
       <div className="email1">
         <label>Enter your Email</label><br/><br/>
         <input type="text" name="email" id="email"/>
       </div>
       <div className="password1">
         <label name="password"> Enter your password</label><br/><br/>
         <input type="text" name="pass" id="pass"/>
       </div>
       <button className="login-btn" type="submit">Log-in</button>
       </div>
    </form>
    </div>
    <div class="custom-shape-divider-bottom-1618512577">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>
  </div>
  </div>
</div>
        </>
    );
};
export default Login;


// import logo from './logo.svg';
// import './App.css';
// import Basicform from'./Component/Basicform';

// function App() {
//   return (
//    <>
//     {/* <BasicForm/> */}
//     <div className="login">
//     <form action="">
//     <h1>Welcome to ABC</h1> 
//       <div className="form1"> 
//        <div className="email1">
//          <label>Enter your Email</label><br/><br/>
//          <input type="text" name="email" id="email"/>
//        </div>
//        <div className="password1">
//          <label name="password"> Enter your password</label><br/><br/>
//          <input type="text" name="pass" id="pass"/>
//        </div>
//        <button type="submit">Log-in</button>
//        </div>
//     </form>
//     </div>
//    </>                             
   
//   );
// }

// export default App;
