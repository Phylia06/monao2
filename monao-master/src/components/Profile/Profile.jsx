import './Profile.css'
import * as Unicons from '@iconscout/react-unicons';
import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../Login/Login'

const Profile = () => {

const navigate = useNavigate();

const handlelogout = () => {
  navigate('/');
}

  return(
  <div className="profile">
    <div className="nametext">
      <h2>Profile</h2>
      <h1>
        
      </h1>
    </div>
    <div className='downpart'>
    <div className='nameoptions'>
      <p>Role: Manager </p>
        <div className='support'>
        <Unicons.UilPhone size="30" color="rgb(0, 94, 149)" /> 
        </div>
      <span className='logout'>
          <LogOut color="red"size={25} onClick={handlelogout}/>
        </span>
    </div>
    </div>
  </div>
  );
};

export default Profile;