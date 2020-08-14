const jwt = require('jsonwebtoken');
const cloudinary = require('cloudinary').v2
const JWT_SECRET = process.env.JWT_SECRET

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})

module.exports = {
    createToken: (payload) => {
        const token = jwt.sign(payload,JWT_SECRET,{ expiresIn: '1d' });
        return token
    },
    uploadFile: (tempFile,id) => {
        return new Promise ((resolve, reject) => {
            cloudinary.uploader.upload(tempFile,{ public_id: id },(err,result) => {
                err ? reject(err) : resolve(result)
            })
        })
    }
}