import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://www.30ml.store/shopimages/30mlstore/005005000082.jpg?1593064288",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image: "https://cdn.mindgil.com/news/photo/202103/70839_7148_1250.jpg",
    rating: 4.7,
  },
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <img src={picture} alt={name} />
      <p>{rating}/5.0</p>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
