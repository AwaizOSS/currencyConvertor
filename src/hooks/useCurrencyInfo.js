// name is not jsx because we're not returning jsx

import { useEffect, useState } from "react";

export default function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`
    )
      .then((x) => x.json())
      .then((y) => setData(y[currency]));
  }, [currency]);
  return data;
}
