document.addEventListener('DOMContentLoaded', function(){
  var year = document.getElementById('year');
  if(year){ year.textContent = new Date().getFullYear(); }

  var toggle = document.getElementById('menuToggle');
  var nav = document.getElementById('nav');
  if(toggle && nav){
    toggle.addEventListener('click', function(){
      nav.classList.toggle('open');
    });
  }

  // 瀑布流循环播放效果
  var masonryItems = document.querySelectorAll('.masonry-item');
  if(masonryItems.length > 0) {
    // 初始隐藏所有照片
    masonryItems.forEach(function(item) {
      item.style.opacity = '0';
      item.style.transform = 'translateY(30px)';
    });

    // 循环显示照片
    function showNextPhoto(index) {
      if(index < masonryItems.length) {
        masonryItems[index].style.transition = 'all 0.6s ease';
        masonryItems[index].style.opacity = '1';
        masonryItems[index].style.transform = 'translateY(0)';
        
        // 延迟显示下一张照片
        setTimeout(function() {
          showNextPhoto(index + 1);
        }, 800); // 每张照片间隔0.8秒
      } else {
        // 所有照片显示完后，等待3秒重新开始循环
        setTimeout(function() {
          resetPhotos();
        }, 3000);
      }
    }

    // 重置所有照片
    function resetPhotos() {
      masonryItems.forEach(function(item) {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
      });
      
      // 延迟0.5秒后重新开始循环
      setTimeout(function() {
        showNextPhoto(0);
      }, 500);
    }

    // 开始循环播放
    setTimeout(function() {
      showNextPhoto(0);
    }, 1000); // 页面加载1秒后开始
  }

  // 证书火车背景循环效果 - 现在使用CSS动画实现
  var certificatesTrain = document.getElementById('certificatesTrain');
  
  if(certificatesTrain) {
    // CSS动画会自动处理循环，这里只需要确保元素存在
    console.log('证书火车背景已启动');
  }
});


