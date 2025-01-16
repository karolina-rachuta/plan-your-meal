import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Homepage from './pages/Homepage';
import Platform from './pages/Platform';
import RecipeContextProvider from './contex/RecipeContext';
import ScheduleContexProvider from './contex/ScheduleContex';

function App() {
    return (
        <div>
            <ScheduleContexProvider>
                <RecipeContextProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Homepage />} />
                            <Route path="/app" element={<Platform />} />
                        </Routes>
                    </BrowserRouter>
                </RecipeContextProvider>
            </ScheduleContexProvider>
        </div>
    );
}

export default App;
