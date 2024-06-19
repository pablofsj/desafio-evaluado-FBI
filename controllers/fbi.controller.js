import { fbiModel } from "../models/fbi.model.js";
import jwt from 'jsonwebtoken'


const loginAgent = async (req,res) =>{
    try {
        const {email, password} = req.body
        const user = await fbiModel.getAgentByEmail(email)
        if(!user){
            return res.status(400)
            .json({
                ok: false ,
                msg: 'El email no se encuentra registrado'
            })
        }
       
        if (password !== user.password) {
            return res.status(401).json({
                ok: false,
                msg: "Password incorrecta"
            });
        }

        const token = jwt.sign(
            { email: user.email},
            process.env.SECRET_JWT,
            { expiresIn: '2m'}
        )


        return res.json({
            token,
            email: user.email
        })  

    } catch (error) {
        console.log(error);
        res.status(500).json( {error: 'Error interno del servidor'})
    }
}

const profileAgent = async (req, res) => {
    try {

        const user = await fbiModel.getAgentByEmail(req.email)
        return res.json({ ok: true, msg: user })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Error server'
        })
    }
}

export const fbiController = {
    loginAgent,
    profileAgent
}

