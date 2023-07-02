
import './App.css';
import Home from './pages/Home';
import { Route,Routes } from 'react-router-dom';
import Kingdom from './pages/Kingdom';


function App() {
  return (
    <>
    
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path='/kingdom'>
            <Route path=":id" element={<Kingdom />} />  
          </Route>
          
            
        </Routes>
     
     
    </>
  );
}

export default App;
