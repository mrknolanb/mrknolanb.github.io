const input = document.querySelector('#fav');
const button = document.querySelector('button');
const output = document.querySelector('.list');

button.addEventListener('click', () => {
    if (fav.value != '' ) {
        const lilist = document.createElement('li');
        const delebtn = document.createElement('button');    
    lilist.textContent = input.value;
    delebtn.textContent = '❌';
    lilist.appendChild(delebtn);
    output.appendChild(lilist);

    delebtn.addEventListener('click', () => {

        output.removeChild(lilist) ;
        input.focus;
    } );
    input.value = '';
    input.focus;
}
});