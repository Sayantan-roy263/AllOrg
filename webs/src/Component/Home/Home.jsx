import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset_redirectHome } from "../../Redux/AuthSlice";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  const { redirectHome } = useSelector((state) => state.content);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(reset_redirectHome(null));
  }, [redirectHome]);
  return (
    <>
      <section className="form-fill">
        <div className="container-md">
          <div className="input-group col-11 mb-5 mt-5 mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Search your product here!"
              // aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                search
              </button>
            </div>
            
          </div>
          
        </div>
      </section>

      <section className="carousal-home">
        {/* <div className="container-fluid"> */}
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner carousal-img-size">
            <div className="carousel-item active">
              <img
                src="../image/banner-2 copy.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                {/* <h5>Having All Types Of Products World Of Grocery</h5> */}
                {/* <p>
                  Some representative placeholder content for the first slide.
                </p> */}
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="../image/Banner-a.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                {/* <h5>100% Organic here</h5> */}
                {/* <p>
                  Some representative placeholder content for the second slide.
                </p> */}
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="../image/Banner-b.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                {/* <h5>Get The Best Quality Products At The Lowest Prices</h5> */}
                {/* <p>
                  Some representative placeholder content for the third slide.
                </p> */}
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-target="#carouselExampleCaptions"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-target="#carouselExampleCaptions"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </button>
        </div>
        {/* </div> */}
      </section>
      <section className="home-item position-relative w-100">
        <h3>featured product</h3>
        <div className="container">
          <div className="content">
            {/* <div className=""> */}

            <div className="card" style={{ width: "18rem" }}>
              <img src="../image/tide.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="card-text">
                  <h7>Detergent</h7>
                  
                  {/* <p>Rs. 40</p> */}
                </div>
                <button>Buy</button>
                 {/* <i className="fa-regular fa-heart fa-2x "></i>
                 <i className="fa-solid fa-cart-shopping fa-2x"></i> */}
                 {/* <i className="fa-solid fa-eye "></i> */}
                
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img src="../image/pastry.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="card-text">
                 {/* <i className="fa-solid fa-heart fa-2x"></i>
                 <i className="fa-solid fa-cart-shopping fa-2x"></i> */}
                <h7>Pastry</h7>
                </div>
                <button>Buy</button>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img src="../image/chocolate2.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="card-text">
                 {/* <i className="fa-solid fa-heart fa-2x"></i>
                 <i className="fa-solid fa-cart-shopping fa-2x"></i> */}
                <h7>Chocolate</h7>
                </div>
                <button>Buy</button>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img src="../image/chips1.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="card-text">
                 {/* <i className="fa-solid fa-heart fa-2x"></i>
                 <i className="fa-solid fa-cart-shopping fa-2x"></i> */}
                <h7>Chips</h7>
                </div>
                <button>Buy</button>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img src="../image/kismis.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="card-text">
                 {/* <i className="fa-solid fa-heart fa-2x"></i>
                 <i className="fa-solid fa-cart-shopping fa-2x"></i> */}
                <h7>Raisin</h7>
                </div>
                <button>Buy</button>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img src="../image/soan papdi.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="card-text">
                 {/* <i className="fa-solid fa-heart fa-2x"></i>
                 <i className="fa-solid fa-cart-shopping fa-2x"></i> */}
                <h7>Soan Papdi</h7>
                </div>
                <button>Buy</button>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img src="../image/biscuit.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="card-text">
                 {/* <i className="fa-solid fa-heart fa-2x"></i>
                 <i className="fa-solid fa-cart-shopping fa-2x"></i> */}
                <h7>Biscuit</h7>
                </div>
                <button>Buy</button>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img src="../image/mustard seed.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="card-text">
                 {/* <i className="fa-solid fa-heart fa-2x"></i>
                 <i className="fa-solid fa-cart-shopping fa-2x"></i> */}
                <h7>Mustard Seed</h7>
                </div>
                <button>Buy</button>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img src="../image/kaju (1).jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="card-text">
                 {/* <i className="fa-solid fa-heart fa-2x"></i>
                 <i className="fa-solid fa-cart-shopping fa-2x"></i> */}
                <h7>Cashew</h7>
                </div>
                <button>Buy</button>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img src="../image/spices.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="card-text">
                 {/* <i className="fa-solid fa-heart fa-2x"></i>
                 <i className="fa-solid fa-cart-shopping fa-2x"></i> */}
                <h7>Spice</h7>
                </div>
                <button>Buy</button>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img src="../image/colddrinks.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="card-text">
                 {/* <i className="fa-solid fa-heart fa-2x"></i>
                 <i className="fa-solid fa-cart-shopping fa-2x"></i> */}
                <h7>Cold Drinks</h7>
                </div>
                <button>Buy</button>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img src="../image/soap1.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="card-text">
                 {/* <i className="fa-solid fa-heart fa-2x"></i>
                 <i className="fa-solid fa-cart-shopping fa-2x"></i> */}
                <h7>Soap</h7>
                </div>
                <button>Buy</button>
              </div>
            </div>
            

            {/* </div> */}
          </div>
        </div>
      </section>
      <section className="home-about position-relative w-100">
      <h3>About us</h3> 
      <div className="container-fluid">
        <div className="about-product-row">
        <div className="col">
            <div className="card-about">
              <div className="inner">
              <img
                src="../../image/fruits3.jpg"
                className="card-about-img"
                alt="..."
              />
              </div>
              <div className="card-about-body">
                <h5>Fruits</h5>
                <p className="card-about-text">
                 Fruits are grown in proper conditions. All types of fruits are available
                 in reasonable rate. 
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card-about">
              <div className="inner">
              <img
                src="../../image/vegetables1.jpg"
                class="card-about-img"
                alt="..."
              />
              </div>
              <div className="card-about-body">
              <h5>Vegetables</h5>
                <p className="card-about-text">
                  Vegatables are grown in proper condition under suitable temperature.
                  Organic fertilizer are used. 
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div className="card-about">
              <div className="inner">
              <img src="../../image/dry-fruits.jpg" class="card-about-img" alt="..." />
              </div>
              <div className="card-about-body">
              <h5>Dry Fruits</h5>
                <p className="card-about-text">
                  All types of dry fruits such as walnuts, almonds, cashew, kismiss,etc. are 
                  available at affordable price.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
      <div className="card-about">
      <div className="inner">
              <img src="../../image/cookies.jpg" class="card-about-img" alt="..." />
              </div>
              <div className="card-about-body">
              <h5>Cookies</h5>
                <p className="card-about-text">
                  All Org has its own cookies brand. These are good quality. Other brand 
                  cookies are also available here.
                </p>
              </div>
            </div>
      </div>
        </div>
      </div> 
      </section>
      <section className="popular-brand position-relative w-100">
        <h3>popular brands</h3>
        <div className="container-fluid">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 justify-content-center align-items-center">
            <div className="col">
               <div className="popular-image">
               <img src="../image/amul.jpg" alt="..."/>
               </div>
                
              </div>
              <div className="col">
              <div className="popular-image">
              <img src="../image/mother.jpg" alt="..."/>
              </div>
            
          </div>
          <div className="col">
          <div className="popular-image">
          <img src="../image/dabur.jpg" alt="..."/>
          </div>
            
          </div>
          <div className="col">
          <div className="popular-image">
          <img src="../image/nestle.jpg" alt="..."/>
          </div>
            
          </div>
          <div className="col">
          <div className="popular-image">
          <img src="../image/patanjali.jpg" alt="..."/>
            </div> 
            
          </div>
          <div className="col">
          <div className="popular-image">
          <img src="../image/britannia.jpg" alt="..."/>
          </div>
            
          </div>
          </div>
        </div>
      </section>
      <section className="home-blog">
        <h3>latest news and blogs</h3>
        <div className="container-fluid">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
            <div className="col">
            {/* <div className="home-img"> */}
            <img src="../image/traditional.jpg " alt="..."/>
            {/* </div>  */}
            <h5>experience the exxence of traditional cuisine</h5>
            <p>Traditional food is important to culture for several reasons. Traditional food
                is often deeply rooted in a cummunity's history, heritage, and customs. It reflects
                the unique flavors, ingredients, and cooking techniques that....</p>         
          
            
            </div>
            <div className="col">
            {/* <div className="home-img"> */}
             <img src="../image/sweets.jpg " alt="..."/>
            
             {/* </div> */}
             <h5>a fantastic sweet dish preparation</h5>
             <p>Sweets are also significant in Indian Culture. Sweets are generally presented during festive occasions or any ceremony.
              It also consider significance of happiness and prosperity.....
            </p>
            </div>
            <div className="col">
            {/* <div className="home-img"> */}
             <img src="../image/deserts1.jpg " alt="..."/>
            
             {/* </div> */}
             <h5>satisfy your sweet tooth with our dessert creations</h5>
             <p>
                Presence of sweets and desserts are binded in Indian thali. It is our tradition to end our meal with some sweets. Enjoy dessert in a bowl or on a plate, smell it before
                you take the first bite, bring to your mouth.... 
              </p>
            </div>
            <div className="col">
            {/* <div className="home-img"> */}
             <img src="../image/chaats1.jpg " alt="..."/>
            
             {/* </div> */}
             <h5>a spicy chaat as per indian flavour</h5>
             <p>Chats plays a significant effect in Indian diet. The chaats are mixture of potato pieces crisp fried bread dahi vada or dahi bhalla, gram or chickpeas and tangy-salty spices
                with sour Indian chili and saunth.... </p>
            </div>
          </div>
        </div>
      </section>
      <section className="gallery position-relative w-100">
        <h3>gallery</h3>
        <div className="container-fluid">
          <div className="content-section">
            <div className="crd5">
              <img src="../image/grocery6.jpg" alt="..."/>
            </div>
            <div className="crd5">
              <img src="../image/grocery13.jpg" alt="..."/>
            </div>
            <div className="crd5">
              <img src="../image/grocery7.jpg" alt="..."/>
            </div>
            <div className="crd5">
              <img src="../image/food.jpeg" alt="..."/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
