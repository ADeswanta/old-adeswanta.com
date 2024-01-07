export default function numberToWord(num) {
  const single = [ "Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine" ];
  const double = [ "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen" ];
  const below = {
    2: "Twenty",
    3: "Thirty",
    4: "Forty",
    5: "Fifty",
    6: "Sixty",
    7: "Seventy",
    8: "Eighty",
    9: "Ninety",
  }

  if (num < 10) {
      return single[num];
  } else if (num >= 10 && num < 20) {
      return double[num % 10];
  } else if (num < 100) {
      if (num % 10 == 0)
        return below[Math.floor(num / 10)];
      else
        return [below[Math.floor(num / 10)], single[num % 10]].join(" ");
  } else {
      return "unknown";
  }
}
