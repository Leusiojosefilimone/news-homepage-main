let menu = document.querySelector(".menu-mobile")
let open = document.querySelector("#menu-button-open")
let close = document.querySelector("#menu-button-close")
const container = document.querySelector('.publications')

function slideMenu(){
    let body = document.querySelector("body")
    body.classList.toggle("menu-slided")

}

const publication = [
    {
       imagem: "assets/images/image-retro-pcs.jpg",
          id: 01,
          titulo:' Reviving Retro PCs',
          coments:' What happens when old PCs are given modern upgrades?'
    },
    {
        imagem: "assets/images/image-top-laptops.jpg",
           id: 02,
           titulo:'Top 10 Laptops of 2022',
           coments:'Our best picks for various needs and budgets.'
     },
     {
        imagem: "assets/images/image-gaming-growth.jpg",
           id: 03,
           titulo:'The Growth of Gaming ',
           coments:'How the pandemic has sparked fresh opportunities.'
     }
]
publication.map((publicacao) => {
container.innerHTML += ` <article>
<img src="${publicacao.imagem}" alt="">
<span>
<h1>${publicacao.id}</h1>
<h3>${publicacao.titulo}</h3>
<p>${publicacao.coments}</p>
</span>
</article>`
} )
