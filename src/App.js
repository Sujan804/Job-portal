import { Route, Routes } from 'react-router-dom';
import EditJob from './components/EditJob';
import Header from "./components/Header";
import HomePage from './components/HomePage';
import SideBar from "./components/SideBar";
function App() {
  return (
   <>
    <Header/>
    <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
      <SideBar/>
      <Routes>
        <Route path='/jobs' element= {<HomePage/>}/>  
        <Route path='' element= {<HomePage/>}/>
        <Route path='/add-job' element ={<EditJob/>}/>
        <Route path='/update-job' element ={<EditJob/>}/>
      </Routes>
    </div>
    


   </>
  );
}

export default App;
