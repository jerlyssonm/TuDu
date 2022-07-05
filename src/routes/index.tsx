import {
    Routes,
    Route 
} from 'react-router-dom'
import Login from '../pages/autenticate/login';
import Register from '../pages/autenticate/register';
import ScreemHome from '../pages/home';

const PageRoutes = () =>{
  return(
    <Routes>
      <Route path='/' element={<ScreemHome />} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element= {<Register/>}/>
    </Routes>
  )
}
  
export default PageRoutes;