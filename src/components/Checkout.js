import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Checkout() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        paymentMethod: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Implement your submission logic here
        console.log('Form data submitted:', formData);
    };

    return (
        <div className="checkout-page">
            <Header />
            <main className="content">
                <h2>Checkout</h2>
                <form className="checkout-form" onSubmit={handleSubmit}>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required />

                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />

                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} required />

                    <label htmlFor="city">City</label>
                    <input type="text" id="city" name="city" value={formData.city} onChange={handleInputChange} required />

                    <label htmlFor="state">State</label>
                    <input type="text" id="state" name="state" value={formData.state} onChange={handleInputChange} required />

                    <label htmlFor="zip">ZIP Code</label>
                    <input type="text" id="zip" name="zip" value={formData.zip} onChange={handleInputChange} required />

                    <label htmlFor="paymentMethod">Payment Method</label>
                    <select id="paymentMethod" name="paymentMethod" value={formData.paymentMethod} onChange={handleInputChange} required>
                        <option value="">Select Payment Method</option>
                        <option value="creditCard">Credit Card</option>
                        <option value="paypal">PayPal</option>
                    </select>

                    <button type="submit" className="submit-button">Place Order</button>
                </form>
            </main>
            <Footer />
        </div>
    );
}

export default Checkout;
