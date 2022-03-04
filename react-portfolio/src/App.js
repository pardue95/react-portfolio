import React from "react";
import Header from "./components/Header";
import Footer from './components/Footer';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <div
        // style={{
        //   backgroundImage:
        //     "url(" +
        //     "https://user-images.githubusercontent.com/85760640/153782523-2f4afc60-4d3a-4972-8264-f8cdd231daae.jpg" +
        //     ")",
        //   backgroundPosition: "center",
        //   backgroundSize: "cover",
        //   backgroundRepeat: "no-repeat",
        // }}
      >
        <Header></Header>
      </div>
      <div>
      <Footer></Footer>
    </div>
    </>
  );
};

export default App;

//a
