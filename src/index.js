import {nav, main} from "./page-load.js";
import home from "./home.js";
import menu from "./menu.js"
import about from "./about.js"

document.addEventListener('click',function(e){
    if(e.target && e.target.id== 'tab1'){
        let mainElement = document.querySelector("#main");
          mainElement.innerHTML = "";
          mainElement.append(home())
     }else if(e.target && e.target.id== 'tab2'){
        let mainElement = document.querySelector("#main");
          mainElement.innerHTML = "";
          mainElement.append(menu())
     }if(e.target && e.target.id== 'tab3'){
        let mainElement = document.querySelector("#main");
          mainElement.innerHTML = "";
          mainElement.append(about())
     }
 });

document.querySelector("#content").append(nav(), main())
