import React, {useEffect, useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sort, setSort] = useState('');
  const [filter, setFilter] = useState('Tech');

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
    .then(resp => resp.json())
    .then(stockData => setStocks(stockData))
  }, []);

  function handleBuy(stockId){
    const boughtStock = stocks.find(stock => stock.id === stockId);
    const updatedPortfolio = [...portfolio, boughtStock];
    setPortfolio(updatedPortfolio);
  };

  function handleSell(stockId){
    const updatedPortfolio = portfolio.filter(stock => stock.id !== stockId);
    setPortfolio(updatedPortfolio);
  }

  function handleSort(sortValue){
    setSort(sortValue);
  }

  function handleFilter(filterValue){
    setFilter(filterValue);
  }

  const displayStocks = stocks
    .sort((stock1, stock2)=> {
      if (sort === 'Alphabetically'){
        return stock1.name.toLowerCase().localeCompare(stock2.name.toLowerCase());
      } else if (sort === 'Price'){
        return stock1.price - stock2.price;
      } else {
        return 0;
      }
    })
    .filter(stock => stock.type === filter);


  return (
    <div>
      <SearchBar sort={sort} onSort={handleSort} filter={filter} onFilter={handleFilter}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={displayStocks} onBuy={handleBuy}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} onSell={handleSell} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
