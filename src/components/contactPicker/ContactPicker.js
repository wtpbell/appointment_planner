import React from 'react';

const ContactPicker = ({contacts, name, value, onChange}) => {
    return (
        <>
            <div>
                <select
                    type='contact name'
                    onChange={onChange}
                    name={name}
                    value={value}
                >
                    <option value=''>Select a contact</option>
                    {contacts.map((contact, index) => (
                        <option key={index} value={contact.name}>{contact.name}</option>
                    ))}
                </select>
            </div>
        </>
    )
}

export default ContactPicker;