import {BrowserRouter , Routes , Route} from 'react-router-dom';
import App from '../App';
import SignIn from '../pages/SignIn/SignInForm';
import Registration from '../pages/Registration/Registration';
import Dashboard from '../pages/Dashboard/Dashboard';
import Userpage from '../pages/Userpage/Userpage';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}/>
                <Route path='/SignIn' element={<SignIn/>}/>
                <Route path='/Registration' element={<Registration/>}/>
                <Route path='/Dashboard/:id' element={<Dashboard/>}/>
                <Route path='/Userpage/:id' element={<Userpage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;