import React from "react";
import "./About.css";

export default function About() {
  return (
    <>
      <section className="banner-about">
        <div className="about-container">
          <div className="about-row">
            <div className="col-lg-4">
              <h2>All about us!</h2>
              <p>
                At All Org, we value our customers so much that we have engrained our 
                customer service into our core values. Everything we do stems from our
                desire to make shopping at All Org the best shopping experience you can get
                anywhere. If there is anything we can do to better serve you, please let us know.
                It is logically your local neighbourhood grocery store and operated by Associated 
                Food Store. Here vegetables and fruits are good and healthy quality available. 
                The other products such as fish, meat are best quality. Chocolates and cookies from 
                abroad are available in very affordable rate. 
              </p>
            </div>
            <div className="col-lg-8">
              {/* <div className="image-fluid"> */}
              <img src="../../image/grocery3.jpg" className="img-fluid" alt="..."/>
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
      <section className="About-product">
        <div className="container-fluid">
        <h2>All about our products</h2>
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
          <div className="col">
            <div className="card-about">
              <div className="inner">
              <img src="../../image/meat.jpg" class="card-about-img" alt="..." />
              </div>
              <div className="card-about-body">
              <h5>Meat</h5>
                <p className="card-about-text">
                  All type of meat such as chicken, mutton, etc. are available.
                  Everything are freezed at proper temperature.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card-about">
              <div className="inner">
              <img src="../../image/fish.jpg" class="card-about-img" alt="..." />
              </div>
              <div className="card-about-body">
              <h5>Fish</h5>
                <p className="card-about-text">
                  A variety types of fish i.e. sweet and salty water fishes are available.
                  
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="about-product-row">
          <div class="col">
            <div className="card-about">
              <div className="inner">
              <img src="../../image/egg.jpg" class="card-about-img" alt="..." />
              </div>
              <div className="card-about-body">
              <h5>Egg</h5>
                <p className="card-about-text">
                  All Org has its own poultry farm. Eggs are available there. 
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div className="card-about">
              <div className="inner">
              <img src="../../image/grains.jpg" class="card-about-img" alt="..." />
              </div>
              <div className="card-about-body">
              <h5>Grains</h5>
                <p className="card-about-text">
                  All Org has its store for the storage of grains. All variety of grains are available with high quality.
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
              <img src="../../image/cake.jpg" class="card-about-img" alt="..." />
              </div>
              <div className="card-about-body">
              <h5>Cakes</h5>
                <p className="card-about-text">
                  Cakes are of own brands. Cakes from different countries are available here. 
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="about-product-row">
    <div class="col">
    <div className="card-about">
      <div className="inner">
              <img src="../../image/chocolate.jpg" class="card-about-img" alt="..." />
              </div>
              <div className="card-about-body">
              <h5>Chocolate</h5>
                <p className="card-about-text">
                  Chocolates are available from all over the world. Branded chocolates are available here.
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
    <div class="col">
    <div className="card-about">
      <div className="inner">
              <img src="../../image/icecream.jpg" class="card-about-img" alt="..." />
              </div>
              <div className="card-about-body">
              <h5>Ice-Cream</h5>
                <p className="card-about-text">
                  All types of branded ice-creams are available here. 
                </p>
              </div>
            </div>
    </div>
    <div class="col">
    <div className="card-about">
      <div className="inner">
              <img src="../../image/chips.jpg" class="card-about-img" alt="..." />
              </div>
              <div className="card-about-body">
              <h5>Chips</h5>
                <p className="card-about-text">
                  All types of chips are available here.
                </p>
              </div>
            </div>
    </div>
  </div>
  </div>
      </section>
      <section className="about-service">
        <h2>All about our services</h2>
        <div className="container">
          <div className="content-section">
            <div className="crd2">
              <img src="../image/payment.jpg" alt="..."/>
              <h5>payment</h5>
              <p>All type of payment system is available.</p>
            </div>
            <div className="crd2">
              <img src="../image/stocks.jpg" alt="..."/>
              <h5>stocks and sales</h5>
              <p>New products are available in low rates.</p>
            </div>
            <div className="crd2">
              <img src="../image/Quality-Assurance.jpg" alt="..."/>
              <h5>quality assurance</h5>
              <p>Best quality of products are available with no preservatives available.</p>
            </div>
            <div className="crd2">
              <img src="../image/delivery.jpg" alt="..."/>
              <h5>delivery</h5>
              <p>Delivery is done in 1 hr.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
