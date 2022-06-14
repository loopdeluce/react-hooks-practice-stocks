import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, onBuy}) {
  const stockArray = stocks.map(stock => (
    <Stock 
      name={stock.name}
      price={stock.price}
      id={stock.id}
      onClick={onBuy}
      key={stock.id}
    />)
  );

  return (
    <div>
      <h2>Stocks</h2>
      {stockArray}
    </div>
  );
}

export default StockContainer;
