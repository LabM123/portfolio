const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config()
const nodemailer = require('nodemailer')
const sgTransport = require('nodemailer-sendgrid-transport')
const transporter = nodemailer.createTransport(
    sgTransport({
        auth: {
            api_key: process.env.SENDGRID_API_KEY
        }
    })
)

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.get('/sendEmail', async(req, res) => {
    try {
        let {subject, text, userEmail} = req.body
        if(!userEmail) throw new Error('Se debe enviar un correo de contacto')
        if(!subject) subject = 'Portfolio Subject'
        if(!text) text = `${userEmail} ah visto tu portafolio y quiere ponerse en contacto contigo!`
        else text = `${userEmail} dice: ` + text;
        const mailOptions = {
            from: process.env.BULK_MAIL_ADDRESS_SENDER,
            to: process.env.BULK_MAIL_ADDRESS_RECEIVER,
            subject,
            text
        }
        await transporter.sendMail(mailOptions)
        res.status(200).send({status: 'success', message: 'Correo Enviado'})
    } catch (error) {
        res.status(400).send({error: error, message: error.message})
    }
})

module.exports = app