import "./LandingPage.css";
import Title from "../assets/images/Title.svg";
import Logo from "../assets/images/Logo.png";
import Juice from "../assets/images/Juice.svg";
import Wave from "../assets/images/Wave.svg";
import Delivery from "../assets/images/motorcycle.png";
import Natural from "../assets/images/natural.png";
import AvilMilk from "../assets/images/avil milk.jpg";
import PotatoTwister from "../assets/images/potato twister.jpg";
import KannurCocktail from "../assets/images/kannur cocktail.jpg";
import Milkshakes from "../assets/images/milk shakes.jpg";
import Juices from "../assets/images/juices.jpg";
import Puffs from "../assets/images/puffs.jpg";
import { useRef } from "react";

export default function LandingPage() {
  const addressRef = useRef(null);
  return (
    <div>
      <div className="heroSection">
        <div className="navBar flex items-center">
          <div className="flex items-center">
            <img src={Title} alt="Title" className="title" />
          </div>
          <div className="flex nav">
            <nav onClick={() => addressRef.current.scrollIntoView({behavior: "smooth"})}>Contact Us</nav>
            <nav onClick={() => addressRef.current.scrollIntoView({behavior: "smooth"})}>Address</nav>
          </div>
        </div>
        <div className="content flex items-center">
          <div>
            <p className="mainTitle">Juices that</p>
            <p className="mainDescription">Everyone loves!</p>
            <p className="mainCaption">
              Huge range of fruit juices for customers
            </p>
          </div>
          <div>
            <img src={Juice} alt="juice-image" className="juiceImage" />
          </div>
        </div>
        <img src={Wave} alt="wave img" className="wave" />
      </div>
      <div className="delivery flex">
        <section className="flex">
          <img src={Delivery} alt="delivery img" className="deliveryImage" />
          <div>
            <h4>Free Delivery</h4>
            <p>Products delivered freshly at your doorstep</p>
          </div>
        </section>
        <section className="flex">
          <img src={Natural} alt="delivery img" className="deliveryImage" />
          <div>
            <h4>100% Natural</h4>
            <p>Products we deliver are 100% Natural</p>
          </div>
        </section>
      </div>
      <div>
        <img src={Wave} alt="wave img" className="waveReverse" />
        <div className="menu">
          <div>
            <p className="secondaryTitle">Our Menu</p>
            <p className="ternaryTitle">Specials</p>
            <div className="items flex">
              <div className="item">
                <img src={AvilMilk} alt="img" />
                <p>Avil Milk</p>
              </div>
              <div className="item">
                <img src={PotatoTwister} alt="img" />
                <p>Potato Twister</p>
              </div>
              <div className="item">
                <img src={KannurCocktail} alt="img" />
                <p>Kannur Cocktail</p>
              </div>
            </div>
            <p className="ternaryTitle">Recently Introduced</p>
            <div className="items flex">
              <div className="item">
                <img src={Milkshakes} alt="img" />
                <p>Milkshakes</p>
              </div>
              <div className="item">
                <img src={Juices} alt="img" />
                <p>Juices</p>
              </div>
              <div className="item">
                <img src={Puffs} alt="img" />
                <p>Puffs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <img src={Title} alt="Title" className="title" />
        <div className="flex details" style={{gap: "20px"}} ref={addressRef}>
          <div className="address">
            <p>Contact Us</p>
            <p>9148381357</p>
          </div>
          <div className="address">
            <p>Address</p>
            <p>Bhartiya City, Thanisandra Main rd, Bengaluru, Karnataka 560064</p>
          </div>
        </div>
      </div>
    </div>
  );
}
