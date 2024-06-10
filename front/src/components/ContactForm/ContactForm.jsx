import { useState } from 'react'
import styles from './ContactForm.module.css'
import axios from 'axios'
import Swal from 'sweetalert2'

export function ContactForm(){
    const initialState = {
        userEmail: '',
        subject: '',
        text: ''
    }
    const [isLoading, setIsLoading] = useState(false);
    const [newMessage, setNewMessage] = useState(initialState)

    const handleChange = (e) => {
        setNewMessage({
            ...newMessage,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!newMessage.userEmail){
            Swal.fire({
                title: 'Oops...',
                text: 'Debes enviar al menos un email',
                icon: 'error'
            })
        } else {
            axios.post(`${import.meta.env.VITE_API_URL}/sendEmail`, newMessage)
            .then(()=>{
                    Swal.fire({
                    title: 'Enviado',
                    icon: 'success',
                    text: 'El email ah sido enviado con exito'
                })
            })
            .catch((error)=>{
                Swal.fire({
                    title: 'Oops...',
                    icon: 'error',
                    text: error.response.data.message
                })
            })
        }
    }
    return(
        <>
        <div id='contacto'></div>
        <div className='contact-section'>
            <h2 className={styles['ContactH2']}>Contacto</h2>
            <div className={styles['ContactBody']}>
                <form className={styles['ContactForm']} onSubmit={handleSubmit}>
                    <div className={styles['ContactFormA']}>
                        <div>
                            <label htmlFor="userEmail">Correo Electronico</label>
                            <input type="text" id='userEmail' name='userEmail' onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="subject">Asunto</label>
                            <input type="text" id='subject' name='subject' onChange={handleChange}/>
                        </div>
                    </div>
                    <div className={styles['ContactFormB']}>
                        <label htmlFor="text">Mensaje</label>
                        <textarea name="text" id="text" onChange={handleChange}></textarea>
                    </div>
                    <button type='submit'>Enviar</button>
                </form>
            </div>
        </div>
        </>
    )
}