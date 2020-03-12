import React, {Component} from 'react';
import Title from '../Title';
import CartCol from './CartCol';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';

class Cart extends Component {
  render(){
    return (
    <ProductConsumer>
        {value => {
          const {cart} = value;
          if (cart.length>0){
            return(
              <React.Fragment>
                <Title name="your" title="cart" />
                <CartCol />
                <CartList value = {value}/>
                <CartTotals value={value} history={this.props.history}/>
              </React.Fragment>
          )
          } else{
            return(<EmptyCart/>)
          }
        }}
      </ProductConsumer>
    );
  }
}

export default Cart;
