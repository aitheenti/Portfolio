import { Formik, useFormik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function ContactForm() {

    const validate = values => {
        const errors = {};
        if (!values.firstName) {
            errors.firstName = 'First Name is required'
        } else if (values.firstName.length > 15) {
            errors.firstName = 'Name should be less than 15 characters'
        }

        if (!values.lastName) {
            errors.lastName = 'First Name is required'
        } else if (values.lastName.length > 15) {
            errors.lastName = 'Name should be less than 15 characters'
        }

        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (!values.message) {
            errors.email = 'Message should not be empty'
        }

        return errors
    }

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    })

    return (
        <>
            <div className="flex flex-col justify-center justify-items-center m-0 bg-black text-white items-center">
                <div className='text-2xl font-bold'>Let's connect!
                </div>
                <form className='bg-gray-400 w-full' onSubmit={formik.handleSubmit}>
                    <div className="m-16 flex justify-between">
                        <label > First name:</label>
                        <div>
                            <input id="firstName" name="firstName" value={formik.values.firstName} placeholder='First Name' type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {formik.errors.firstName ? <div className='text-red-600'>{formik.errors.firstName}</div> : null}
                        </div>

                    </div>
                    <div className="m-16 flex justify-between">
                        <label> Last name:</label>
                        <div>
                            <input id="lastName" name="lastName" value={formik.values.lastName} placeholder='Last Name' type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {formik.errors.lastName ? <div className='text-red-600'>{formik.errors.lastName}</div> : null}
                        </div>
                    </div>
                    <div className="m-16 flex justify-between">
                        <label> Email Address:</label>
                        <div>
                            <input id="email" name="email" value={formik.values.email} placeholder='testexamplegmail.com' type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {formik.errors.email ? <div className='text-red-600'>{formik.errors.email}</div> : null}
                        </div>
                    </div>
                    <div className="m-16 flex justify-between">
                        <label> Message:</label>
                        <div>
                            <input id="message" name="message" value={formik.values.message} placeholder='Type your message here...' type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {formik.errors.message ? <div className='text-red-600'>{formik.errors.message}</div> : null}
                        </div>
                    </div>
                    <div className='flex bg-blue-500 w-40 m-auto justify-center rounded-3xl'>
                        <button type="submit">Submit Form</button>
                    </div>
                </form>
            </div >
        </>
    )
}

export default ContactForm;