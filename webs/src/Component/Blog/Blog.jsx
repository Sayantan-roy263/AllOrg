import React from "react";
import "./Blog.css";

export default function Blog() {
  return (
    <>
      <section className="blog-banner">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12">
              <div className="blog-head">
              <h3>Blog</h3>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      <section className="blog-gallery min-vh-100">
        <div className="container">
          <div className="row gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3">
            <div className="col">
              {/* <div className="blog-mater"> */}
              <img src="./image/blog-1.jpg" alt="..."/>
              <h5>buy fresh fruits and vegetables online</h5>
              <p>Fresh fruits and vegetables are buy online. Allorg serves the people with best quality of fruits and vegetables....</p>
              {/* </div> */}
            </div>
            <div className="col">
              <img src="./image/blog-2.jpg" alt="..."/>
              <h5>improve the online shopping experience</h5>
              <p>All Org latest trends and ideas for the improvement the shopping online experience for the customer.....</p>
            </div>
            <div className="col">
              <img src="./image/blog-3.jpg" alt="..."/>
              <h5>reasons for online grocery ordering and delivery</h5>
              <p>All Org plays a crucial role in ordering and delivery in a convenience and quick delivery of order.....</p>
            </div>
            <div className="col">
              <img src="./image/blog-4.jpg" alt="..."/>
              <h5>grocery order and delivery online better </h5>
              <p>Online grocery shopping where one can get quality products for reasonable prices from most reputed online shop.....</p>
            </div>
            <div className="col">
              <img src="./image/blog-5.jpg" alt="..."/>
              <h5>online food ordering and delivery services are beneficial</h5>
              <p>Customers can buy anything from anywhere at very low rate. One easy click to order food from online food.....</p>
            </div>
            <div className="col">
              <img src="./image/blog-6.jpg" alt="..."/>
              <h5>customers choose grocery delivery options for convenient shopping</h5>
              <p>There are many benefits of ordering food online from AllOrg as it provides a wide variety of products offering.....</p>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="blog-card">
        <div className="container-fluid">
          <div className="blog-row">
          <div className="col">
            <div className="crd3">
              <div className="inner">
                <img src="image/traditional.jpg" alt="..." />
              </div>
              <h5 className="crd3-title">experience the exxence of traditional cuisine</h5>
              <p className="crd3-text">
                Traditional food is important to culture for several reasons. Traditional food
                is often deeply rooted in a cummunity's history, heritage, and customs. It reflects
                the unique flavors, ingredients, and cooking techniques that...
              </p>
              
            </div>
            </div>
            <div className="col">
            <div className="crd3">
              <div className="inner">
                <img src="image/vegetarian.jpg" alt="..." />
              </div>
              <h5 className="crd3-title">discover the allure of our vegetarian menu options</h5>
              <p className="crd3-text">
                Vegetarian menu have been played an important role in Indian Ziaka. The vegetable 
                menus are deep rooted in different parts of our country. Use of veges in played an
                vital role in Indian dishes....
              </p>
            </div>
            </div>
            <div className="col">
            <div className="crd3">
              <div className="inner">
                <img src="image/vegetable-soup.jpg" alt="..." />
              </div>
              <h5 className="crd3-title">discover the vegetable soup</h5>
              <p className="crd3-text"></p>
            </div>
            </div>
            <div className="col">
            <div className="crd3">
              <div className="inner">
                <img src="image/sweets.jpg" alt="..." />
              </div>
              <h5 className="crd3-title">a fantastic sweet dish preparation</h5>
              <p className="crd3-text"></p>
            </div>
            </div>
            
          
        </div>
        <div className="blog-row">
          <div className="col">
            <div className="crd3">
              <div className="inner">
                <img src="image/vegetables.jpg" alt="..." />
              </div>
              <h5 className="crd3-title">use of fresh vegetables and fruits</h5>
              <p className="crd3-text">
                Vegetables and fruits are available at very low rate with high nutritious value.
                All are grown with special care. No preservetives are used. Even organic fertilizer are used... 
              </p>
            </div>
            </div>
            <div className="col">
            <div className="crd3">
              <div className="inner">
                <img src="image/deserts1.jpg" alt="..." />
              </div>
              <h5 className="crd3-title">satisfy your sweet tooth with our dessert creations</h5>
              <p className="crd3-text">
                Presence of sweets and desserts are binded in Indian thali. It is our tradition to end our meal with some sweets. Enjoy dessert in a bowl or on a plate, smell it before
                you take the first bite, bring to your mouth.... 
              </p>
            </div>
            </div>
            <div className="col">
            <div className="crd3">
              <div className="inner">
                <img src="image/chaats.jpg" alt="..." />
              </div>
              <h5 className="crd3-title">a spicy chaat as per indian flavour</h5>
              <p className="crd3-text">
                Chats plays a significant effect in Indian diet. The chaats are mixture of potato pieces crisp fried bread dahi vada or dahi bhalla, gram or chickpeas and tangy-salty spices
                with sour Indian chili and saunth.... 
              </p>
            </div>
            </div>
            <div className="col">
            <div className="crd3">
              <div className="inner">
                <img src="image/salad.jpg" alt="..." />
              </div>
              <h5 className="crd3-title">a healthy and nutritious salad for the indians</h5>
              <p className="crd3-text">
                The most nutritious are salad greens. And the deep, vibrant color of spinach hints at its healthy nutritional profile.
                It always bursting with nutritious ingredients, delicious falvours and plenty of texture.....
              </p>
            </div>
            </div>
            
          
        </div>
        </div>
      </section> */}
    </>
  );
}
