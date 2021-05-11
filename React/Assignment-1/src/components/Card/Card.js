import "./Card.css";
import heartOutline from "../../assets/heart-outline.png";
import heartFill from "../../assets/heart-fill.png";

const Card = (props) => {
  const { item, liked, likeCo } = props;

  return (
    <>
      <img className="card-image" src={item.image} alt="Logo" />
      <div className="card-text">{item.description}</div>
      <div className="card-like-bar">
        {liked ? (
          <img className="card-like-icon" src={heartFill} alt="Logo" />
        ) : (
          <img className="card-like-icon" src={heartOutline} alt="Logo" />
        )}
        <div className="like-text">
          <b>{likeCo}</b> liked for this recipe
        </div>
      </div>
    </>
  );
};

export default Card;
