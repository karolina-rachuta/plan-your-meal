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
                    handleScreenChange={handleScreenChange}
                    screenNumber={screenNumber}
                />
                {screenNumber === 1 && (
                    <MainDesktop handleScreenChange={handleScreenChange} />
                )}
                {screenNumber === 2 && (
                    <Recipes handleScreenChange={handleScreenChange} />
                )}
                {screenNumber === 3 && (
                    <Schedules handleScreenChange={handleScreenChange} />
                )}
                {screenNumber === 4 && (
                    <NewRecipe handleScreenChange={handleScreenChange} />
                )}
                {screenNumber === 5 && (
                    <NewSchedule handleScreenChange={handleScreenChange} />
                )}
                {screenNumber === 6 && (
                    <EditRecipe handleScreenChange={handleScreenChange} />
                )}
                {screenNumber === 7 && (
                    <EditSchedule handleScreenChange={handleScreenChange} />
                )}
            </div>
        </div>
    );
}

export default App;
