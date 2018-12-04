function maxStockProfit(arr) {
  var maxProfit = -1;
  var buyPrice = 0;
  var sellPrice = 0;
  var changeable = true;

  for(var i=0; i<arr.length; i++) {
    if(changeable) buyPrice = arr[i];
    sellPrice = arr[i+1];

    if(buyPrice > sellPrice) {
      changeable = true;
    } else {
      var tempProfit = sellPrice - buyPrice;
      if(tempProfit > maxProfit) maxProfit = tempProfit;
      changeable = false;
    }
  }

  return maxProfit;
}

maxStockProfit([10, 18, 4, 5, 9, 6, 16, 12])