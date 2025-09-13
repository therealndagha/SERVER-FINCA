import db from '../config/db.js';

export async function getAllCustomers(req, res){

  try {
    const [rows] = await db.query(`SELECT * FROM customers`);
    return res.status(200).json({
        success: true,
        message: 'here is the list of all customers',
        data: rows
    })
  } catch (error) {
     return res.status(500).json({
        success: false,
        message: 'some error occured while trying to get customer list'
     })
  }

}


export async function addCustomers(req, res){

    try {
        const [rows] = await db.query(``)
    } catch (error) {
        
    }

}