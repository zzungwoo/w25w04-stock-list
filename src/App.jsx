import React from 'react'
import TickerCard from './TickerCard'

const stocks = [
  { ticker: 'NVDA', name: '엔비디아', currentPrice: 178.43, previousClose: 181.40 },
  { ticker: 'TSLA', name: '테슬라', currentPrice: 425.85, previousClose: 439.95 },
  { ticker: 'GOOGL', name: '알파벳', currentPrice: 251.66, previousClose: 253.22 },
//  { ticker: '005930.KS', name: '삼성전자', currentPrice: 85400, previousClose: 84700 },
]

function App() {
  return (
    <div>
      <h1>오늘의 주식 시세</h1>
      <div>
        {
          stocks.map(stock => (
            <TickerCard 
              key={stock.ticker} 
              ticker={stock.ticker} 
              name={stock.name} 
              currentPrice={stock.currentPrice} 
              previousClose={stock.previousClose}
            />
          ))
        }
      </div>
    </div>
  )
}



export default App