import express from 'express'
import cors from 'cors'
import { MongoClient } from 'mongodb'

const app = express()

const Client = new MongoClient("mongodb+srv://nandhagopy:123@cluster0.u2gtb.mongodb.net/")

const dbconnect = async() =>{
    await Client.connect()
    console.log("Connected MongoDB")     
}

app.use(cors())

app.get('/',(req,res)=>{
    res.send('Server Connected')
})

app.get('/search', async(req,res)=>{
    await Client.connect()
    const db = Client.db('allusers')
    const userDetails = db.collection('userdetails')

    const AllData = await userDetails.find().toArray()
    
    const tempArr = AllData.filter((data)=>{
        if (data.firstname.toLowerCase().includes(req.query.key.toLowerCase()) || data.lastname.toLowerCase().includes(req.query.key.toLowerCase()) || data.phone.toLowerCase().includes(req.query.key.toLowerCase())) {
            return true
        }
        else{
            return false
        }
    })
    res.send(tempArr)
})

app.listen(5000,()=>{
    dbconnect()
    console.log("Server Started")
})