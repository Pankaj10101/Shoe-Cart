export const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATEITEMS": {
      return {
        ...state,
        item: action.payload,
      };
    }
    case "UPDATECART": {
      const itemIndex = state.cartItem.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (itemIndex !== -1) {
        const updatedCartItems = [...state.cartItem];
        updatedCartItems[itemIndex] = {
          ...updatedCartItems[itemIndex],
          quantity:
            updatedCartItems[itemIndex].quantity + action.payload.quantity
        };
        const updatedItems = state.item.map((item)=>{
          if(item.id===action.payload.id){
            return {...item, totalQuantity : item.totalQuantity - action.payload.quantity}
          }
          else{
            return item
          }
        });
        return {
          ...state,
          cartItem: updatedCartItems,
          item: updatedItems,
        };
      } else {
        const updatedItems = state.item.map((item)=>{
          if(item.id===action.payload.id){
            return {...item, totalQuantity : item.totalQuantity - action.payload.quantity}
          }
          else{
            return item
          }
        });

        return {
          ...state,
          item : updatedItems,
          cartItem: [
            ...state.cartItem,
            {
              ...action.payload.item,
              quantity: action.payload.quantity,
            }
          ],

        };
      }
    }



    case 'REMOVEITEM' : {
      const updatedItems = state.item.map((item)=>{
        if(item.id===action.payload.id){
          return {...item, totalQuantity : item.totalQuantity + action.payload.quantity}
        }
        else{
          return item
        }
      });
      return {
        ...state,
        item : updatedItems ,
        cartItem : state.cartItem.filter((item)=>{ return item.id!==action.payload.id})
      }
    }


    case 'CHANGEVALUES' : {
      const updatedCartItems = state.cartItem.map((item)=>{
        if(item.id===action.payload.id){
          return {...item, quantity : action.payload.quantity}
        }
        else{
          return item
        }})

        const updatedItems = state.item.map((item)=>{
          if(item.id===action.payload.id){
            return {...item, totalQuantity : action.payload.totalQuantity-action.payload.quantity}
          }
          else{
            return item
          }
        })
        return {
          ...state,
          item : updatedItems,
          cartItem : updatedCartItems
        }
    }

    default:
      return state;
  }
};
