import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AddPayment } from './pages/AddPayment';
import { ChangePassword } from './pages/ChangePassword';
import { Forgot } from './pages/Forgot';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { VerifyCode } from './pages/VerifyCode'
import { AuthTemplate } from './templates/AuthTemplate';
function App() {

    return (
        <BrowserRouter>
            <Routes>
              <Route Component={AuthTemplate}>
                <Route path='/add-paymant' Component={AddPayment}/>
                <Route path='/forgot-password' Component={Forgot}/>
                <Route path='/login' Component={Login}/>
                <Route path='/sign-up' Component={SignUp}/>
                <Route path='/verify-code' Component={VerifyCode}/>
                <Route path='/change-password' Component={ChangePassword}/>
              </Route>
              <Route path='/' Component={Home}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
