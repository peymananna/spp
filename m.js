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





const cigaretteBody = document.querySelector(".body");
const ash = document.querySelector(".ash");

window.addEventListener("scroll", () => {
  const maxHeight = 120; // ارتفاع اولیه سیگار
  const scrollPosition = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;

  // محاسبه طول جدید سیگار
  const newHeight = Math.max(maxHeight - (scrollPosition / maxScroll) * maxHeight, 10);

  // تنظیم طول سیگار
  cigaretteBody.style.height = `${newHeight}px`;

  // افزایش خاکستر
  const ashHeight = Math.min(10 + (scrollPosition / maxScroll) * 50, 50);
  ash.style.height = `${ashHeight}px`;
});


// انتخاب المنت‌ها
const popup = document.getElementById("notification-popup");
const popupMessage = document.getElementById("popup-message");
const closeButton = document.getElementById("popup-close");

// تابع برای نمایش پاپ‌آپ
function showPopup(message) {
  popupMessage.textContent = message; // تنظیم پیام دلخواه
  popup.classList.remove("hidden"); // نمایش پاپ‌آپ
}

// بستن پاپ‌آپ
closeButton.addEventListener("click", () => {
  popup.classList.add("hidden"); // مخفی کردن پاپ‌آپ
});

// نمایش پاپ‌آپ هنگام باز شدن سایت
window.addEventListener("load", () => {
  showPopup("سلام دوست من! پایین این صفحه منتظر یه سری مطالب جذاب و مهم باش! حتماً یه نگاه بنداز. قول می‌دم ارزشش رو داره. 😉"); // پیام دلخواه خود را اینجا وارد کنید
});
