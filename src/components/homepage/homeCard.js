import { Link } from "react-router-dom";

const HomeCard = (props) => {
  return (
    <div className="home-card">
      <Link to={`/product/${props.id}`}>
        <img className="card-image" src={props.imgSrc} alt={props.title} />
      </Link>
      <h1 className="card-title">{props.title}</h1>
      <h3 className="card-price">{"₹ " + props.price * 80}</h3>
      <h5 className="card-rating">Rating : {props.rating}/5</h5>
    </div>
  );
};

export default HomeCard;
