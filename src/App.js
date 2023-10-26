import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Red from './Pages/Red';
import Blue from './Pages/Blue';
import Green from './Pages/Green';
import Yellow from './Pages/Yellow';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {



  return (
   <Routes>
    <Route path='/' element={<Home color="red"/>}/>
    <Route path='/red' element={<Red/>}/>
    <Route path='/blue' element={<Blue/>}/>
    <Route path='/green' element={<Green/>}/>
    <Route path='/yellow' element={<Yellow/>}/>

    </Routes>
  
  );
}

export default App;