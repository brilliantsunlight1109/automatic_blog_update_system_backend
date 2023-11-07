const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    email: {
     type: String,
     required: [true,"Your email address is required"],
     unique: true
    },
    username: {
        type: String,
        required: [true,"Your username is required"]
    },
    password: {
     type: String,
     required: [true,"Your password is required"]
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

userSchema.pre('save', async function(next){
    this.password = await bcrypt.hash(this.password,12)
    next()
})

// userSchema.statics.login = async function(email,password){
//     const user = await this.findOne({email})
//     if(user){
//         const auth = await bcrypt.compare(password,user.password)
//         if(auth) return user;
//         throw Error('Invalid password')
//     }
//     throw Error('Invalid email')
// }

module.exports = mongoose.model('User',userSchema)