const selectElement = document.querySelector('#main');
const resultBlock = document.querySelector('.result');

let customData;
let matchesCount = 0;


for (let i = 0; i < 5; i++) {
    let code = Math.floor(Math.random()*25+65);
    main.innerHTML += `
        <option>${String.fromCharCode(code)}</option>
    `;
    
}

let request = $.getJSON( "list.json", function(data) {
    customData = data;
});

selectElement.addEventListener('change', (Event) =>{
    resultBlock.innerHTML = '';
    matchesCount = 0;
    for (const key in customData) {
        if(customData[key]['name'][0] == selectElement.value){
            resultBlock.innerHTML += `${customData[key]['name']}<br>`;
            matchesCount++;
        }
    }
    if (matchesCount == 0) {
        alert('No matches found');
    }
});

