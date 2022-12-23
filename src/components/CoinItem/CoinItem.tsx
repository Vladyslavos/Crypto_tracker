import React from "react";
import "./CoinItem.css";
import { ICoins } from "../../models/models";

interface ICoinItemProps {
  coins: ICoins;
}

export default function CoinItem(props: ICoinItemProps) {
  const { coins } = props;
  return (
    <div className="coin-row">
      <div className="coin-logo">
        <h3>{coins.market_cap_rank}</h3>
        <img src={coins.image} alt="crypto" />
      </div>
      <div>
        <h3>{coins.name}</h3>
      </div>
      <div>
        <p className="coin-price">${coins.current_price.toFixed(3)}</p>
      </div>
      <div>
        <p className="coin-volume ">${coins.total_volume.toLocaleString()}</p>
      </div>
      <div>
        {props.coins.price_change_24h < 0 ? (
          <p className="coin-percent red hide-mobile">
            {coins.price_change_24h.toFixed(2)}%
          </p>
        ) : (
          <p className="coin-percent green hide-mobile">
            {coins.price_change_24h?.toFixed(4)}%
          </p>
        )}
      </div>
      <div>
        <p className="coin-marketcap hide-mobile">
          ${coins.market_cap.toLocaleString()}
        </p>
      </div>
    </div>
  );
}
