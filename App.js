import React from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const MyComponent = () => {
  return (
    <div>
        <header>
         <nav className="navbar ">
            <div className="logo border12">
                <a href="soundofsilence.html" target="_parent">
                    <img src="CRAFTY.png " className="mlogo" alt="Logo 1"/>
                  </a>
            </div>
            
            {/* <!-- categories  --> */}
            <div className="cata border12">
                <a href="categories.html" target="_blank">
                <FontAwesomeIcon icon="fa-solid fa-list" /></a>
                    {/* <p style={{font-size: 21px; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;" >Categories</p> */}
            </div>
            {/* <!-- search --> */}
            <div className="bgr">
                <input type="search" className="bgl" placeholder="Search anything..."/>
                <div className="searchicon">
                    <button type="submit" className="bgl">Search</button>
                </div>
             </div>
             {/* <!-- the deliver to thing --> */}
            <div className="nav-address">
                <p className="add-deliver">Deliver to</p>
                <div className="addressicon">
                <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                 </div>
            </div>
             {/* <!-- other icons  --> */}
               <div className="profileicon border12">
                <a href="signup.html" target="_blank"><i className="fa-solid fa-user" style={{color: '#000000'}}></i>
                </a>
               </div>
               <div className="kartlogo border12">
                <a href="cart.html" target="_blank"><i className="fa-solid fa-cart-shopping" style={{color: '#000000'}}></i></a>
               </div>

               {/* <!-- seller things --> */}
               <div className="plus-icon border12">
                <a href="seller.html" target="_blank">
                    <i className="fa-solid fa-arrow-up-from-bracket" style={{color:' #000000'}}></i>
                </a>
               </div>
        </nav>

            
        {/* </div> */}
    </header>
    {/* <!-- Categories Section with Circular Images --> */}
<section className="categories">
    <div className="category category-box">
        <a href="jewelry.html">
            <img src="https://i.etsystatic.com/17719287/r/il/411e0a/2504474000/il_680x540.2504474000_3nqj.jpg" alt="Accessories"/>
            <p>Accessories</p>
        </a>
        
    </div>
    <div className="category category-box"> 
        <a href="clothing.html">
            <img src="https://i.etsystatic.com/42228092/c/1851/1470/26/199/il/fc6acf/6224531703/il_340x270.6224531703_azpx.jpg" alt="Paintings"/>
            <p>Paintings</p>
        </a>
        
    </div>
    <div className="category category-box">
        <a href="home-living.html">
            <img src="https://i.etsystatic.com/18961194/c/1984/1577/262/135/il/115243/4776017719/il_340x270.4776017719_e0me.jpg" alt="Furniture"/>
        <p className="starman">Furniture</p>
        </a>
        
    </div>
    <div className="category category-box">
        <a href="wedding-party.html">
            <img src="https://i.etsystatic.com/49207736/c/2250/1786/0/561/il/3a4505/6028171063/il_340x270.6028171063_q1qn.jpg" alt="Room Decor"/>
            <p className="starman">Room Decor</p></a>
    </div>
    <div className="category category-box">
        <a href="toys-entertainment.html">
            <img src="https://i.etsystatic.com/44863415/r/il/c9eeca/5969111526/il_794xN.5969111526_3bpa.jpg" alt="Services"/>
        <p className="starman">Services</p></a>
            
    </div>
</section>

<section className="banners">
    <div className="banner"><a href="vyg.html" target="_blank">
      <img src="1.png" alt="Banner 1"/></a>
      <h2>Banner 1 Title</h2>
      <p>Banner 1 Description</p>
    </div>
    <div className="banner">
        <a href="craftysellers.html" target="_blank">
      <img src="2.png" alt="Banner 2"/></a>
      <h2>Banner 2 Title</h2>
      <p>Banner 2 Description</p>

    </div>
    
  </section>

  
<div className="shopsection">
        <div className="bigbox1 boxx">
            <p className="textinboxxx">Revamp Your Home In Style</p>
            <a href="homedecor.html" target="_blank">
                <img src="https://m.media-amazon.com/images/I/818yDyo4ciL._AC_UL480_FMwebp_QL65_.jpg" alt="filler" className="boxximg"/>
            
            <button className="boxx-button">Shop Home Decor</button></a>
        </div>
        <div className="bigbox1 boxx">
            <p className="textinboxxx">Upto 30% off in Pottery</p>
            <a href="homedecor.html" target="_blank">
                <img src="https://m.media-amazon.com/images/I/71j8by4bU0L._AC_UL480_FMwebp_QL65_.jpg"alt="filler" className="boxximg"/>
            
            <button className="boxx-button">Shop Pots</button></a>
        </div>
        <div className="bigbox1 boxx">
            <p className="textinboxxx">Discover new Jwellery</p>
            <a href="homedecor.html" target="_blank">
                <img src="https://i.etsystatic.com/28099081/r/il/cd842a/2985970420/il_340x270.2985970420_a0sb.jpg" alt="filler"className="boxximg"/>
            
            <button className="boxx-button">Shop Handmade Jwellery</button></a>
        </div>
        <div className="bigbox1 boxx">
            <p className="textinboxxx">Lokking for Custom armours?</p>
            <a href="homedecor.html" target="_blank">
                <img src="https://i.etsystatic.com/35882827/r/il/cd5f18/5362074699/il_600x600.5362074699_9fh5.jpg" alt="filler"className="boxximg"/>
            
            <button className="boxx-button">Browse Custom Costumes </button></a>
        </div>
        

    </div>
    

    
<footer>
    <div className="footer-container">
      <div className="footer-section">
        <h3>Company Information</h3>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Careers</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Customer Service</h3>
        <ul>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Shipping & Returns</a></li>
          <li><a href="#">Order Tracking</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Follow Us</h3>
        <ul>
          <li><a href="#"><i className="fab fa-facebook"></i></a></li>
          <li><a href="#"><i className="fab fa-twitter"></i></a></li>
          <li><a href="#"><i className="fab fa-instagram"></i></a></li>
        </ul>
      </div>
    </div>
    <p className="copyright">&copy; 2023 Your E-commerce Site. All rights reserved.</p>
  </footer>

  </div>
  );
};

export default MyComponent;
