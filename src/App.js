import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

function App() {
    return (
        <div className="container">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<div>Hello</div>} />
                    <Route path="/app" element={<div>app</div>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
