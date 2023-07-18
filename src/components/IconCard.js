import './IconCard.css';
import React from "react";

class IconCard extends React.Component {
  render() {
    const { icon, headerText, descriptionText } = this.props;
    return (
      <div className="icon-card-wrapper">
        <img src={icon}></img>
        <h3 className="header-text">{headerText}</h3>
        <p className="description-text">{descriptionText}</p>
      </div>
    )
  }
}

export default IconCard;