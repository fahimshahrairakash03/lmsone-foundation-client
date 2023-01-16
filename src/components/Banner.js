import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="carousel lg:h-96 border-rounded  lg:w-3/4 mx-auto">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://www.jaago.com.bd/wp-content/uploads/2022/09/301382170_498719258732771_4968510707053236768_n-1536x400.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://www.jaago.com.bd/wp-content/uploads/2022/10/36469736660_173c4063a9_k-1536x1017.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://www.jaago.com.bd/wp-content/uploads/2022/08/givingup-e1666689789668-1536x852.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://www.jaago.com.bd/wp-content/uploads/2022/06/Bangladesh-Is-Still-In-Need-Of-Quality-Education-Is-Online-Learning-The-Future-Of-Education.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
