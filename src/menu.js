import "./style.css"

let menuItems = [];

export default  function menu(){
    let menu = document.createElement("div");
    menu.setAttribute("id", "menu")
    let header = document.createElement("div")
    header.classList.add("header");
    header.innerText="Menu"
    menu.append(header);

    let menuContainer = document.createElement("div");
    menuContainer.classList.add("menuContainer");
    

    class menuItem{
        constructor( img, name, price){
            
            this.img = img;
            this.name = name;
            this.price = price;
        }
    }

    function addMenuItem(img, name, price) {
       
        const item = new menuItem(img,name, price);
        menuItems.push(item)
        
    }
    
    addMenuItem("https://images.pexels.com/photos/2955816/pexels-photo-2955816.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "Pie", "$1.99");
    addMenuItem("https://images.pexels.com/photos/2955816/pexels-photo-2955816.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "Pie", "$1.99");
    addMenuItem("https://images.pexels.com/photos/2955816/pexels-photo-2955816.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "Pie", "$1.99");
    addMenuItem("https://images.pexels.com/photos/2955816/pexels-photo-2955816.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "Pie", "$1.99");
    addMenuItem("https://images.pexels.com/photos/2955816/pexels-photo-2955816.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "Pie", "$1.99");
    addMenuItem("https://images.pexels.com/photos/2955816/pexels-photo-2955816.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "Pie", "$1.99");
    addMenuItem("https://images.pexels.com/photos/2955816/pexels-photo-2955816.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "Pie", "$1.99");

    function listBooks(){
        for(let i = 1; i < menuItems.length && i < 12; i++){
            let div = document.createElement('div');
            div.classList.add("item-card")
            let newCard = `<div class="img-container">
                            <img src="${menuItems[i].img}" alt="">
                            </div>
                            <div class="text-container">
                                <p>${menuItems[i].name}</p>
                                <p>${menuItems[i].price}</p>
                                </div>`;
            div.innerHTML = newCard;
            menuContainer.appendChild(div);
        }
    }

    listBooks();

    menu.append(menuContainer);
    return menu;
    


}