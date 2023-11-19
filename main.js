const btn = document.querySelector('.close');
const nav = document.querySelector('nav');

btn.addEventListener('click', () => {
    if (nav.style.display === 'block') {
        closeMenu();
    } else {
        openMenu();
    }
});

// Close the menu when clicking outside of it
document.addEventListener('click', (event) => {
    const isClickInsideMenu = nav.contains(event.target);
    const isClickOnButton = btn.contains(event.target);

    if (!isClickInsideMenu && !isClickOnButton) {
        closeMenu();
    }
});

function openMenu() {
    nav.style.display = 'block';
    btn.src = './vectors/icon-close.svg';
}

function closeMenu() {
    nav.style.display = 'none';
    btn.src = './vectors/icon-menu.svg';
}


function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const phrases = ['Frontend Developer', 'Backend Developer',  'UI/UX Designer'];
const el = document.getElementById("typewriter");

let sleepTime = 100;

let curPhraseIndex = 0;

const writeLoop = async () => {
    while (true) {
        let curWord = phrases[curPhraseIndex];

        for (let i = 0; i < curWord.length; i++) {
            el.innerText = curWord.substring(0, i + 1);
            await sleep(sleepTime);
        }

        await sleep(sleepTime * 10);

         for (let i = curWord.length; i > 0; i--) {
            el.innerText = curWord.substring(0, i - 1);
            await sleep(sleepTime);
        }

         await sleep(sleepTime * 5);

        if (curPhraseIndex === phrases.length - 1) {
            curPhraseIndex = 0
        } else {
            curPhraseIndex++;
        }

    }
};

writeLoop();
function myFunction(x) {
  x.classList.toggle("change");
}