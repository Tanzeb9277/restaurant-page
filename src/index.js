import {nav, main} from "./page-load.js";
import home from "./home.js";
import menu from "./menu.js"
import about from "./about.js"

document.addEventListener('click',function(e){
    if(e.target && e.target.id== 'tab1'){
        let mainElement = document.querySelector("#main");
          mainElement.innerHTML = "";
          mainElement.style = "";
          mainElement.append(home())
     }else if(e.target && e.target.id== 'tab2'){
        let mainElement = document.querySelector("#main");
          mainElement.innerHTML = "";
          mainElement.style = "";
          mainElement.append(menu())
     }if(e.target && e.target.id== 'tab3'){
        let mainElement = document.querySelector("#main");
          mainElement.innerHTML = "";
          mainElement.style = `width: 100%;
          height: calc(100vh - 30px);
          background-image: url(https://images.pexels.com/photos/8015235/pexels-photo-8015235.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260);
          background-size: cover;`
          mainElement.append(about())
     }
 });

document.querySelector("#content").append(nav(), main())
