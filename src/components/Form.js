import { useState } from 'react'

const Form = () => {
    const [formData, setFormData] = useState(
        {   firstName: "",
            lastName: "",
            email: "" ,
            comments:"",
            isFriendly: true
        }
    )

    const handleChange = (event) => {
        const {name, value, type, checked} = event.target
        setFormData((prev) => {
            return {
                ...prev,
                [name] : type === "checkbox" ? checked : value
            }
        })
    }

    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input
                type="text"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <textarea 
                type="text"
                placeholder="comments"
                onChange={handleChange}
                name="comments"
                value={formData.comments}
            />
            <input 
                type="checkbox" 
                id="isFriendly"
                checked={formData.isFriendly}
                name="isFriendly"
            />
            <p>{formData.firstName}</p>
            <p>{formData.lastName}</p>
            <p>{formData.email}</p>
            <p>{formData.comments}</p>
        </form>
    )

}

export default Form