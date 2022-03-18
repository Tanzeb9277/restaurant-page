export default function(){
    let element = document.createElement("div");
    element.innerHTML =` <ul>
        <li id="home">Home</li>
        <li>Meun</li>
        <li>About</li>
    </ul>`;

    document.addEventListener('click',function(e){
        if(e.target && e.target.id== 'home'){
              console.log("working")
         }
     });

    return element
    } 
