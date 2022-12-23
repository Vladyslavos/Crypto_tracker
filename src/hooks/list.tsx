import React from "react";
import axios from "axios";
import { ICoins } from "../models/models";

export default function useCoins() {
  const url: string = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=600&page=1&sparkline=false`;
  const [coins, setCoins] = React.useState<ICoins[]>([]);
  const [value, setValue] = React.useState<string>("");
  const [loading, setLoading] = React.useState<any>(false);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(value.toLowerCase())
  );

  React.useEffect(() => {
    fetchApi();
  }, []);

  async function fetchApi() {
    try {
      setLoading(true);
      const response = await axios.get<ICoins[]>(url);
      if (response) {
        setCoins(response.data);
        setLoading(false);
      }
    } catch (e) {
      console.error("Error >>>", e);
    }
  }

  return {
    coins,
    handleChange,
    value,
    filteredCoins,
    loading,
  };
}
