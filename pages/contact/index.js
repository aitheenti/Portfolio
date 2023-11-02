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
        <div className="flex flex-col justify-center justify-items-center m-auto bg-black text-white items-center">
            <form onSubmit={formik.handleSubmit}>
                <div className="m-20 flex justify-between">
                    <label > First name:</label>
                    <input id="firstName" name="firstName" value={formik.values.firstName} type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
                </div>
                <div className="m-20 flex justify-between">
                    <label> Last name:</label>
                    <input id="lastName" name="lastName" value={formik.values.lastName} type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
                </div>
                <div className="m-20 flex justify-between">
                    <label> Email Address:</label>
                    <input id="email" name="email" value={formik.values.email} type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                </div>
                <div className="m-20 flex justify-between">
                    <label> Message:</label>
                    <input id="message" name="message" value={formik.values.message} type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.errors.message ? <div>{formik.errors.message}</div> : null}
                </div>
                <button type="submit">Submit Form</button>
            </form>
        </div >
    )
}

export default ContactForm;