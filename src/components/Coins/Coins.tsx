import React from "react";
import { ICoins } from "../../models/models";
import CoinItem from "../CoinItem/CoinItem";
import "../Coins/Coins.css";
import { Link } from "react-router-dom";
import useCoins from "../../hooks/list";
import ToTopBtn from "../ToTopBtn/ToTopBtn";
import { textAnimation } from "../../animation/textAnimation";
import { motion } from "framer-motion";
import { Audio } from "react-loader-spinner";

interface IPropsCoins {
  coins: ICoins[];
}

export default function Coins(props: IPropsCoins) {
  const { loading } = useCoins();
  const { coins } = props;
  return (
    <>
      {loading && (
        <div className="loader">
          <Audio height="300" width="300" color="#a972cb" ariaLabel="loading" />
        </div>
      )}
      <div>
        <motion.div
          className="coins-wrapper"
          initial="hidden"
          whileInView="visible"
          custom={2}
          variants={textAnimation}
          viewport={{ once: true }}
        >
          <div className="description">
            <h3>#Logo</h3>
            <h3>Name</h3>
            <h3>Current Price</h3>
            <h3 className="coin-volume">Coin Volume</h3>
            <h3 className="hide-mobile">Price Change</h3>
            <h3 className="hide-mobile">Market Cap</h3>
          </div>
        </motion.div>
        <motion.div
          className="coins-wrapper"
          initial="hidden"
          whileInView="visible"
          custom={3}
          variants={textAnimation}
          viewport={{ once: true }}
        >
          {coins.map((coins) => {
            return (
              <React.Fragment key={coins.id}>
                <div className="coins-data">
                  <Link to={`/coin/${coins.id}`}>
                    <CoinItem coins={coins} />
                  </Link>
                </div>
              </React.Fragment>
            );
          })}
        </motion.div>
      </div>
      <ToTopBtn />
    </>
  );
}
{
}
