import React from "react";
import { useState, useEffect } from "react";

function useCurrencyExchangeInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log("data check ", data);
        setData(res[currency]);
      })

      .catch((error) => {
        console.log("Error Catching", error);
      });

    console.log("data check ", data);
  }, [currency]);

  return data;
}

export default useCurrencyExchangeInfo;
