import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';

import Home from './Components/Home';
import Registration from './Components/Registration';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';


function App() {
  return (
    <div className="App">
      {/* <Login /> */}
     {/* <Registration /> */}
      {/* <Home /> */}

      <Routes>
      <Route path='/' element={ <Home /> } />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Registration />} />
          <Route path='/dashboard' element={ <Dashboard /> } />

      </Routes>
      
    </div>
  );
}

export default App;
