import "./Tech.css"

const Tech = ({name, icon}) => {
    return (
      <div className="col s6 m2 center animate__animated animate__zoomIn">
        <p>{name}</p>
        <img className="icon-image" src={icon} alt={name}/>
      </div>
    );
  };
  
  export default Tech;