import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolio, onSell}) {

  const portfolioElements = portfolio.map(stock => (
    <Stock 
      key={stock.id}
      id={stock.id}
      name={stock.name}
      price={stock.price}
      onClick={onSell}
    />
  ));


  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioElements}
    </div>
  );
}

export default PortfolioContainer;
