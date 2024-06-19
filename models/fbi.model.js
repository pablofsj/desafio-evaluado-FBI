import { pool } from "../database/connection.js";


const getAgentByEmail = async (email) =>{
    const query = {
        text: 'SELECT * FROM fbi_agents WHERE email = $1',
        values: [email]
    }
    const {rows} = await pool.query(query)
    return rows[0]

}


export const fbiModel = {
    getAgentByEmail
}