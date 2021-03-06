import React,{useEffect} from "react";
import {useDispatch} from 'react-redux';
import {addToCart} from '../actions/cartActions';
function CartScreen(props){
    const productId=props.match.param.id;
    const qty=props.location.search? Number(props.location.search.split("=")[1]):1;
    const dispatch=useDispatch;
    useEffect(() => {
        if(productId){
            dispatch(addToCart(productId,qty));
    
        }
    },[])

    return <div>
        Cart Screen 
    </div>
}

export default CartScreen;