import './Landing.css'
// import { UisBars } from '@iconscout/react-unicons-solid' 
// import PhoneInput from 'react-phone-number-input'
import { useNavigate } from 'react-router-dom'
import cubi from'../../imgs/cubi.jpeg'
import cubii from'../../imgs/cubii.jpg'
import comm from'../../imgs/comm.jpg'
import domes from'../../imgs/domes.jpg'
import indus from'../../imgs/indus.jpg'
import cub from'../../imgs/cub.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

export default function Landing() {

  const navigate = useNavigate();

  const handlelogin = () => {
    navigate('/');
  }
  
  
  // const Navbar = () => {
  //   const [isOpen, setIsOpen] = useState(false);
  
  //   const toggleMenu = () => {
  //     setIsOpen(!isOpen);
  //   };
  // }
  
//       const [active, setActive] = useState("nav__menu");
//   const [icon, setIcon] = useState("nav__toggler");
  // const navToggle = () => {
  //   if (active === "nav__menu") {
  //     setActive("nav__menu nav__active");
  //   } else setActive("nav__menu");

  //   // Icon Toggler
  //   if (icon === "nav__toggler") {
  //     setIcon("nav__toggler toggle");
  //   } else setIcon("nav__toggler");
  // };
  return (
    <>
    <nav className="nav">
      <div className="logo">
        herdoy
      </div>
      <ul>
        <div className='ull'>
        <li className="nav__item">
            Home
        </li>
        <li className="nav__item">
            About
        </li>
        <li className="nav__item">
            Services
        </li>
        <li className='side'>
        Need Help Now? Call Us!
      <span className='num'> <b> 123-456-789 </b> </span>
        </li>
        </div>
      </ul>

      <button className="login-icon" >
            <FontAwesomeIcon icon={faSignInAlt} onClick={handlelogin}/> Login
        </button>

      {/* <div className="bars">
     <UisBars />
      </div> */}
    </nav>

    <div className='bd'>
      <div className='firstpic'>
        <img src={cubi} alt="man" className='fro' />
        <div className="blue-overlay"></div>
        <div className='overlay-text'>  Exceptional, Punctual  and <br />
         Professional</div>
        <div className='overlay-text1'>
          You deserve to have a handy team who <br />can install this system
        </div>
      </div>

      <div className="services-container">
        <div className="service-category"> <span> Our Services </span>
        <h1 className="service-title">Expert Solutions for All Your Needs</h1>
        <div className="divider"></div>
        </div>
       
        <p className="service-description">We offer comprehensive services
           to address a wide range of issues. While some minor problems can
            be solved with simple DIY methods, complex situations often
             require professional assistance.</p>   
      </div>
      <div className='squares'>
        <div className='square1'>
          <img src={domes} alt="Residential" />
          <div className='hover-text'>
            Keep it as confortable as possible by making sure your system 
            is working at its best.
          </div>
          <div className='services'> Residential <br /> <span>Services</span>
            <div className='icon'>

            </div>
          </div>
        </div>
        <div className='square1'>
          <img src={comm} alt="Commercial" />
          <div className='hover-text'>
            Keep it as confortable as possible by making sure your system 
            is working at its best.
          </div>
          <div className='services'> Commercial <br /> <span>Services</span>
            <div className='icon'>

            </div>
          </div>
        </div>
        <div className='square1'>
          <img src={indus} alt="Industrial" />
          <div className='hover-text'>
            Keep it as confortable as possible by making sure your system 
            is working at its best.
          </div>
          <div className='services'> Industrial <br /> <span>Services</span>
            <div className='icon'>

            </div>
          </div>
        </div>
      </div>
      <div className='ourcom'>
        <div className='ourcom-right'>
          <img src={cubii} alt="py" />
        </div>
        <div className='ourcom-left'>
          <div className='over-text'>
            <div className='our-text'>
            <div className="divider"></div>
           <span> <br />
           About Company
           </span> 
            </div>
            Nobody Wows Clients <br /> like we do
          </div>
          <div className='about'>
            <br /><br />
          Our team proudly offers an on-time guarantee and a 100% customer 
          satisfaction guarantee. We make sure that our employees are highly
           trained and fully equipped to meet your home’s service needs.
           <br /><br /> <br />
        <li>
          <ul className='firstt'>
          First Class Quality Service at Affordable Prices
          </ul> 
        </li>
          </div>
        </div>
      </div>

      <div className='phone'>
        <img src={cub} alt="" className='ima'/>
        <div className="blue-over"></div>
        <div className='allo'>

         Service
        24 Hours 7 Days a Week
        </div>
        <p className='alo'> 
        Quality  Services from a Team of Professionals
        </p>

        <div className='tipp'>
      <div className='tripple'>
        <div className='white-box'>
          Head Office: <br />
          <span className='gres'>
          Carrefour Columbia
          </span>
          
        </div>
        <div className='white-box'>
        Phone Numbers:
        <span className='red'> 123 456 789 </span>
        </div>
        <div className='white-box'>
        Working Time: <br />
        <span className='gres'>
        24 Hour Service - 7 Days a Week <br />
        365 Days
        </span>
        </div>
      </div>
      </div>

<div className='globe'>
      <div className='globe-text'>
      Our contractors provide courteous, friendly,
     affordable, 
     <p>
     and effective residential services.
      </p>
      </div>
    
    </div>
    
      </div>
      <div className='copy'>
    © Copyright 2024 by MONAO
    </div>  
</div>
    </>
  )
}
