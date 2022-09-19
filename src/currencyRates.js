import React from "react";

const useCurrencyRates = () => {
  const multiplierDollar = JSON.parse(localStorage.getItem("usd"));
  const multiplierEuro = JSON.parse(localStorage.getItem("eur"));
  const [messageFromApi, setMessageFromApi] = React.useState("loading");
  const [dateFromApi, setDateFromApi] = React.useState();

  React.useEffect(() => {
   (async () => {
    try {
    const response = await fetch("https://api.exchangerate.host/latest?base=PLN&symbols=EUR,USD,PLN");
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const currencies = await response.json();  
        const timeout = setTimeout(() => {
          localStorage.setItem("usd", JSON.stringify(currencies.rates.USD));
          localStorage.setItem("eur", JSON.stringify(currencies.rates.EUR));
          setDateFromApi(new Date(currencies.date));
          setMessageFromApi("ok");
        }, 3000);
        return () => clearTimeout(timeout);
      } catch (error) {
        if (multiplierDollar && multiplierEuro) {
             const timeout = setTimeout(() => {
                setMessageFromApi("almostError");
              }, 2000);
             const thenTimeout = setTimeout(() => {
                console.error("SERVER UNREACHABLE, I'M USING LOCAL DATA", error);
                setMessageFromApi("almostOk");
              }, 8000);
             return () => clearTimeout(timeout, thenTimeout);
            } else {
              const timeout = setTimeout(() => {
                console.error("SERVER UNREACHABLE", error);
                setMessageFromApi("error");
              }, 2000);
              return () => clearTimeout(timeout);
      }
    }
      })()
  }, []);

  return { multiplierDollar, multiplierEuro, messageFromApi, dateFromApi };
};

export default useCurrencyRates;
