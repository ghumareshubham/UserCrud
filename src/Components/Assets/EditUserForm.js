import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditUserForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        city: '',
        state: '',
        country: '',
        postalCode: '',
        mobileNumber: '',
        gender: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        fetchUserData();
    }, [id]);

    const fetchUserData = () => {
        console.log ("id is ============>>>>>>>"+id)
        axios.get(`http://localhost:8080/user/getByUserId/${id}`)
            .then(response => {
                const { message, object } = response.data;
                console.log ("Response  is ============>>>>>>>"+response.data)

                if (message === 'success') {
                    const { email, password, firstName, lastName, city, state, country, postalCode, mobileNumber, gender } = object;
                    setFormData({ email, password, firstName, lastName, city, state, country, postalCode, mobileNumber, gender });
                } else {
                    setError('Failed to fetch user data');
                }
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
                setError('Error fetching user data');
            });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        axios.put(`http://localhost:8080/user/editUserById/${id}`, formData)
            .then(response => {
                const { message, object } = response.data;
                if (message === 'success') {
                    setSuccessMessage('User details updated successfully');
                    navigate('/users'); 
                } else {
                    setError('Failed to update user details');
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Error updating user details:', error);
                setError('Error updating user details');
                setLoading(false);
            });
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (

        <section className="h-100 h-custom" style={{ backgroundColor: "#8fc4b7" }}>

        <div className="container mt-4">
            <h2>Edit User</h2>
            {successMessage && <div className="alert alert-success">{successMessage}</div>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" className="form-control" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" className="form-control" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="city">City:</label>
                    <input type="text" className="form-control" id="city" name="city" value={formData.city} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="state">State:</label>
                    <input type="text" className="form-control" id="state" name="state" value={formData.state} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="country">Country:</label>
                    <input type="text" className="form-control" id="country" name="country" value={formData.country} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="postalCode">Postal Code:</label>
                    <input type="text" className="form-control" id="postalCode" name="postalCode" value={formData.postalCode} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="mobileNumber">Mobile Number:</label>
                    <input type="text" className="form-control" id="mobileNumber" name="mobileNumber" value={formData.mobileNumber} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="gender">Gender:</label>
                    <select className="form-control" id="gender" name="gender" value={formData.gender} onChange={handleInputChange}>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary mt-3 mb-3">Save Changes</button>
            </form>
        </div>
        </section>
    );
}

export default EditUserForm;





















