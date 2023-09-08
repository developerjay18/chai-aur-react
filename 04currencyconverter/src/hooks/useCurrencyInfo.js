import { useState, useEffect } from 'react';

function useCurrencyInfo(currency) {
  let [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error('check internet connection!!');
        } else {
          return res.json();
        }
      })
      .then((response) => {
        setData(response[currency]);
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
