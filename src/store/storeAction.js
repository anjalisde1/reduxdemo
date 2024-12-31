import { buy_book, sell_book } from "./storeType"

export const Purchase_book=()=>{
    return {
        type : buy_book
    }
}
export const Sell_book=()=>{
    return {
        type : sell_book
    }
}