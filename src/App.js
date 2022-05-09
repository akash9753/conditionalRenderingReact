
import './App.css';
import Login from './components/Login';
import {Routes,Route} from "react-router-dom";
import Error from './components/error';
import Dashboard from './components/Dashboard';
function App() {
  return (
    <div className="App">
      
           <Routes>
             <Route path='/' element={<Login/>}/>
             <Route path='/dashboard' element={<Dashboard/>}/>
             <Route path='/error' element={<Error/>}/>
           <Route/>
           </Routes>
      
    </div>
  );
}

export default App;
