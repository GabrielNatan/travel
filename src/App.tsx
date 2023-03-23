import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' Component={SignUp}/>
                <Route path='/' Component={Home}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
