import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Table } from 'reactstrap';

const Coines = () => {

  const[coins, setCoins] = useState([]);

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false")
      .then(res => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch(error => console.log("Error"));
  },[]);

  return (
    <div className='Coin'>
      <div className="container">
        <div className="row">
          <Col md='12'>
            <Table className='mt-5' dark>
              <thead>
                <tr>
                  <th>Crypto Name</th>
                  <th>Current price change</th>
                  <th>Market cap change</th>
                  <th>Market cap rank</th>
                </tr>
              </thead>
              {
                coins.map(coin => {
                  return(
                    <tbody key={coin.id}>
                      <tr>
                        <th>
                          <img className='cryptoImage' src={coin.image} alt="Crypto image" />
                          {coin.name}
                        </th>
                        <td>$ {coin.current_price}</td>
                        {coin.market_cap_change_percentage_24h < 0 ? (
                          <td className='text-danger'>
                            {coin.market_cap_change_percentage_24h.toFixed(2)}%
                          </td>
                        ) : (
                          <td className='green'>
                            {coin.market_cap_change_percentage_24h.toFixed(2)}%
                          </td>
                        )}
                        <td>{coin.market_cap_rank}</td>
                      </tr>
                    </tbody>
                  )
                })
              }
            </Table>
          </Col>
        </div>
      </div>
    </div>
  )
};

export default Coines;
