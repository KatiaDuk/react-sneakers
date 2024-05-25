import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
  {name: `Man's sneakers Puma X Aka Boku Future Rider`, price: '1200$', image_url: '/img/image_1.jpg'},
  {name: `Man's sneakers Nike Air Max 270`, price: '1000$', image_url: '/img/image_2.png'},
  {name: `Man's sneakers Nike Air Max 270`, price: '1300$', image_url: '/img/image_3.jpg'},
  {name: `Man's sneakers Nike Air Max 270`, price: '1450$', image_url: '/img/image_4.jpg'},
  // {name: `Man's sneakers Nike Air Max 270`, price: '1000$', image_url: '/img/image_5.jpg'},
  // {name: `Man's sneakers Nike Air Max 270`, price: '1210$', image_url: '/img/image_6.jpg'},
  // {name: `Man's sneakers Nike Air Max 270`, price: '1360$', image_url: '/img/image_7.jpg'},
  // {name: `Man's sneakers Nike Air Max 270`, price: '1050$', image_url: '/img/image_8.jpg'},
  // {name: `Man's sneakers Nike Air Max 270`, price: '1550$', image_url: '/img/image_9.jpg'},
  // {name: `Man's sneakers Nike Air Max 270`, price: '1305$', image_url: '/img/image_10.jpg'},
  // {name: `Man's sneakers Nike Air Max 270`, price: '1210$', image_url: '/img/image_11.jpg'},
  // {name: `Man's sneakers Nike Air Max 270`, price: '1070$', image_url: '/img/image_12.jpg'},
];

const App = () => {
  return (
    <div className="wrapper clear">
      <Drawer/>
      <Header/>

      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>All sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Serach" />
            <input type="text" placeholder="Search..." />
          </div>
        </div>

        <div className="d-flex">
          {arr.map((val, index) => (
            <Card 
              title={val.name} 
              price={val.price} 
              image_url={val.image_url}
              key={index}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
