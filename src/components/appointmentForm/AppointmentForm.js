import React from 'react';
import ContactPicker from './components/contactPicker/ContactPicker';

const AppointmentsForm = ({
    onSubmit, 
    value, 
    contacts,
    setContacts, 
    title,
    setTitle, 
    date,
    setDate, 
    time,
    setTime}) => {


    return(
        <>
            <h3>Add Appointments</h3>
            <form onSubmit={onSubmit}>
                <input 
                    type="text" 
                    name="title" 
                    value={title}
                    placeholder="Appointment Title" 
                    onChange={e=>setTitle(e.target.value)}
                    required
                />

                <ContactPicker
                    contacts={contacts}
                    name='contacts'
                    value={value}
                    onChange={e=> setContacts(e.target.value)}
                    required
                />          

                <input 
                    type="date" 
                    name="date" 
                    value={date}
                    onChange={e=>setDate(e.target.value)}
                />

                <input 
                    type="time" 
                    name="time" 
                    value={time}
                    onChange={e=>setTime(e.target.value)}
                    required
                />
                
            </form>
        </>
    )
}

export default AppointmentsForm;