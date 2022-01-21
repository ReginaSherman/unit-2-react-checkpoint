import React from 'react'

const Contact = (props) => {
    const { name, email, image } = props
    return (
        <div className='contact'>
            <img src={image}/>
            <h3>{ name }</h3>
            <h4>{ email }</h4>
        </div>
    )
}

export default Contact 