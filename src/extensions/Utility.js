const Utility = {
  areAllPropsTruthy: function(obj, exceptions) {
    for (var key in obj) {
      if (!obj[key]) {
        var foundException = false;

        if (exceptions && exceptions.length > 0) {
          for (var i = 0; i < exceptions.length; i++) {
            if (exceptions[i] === key) {
              foundException = true;
              continue;
            }
          }
        }

        if (!foundException) 
          return false;
      }
    }

    return true;
  },
  removeSpaces: function(obj) {
    return String(obj).replace(/\s+/g, "");
  },
  doWithDelay: function(delegate, timeout, time) {
    if (!!timeout) {
      clearTimeout(timeout);
    }

    return setTimeout(function() {
      delegate();
    }, time);
  },
  formatNumber: function(
    amount,
    decimalPlaces,
    fractionSymbol,
    separatorSymbol
  ) {
    var decimalPlaces = isNaN((decimalPlaces = Math.abs(decimalPlaces)))
        ? 2
        : decimalPlaces,
      fractionSymbol = !fractionSymbol ? "." : fractionSymbol,
      separatorSymbol = !separatorSymbol ? "," : separatorSymbol,
      parsedAmount = String(
        parseInt(Math.abs(Number(amount) || 0).toFixed(decimalPlaces))
      ),
      separatorPlaces =
        (separatorPlaces = parsedAmount.length) > 3 ? separatorPlaces % 3 : 0;

    return (
      (amount < 0 ? "-" : "") +
      (separatorPlaces
        ? parsedAmount.substr(0, separatorPlaces) + separatorSymbol
        : "") +
      parsedAmount
        .substr(separatorPlaces)
        .replace(/(\d{3})(?=\d)/g, "$1" + separatorSymbol) +
      (decimalPlaces
        ? fractionSymbol +
          Math.abs(amount - parsedAmount)
            .toFixed(decimalPlaces)
            .slice(2)
        : "")
    );
  },
  formatMoney: function(
    amount,
    decimalPlaces,
    fractionSymbol,
    separatorSymbol,
    currencySymbol
  ) {
    currencySymbol = !currencySymbol ? "$" : currencySymbol;
    return (
      currencySymbol +
      this.formatNumber(amount, decimalPlaces, fractionSymbol, separatorSymbol)
    );
  },
  getDaysLeftInMonth: function() {
    let date = new Date();
    return (
      new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate() -
      date.getDate()
    );
  }
};

export default Utility;
