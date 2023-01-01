let menu = document.querySelector(".menu-mobile")
let open = document.querySelector("#menu-button-open")
let close = document.querySelector("#menu-button-close")
const container = document.querySelector('.publications')
const NewsContainer = document.querySelector('#news')
const MenuDesktop = document.querySelector('.menu-desktop')
const MenuMobile = document.querySelector('.menu-mobile')


function slideMenu(){
    let body = document.querySelector("body")
    body.classList.toggle("menu-slided")

}
const MenuItems =['Home', 'New', 'Popular', 'Treding', 'Categorias']
 
MenuItems.map((iten) => {
    MenuDesktop.innerHTML += `<a href="#">${iten}</a>`
    MenuMobile.innerHTML += `<a href="#">${iten}</a>`
})

const News = [
    {
     titulo:  'Hydrogen VS Electric Cars',
      descricao: 'Will hydrogen-fueled cars ever catch up to EVs?' 
    },
    {
        titulo:  'The Downsides of AI Artistry',
         descricao: 'What are the possible adverse effects of on-demand AI image generation?' 
    },
    {
        titulo:  ' Is VC Funding Drying Up',
         descricao: ' Private funding by VC firms is down 50% YOY. We take a look at what that means.' 
    }

]

News.map((New) => {
    NewsContainer.innerHTML += ` 
 <article>
    <h3>${New.titulo}</h3>
    <p>${New.descricao}</p>
  </article>`
})

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
