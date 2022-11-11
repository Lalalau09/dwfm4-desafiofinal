//Bienvenida --title

function welcome (){
    return fetch ("https://cdn.contentful.com/spaces/2bj5h72pbrvp/environments/master/entries?access_token=-HGj2bVPZ5nDelVnaV9aG9N987rhaMTkYeL1pkyKDxw&content_type=welcome")
.then((res)=> res.json())
.then((data)=> welcomeRes(data))


function welcomeRes(data) {
    // console.log(data)
    const templateEl = document.querySelector("#welcome-template");
    const containerEl = document.querySelector(".welcome");
    const clone = templateEl.content.cloneNode(true);

    var titleEl = clone.querySelector(".welcome__title").textContent =
       data.items[0].fields.title;
    containerEl.appendChild(clone);
 };
}

//quien soy --titulo --imagen --descripcion

 
    function whoIAmRes(data) {
      console.log(data)
       const templatePresentationEl = document.querySelector("#template-presentation");
       const containerPresentationEl = document.querySelector(".presentation");
 
       const clone = templatePresentationEl.content.cloneNode(true);
 
       let titlePresentationEl = clone.querySelector(".presentation__title").textContent =
          data.fields.title;
       let textPresentationEl = clone.querySelector(".presentation__text").textContent =
          data.fields.text
     
         
       
       containerPresentationEl.appendChild(clone);
    };
    function whoIAm() {
      return fetch("https://cdn.contentful.com/spaces/2bj5h72pbrvp/environments/master/entries/1Kgw4N6OYVvzu7THu2kIrw?access_token=-HGj2bVPZ5nDelVnaV9aG9N987rhaMTkYeL1pkyKDxw&content_type=presentation")
         .then(res => res.json())
         .then((data) => whoIAmRes(data)); }


// Mis servicios --Mis servicios -lo que hago
    
       function myServicesRes(data) {
        
         console.log(data)
  
        const templateServicesEl = document.querySelector("#template-myservices");
        const containerEl = document.querySelector(".my-services__container-general");
        const dataItems = data.items;   
        
        for (let i = 0; i < dataItems.length; i++){
           const clone = templateServicesEl.content.cloneNode(true);
           
           let imgMyServices = clone.querySelector(".my-services__container-img").src =
              data.includes.Asset[0].fields.file.url;
        
           let subTitleMyServices = clone.querySelector(".my-services__container-subtitle").textContent =
                 dataItems[i].fields.subtitleServices;
           
           let textMyServices = clone.querySelector(".my-services__container-text").textContent =
              dataItems[i].fields.textServices;
           
           containerEl.appendChild(clone);
        };
 };
 function myServices() {
   return fetch("https://cdn.contentful.com/spaces/2bj5h72pbrvp/environments/master/entries?access_token=-HGj2bVPZ5nDelVnaV9aG9N987rhaMTkYeL1pkyKDxw&content_type=misServicios")
      .then(res => res.json())
      .then((data) => myServicesRes(data));}

 //invoco funciones en main
 function main(){
    addHeader (document.querySelector(".header-div"))
    welcome ()
    whoIAm()
   addForm(document.querySelector(".form-div"))
    myServices()
    addFooter(document.querySelector(".footer-div"))

 }
 main()