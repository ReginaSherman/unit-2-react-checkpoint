import React, { useState } from 'react'



const NewContact = ({ addContact }) => {
    const initialState = {name: '', email: '', image: ''}
    const [ formState, setFormState ] = useState(initialState)

    const handleChange = (event) => {
        setFormState({...formState, [event.target.id]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formState)
        addContact(formState)
    }

    return (
        <div className='new-contact'>
            <h1>New Contact</h1>
            <form onSubmit={ handleSubmit }>
                <input
                    type='text'
                    placeholder='Name'
                    id='name'
                    onChange={ handleChange }
                    value={ formState.name } />
                <label htmlFor='Name'>Name</label>

                <input
                    type='email'
                    placeholder='Email'
                    id='email' 
                    onChange={ handleChange }
                    value={ formState.email }/>
                <label htmlFor='Email'>Email</label>

                <input
                    type='url'
                    placeholder='Image '
                    id='image' 
                    onChange={ handleChange }
                    value={ formState.image }/>
                <label htmlFor='Contact Photo'>Contact Photo</label>
                <input type='submit' value='Submit' />
            </form>
        </div>
    )
}

export default NewContact