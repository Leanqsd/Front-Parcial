import type { Book } from "@/models/BookModel";
import type { cartItems } from "@/models/cartItemModel";
import { defineStore } from "pinia";

export const useCartStore = defineStore({
    id: "cart",
    state: () => ({
        cartItems: [] as cartItems[]
    }),
    
    getters:{
        /* Obtiene la cantidad total de items añadidos al carrito */
        totalItems: (state) => state.cartItems.reduce((total, item) => total + item.quantity, 0),
        /* Obtiene el precio total de la suma de todos los items añadidos */
        totalPrice: (state) => state.cartItems.reduce((total, item) => total + item.book.price * item.quantity, 0)
    },

    actions: {
        /* funcion que añade los items al carrito, si ya existe un item dentro con el mismo id, este suma +1 a la cantidad */
        addToCart(book: Book){
            const existingItem = this.cartItems.find(item => item.book.id === book.id);
            if (existingItem){
                existingItem.quantity +=1;
            }else {
                this.cartItems.push({ book, quantity: 1});
            }
        },

        /* funcion que quita los items del carrito, si ya existe uno o varios item dentro con el mismo id, este resta -1 a la cantidad*/
        removeFromCart(bookId: number) {
            const existingItem = this.cartItems.find(item => item.book.id === bookId);
            if(existingItem){
                if(existingItem.quantity > 1) {
                    existingItem.quantity -= 1;
                }else{
                    this.cartItems = this.cartItems.filter(item => item.book.id !==bookId);
                }
            } 
        },

        /* Funcion que limpia el carrito al comprar (aunque en realidad tendria que ir a un view con los metodos de paogo, etc)*/
        clearCart() {
            this.cartItems = []
        }
    }

})