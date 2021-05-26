const divs = [...document.querySelectorAll('.question')];
console.log(divs);

function toggleClass(){
    divs.map(div => {
        const children = [...div.children];
        console.log(children);
        div.addEventListener('click', ()=> {
            const question = div.children[0];
            const icon = div.children[1];
            const answer = div.children[2];
            question.classList.toggle('--view');
            icon.classList.toggle('--view');
            answer.classList.toggle('--view');
        })
    })
}

toggleClass();