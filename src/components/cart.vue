<script setup lang="ts">

import { useCartStore } from '@/stores/CartStore';


const cartStore = useCartStore();

const removeFromCart = (bookId: number) => {
    cartStore.removeFromCart(bookId);
};

</script>

<template>
    <div class="cartContainer">
        <div class="itemContainer">
        <div v-if="cartStore.cartItems.length > 0" class="itemsList">
            <ul>
                <li v-for="item in cartStore.cartItems" :key="item.book.id">
                    <div class="bookData">
                        <h3 class="title">{{ item.book.title }}</h3>
                        <p>Precio: {{ item.book.price }}</p>
                    </div>    
                    <div class="cantData">
                    
                        <p>Cantidad: {{ item.quantity }}</p>
                        <p>Total: {{ item.book.price * item.quantity }}</p>
                    </div>
                    <div class="deleteBtn">
                        <button @click="removeFromCart(item.book.id)">X</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
        <div class="price">
            <p>Total: {{ cartStore.totalPrice }}$</p>
            <button @click="cartStore.clearCart">Comprar</button>
        </div>
    </div>
</template>

<style>
.cartContainer {
    display: flex;
    flex-direction: column; /* Organiza los elementos en columna */
    justify-content: flex-start; /* Alinea los elementos en la parte superior */
    min-height: 100vh; /* Hace que el contenedor ocupe al menos el 100% de la altura de la ventana */
    padding: 20px; /* Padding alrededor del contenedor */
    box-sizing: border-box; /* Incluye el padding en el ancho total */
    background-color: #f4f4f4; 
}

.itemContainer {
    height: 70vh;
}

.itemsList {
    flex: 1; 
    overflow-y: auto; 
    max-height: calc(100vh - 250px); 
    margin-bottom: 20px; 
}

ul {
  list-style: none; /* Elimina los puntos de la lista */
  padding: 0; /* Elimina el padding del ul */
  margin: 0; /* Elimina el margin del ul */
}

li {
  width: 100%; /* Asegura que el li ocupe el 100% del ancho */
  background-color: #f9f9f9; /* Color de fondo del elemento de la lista */
  border: 1px solid #e0e0e0; /* Borde sutil */
  border-radius: 5px; /* Bordes redondeados */
  margin-bottom: 10px; /* Espacio entre los elementos de la lista */
  display: flex; /* Usa flexbox para alinear los elementos en el li */
  justify-content: space-between; /* Espacio entre las secciones */
  padding: 15px; /* Padding dentro del li */
  box-sizing: border-box; /* Incluye padding y borde en el ancho total */
  transition: background-color 0.3s, transform 0.3s; /* Suaviza la transición del color y el tamaño */
}

li:hover {
  background-color: #f1f1f1; /* Color de fondo al pasar el mouse */
  transform: translateY(-2px); /* Eleva el elemento al pasar el mouse */
}

.bookData, .cantData, .deleteBtn {
  display: flex;
  flex-direction: column; /* Alinea los textos verticalmente */
}

.title {
  font-size: 1.2em; /* Tamaño de fuente más grande para el título */
  margin-bottom: 5px; /* Espacio debajo del título */
  color: #333; /* Color del texto del título */
}

.deleteBtn button {
  background-color: #e74c3c; /* Color de fondo del botón */
  color: white; /* Color del texto del botón */
  border: none; /* Sin borde */
  border-radius: 5px; /* Bordes redondeados */
  padding: 10px 15px; /* Padding del botón */
  cursor: pointer; /* Cambia el cursor al pasar el mouse */
  transition: background-color 0.3s; /* Suaviza la transición del color de fondo */
}

button:hover {
  background-color: #c0392b; /* Color de fondo del botón al pasar el mouse */
}

.price {
    padding: 20px; /* Padding interno */
    background-color: #ffffff; /* Fondo blanco para la tarjeta de precio */
    border-radius: 8px; /* Bordes redondeados */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Sombra sutil */
}

.price p {
  font-size: 1.5em; /* Tamaño de fuente más grande para el total */
  color: #333; /* Color del texto */
  margin: 0; /* Elimina el margen por defecto */
}

.price button {
  background-color: #4CAF50; /* Color de fondo del botón */
  color: white; /* Color del texto del botón */
  border: none; /* Sin borde */
  border-radius: 5px; /* Bordes redondeados */
  padding: 10px 15px; /* Padding del botón */
  cursor: pointer; /* Cambia el cursor al pasar el mouse */
  transition: background-color 0.3s; /* Suaviza la transición del color de fondo */
  font-size: 1em; /* Tamaño de fuente del botón */
}

.price button:hover {
  background-color: #388E3C; /* Color de fondo del botón al pasar el mouse */
}
</style>