export function formatPrice(price: number, decimalPlaces = 0) {
  const lakSymbol = "₭";
  return price
    ? price
        .toLocaleString("en-US", {
          style: "currency",
          currency: "LAK",
          currencyDisplay: "symbol",
          minimumFractionDigits: decimalPlaces,
        })
        .replace("LAK", lakSymbol)
    : "";
}
