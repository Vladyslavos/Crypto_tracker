import React from "react";
import "./Coin.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ICoin } from "../../models/models";
import { Link } from "react-router-dom";
import DOMPurify from "isomorphic-dompurify";
import BackToTopBtn from "../ToTopBtn/ToTopBtn";
import { motion } from "framer-motion";
import { textAnimation } from "../../animation/textAnimation";

export default function Coin() {
  const params = useParams();
  const [coin, setCoin] = React.useState<ICoin>({});
  const url: string = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

  React.useEffect(() => {
    fetchCoin();
  }, []);
  const fetchCoin = async function () {
    try {
      const response = await axios.get<ICoin>(url);
      if (response) {
        setCoin(response.data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Link to={"/"}>
        <button className="back">Back</button>
      </Link>
      <motion.div
        className="coin-container"
        initial="hidden"
        whileInView="visible"
        custom={1}
        variants={textAnimation}
        viewport={{ once: true }}
      >
        <div className="wrapper-name">
          <h1>{coin.name?.toLocaleString()}</h1>
        </div>
        <motion.div
          className="wrapper"
          initial="hidden"
          whileInView="visible"
          custom={2}
          variants={textAnimation}
          viewport={{ once: true }}
        >
          <div className="rank">
            <span className="rank-info">Rank#{coin.market_cap_rank}</span>
          </div>
          <div className="info">
            <div className="coin-heading">
              {coin.image ? (
                <img src={coin.image.small} alt={`${params.coinId}-symbol`} />
              ) : null}
              <p>{coin.name}</p>
              <p>{coin.symbol?.toUpperCase()}/USD</p>
            </div>
            <div className="coin-price">
              {coin.market_data?.current_price ? (
                <h2>{coin.market_data.current_price.usd.toLocaleString()}$</h2>
              ) : null}
            </div>
          </div>
        </motion.div>
        <motion.div
          className="wrapper"
          initial="hidden"
          whileInView="visible"
          custom={3}
          variants={textAnimation}
          viewport={{ once: true }}
        >
          <table>
            <thead>
              <tr>
                <th>1h</th>
                <th>24h</th>
                <th>7d</th>
                <th className="fourteen-days">14d</th>
                <th className="thirty-days">30d</th>
                <th className="hide-mobile">1yr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {coin.market_data?.price_change_percentage_1h_in_currency.usd}
                </td>
                <td>
                  {
                    coin.market_data?.price_change_percentage_24h_in_currency
                      .usd
                  }
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_7d_in_currency.usd}
                </td>
                <td className="fourteen-days">
                  {
                    coin.market_data?.price_change_percentage_14d_in_currency
                      .usd
                  }
                </td>
                <td className="thirty-days">
                  {
                    coin.market_data?.price_change_percentage_30d_in_currency
                      .usd
                  }
                </td>
                <td className="hide-mobile">
                  {coin.market_data?.price_change_percentage_1y_in_currency.usd}
                </td>
              </tr>
            </tbody>
          </table>
        </motion.div>
        <motion.div
          className="wrapper"
          initial="hidden"
          whileInView="visible"
          custom={4}
          variants={textAnimation}
          viewport={{ once: true }}
        >
          <div className="stats">
            <div className="left">
              <div className="row">
                <h4>Lowest value in 24h:</h4>
                <span>{coin.market_data?.low_24h.usd}$</span>
              </div>
              <div className="row">
                <h4>Highest value in 24h:</h4>
                <span>{coin.market_data?.high_24h.usd}$</span>
              </div>
            </div>
            <div className="right">
              <div className="row">
                <h4>Market Capitalization:</h4>
                <span>{coin.market_data?.market_cap.usd}$</span>
              </div>
              <div className="row">
                <h4>Circulating Supply:</h4>
                <span>{coin.market_data?.circulating_supply}</span>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="wrapper"
          initial="hidden"
          whileInView="visible"
          custom={4}
          variants={textAnimation}
          viewport={{ once: true }}
        >
          <div className="about">
            <h2>About {coin.name}</h2>
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  coin.description ? coin.description.en : ""
                ),
              }}
            ></p>
          </div>
        </motion.div>
      </motion.div>
      <BackToTopBtn />
    </>
  );
}
