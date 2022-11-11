

function myPortfolioRes(data){
    console.log(data)
    const dataPortfolio= data.items
    const templateEl = document.querySelector("#portfolio-template")
    
    const containerPortfolio = document.querySelector(".portfolio__container")

    

    for (let i = 0; i < dataPortfolio.length; i++){
        const clone= templateEl.content.cloneNode(true)

        let imgPortfolio = clone.querySelector(".portfolio__container-img").src = 
        data.includes.Asset[0].fields.file.url;

        let subtitlePortfolio = clone.querySelector(".portfolio__container-subtitle").textContent =
        dataPortfolio[i].fields.subtitle;

        let textPortfolio = clone.querySelector(".portfolio__container-text").textContent=
        dataPortfolio[i].fields.text;

        let linkPortfolio = clone.querySelector(".portfolio-link").href =
        dataPortfolio[i].fields.url;

        containerPortfolio.appendChild(clone)
    }

  

}
function myPortfolio(){
    fetch ("https://cdn.contentful.com/spaces/2bj5h72pbrvp/environments/master/entries?access_token=-HGj2bVPZ5nDelVnaV9aG9N987rhaMTkYeL1pkyKDxw&content_type=portfolio")
    .then(res =>res.json())
    .then((data)=>myPortfolioRes(data))
}

function main(){
    addHeader (document.querySelector(".contenedor-header"))
    addFooter (document.querySelector(".contenedor-footer"))
    myPortfolio()
}

main()