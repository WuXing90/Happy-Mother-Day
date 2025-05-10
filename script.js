document.addEventListener('DOMContentLoaded', function() {
    // 创建飘落的心形
    function createHearts() {
        const heartsContainer = document.querySelector('.hearts');
        const numHearts = 15;
        
        for (let i = 0; i < numHearts; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            
            // 随机位置和动画持续时间
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
    
    // 音乐控制按钮
    const musicBtn = document.getElementById('music-btn');
    const audio = document.querySelector('audio');
    
    musicBtn.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            musicBtn.textContent = '🎵 背景音乐';
        } else {
            audio.pause();
            musicBtn.textContent = '▶️ 播放音乐';
        }
    });
    
    // 确保音乐可以自动播放（需要用户交互后）
    document.body.addEventListener('click', function() {
        if (audio.paused) {
            audio.play().catch(e => console.log('自动播放被阻止:', e));
        }
    }, { once: true });
    
    createHearts();
});