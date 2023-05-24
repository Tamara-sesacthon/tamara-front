import React, { useEffect } from "react";

const Kakaomap = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=b68fff21d83b3accbefb57301bf991f8&autoload=false`;

    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const { kakao } = window;
        const container = document.getElementById("map");
        const options = {
          center: new kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };

        new kakao.maps.Map(container, options);
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div id="map" style={{ width: "500px", height: "500px" }}></div>;
};

export default Kakaomap;
