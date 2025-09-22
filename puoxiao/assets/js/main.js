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
});


