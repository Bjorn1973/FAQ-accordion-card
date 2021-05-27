const divs = [...document.querySelectorAll('.question')];
console.log(divs);


    divs.map(div => {
        div.addEventListener('click', ()=> {
            const question = div.children[0];
            const icon = div.children[1];
            const answer = div.children[2];
                question.classList.toggle('question__title--view');
                icon.classList.toggle('question__icon--view');
                answer.classList.toggle('question__answer--view');

            
        })})
