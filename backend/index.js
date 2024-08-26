const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const multer = require('multer')
const path = require('path')
const StaffModel = require('./models/staff')
const ImageModel = require('./models/image')

const app = express()
app.use(express.json())
app.use(express.static('public'))
app.use(cors({
    origin:['http://localhost:3000',""],
    methods:['POST','GET','DELETE','UPDATE'],
    credentials:true,
    optionsSuccessStatus:200
}))
// StaffModel.db.registers.updateMany({ $set: { Image: "" } });
// mongoose.connect('mongodb://localhost:27017/employee')
    mongoose.connect('mongodb+srv://patrickgregoryekene:1517M%40ct0172@cluster0.5ccko.mongodb.net/employee');


// image upload
const store = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null, 'public/images')
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({
    storage:store
})
app.post('/upload',upload.single('file'), (req,res)=>{
    // console.log(req.file)
    ImageModel.create({image:req.file.filename})
    .then(image=>res.json(image))
    .catch(err=>res.json(err))
})

app.get('/getImage',(req,res)=>{
    ImageModel.find()
    .then(image=>res.json(image))
    .catch(err=>res.json(err))
})

// register an staff
app.post('/register', (req,res)=>{
    StaffModel.create(req.body)
    .then(staff=>res.json(staff))
    .catch(err=>res.json(err))
})


// login a registered staff
app.post('/login', (req,res)=>{
    const {email,password}=req.body;
    StaffModel.findOne({email:email})
    .then(user=>{
        if(user){
        if(user.password === password){
            res.json('success')
        }else{
            res.json('password is incorrect')
        }}else{
            res.json("Record doesn't exist")
        }
    })
})


app.post('/create', (req,res)=>{
    StaffModel.create(req.body)
    .then(staff=>res.json(staff))
    .catch(err=>res.json(err))
})


// update begin
// get staff detail before update
app.get('/getuser/:id',(req,res)=>{
    const id = req.params.id
    StaffModel.findById({_id:id})
    .then(staff=>res.json(staff))
    .catch(err=>res.json(err))

})

app.put('/update/:id',(req,res)=>{
    const id = req.params.id
    StaffModel.findByIdAndUpdate({_id:id},{
        name:req.body.name,
        email:req.body.email,
        age:req.body.age,
        city:req.body.city
    })
    .then(staff=>res.json(staff))
    .catch(err=>res.json(err))
})
// update end




// delete a single user
app.delete('/delete/:id',(req,res)=>{
    StaffModel.findByIdAndDelete({_id:req.params.id})
    .then(staff=>res.json(staff))
    .catch(err=>res.json(err))
})

app.get('/', (req,res)=>{
    StaffModel.find({})
    .then(staff=>res.json(staff))
    .catch(err=>res.json(err))
})














app.listen(8080, ()=>{
    console.log('server is running')
})