import React from 'react';
import Header from './Header';
import HomeContainer from './HomeContainer';
import { useTheme } from '../ThemeToggle';

const Home = () => {
  const { themeMode } = useTheme();
  return (
    <div className={`w-full h-screen ${themeMode === 'light' ? 'bg-gradient-to-r from-[#5B6AAA] to-[#F197F4]' : 'bg-[#000]'}`}>
      <Header/>
      <div>
        <HomeContainer/>
      </div>
    </div>
  );
}

export default Home;
