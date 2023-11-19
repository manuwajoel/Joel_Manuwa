const btn = document.querySelector('.close');

btn.addEventListener('click', ()=>{
    let nav = document.querySelector('nav')
    if(nav.style.display == 'block'){
        nav.style.display = 'none';
        btn.src = './vectors/icon-menu.svg';
    }else{
                nav.style.display = 'block';
                btn.src = './vectors/icon-close.svg';
            }
})

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