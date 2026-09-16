import React from "react";

const Card = (props) => {
  return (
    <div className="card-container">
      <div className="card">

        <div className="top">
          <span className="availability">{props.availability}</span>
          <span className="price">{props.price}</span>
        </div>

        <div className="centre">
          <img src={props.brandLogo} alt={props.name} />
          <h3>{props.name}</h3>
          <p>{props.designation}</p>
          <span className="company">{props.company}</span>
        </div>

        <div className="bottom">

          <div className="skills">
            {props.skills.map((skill, index) => (
              <span key={index}>{skill}</span>
            ))}
          </div>

          <p className="description">
            {props.description}
          </p>

          <button>VIEW PROFILE</button>

        </div>

      </div>
    </div>
  );
};

export default Card;