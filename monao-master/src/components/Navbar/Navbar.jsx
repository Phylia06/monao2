import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { User } from 'lucide-react';
import './Navbar.css'

const NavBar = ({ onProfileClick }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
      <div className='part2'>
        <div className='monao'>
         <h2> MONAO</h2>
        </div>
      <div className='final'>{format(currentTime, 'PPpp')}</div>
      <div className="profpic">
      <User onClick={onProfileClick} />
      </div>
      </div>
  );
};

export default NavBar;
