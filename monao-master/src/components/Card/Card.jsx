import './Card.css'
const Card = ({ title, value, icon: Icon, onClick }) => (
  <div 
    className="major"
    onClick={onClick}
  >
    <div className="flex justify-between ">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-3xl font-bold mt-2">{value}</p>
      </div>
      <Icon size={48} className="text-blue-500" />
    </div>
  </div>
);

export default Card;