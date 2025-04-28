// Wait until page fully loads
window.addEventListener('load', function() {
  setTimeout(() => {
    document.getElementById('loading-screen').style.opacity = '0';
    setTimeout(() => {
      document.getElementById('loading-screen').style.display = 'none';
      document.getElementById('main-content').style.display = 'block';
    }, 500); // Extra fadeout time
  }, 2500); // 2.5 seconds loading
});