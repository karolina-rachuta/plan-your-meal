import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Homepage from './pages/Homepage';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/app" element={<div>app</div>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
