document.getElementById("smokingCalculator").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const packPrice = parseFloat(document.getElementById("packPrice").value);
    const packsPerDay = parseFloat(document.getElementById("packsPerDay").value);
    const timePeriod = parseFloat(document.getElementById("timePeriod").value);
  
    if (isNaN(packPrice) || isNaN(packsPerDay) || isNaN(timePeriod)) {
      document.getElementById("result").innerText = "لطفاً تمامی مقادیر را به درستی وارد کنید.";
      return;
    }
  
    const totalCost = packPrice * packsPerDay * timePeriod;
  
    document.getElementById("result").innerText = `هزینه کل سیگار کشیدن در این مدت: ${totalCost.toLocaleString()} تومان`;
  });