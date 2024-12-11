import { RiCapsuleLine } from "react-icons/ri";
import { GiWeightScale } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";
import { ImLab } from "react-icons/im";
import { GiThreeLeaves } from "react-icons/gi";
import { PiAsteriskFill } from "react-icons/pi";
import { MdShoppingCart } from "react-icons/md";
import { FaArrowsRotate } from "react-icons/fa6";
import { SiFreenet } from "react-icons/si";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";

import "./App.css"

const App = () =>(
  <div className="app-container">
     {/* top-banner-section */}
     <img className="top-image-logo" src="https://res.cloudinary.com/djk1yczb2/image/upload/v1733649518/1538732227413_l1ojiz.jpg" alt="logo" />
    <section className="top-section">
      <h1 className="main-heading">Essential Vitamins</h1>
      <div className="top-section-container">
        <div className="top-left-section">
          <p>Online Medical Supplies</p>
          <h5>Get Your Vitamins & minerals</h5>
          <div>
            <button className="top-section-btn">Explore</button>
          </div>
        </div>
        <div className="top-middle-section">
          <img src="https://res.cloudinary.com/djk1yczb2/image/upload/v1733594031/Screenshot_2024-12-07_232115-removebg-preview_xsbdsw.png" alt="medicine" className="medicine-img" />
        </div>
        <div className="top-right-section">
        <div className="top-right-section-container">
          <div  className="top-section-icon">
            <RiCapsuleLine className="top-icon" />
          </div> 
          <div className="top-right-section-details">
            <h5>Vitamins</h5>
            <p>Increased Vitamins and minerals in your diet</p>
          </div>
        </div>
        <div className="top-right-section-container">
          <div  className="top-section-icon">
            <GiWeightScale className="top-icon" />
          </div>
          <div className="top-right-section-details">
            <h5>Weight Loss</h5>
            <p>Weight Loss Find Scientifically proven solutions</p>
          </div>
        </div>
        <div className="top-right-section-container">
          <div  className="top-section-icon">
            <IoFastFoodOutline className="top-icon" />
          </div>
          <div className="top-right-section-details">
            <h5>Functional Foods</h5>
            <p>Functional Foods From protien powers to baby formula</p>
          </div>
        </div>
      </div>
      </div>
    </section>

     {/* Middle service section */}
     <section className="middle-section">
      <div className="middle-section-container">
        <div className="middle-section-icon">
          <ImLab className="middle-icon" />
        </div>
        <h6>Clinically Studied</h6>
        <p>All products that we offer have undergone lab and safety tests</p>
      </div>
      <div className="middle-section-container">
        <div className="middle-section-icon">
          <GiThreeLeaves className="middle-icon" />
        </div>
        <h6>Vegiterian Friendly</h6>
        <p>We have a wide selction of Vegiterian products to meet our needs</p>
      </div>
      <div className="middle-section-container">
        <div className="middle-section-icon">
          <PiAsteriskFill className="middle-icon" />
        </div>
        <h6>Made in India</h6>
        <p>Shop local and explore health products made right here India</p>
      </div>
      <div className="middle-section-container">
        <div className="middle-section-icon">
          <MdShoppingCart className="middle-icon" />
        </div>
        <h6>Free Shopping</h6>
        <p>We deliver to your door with no shipping costs on your order</p>
      </div>
      <div className="middle-section-container">
        <div className="middle-section-icon">
          <FaArrowsRotate className="middle-icon" />
        </div>
        <h6>No Risk</h6>
        <p>We ensure that all products are safe and within their use-by date</p>
      </div>
      <div className="middle-section-container">
        <div className="middle-section-icon">
          <SiFreenet className="middle-icon" />
        </div>
        <h6>GMO Free</h6>
        <p>Natural, no modified products and derivatives for those who need it</p>
      </div>
     </section>

     {/* Vitamins Sections  */}
     <section className="vitamins-section">
      <div className="first">
        <h6>INGREDIENTS</h6>
        <h2>Better Ingredients</h2>
        <p>Only the best when you choose products offered on our platform - high-quality ingredients for high quality products!</p>
      </div>
      <div className="vitamins-section-container">
        <div className="vitamins-section-inner">
          <h4>Vitamin C</h4>
          <p>Vitamin C as ascorbic acid</p>
        </div>
        <div className="vitamin-btn">
          <p>SEE MORE</p>
        </div>
        <img src="https://res.cloudinary.com/djk1yczb2/image/upload/v1733638398/Screenshot_2024-12-08_113612-removebg-preview_iulgai.png" 
          alt="vitamin c" 
          className="vitamin-img" 
        />
      </div>
      <div className="vitamins-section-container">
        <div className="vitamins-section-inner">
          <h4>Vitamin B3</h4>
          <p>Niacin for healthy gut and skin</p>
        </div>
        <div className="vitamin-btn">
          <p>SEE MORE</p>
        </div>
        <img src="https://res.cloudinary.com/djk1yczb2/image/upload/v1733638393/Screenshot_2024-12-08_113711-removebg-preview_z7da3u.png" 
          alt="vitamin B3" 
          className="vitamin-img" 
        />
      </div>
      <div className="vitamins-section-container">
        <div className="vitamins-section-inner">
          <h4>Magnesium</h4>
          <p>Boost energy & support muscles</p>
        </div>
        <div className="vitamin-btn">
          <p>SEE MORE</p>
        </div>
        <img src="https://res.cloudinary.com/djk1yczb2/image/upload/v1733638386/Screenshot_2024-12-08_113712-removebg-preview_k7tcdv.png" 
          alt="Magnesium" 
          className="vitamin-img" 
        />
      </div>
      <div className="vitamins-section-container">
        <div className="vitamins-section-inner">
          <h4>Hyaloronic Acid</h4>
          <p>For smooth, suffle and soft skin!</p>
        </div>
        <div className="vitamin-btn">
          <p>SEE MORE</p>
        </div>
        <img src="https://res.cloudinary.com/djk1yczb2/image/upload/v1733638380/Screenshot_2024-12-08_113713-removebg-preview_ftxqxt.png" 
          alt="Hyaloronic Acid" 
          className="vitamin-img" 
        />
      </div>
      <div className="vitamins-section-container">
        <div className="vitamins-section-inner">
          <h4>Lactovacillus</h4>
          <p>Invigorate your gut microbiome</p>
        </div>
        <div className="vitamin-btn">
          <p>SEE MORE</p>
        </div>
        <img src="https://res.cloudinary.com/djk1yczb2/image/upload/v1733638369/Screenshot_2024-12-08_113714-removebg-preview_bdpt7m.png" 
          alt="Lactovacillus" 
          className="vitamin-img" 
        />
      </div>
      <div className="last">
        <div className="last-1"></div>
        <div className="last-2"></div>
      </div>
     </section>

     {/* News Section */}
     <section className="news-section">
      <div className="news-top-section">
        <p>OUR BLOG</p>
        <h2>Latest News</h2>
      </div>
      <div className="news-bottom-section">
        <div className="news-section-container large">
          <span className="date-tag">20 APR</span>
          <p className="news-text">The Covid-19 Epidemic 2022 Is Back</p>
        </div>
        <div className="news-section-container small">
          <span className="date-tag">20 APR</span>
          <p className="news-text">The Covid-19 Epidemic 2022 Is Back</p>
        </div>
        <div className="news-section-container large">
          <span className="date-tag">20 APR</span>
          <p className="news-text">The Covid-19 Epidemic 2022 Is Back</p>
        </div>
        <div className="news-section-container small sm-device">
          <span className="date-tag">20 APR</span>
          <p className="news-text">The Covid-19 Epidemic 2022 Is Back</p>
        </div>
        <div className="news-section-container-medicine small">
          <span className="date-tag">20 APR</span>
          <p className="news-text">The Covid-19 Epidemic 2022 Is Back</p>
        </div>
        <div className="news-section-container-medicine large lg-device">
          <p className="news-text">The Covid-19 Epidemic 2022 Is Back</p>
        </div>
        <div className="news-section-container-medicine small">
          <span className="date-tag">20 APR</span>
          <p className="news-text">The Covid-19 Epidemic 2022 Is Back</p>
        </div>
        <div className="news-section-container-medicine large lg-device">
          <span className="date-tag">17 MAR</span>
          <p className="news-text">The Covid-19 Epidemic 2022 Is Back</p>
        </div>
      </div>
     </section>

     {/* Footer Section */}
     <footer className="footer-section">
        <div className="address-section">
          <div className="address-details">
            <FaPhoneVolume className="address-icon" />
            <div className="call-details">
              <p className="address-text">Phone Number</p>
              <p className="address-number">+974 3118 1843</p>
            </div>
          </div>
          <div className="address-details">
            <MdMarkEmailRead className="address-icon" />
            <div className="call-details">
              <p className="address-text">Email Address</p>
              <p className="address-number">Elbrithcqhr@gmail.com</p>
            </div>
          </div>
          <div className="address-details">
            <FaMapMarkerAlt className="address-icon" />
            <div className="call-details">
              <p className="address-text">Office Location</p>
              <p className="address-number">Ambassador Street, Zone 61, </p>
            </div>
          </div>
        </div>
        <div className="social-media-section">
          <img src="https://res.cloudinary.com/djk1yczb2/image/upload/v1733649518/1538732227413_l1ojiz.jpg" 
            alt="company logo" 
            className="company-logo" 
          />
          <p className="company-text">Your health, physical and emotional well-being is important to us. We are always by your side and have made it even easier for you to find the necessary vitamins.</p>
        </div>
        <div className="location-last-text">
          <ImLocation2 className="location-icon" />
          <p className="location-text">Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051</p>
        </div>
     </footer>
  </div>
)

export default App;