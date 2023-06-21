
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateCollege from './Display/CreateCollege';
import Navbar from './Display/Navbar';
import Home from './HomePage/Home';
import CollegeData from './Display/CollegeData';
import InterData from './Display/InterData';
import ApplyIntern from './Display/ApplyIntern';

function App() {
  return (
    

   <>
     <Router>
      <Navbar/>
       <Routes>
          {/* <Route exact path='/' element={<Home/>}/> */}
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/create' element={<CreateCollege/>}/>
          <Route exact path='/college' element={<CollegeData/>}/>
          <Route exact path='/inter'element={<InterData />}/>
          <Route exact path='/apply'element={<ApplyIntern />}/>

          {/* <Route exact path='/*' element={<h1>Page not found</h1>}/>
          <Route exact path='/about' element={<Contact/>}/>
          <Route exact path='/update' element={<Upade/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/signup' element={<SingUp/>}/> */}
       </Routes>
      
    </Router>
  
   </>



    // <div>
      
    //   <Navbar/>
    //   <CreateCollege/>
    //   <Home/>
    // </div>
    
   
  );
}

export default App;
