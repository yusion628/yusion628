<script>
  // 轮播图设置
  var myCarousel = document.querySelector('#carouselExampleRide');
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 2000, // 图片切换时间间隔，单位为毫秒
    wrap: true // 设置轮播图循环播放
  });
</script>

document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('myVideo');

    video.addEventListener('play', function() {
        video.controls = true;
    });

    video.addEventListener('pause', function() {
        video.controls = false;
    });
});
