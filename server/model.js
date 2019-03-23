const mongoose = require('mongoose')
const DB_URL = 'mongodb://localhost:27017/test'
mongoose.connect(DB_URL)

const models = {
    user: {
        'user': {type: String, require: true},
        'pwd': {type: String, require: true},
        'type': {type: String, require: true},
        'avatar': {type: String},
        //"个人简介"
        'desc': {type: String},
        // 职位名
        'title': {type: String},
        'company': {type: String},
        "money": {type: String}
    },
    chat: {}
}

for (let prop in models) {
    mongoose.model(prop, new mongoose.Schema(models[prop]))
}
module.exports = {
    getModel: function (name) {
       return  mongoose.model(name)
    }
}
