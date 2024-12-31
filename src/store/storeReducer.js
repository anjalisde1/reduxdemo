import { buy_book , sell_book} from "./storeType"

const initialstate = {
    noOfBooks: 20
}

const bookReducer = (state = initialstate, action) => {
  switch(action.type){
    case buy_book: return {
    ...state, noOfBooks: state.noOfBooks - 1
}
 case sell_book: return {
    ...state, noOfBooks: state.noOfBooks + 1
}
    default : return state

}
}


export default bookReducer;