import type { Book } from "./BookModel";

/*Modelo del carrito que almacena los datos de los libros y la cantidad del mismo */
export interface cartItems {
    book: Book;
    quantity: number
}