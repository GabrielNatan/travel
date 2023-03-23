import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AddPayment } from './pages/AddPayment';
import { Forgot } from './pages/Forgot';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' Component={AddPayment}/>
                <Route path='/' Component={Home}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
