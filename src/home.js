import './style.css';

export default  function home(){
    let home = document.createElement("div");
    home.classList.add("home");

    home.innerHTML = `<h1 class="heading">Home<br>Bakery</h1>
    <div class="container">
        <div class="child-container">
            <img src="https://images.pexels.com/photos/10540405/pexels-photo-10540405.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="pic 1">
        </div>
        <div class="child-container">
            <img src="https://images.pexels.com/photos/2955816/pexels-photo-2955816.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="pic 2">
        </div>
        <div class="child-container">
            <img src="https://images.pexels.com/photos/4775241/pexels-photo-4775241.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="pic 3">
        </div>
        <div class="child-container">
            <img src="https://images.pexels.com/photos/10455820/pexels-photo-10455820.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="pic 4">
        </div>
        <div class="child-container">
            <img src="https://images.pexels.com/photos/890380/pexels-photo-890380.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="pic 5">
        </div>
        <div class="child-container">
            <img src="https://images.pexels.com/photos/1376105/pexels-photo-1376105.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="pic 6">
        </div>
        <div class="child-container">
            <img src="https://images.pexels.com/photos/1359321/pexels-photo-1359321.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="pic 7">
        </div>
        <div class="child-container">
            <img src="https://images.pexels.com/photos/4775247/pexels-photo-4775247.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="pic 8">
        </div>
        <div class="child-container">
            <img src="https://images.pexels.com/photos/8250849/pexels-photo-8250849.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="pic 9">
        </div>
        <div class="child-container">
            <img src="https://images.pexels.com/photos/6783155/pexels-photo-6783155.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="pic 1">
        </div>
        <div class="child-container">
            <img src="https://images.pexels.com/photos/2955816/pexels-photo-2955816.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="pic 2">
        </div>
        <div class="child-container">
            <img src="https://images.pexels.com/photos/10455820/pexels-photo-10455820.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="pic 3">
        </div>
        <div class="child-container">
            <img src="https://images.pexels.com/photos/6363069/pexels-photo-6363069.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="pic 4">
        </div>
        <div class="child-container">
            <img src="https://images.pexels.com/photos/890380/pexels-photo-890380.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="pic 5">
        </div>
        <div class="child-container">
            <img src="https://images.pexels.com/photos/8250849/pexels-photo-8250849.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="pic 6">
        </div>
        <div class="child-container">
            <img src="https://images.pexels.com/photos/8250849/pexels-photo-8250849.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="pic 7">
        </div>
        <div class="child-container">
            <img src="https://images.pexels.com/photos/4775247/pexels-photo-4775247.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="pic 8">
        </div>
        <div class="child-container">
            <img src="https://images.pexels.com/photos/6363069/pexels-photo-6363069.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="pic 9">
        </div>
        <div class="child-container">
            <img src="https://images.pexels.com/photos/9506936/pexels-photo-9506936.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="pic 1">
        </div>
        <div class="child-container">
            <img src="https://images.pexels.com/photos/2955816/pexels-photo-2955816.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="pic 2">
        </div>
        <div class="child-container">
            <img src="https://images.pexels.com/photos/4775241/pexels-photo-4775241.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="pic 3">
        </div>
        <div class="child-container">
            <img src="https://images.pexels.com/photos/10455820/pexels-photo-10455820.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="pic 4">
        </div>
        <div class="child-container">
            <img src="https://images.pexels.com/photos/890380/pexels-photo-890380.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="pic 5">
        </div>
        <div class="child-container">
            <img src="https://images.pexels.com/photos/1376105/pexels-photo-1376105.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="pic 6">
        </div>
        <div class="child-container">
            <img src="https://images.pexels.com/photos/1359321/pexels-photo-1359321.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="pic 7">
        </div>
        <div class="child-container">
            <img src="https://images.pexels.com/photos/4775247/pexels-photo-4775247.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="pic 8">
        </div>
        <div class="child-container">
            <img src="https://images.pexels.com/photos/8250849/pexels-photo-8250849.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="pic 9">
        </div><div class="child-container">
        <img src="https://images.pexels.com/photos/9506936/pexels-photo-9506936.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="pic 1">
        </div>
        <div class="child-container">
            <img src="https://images.pexels.com/photos/2955816/pexels-photo-2955816.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="pic 2">
        </div>
        <div class="child-container">
            <img src="https://images.pexels.com/photos/4775241/pexels-photo-4775241.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="pic 3">
        </div>
        <div class="child-container">
            <img src="https://images.pexels.com/photos/10455820/pexels-photo-10455820.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="pic 4">
        </div>
        <div class="child-container">
            <img src="https://images.pexels.com/photos/890380/pexels-photo-890380.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="pic 5">
        </div>
        <div class="child-container">
            <img src="https://images.pexels.com/photos/1376105/pexels-photo-1376105.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="pic 6">
        </div>
        <div class="child-container">
            <img src="https://images.pexels.com/photos/1359321/pexels-photo-1359321.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="pic 7">
        </div>
        <div class="child-container">
            <img src="https://images.pexels.com/photos/4775247/pexels-photo-4775247.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="pic 8">
        </div>
        <div class="child-container">
            <img src="https://images.pexels.com/photos/8250849/pexels-photo-8250849.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="pic 9">
        </div>
        
    </div>`;
    return home;
}