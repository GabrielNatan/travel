import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AddPayment } from './pages/AddPayment';
import { ChangePassword } from './pages/ChangePassword';
import { Forgot } from './pages/Forgot';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { VerifyCode } from './pages/VerifyCode'
function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' Component={ChangePassword}/>
                <Route path='/' Component={Home}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
