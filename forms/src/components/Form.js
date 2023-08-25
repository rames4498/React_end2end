import React from 'react';
import {useForm} from 'react-hook-form';


const Form = () => {
    const {register, formState:{errors}, handleSubmit,} =  useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <div className="content">
            <form onSubmit={handleSubmit(onSubmit)}></form>
            <div>
                <h1>Registration</h1>
            </div>
            <div>
                <label htmlFor="">Username</label>
                <input type="text" placeholder='Enter the user name'/>
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input type="text"placeholder='Enter your password'  />
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="text"placeholder='Enter your Email'  />
            </div>
            <div>
                <label htmlFor="">Phone Number</label>
                <input type="text" placeholder='Enter your number'/>
            </div>
            <div>
                <input className = "button" type="submit" />
            </div>
        </div>
    );
};

export default Form;