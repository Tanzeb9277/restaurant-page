import './style.css';

function nav(){
    let nav = document.createElement("div");

    nav.innerHTML =`<input type="radio" name="tabs" id="tab1" checked />
                        <label for="tab1">Home</label>
                        <input type="radio" name="tabs" id="tab2" />
                        <label for="tab2">Menu</label>
                        <input type="radio" name="tabs" id="tab3" />
                        <label for="tab3">About</label>`;

    nav.classList.add("nav");

    return nav;
    } 

    function main(){
        let main = document.createElement("div");

        main.innerHTML = `<div class="tab content1">Tab1 Contents</div>
                            <div class="tab content2">Tab2 Contents</div>
                            <div class="tab content3">Tab3 Contents</div>`;

        main.setAttribute("id", "main");
        return main;
    }

    export {nav, main};



