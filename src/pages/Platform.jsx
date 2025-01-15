import React, { useState } from 'react';
import AppHeader from '../components/app/AppHeader';
import SideNavigationBar from '../components/app/SideNavigationBar';
import MainDesktop from '../components/app/MainDesktop';
import Recipes from '../components/app/Recipes';
import Schedules from '../components/app/Schedules';
import NewRecipe from '../components/app/NewRecipe';
import NewSchedule from '../components/app/NewSchedule';

function App() {
    const [screenNumber, setScreenNumber] = useState(1);

    const handleScreenChange = (screen) => {
        setScreenNumber(screen);
    };
    return (
        <div>
            <AppHeader />
            <div className="container platform__main">
                <SideNavigationBar handleScreenChange={handleScreenChange} />
                {screenNumber === 1 && (
                    <MainDesktop handleScreenChange={handleScreenChange} />
                )}
                {screenNumber === 2 && <Recipes />}
                {screenNumber === 3 && <Schedules />}
                {screenNumber === 4 && <NewRecipe />}
                {screenNumber === 5 && <NewSchedule />}
            </div>
        </div>
    );
}

export default App;
