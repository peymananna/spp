document.getElementById('smokingCalculator').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // دریافت ورودی‌ها
    var packPrice = parseFloat(document.getElementById('packPrice').value);
    var packsPerDay = parseFloat(document.getElementById('packsPerDay').value);
    var timePeriod = parseFloat(document.getElementById('timePeriod').value);

    // محاسبه هزینه
    var totalCost = packPrice * packsPerDay * timePeriod;
    
    // نمایش نتیجه
    document.getElementById('result').innerHTML = `هزینه سیگار کشیدن شما برای ${timePeriod} روز: ${totalCost.toLocaleString()} تومان`;

    // داده‌های نمودار
    var labels = ['هزینه کل'];
    var data = [totalCost];
    
    // ایجاد نمودار
    var ctx = document.getElementById('costChart').getContext('2d');
    if (window.barChart) {
        window.barChart.destroy();  // حذف نمودار قبلی در صورت وجود
    }

    window.barChart = new Chart(ctx, {
        type: 'bar',  // نوع نمودار (می‌توانید به 'pie' یا 'line' تغییر دهید)
        data: {
            labels: labels,
            datasets: [{
                label: 'هزینه کل سیگار کشیدن',
                data: data,
                backgroundColor: '#4CAF50',
                borderColor: '#388E3C',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});


