(() => {
    const soundController = document.querySelector('.chackbox input');

    function isSoundPlayed(e) {
        if (e.currentTarget.checked) {
            console.log('Music ON');
        } else {
            console.log('Music OFF');
        }
    }

    soundController.addEventListener('change', isSoundPlayed);
})();

