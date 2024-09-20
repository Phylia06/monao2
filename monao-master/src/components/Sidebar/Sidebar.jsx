import './Sidebar.css';

const Sidebar = ({ position, icons }) => {
  const sidebarClasses = `sidebar sidebar--${position}`;
  return (
    <div className={sidebarClasses}>

  <div className='sdbr'>
    {icons.map((Icon, index) => (
      <div key={index} className="baricon">
        <Icon size={24}  />
      </div>
    ))}
  </div>
  </div>
  );
};

export default Sidebar;