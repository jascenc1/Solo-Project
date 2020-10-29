import React from 'react';
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';

const StockDetails = ({ info, openModal }) => {
  
  const { symbol, name, lastSale, marketCap, ipoYear, sector, industry, summaryQuote } = info;


  const openDetailsModal = (e, stockTicker) => {
    // const top = e.pageY;
    // const left = e.pageX;
    // openModal(stockTicker, { top, left });
    openModal(stockTicker);

  }


  return (
    <article className="stockDetail_container">
      <div className="stockHeadContainer">
          <h3 className="stockName">{name}</h3>
      </div>
      <ul className="stockDetailsList">
        <li className="stockDetail">Ticker: {symbol}<span className="icon"><FAIcon icon={faQuestionCircle} size="xs" style={{color: 'steelBlue'}} onClick={e => openDetailsModal(e,{symbol})} /></span></li> 
        <li className="stockDetail">Closing Price: {lastSale}</li>
        <li className="stockDetail">Market Cap: {marketCap}</li>
        <li className="stockDetail">IPO Year: {ipoYear}</li>
        <li className="stockDetail">Sector: {sector}</li>
        <li className="stockDetail">Industry: {industry}</li>
        <li className="stockDetail">Summary Quote: <a href={summaryQuote}>{summaryQuote}</a></li>
      </ul>
      <button>Remove Stock</button>
    </article>
  );
}

export default StockDetails;
