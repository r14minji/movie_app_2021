import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: "Kimchi",
    image:
      "https://www.bgw.kr/wp-content/uploads/2019/12/%ED%8F%AC%EA%B8%B0%EA%B9%80%EC%B9%98-1200x1200.png",
  },
  {
    name: "Samgyeopsal",
    image:
      "https://lh3.googleusercontent.com/proxy/ifVjqDHulXmbR_gs1P5U_Vuv-vLB4M43YxVr1SxrjLK3mnbt5wPPTaXbUts7z-N7uYfmSGOZBE-yPXRdF38Xv0HLH7tAGT0XTHJyV52Doj7rdqnTNlyd5iLp8SuPMDUxciNMKJ2CZw",
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
