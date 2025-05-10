document.addEventListener('DOMContentLoaded', function() {
    
    function createHearts() {
        const heartsContainer = document.querySelector('.hearts');
        const numHearts = 15;
        
        for (let i = 0; i < numHearts; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            
            const left = Math.random() * 100;
            const animationDuration = 5 + Math.random() * 10;
            const delay = Math.random() * 5;
            const size = 10 + Math.random() * 20;
            
            heart.style.left = `${left}%`;
            heart.style.top = `-${size}px`;
            heart.style.width = `${size}px`;
            heart.style.height = `${size}px`;
            heart.style.animationDuration = `${animationDuration}s`;
            heart.style.animationDelay = `${delay}s`;
            
            heartsContainer.appendChild(heart);
        }
    }
    
document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('dark-mode-toggle');
  if (!toggleBtn) return console.error("找不到按钮！");

  const isNightMode = localStorage.getItem('nightMode') === 'true';
  document.body.classList.toggle('night-mode', isNightMode);
  toggleBtn.textContent = isNightMode ? '☀️ 白天模式' : '🌙 夜间模式';

  toggleBtn.addEventListener('click', function() {
    const isNowNightMode = !document.body.classList.contains('night-mode');
    document.body.classList.toggle('night-mode', isNowNightMode);
    toggleBtn.textContent = isNowNightMode ? '☀️ 白天模式' : '🌙 夜间模式';
    localStorage.setItem('nightMode', isNowNightMode);
  });
});
