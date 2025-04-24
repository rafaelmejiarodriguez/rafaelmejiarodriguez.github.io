let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-images img');
    const totalSlides = slides.length;
    const slidesToShow = 4;  

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = Math.ceil(totalSlides / slidesToShow) - 1; 
    }

    if (currentSlide >= Math.ceil(totalSlides / slidesToShow)) {
        currentSlide = 0; 
    }

    document.querySelector('.carousel-images').style.transform = `translateX(-${currentSlide * 100}%)`;
}

setInterval(() => {
    moveSlide(1);
}, 4000);

function mostrarInformacion(nombre, descripcion, precio) {
    document.getElementById('productoNombre').textContent = nombre;
    document.getElementById('productoDescripcion').textContent = descripcion;
    document.getElementById('productoPrecio').textContent = precio;
    document.getElementById('infoProducto').style.display = 'block'; 
}

document.getElementById('infoProducto').addEventListener('click', function() {
    this.style.display = 'none'; 
});

document.addEventListener("DOMContentLoaded", () => {
    const welcomeDiv = document.getElementById("welcome");
  
    // Oculta el mensaje después de 6 segundos
    setTimeout(() => {
      welcomeDiv.style.display = "none";
    }, 9000); // Cambiado a 6000ms (6 segundos)
  });


  let cart = [];
  let total = 0;

  function toggleCart() {
      const cartElement = document.getElementById('cart');
      cartElement.style.display = cartElement.style.display === 'flex' ? 'none' : 'flex';
  }

  function addToCart(product, price) {
      cart.push({ product, price });
      total += price;
      updateCart();
  }

  function updateCart() {
      const cartItems = document.getElementById('cart-items');
      const totalElement = document.getElementById('total');

      cartItems.innerHTML = '';
      cart.forEach(item => {
          const li = document.createElement('li');
          li.textContent = `${item.product} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(li);
      });

      totalElement.textContent = `Total: $${total.toFixed(2)}`;
  }

  function checkout() {
      if (cart.length === 0) {
          alert('El carrito está vacío.');
          return;
      }

      alert(`Gracias por tu compra. Total a pagar: $${total.toFixed(2)}`);
      cart = [];
      total = 0;
      updateCart();
  }

  function filtrarProfesionales() {
    let input = document.getElementById("busqueda").value.toLowerCase().trim();
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
      let profesionElemento = card.querySelector(".profesion");
      let profesion = profesionElemento ? profesionElemento.textContent.toLowerCase() : "";
      
      if (profesion.includes(input)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }



 





  

  







  














  



