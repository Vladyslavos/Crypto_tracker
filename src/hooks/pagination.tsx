import React from "react";
import useCoins from "./list";

export default function usePagination() {
  const { filteredCoins } = useCoins();
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [coinsPerPage, setCoinsPerPage] = React.useState<number>(10);

  const lastCoinIndex = currentPage * coinsPerPage;
  const firstCoinIndex = lastCoinIndex - coinsPerPage;
  const currentCoin = filteredCoins.slice(firstCoinIndex, lastCoinIndex);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);

  return {
    currentCoin,
    coinsPerPage,
    paginate,
    currentPage,
    setCurrentPage,
    firstCoinIndex,
    lastCoinIndex,
    nextPage,
    prevPage,
  };
}

/*
 const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [coinsPerPage, setCoinsPerPage] = React.useState<number>(10);
  const lastCoinIndex = currentPage * coinsPerPage;
  const firstCoinIndex = lastCoinIndex - coinsPerPage;
  const currentCoin = filteredCoins.slice(firstCoinIndex, lastCoinIndex);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);
  */
