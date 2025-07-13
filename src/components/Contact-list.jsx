import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactList = () => {
    const [contacts, setContacts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchContacts = async () => {
            const token = localStorage.getItem('token');

            try {
                const response = await fetch('/api/contacts', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (!response.ok) throw new Error('Failed to fetch contacts');

                const data = await response.json();
                setContacts(data);
            } catch (error) {
                console.error(`Error fetching contacts: ${error.message}`);
            }
        };

        fetchContacts();
    }, []);

    const handleDelete = async (contactId) => {
        const token = localStorage.getItem('token');

        try {
            const response = await fetch(`/api/contacts/${contactId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) throw new Error('Failed to delete contact');

            setContacts(prev => prev.filter(contact => contact._id !== contactId));
        } catch (error) {
            console.error(`Error deleting contact: ${error.message}`);
        }
    };

    return (
        <div className="container mt4">
            <h1 className="text-center">Contacts</h1>
            <button className="btn btn-primary mb-3" onClick={() => navigate('/contact-details')}>Create New Contact</button>

            {contacts.length > 0 ? (
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map(contact => (
                            <tr key={contact._id}>
                                <td>{contact.name}</td>
                                <td>{contact.phone}</td>
                                <td>{contact.email}</td>
                                <td>{contact.message}</td>
                                <td>
                                    <button className="btn btn-secondary me-2" onClick={() => navigate(`/contact-details/${contact._id}`)}>Update</button>
                                    <button className="btn btn-danger" onClick={() => handleDelete(contact._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-center">No contacts available</p>
            )}
        </div>
    );
};

export default ContactList;
