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
    
    document.body.addEventListener('click', function() {
        if (audio.paused) {
            audio.play().catch(e => console.log('自动播放被阻止:', e));
        }
    }, { once: true });
    
    createHearts();
});

const darkModeToggle = document.createElement('button');
darkModeToggle.id = 'dark-mode-toggle';
darkModeToggle.textContent = '🌙 夜间模式';
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('night-mode');
    this.textContent = document.body.classList.contains('night-mode') ? '☀️ 白天模式' : '🌙 夜间模式';
    
    localStorage.setItem('nightMode', document.body.classList.contains('night-mode'));
});

if (localStorage.getItem('nightMode') === 'true') {
    document.body.classList.add('night-mode');
    darkModeToggle.textContent = '☀️ 白天模式';
}

const themeToggle = document.getElementById('theme-toggle');

document.body.classList.add('day-mode');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('night-mode');
  document.body.classList.toggle('day-mode');
  
  themeToggle.textContent = document.body.classList.contains('night-mode') 
    ? '☀️ 白天模式' 
    : '🌙 夜间模式';
});
