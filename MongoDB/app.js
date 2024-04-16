
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.use(express.json());

mongoose.connect('mongodb+srv://rajeevkushwaha1812:class@cluster0.zarxswq.mongodb.net/')
.then (()=> console.log('connected to MongoDB'))
.catch (err => console.error('Error connnecting to MongoDB: ',err));

const userSchema = new mongoose.Schema({
name: String,
email: String,
password: String
});

const User = mongoose.model('User', userSchema);

//get user
app.get('/users', (req, res) => {
User.find({})
.then(users => res.json(users))
.catch(err => res.status(500).json({
message: err.message}));
});

//create user
app.post('/create',(req,res)=>{
const user =new User({
name:req.body.name,
email:req.body.email,
password: req.body.password
});
user.save()
.then(newUser => res.status(201).json(newUser))
.catch(err => res.status(400).json({message: err.message}));
});

//update
app.put('/update/:id', (req, res) => {
const userId = req.params.id;

User.findByIdAndUpdate(userId, req.body, {new: true})
.then(updatedUser => {
if (!updatedUser) {
return res.status(404).json({message: 'User not found'});
}
res.json(updatedUser);
})
.catch(err => res.status(400).json({message: err.message}));
});

//detele user
app.delete('/delete/:id', (req, res) => {
    const userId = req.params.id;
    User.findByIdAndRemove(userId)
    .then(deletedUser => {
        if(!deletedUser){
            return res.status(404).json({message: 'User not found'});
        }
        res.json({message: 'User deleted successfully'});
    })
    .catch(err=>res.status(400).json({message: err.message}));

});

app.listen(3000,()=> console.log('Server is running on http://localhost:3000'));