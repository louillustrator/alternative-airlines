import './IconCard.css';

export default function IconCard(props) {

  const { icon, headerText, descriptionText, iconAltText } = props;
  return (
    <div className="icon-card-wrapper">
      <img src={icon} alt={iconAltText}></img>
      <h3 className="header-text">{headerText}</h3>
      <p className="description-text">{descriptionText}</p>
    </div>
  )

}

