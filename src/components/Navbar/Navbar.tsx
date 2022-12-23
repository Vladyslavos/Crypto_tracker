import React from "react";
import "./Navbar.css";
import ada from "../../assets/icons/ada_cardano_icon.png";
import btc from "../../assets/icons/bitoin_btc_coin_crypto_icon.png";
import tron from "../../assets/icons/coin_trn_tron_icon.png";
import ltc from "../../assets/icons/LTC.png";
import dash from "../../assets/icons/dash.png";
import { motion } from "framer-motion";
import { textAnimation } from "../../animation/textAnimation";

interface INavbarProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export default function Navbar(props: INavbarProps) {
  const { handleChange, value } = props;
  return (
    <motion.div
      className="navbar"
      initial="hidden"
      whileInView="visible"
      custom={1}
      variants={textAnimation}
      viewport={{ once: true }}
    >
      <div className="search-box">
        <div className="container-2">
          <span className="icon">
            <i className="fa fa-search"></i>
          </span>
          <input
            type="search"
            id="search"
            onChange={handleChange}
            value={value}
            placeholder={"Search coins..."}
          />
        </div>
      </div>
      <div className="icon-coins">
        <img src={ada} alt={"crypto-coin"} className={"indiv-img"} />
        <img src={ltc} alt={"crypto-coin"} className={"indiv-img"} />
        <img src={tron} alt={"crypto-coin"} className={"indiv-img"} />
        <img src={btc} alt={"crypto-coin"} className={"indiv-img"} />
        <img src={dash} alt={"crypto-coin"} className={"indiv-img"} />
      </div>
      <div className="api-attribution hide-attribution">
        <p>Data from CoinGecko</p>
        <p>
          Created by
          <span>
            <a href="https://github.com/Vladyslavos" target={"_blank"}>
              Vladyslavos
            </a>
          </span>
        </p>
      </div>
    </motion.div>
  );
}
