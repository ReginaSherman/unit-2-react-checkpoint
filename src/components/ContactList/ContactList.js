import React from 'react'
import Contact from '../Contact/Contact'

const ContactList = (props) => {
    const { contacts } = props
    return (
        <div className='contact-list'>
            {contacts.map(contact => {
                return (
                    <Contact key={ contact.email }
                    image={ contact.image }
                    name={ contact.name }
                    email={ contact.email }/>
                )
            })}
        </div>
    )
}

export default ContactList