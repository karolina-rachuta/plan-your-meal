import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Homepage from './pages/Homepage';
import Platform from './pages/Platform';
import RecipeContextProvider from './context/RecipeContext';
import ScheduleContexProvider from './context/ScheduleContext';

function App() {
    return (
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
    );
}

export default App;
