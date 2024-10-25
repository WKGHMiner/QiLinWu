var music = document.getElementById("bgMusic");
var musicStatus = document.getElementById("musicStatus");
var isPlaying = false;

function toggleMusic() {
    if (isPlaying) {
        music.pause();
        musicStatus.textContent = "播放音乐";
    } else {
        music.play();
        musicStatus.textContent = "暂停音乐";
    }
    isPlaying = !isPlaying;
}

// 当页面加载完成时自动播放音乐
window.onload = function() {
    music.volume = 0.5; // 设置音量为50%
    music.play().catch(function(error) {
        console.log("自动播放失败。这可能是由于浏览器的自动播放策略造成的。");
    });
    isPlaying = true;
    musicStatus.textContent = "暂停音乐";
};

function toggleSubmenu(submenuId) {
    var submenu = document.getElementById(submenuId);
    var allSubmenus = document.getElementsByClassName('submenu');
    
    // 如果点击的不是当前打开的子菜单，则关闭所有子菜单
    if (submenu.style.display !== 'block') {
        for (var i = 0; i < allSubmenus.length; i++) {
            allSubmenus[i].style.display = 'none';
        }
    }
    
    // 切换当前子菜单的显示状态
    if (submenu.style.display === 'block') {
        submenu.style.display = 'none';
    } else {
        submenu.style.display = 'block';
    }
}

function showContent(sectionId) {
    var sections = document.getElementsByClassName('content-section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].classList.remove('active');
    }

    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }

    // 关闭所有子菜单
    var allSubmenus = document.getElementsByClassName('submenu');
    for (var i = 0; i < allSubmenus.length; i++) {
        allSubmenus[i].style.display = 'none';
    }
}

function hideSubmenus() {
    var allSubmenus = document.getElementsByClassName('submenu');
    for (var i = 0; i < allSubmenus.length; i++) {
        allSubmenus[i].style.display = 'none';
    }
}

// 当页面加载时，默认显示简介内容
window.onload = function() {
    showContent('intro');
};