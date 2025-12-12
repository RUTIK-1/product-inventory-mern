import React from "react";
import Card from "./Card";
import iphone16 from "../assets/iphone16.jpeg";
import MacBook from "../assets/MacBook Pro.jpg";
import pen from "../assets/pen.jpeg";


function Home() {
  return (
    <div  className="products-grid">
      <Card
        title="MacBook Pro"
        description="High performance laptop for creators."
        category="Electronics"
        price="55000"
        image={MacBook}
      />

      <Card
        title="iphone 16"
        description="High performance mobile for creators"
        category="Electronics"
        image={iphone16}
        price="25000"
      />

      <Card
        title="pen"
        description="Learn React with hands-on practice."
        category="stationery"
        image={pen}
        price="20"
      />



    </div>
  );
}

export default Home;
