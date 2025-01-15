import React from 'react';
import AppHeader from '../components/app/AppHeader';
import SideNavigationBar from '../components/app/SideNavigationBar';
import MainDesktop from '../components/app/MainDesktop';

function App() {
    return (
        <div>
            <AppHeader />
            <SideNavigationBar />
            <MainDesktop />
        </div>
    );
}

export default App;
