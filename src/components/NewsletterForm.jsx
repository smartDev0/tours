import React, {useState} from "react"
import {useToasts} from 'react-toast-notifications'
import Button from './Button'

const NewsletterForm = () => {
    const { addToast } = useToasts();
    const [mail, setMail] = useState("");

    const handleChange = e => {
        setMail(e.target.value)
    }


    const onSubmit = async (event) => {
        event.preventDefault();
        if (emailValidation) {
            const result = await fetch(`${process.env.GATSBY_API_URL}/newsletter`, {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ "email": mail })
            }).then(res => res.json());
            if (result.status === 200) {
                addToast('Yay ✈️, pronto a volare? Controlla la tua email e conferma️', {
                    appearance: 'success',
                    autoDismiss: true,
                })
                setMail('')
            }
        }
    }

    const emailValidation = () => {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!mail || regex.test(mail) === false) {
            return false;
        }
        return true;
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <input type="email" placeholder="Inserisci la tua email" className="form-control" value={mail} onChange={handleChange} required />
            </div>
            <Button variant={'link'} submit>Iscriviti</Button>
        </form>
    )
}


export default NewsletterForm