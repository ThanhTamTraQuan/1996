const backgrounds = [
  'checkout.jpg',
  'checkout2.jpg',
  'checkout3.jpg',
];
let currentBackgroundIndex = 0;
const header = document.querySelector('.header');

// Tải trước hình ảnh để tránh độ trễ trong quá trình chuyển đổi nền
backgrounds.forEach((src) => {
  const img = new Image();
  img.src = src;
});

// Hàm chuyển đổi ảnh nền
function changeBackground() {
  currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
  header.style.backgroundImage = 
    `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), 
     url(${backgrounds[currentBackgroundIndex]})`;
}

// Kiểm tra kích thước màn hình
function isMobile() {
  return window.innerWidth <= 767; // Kích thước phổ biến cho điện thoại di động   
}

if (!isMobile()) {
  // Nếu không phải là điện thoại, bật hiệu ứng chuyển ảnh
  setInterval(changeBackground, 3000);
} else {
  // Nếu là di động, đặt nền ảnh mặc định
  header.style.backgroundImage = 
    `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), 
     url(${backgrounds[0]})`;
}

// Thiết lập chiều cao header theo chiều cao cửa sổ trình duyệt
function setHeaderHeight() {
  const header = document.querySelector('.header');
  header.style.height = `${window.innerHeight}px`; // Đặt chiều cao cho header bằng chiều cao của cửa sổ trình duyệt
}

// Gọi hàm để thiết lập chiều cao header khi tải trang
setHeaderHeight();

// Cập nhật chiều cao khi thay đổi kích thước màn hình
window.addEventListener('resize', setHeaderHeight);



        const navBtn = document.querySelector("#nav-btn");
const navbar = document.querySelector("#navbar");
const navClose = document.querySelector("#nav-close");

navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
});

navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});



document.getElementById('explore-btn').addEventListener('click', function(e) {
  e.preventDefault();
  // Cuộn mượt đến phần story
  document.querySelector('#story').style.display = 'block'; // Hiển thị phần story
  document.querySelector('#story').scrollIntoView({ behavior: 'smooth' });
});


 // Hàm reset về trạng thái ban đầu
 function resetToInitial() {
  // Ẩn toàn bộ các trang câu chuyện
  var storyPages = document.querySelectorAll('.story-content');
  storyPages.forEach(function(page) {
    page.classList.remove('active');
  });

  // Ẩn phần câu chuyện và hiện lại nút "Cùng khám phá"
  document.querySelector('.banner-title').style.display = 'block'; // Hiển thị tiêu đề lại
  document.querySelector('.banner-btn').style.display = 'block';  // Hiển thị nút "Cùng khám phá"
  document.querySelector('.story').style.display = 'none'; // Ẩn phần câu chuyện
}

// Hàm hiển thị các phần của câu chuyện
function showStory(pageId) {
  // Ẩn toàn bộ các trang trước khi hiển thị trang mới
  var storyPages = document.querySelectorAll('.story-content');
  storyPages.forEach(function(page) {
    page.classList.remove('active');
  });

  // Hiển thị trang hiện tại
  document.getElementById(pageId).classList.add('active');
  document.querySelector('.story').style.display = 'block'; // Hiển thị phần câu chuyện
}

// Thêm sự kiện cho nút "Cùng khám phá"
document.getElementById('explore-btn').addEventListener('click', function(e) {
  e.preventDefault(); // Ngăn hành vi mặc định của thẻ <a>
  showStory('page1');
  document.querySelector('.banner-title').style.display = 'none'; // Ẩn tiêu đề chính
  document.querySelector('#explore-btn').style.display = 'none'; // Ẩn nút "Cùng khám phá"
});

// Thêm sự kiện cho nút "Khám phá tiếp"
document.getElementById('continue-btn').addEventListener('click', function(e) {
  e.preventDefault(); // Ngăn hành vi mặc định của thẻ <a>
  showStory('page2');
});

// Thêm sự kiện cho nút "Quay lại"
document.getElementById('back-btn').addEventListener('click', function(e) {
  e.preventDefault(); // Ngăn hành vi mặc định của thẻ <a>
  resetToInitial(); // Reset lại trạng thái ban đầu
});

// Khởi động ban đầu
resetToInitial();


//gỡ bỏ lớp active cho thanh menu khi người dùng nhấp vào nút mở hoặc đóng.
document.getElementById('nav-btn').addEventListener('click', function() {
  document.getElementById('navbar').classList.add('active');
});

document.getElementById('nav-close').addEventListener('click', function() {
  document.getElementById('navbar').classList.remove('active');
}); 
/////////////////////////////


function showPage(pageId) {
  // Ẩn tất cả các trang
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
    page.style.display = 'none';
  });

  // Hiển thị trang được chọn
  const selectedPage = document.getElementById(pageId);
  selectedPage.style.display = 'block';
}

// Hiển thị trang A khi trang web được tải
document.addEventListener("DOMContentLoaded", function() {
  showPage('pageA');
});


//ẩn ban đầu các sản phẩm product
function showMoreProducts() {
  var moreProducts = document.getElementById("more-products");
  var viewMoreBtn = document.getElementById("view-more");

  if (moreProducts.style.display === "none") {
    moreProducts.style.display = "block";
    viewMoreBtn.textContent = "Thu gọn"; // Đổi thành "Thu gọn" sau khi hiển thị toàn bộ sản phẩm
  } else {
    moreProducts.style.display = "none";
    viewMoreBtn.textContent = "Xem thêm"; // Đổi lại thành "Xem thêm"
  }
}
