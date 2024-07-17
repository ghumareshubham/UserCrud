// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function UserList() {
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:8080/user/getAllUsers')
//             .then(response => {
//                 setUsers(response.data);
//             })
//             .catch(error => {
//                 console.error('There was an error fetching the users!', error);
//             });
//     }, []);

//     return (
//         <div>
//             <h1>User List</h1>
//             <ul>
//                 {users.map(user => (
//                     <li key={user.id}>
//                         {user.firstName} {user.lastName} - {user.email}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default UserList;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const fetchUsers = () => {
        axios.get('http://localhost:8080/user/getAllUsers')
            .then(response => {
                const { message, object } = response.data;
                if (message === 'success') {
                    setUsers(object); 
                } else {
                    setError('Failed to fetch users');
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
                setError('Error fetching users');
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchUsers();
    }, []); 



    const handleEdit = (userId) => {
     
        navigate(`/edit/${userId}`);
        
        console.log(`Editing user with ID ${userId}`);
    };

    const handleDelete = (userId) => {
        axios.delete(`http://localhost:8080/user/delete/${userId}`)
            .then(response => {
                console.log(response.data.message); 
                
                fetchUsers();
            })
            .catch(error => {
                console.error('Error deleting user:', error);
                
            });
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        
        <div className="container mt-4" style={{backgroundColor : "#939185"}}>
        <h1 className="mb-4">User List</h1>
        <table className="table table-hover  table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>**</th>
                
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>
                                <Link to={`/edit/${user.id}`} className="btn btn-primary mr-2 m-2" onClick={() => handleEdit(user.id)}>Edit</Link>
                                <button className="btn btn-danger" onClick={() => handleDelete(user.id)}>Delete</button>
                            </td>
                    </tr>
                ))}
            </tbody>
        </table>

        <Link to="/register" className="btn btn-primary my-2">Go to Registration</Link>
    </div>
    );
}



export default UserList;
