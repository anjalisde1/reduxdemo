import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Purchase_book, Sell_book } from './store/storeAction'
function App() {
    const books = useSelector(state => state.books.noOfBooks)
    const dispatch = useDispatch()

    return (
        <>
            <div>
                <p>booksContainer:  {books}</p></div>
            <button onClick={() => (
                dispatch(Purchase_book())
            )}>buy</button>
            <button onClick={() => (
                dispatch(Sell_book())
            )}>sell</button>
        </>
    )
}

export default App;
