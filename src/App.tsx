
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatRoom from './pages/ChatRoom';
import HomePage from './pages/HomePage';
import JoinRoom from './pages/JoinRoom';

const App = () => {
    return (
        <Router>
            <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/joinroom' element={<JoinRoom/>}/>
        </Routes>
        </Router>
    );
};

export default App;
