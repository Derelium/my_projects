let cloud = document.querySelectorAll(".services__cloud");
let arrow = document.querySelectorAll(".services__arrow");
let services__footer = document.querySelectorAll(".services__footer");
function changeSrc(element, link){
element.setAttribute('src', link);
}
let normalStyle='<img src   = "/img/services/cloud.svg" alt = "Ссылка" class  = "services__cloud"><a   class = "services__footer-text">Узнать большe</a><img src   = "/img/services/arrow.svg" alt = "Перейти" class = "services__arrow"></img>'
let greenStyle='<img src   = "/img/services/cloud_green.svg" alt = "Ссылка" class  = "services__cloud"><a   class = "services__footer-text">Узнать большe</a><img src   = "/img/services/arrow_green.svg" alt = "Перейти" class = "services__arrow"></img>'


services__footer.forEach(footerItem => {
    footerItem.addEventListener('mouseover', ()=>footerItem.innerHTML =greenStyle);
    footerItem.addEventListener('focus', ()=>footerItem.innerHTML =greenStyle);
})
services__footer.forEach(footerItem => {
    footerItem.addEventListener('mouseout', ()=>footerItem.innerHTML =normalStyle);
    footerItem.addEventListener('blur', ()=>footerItem.innerHTML =normalStyle);
})


