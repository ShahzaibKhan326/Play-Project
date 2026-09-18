import { Routes , Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Searched from "../../pages/Searched/Searched";


function Router() {
  return (
 
  
  //  <Routes>

  // <Route path="/home" element={<Home/>}/>
  //   <Route path="search" element={<Searched/>} />
  //   <Route path="profile" element={<Profile/>} />
  // </Route> 

  //   </Routes>
  
  <Routes>

 <Route path="/home" element={<Home/>}>
  <Route  path="search" element={<Searched/>}/>
  <Route  path="profile" element={<Pr/>}/>
 </Route>

  </Routes>

 
  )


export default Router