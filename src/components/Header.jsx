import Button from './UI/Button';
import logo from '../assets/logo.jpg';
import { useContext } from 'react';
import CartContext from '../store/CartContext';
import UserProgressContext from '../store/UserProgressContext';

export default function Header () {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const totalCartItems = cartCtx.items.reduce((totalNumberOfItmes, item)=> {
        return totalNumberOfItmes + item.quantity;
    }, 0);

    function handleShowCart () {
        userProgressCtx.showCart();
    }

    return <header id='main-header'>
        <div id='title'>
        <img src={logo} alt="dining image" />
        <h1>Foodie Joint</h1>
        </div>
        <nav>
            <Button onClick={handleShowCart} textOnly>Cart ({totalCartItems})</Button>
        </nav>
    </header>
}