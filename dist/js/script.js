// From: https://stackoverflow.com/questions/1484506/random-color-generator
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


//Get kitten list
function getKittenList(cat) {
    return `
        <div class="cat" style="background-color: ${getRandomColor()}">
          <div class="cat__name"><p>Cat name:${cat.name}</p></div>
            <div class="cat__price"><p>Price:${cat.price}$</p></div>
            <div class="cat__img"><img src="${cat.img_url}"/></div>
            <button class="button">Buy me!</button>
        </div>
        `
}

function renderKittenList(cats) {
    return cats.map((cat => getKittenList(cat))).join('');
}

// let oReq = new XMLHttpRequest();
// oReq.onload = reqListener;
// oReq.open("get", "https://ma-cats-api.herokuapp.com/api/cats", true);
// oReq.send();
//
// function reqListener() {
//     const cats= JSON.parse(this.responseText);
//     document.querySelector('.wrapper-cats').innerHTML=getKittenList(cats);
// }

fetch('https://ma-cats-api.herokuapp.com/api/cats?&per_page=12')
    .then(
        function (response) {
            response.json().then(function (cats) {
                document.querySelector('.wrapper-cats').innerHTML = getKittenList(cats);
            });
        }
    );