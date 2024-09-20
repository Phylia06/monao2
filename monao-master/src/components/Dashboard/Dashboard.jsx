import { useState } from 'react';
import { BarChart, User, LineChart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { UilTemperatureEmpty } from '@iconscout/react-unicons'
import { FaFileAlt } from 'react-icons/fa';
import './Dashboard.css'
import NavBar from '../Navbar/Navbar';
import Card from '../Card/Card';
import Sidebar from '../Sidebar/Sidebar';
import '../Repopage/Repopage';
import Profile from '../Profile/Profile';

const Dashboard = () => {
  const [sidebarPosition, setSidebarPosition] = useState('left');
  const [showSidebar, setShowSidebar] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const navigate = useNavigate();

  const genreport = () => {
    console.log('Navigating to Repopage');
    navigate('/Repopage');

  }

  const cardData = [
    { title: 'pH', value: '', icon: BarChart },
    { title: 'Temperature', value: '36.2', icon: UilTemperatureEmpty },
    { title: 'Water Level', value: '', icon: LineChart },
    { title: 'Generate Report', icon: FaFileAlt,  onClick: genreport },
  ];


  const handleCardClick = () => {
    setShowSidebar(true);
    setShowProfile(false);
    setSidebarPosition(prev => prev === 'left' ? 'right' : 'left');
  };

  const handleProfileClick = () => {
    setShowProfile(true);
    setShowSidebar(false);
    setSidebarPosition(false);
  };
  const toggleSidebar = () => {
    setSidebarPosition(prev => {
      if (prev === 'hidden') return 'left';
      if (prev === 'left') return 'right';
      return 'left';
    });
    setShowProfile(false);
  };

  return (
    <div className="gran">
      <NavBar onProfileClick={handleProfileClick} />
      <div className="car">
        <div className='cartes'>
          {cardData.map((card, index) => (
            <Card key={index} {...card} onClick={handleCardClick} />
          ))}
        </div>
        {showSidebar && (
          <Sidebar 
            position={sidebarPosition} 
            icons={cardData.map(card => card.icon)} 
          />
        )}
        {showProfile && (
          <div className="fixed top-16 left-0 w-1/2 h-full p-4">
            <Profile />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;