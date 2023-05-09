import { createContext, useReducer } from "react";
import { reducer } from "./Reducer";
export const Store = createContext();

const Context = ({ children }) => {

    const initialState = {
      item : [],
      cartItem : [],
      totalAmount : 0,
    }
    const [state, dispatch] = useReducer(reducer, initialState)



    const updateItems = (newItem)=>{
      dispatch({
        type : 'UPDATEITEMS', 
        payload : newItem
      })
    }

    const updateCart = (id,item, quantity, type)=>{
      dispatch({
        type: 'UPDATECART',
        payload : {
          id,
          item,
          quantity,
          type
        }
      })
    }

    const removeItemFromCart = (id, quantityL, quantityM, quantityS)=>{

      dispatch({
        type : 'REMOVEITEM',
        payload : {
          id,
          quantityL,
          quantityM,
          quantityS
        }
      })
    }

    const changeValues = (id, quantity, totalQuantity) =>{
      dispatch({
        type : 'CHANGEVALUES',
        payload: {
          id, 
          quantity,
          totalQuantity
        }
      })
    }
    
  return <Store.Provider value={{...state, updateItems, updateCart, removeItemFromCart, changeValues}} >{children}</Store.Provider>;
};

export default Context;
