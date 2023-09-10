import React from 'react';

function SockList({ socks }) {
    return (
        <div className="sock-list">
            <h2>Basketball Socks Collection</h2>
            <div className="socks">
                {socks.map((sock) => (
                    <div key={sock.id} className="sock-card">
                        <img src={sock.image} alt={sock.name} />
                        <h3>{sock.name}</h3>
                        <p>Price: ${sock.price}</p>
                        <button className="add-to-cart">Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SockList;
