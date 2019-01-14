// From: https://stackoverflow.com/questions/1484506/random-color-generator
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getKitten(cat) {
    return `
        <div class="cat" style="background-color: ${getRandomColor()}">
          <div class="cat__name"><p>Cat name:${cat.name}</p></div>
            <div class="cat__price"><p>Price:${cat.price}$</p></div>
            <div class="cat__img"><img src="${cat.img_url}"/></div>
            <button class="cat__button">Buy me!</button>
        </div>
        `
}

function renderKittens(cats) {
    return cats.map(cat => getKitten(cat))
        .join('');
}

let loader= document.getElementById('loader');
loader.classList.add('loader_opened');

fetch('https://ma-cats-api.herokuapp.com/api/cats?&per_page=12')
    .then(
        function (response) {
            response.json().then(function (cats) {
                setTimeout((function () {
                    document.querySelector('.wrapper-cats').insertAdjacentHTML("afterbegin", renderKittens(cats.cats));
                    loader.classList.remove('loader_opened');
                }),2000);

            });
        }
    );