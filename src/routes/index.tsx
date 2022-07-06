import {
    Routes,
    Route 
} from 'react-router-dom'
import Login from '../pages/autenticate/login';
import Register from '../pages/autenticate/register';
import Dashboard from '../pages/dashboard';
import ScreemHome from '../pages/home';

const PageRoutes = () =>{
  return(
    <Routes>
      <Route path='/' element={<ScreemHome />} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element= {<Register/>}/>
      <Route path='/dashboard' element= {<Dashboard />}/>
    </Routes>
  )
}
  
export default PageRoutes;