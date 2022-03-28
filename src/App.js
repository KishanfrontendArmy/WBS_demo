import './App.css';
import React, { useEffect } from 'react'
import Home from "./components/Home";
import $ from 'jquery';
// import WOW from 'wowjs';

function App() {


  // useEffect(() => {

  //   // new WOW().init();
  //   const script1 = document.createElement("script");
  //   script1.src = "../public/assets/custome.js"
  //   script1.type = "text/javascript"
  //   script1.async = true;
  //   document.body.appendChild(script1);

  //   const script2 = document.createElement("script");
  //   script2.src = "../public/assets/parallax.js"
  //   script2.type = "text/javascript"
  //   script2.async = true;
  //   document.body.appendChild(script2);

  //   const script3 = document.createElement("script");
  //   script3.src = "../public/assets/wow.min.js"
  //   script3.type = "text/javascript"
  //   script3.async = true;
  //   document.body.appendChild(script3);

  const script4 = document.createElement("script");
  script4.src = "../public/assets/scrollspy.js"
  script4.type = "text/javascript"
  script4.async = true;
  document.body.appendChild(script4);

  //   const script5 = document.createElement("script");
  //   script5.src = "../public/assets/jquery.parallax-scroll.js"
  //   script5.type = "text/javascript"
  //   script5.async = true;
  //   document.body.appendChild(script5);

  const script6 = document.createElement("script");
  script6.src = "../public/assets/jquery-3.6.0.min.js"
  script6.type = "text/javascript"
  script6.async = true;
  document.body.appendChild(script6);

  //   const script7 = document.createElement("script");
  //   script7.src = "../public/assets/breadctumb_parallax.js"
  //   script7.type = "text/javascript"
  //   script7.async = true;
  //   document.body.appendChild(script7);

  // }, [])


  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
