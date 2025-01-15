import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Homepage from './pages/Homepage';
import Platform from './pages/Platform';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/app" element={<Platform />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
