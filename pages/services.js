function myServices() {
    return fetch("https://cdn.contentful.com/spaces/2bj5h72pbrvp/environments/master/entries?access_token=-HGj2bVPZ5nDelVnaV9aG9N987rhaMTkYeL1pkyKDxw&content_type=misServicios")
       .then(res => res.json())
       .then((data) => myServicesRes(data));
    
    function myServicesRes(data) {
       console.log(data)
 
       const templateServicesEl = document.querySelector("#services-template");
       const containerEl = document.querySelector(".services__container-general");
       const dataItems = data.items;   
       
       for (let i = 0; i < dataItems.length; i++){
          const clone = templateServicesEl.content.cloneNode(true);
          
          let imgMyServices = clone.querySelector(".services__container-img").src =
             data.includes.Asset[0].fields.file.url;
       
          let subTitleMyServices = clone.querySelector(".services__container-subtitle").textContent =
                dataItems[i].fields.subtitleServices;
          
          let textMyServices = clone.querySelector(".services__container-text").textContent =
             dataItems[i].fields.textServices;
          
          containerEl.appendChild(clone);
       };
    };
 };
 
 function main() {
    addHeader(document.querySelector(".container-header"));
    addFooter(document.querySelector(".container-footer"));
    myServices();
 }
 main()