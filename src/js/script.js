const profileImage = document.getElementById('profile_img');
const settingsMenu = document.querySelector('.settings-menu');
const darkBtn = document.getElementById('dark-btn');

const settingsMenuToggle = () => {
    settingsMenu.classList.toggle('settings-menu-height');
}

const setDarkTheme = () => {
    darkBtn.classList.toggle('dark-btn-on');
    document.body.classList.toggle('dark-theme');
}

profileImage.addEventListener('click', settingsMenuToggle);
darkBtn.addEventListener('click', setDarkTheme);


