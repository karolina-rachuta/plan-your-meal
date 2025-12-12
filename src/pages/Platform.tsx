import React, { useState } from 'react';
import AppHeader from '../components/app/AppHeader';
import SideNavigationBar from '../components/app/SideNavigationBar';
import MainDesktop from '../components/app/MainDesktop';
import Recipes from '../components/app/Recipes';
import Schedules from '../components/app/Schedules';
import NewRecipe from '../components/app/NewRecipe';
import NewSchedule from '../components/app/NewSchedule';
import EditRecipe from '../components/app/EditRecipe';
import EditSchedule from '../components/app/EditSchedule';

function App() {
    const [screenNumber, setScreenNumber] = useState(1);

    const handleScreenChange = (screen: number) => {
        setScreenNumber(screen);
    };
    return (
        <div>
            <AppHeader />
            <div className="container platform__main">
                <SideNavigationBar
                    onScreenChange={handleScreenChange}
                    screenNumber={screenNumber}
                />
                {screenNumber === 1 && (
                    <MainDesktop onScreenChange={handleScreenChange} />
                )}
                {screenNumber === 2 && (
                    <Recipes onScreenChange={handleScreenChange} />
                )}
                {screenNumber === 3 && (
                    <Schedules onScreenChange={handleScreenChange} />
                )}
                {screenNumber === 4 && (
                    <NewRecipe onScreenChange={handleScreenChange} />
                )}
                {screenNumber === 5 && (
                    <NewSchedule onScreenChange={handleScreenChange} />
                )}
                {screenNumber === 6 && (
                    <EditRecipe onScreenChange={handleScreenChange} />
                )}
                {screenNumber === 7 && (
                    <EditSchedule onScreenChange={handleScreenChange} />
                )}
            </div>
        </div>
    );
}

export default App;
