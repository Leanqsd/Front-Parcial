import Cart from "@/components/cart.vue";
import type { Book } from "@/models/BookModel";
import type { cartItems } from "@/models/cartItemModel";
import { defineStore } from "pinia";

export const useCartStore = defineStore({
    id: "cart",
    state: () => ({
        cartItems: [] as cartItems[]
    }),
    

    getters:{
        totalItems: (state) => state.cartItems.reduce((total, item) => total + item.quantity, 0),
        totalPrice: (state) => state.cartItems.reduce((total, item) => total + item.book.price * item.quantity, 0)
    },

    actions: {
        addToCart(book: Book){
            const existingItem = this.cartItems.find(item => item.book.id === book.id);
            if (existingItem){
                existingItem.quantity +=1;
            }else {
                this.cartItems.push({ book, quantity: 1});
            }
        },

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

        clearCart() {
            this.cartItems = []
        }
    }

})