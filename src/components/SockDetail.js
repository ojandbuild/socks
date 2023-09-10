import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function SockDetail() {
    const sock = {
        id: 1,
        name: 'Performance Basketball Socks',
        image: 'performance-sock.jpg',
        description: 'Stay comfortable on the court with our performance basketball socks.',
        price: 19.99,
        sizes: ['S', 'M', 'L', 'XL'],
    };

    return (
        <div className="sock-detail-page">
            <Header />
            <main className="content">
                <div className="sock-details">
                    <img src={sock.image} alt={sock.name} />
                    <div className="info">
                        <h2>{sock.name}</h2>
                        <p>{sock.description}</p>
                        <p>Price: ${sock.price}</p>
                        <div className="sizes">
                            <span>Sizes: </span>
                            {sock.sizes.map((size) => (
                                <span key={size} className="size">{size}</span>
                            ))}
                        </div>
                        <button className="add-to-cart">Add to Cart</button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default SockDetail;
