const form = document.getElementById('form');
const action = form.action;
const instagramInput = document.getElementById('instagram');
let isInputAnimationRunning;

form.onsubmit = (e) => {
    e.preventDefault();

    if (isInputAnimationRunning) {
        return;
    }

    const instagramName = instagramInput.value;

    if (!instagramName || !/\S/.test(instagramName)) {
        instagramInput.classList.add('error');
        isInputAnimationRunning = true;

        setTimeout(() => {
            instagramInput.classList.remove('error');
            isInputAnimationRunning = false;
        }, 200);
        return;
    }

    window.location.href = action + '?sid=' + instagramName;
};
