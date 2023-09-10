import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Cart() {
    const cartItems = [
        {
            id: 1,
            name: 'Performance Basketball Socks',
            image: 'performance-sock.jpg',
            price: 19.99,
            quantity: 2,
        },
        // Add more items as needed
    ];

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="cart-page">
            <Header />
            <main className="content">
                <h2>Your Shopping Cart</h2>
                <div className="cart-items">
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.name} />
                            <div className="info">
                                <h3>{item.name}</h3>
                                <p>Price: ${item.price}</p>
                                <p>Quantity: {item.quantity}</p>
                                <p>Total: ${item.price * item.quantity}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="total">
                    <h3>Total: ${calculateTotal()}</h3>
                    <button className="checkout-button">Proceed to Checkout</button>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Cart;
