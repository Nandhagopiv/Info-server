const express = require('express')
const cors = require('cors')

const app = express()

let AllData = [
    {
        "firstname": "Tony",
        "lastname": "Stark",
        "phone": "+1 345 4568"
    },
    {
        "firstname": "Steve",
        "lastname": "Rogers",
        "phone": "+1 234 5678"
    },
    {
        "firstname": "Natasha",
        "lastname": "Romanoff",
        "phone": "+1 567 8901"
    },
    {
        "firstname": "Bruce",
        "lastname": "Banner",
        "phone": "+1 678 9012"
    },
    {
        "firstname": "Clint",
        "lastname": "Barton",
        "phone": "+1 789 0123"
    },
    {
        "firstname": "Wanda",
        "lastname": "Maximoff",
        "phone": "+1 890 1234"
    }
]


app.use(cors())

app.get('/',(req,res)=>{
    res.send('Server Connected')
})

app.get('/search',(req,res)=>{
    console.log(req.query)
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
    console.log("Server Started")
})