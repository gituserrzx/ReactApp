const express = require('express')
const Router = express.Router()
const model = require('./model')
const utility =  require('utility')

const _filter = {
        pwd: 0,
        __v: 0
}
const User = model.getModel('user')
Router.get('/list', function(req, res){
    // User.remove({}, function (e,d) {
    //
    // })
    User.find({}, function (err, doc){
        return res.json(doc)
    })
})
Router.post('/register', function (req, res){
    const {user, pwd, type} = req.body
    User.findOne({user: user}, function (err, data) {
        if (data) {
            return res.json({code: 1, msg: '用户名重复'})
        }
        const userModel = new User({user, type, pwd: md5Pwd(pwd)})
        userModel.save(function (err, data) {
            if (err) {
                res.json({code: 1,msg: '后端出错了'})
            }
            const {_id, user, type} = data
            return res.json({code: 0, data: {_id, user, type}})
        })
        // User.create({user, pwd: md5Pwd(pwd), type}, function(err,data){
        //     if(err) {
        //         return res.json({code: 1,msg: "后端出错了"})
        //     }
        //     return res.json({code: 0})
        // })
    })
})
Router.post('/login', function (req, res) {
    const {user, pwd} = req.body
    User.findOne({user, pwd: md5Pwd(pwd)}, _filter,function (err, data) {
        if (err) {
            return res.json({code: 1, msg: '后端出错了'})
        }
        res.cookie('userId', data._id)
        return res.json({ data,code: 0})
    })
})
Router.post('/update', function (req, res) {
    const userId = req.cookies.userId
    if(!userId) {
        return json.dumps({code: 1})
    }
    const body = req.body
    console.log(body)
    User.findByIdAndUpdate(userId, body, function(err, doc) {
        if (err) {
            res.json({code: 1,msg: '后端出错了'})
        }
        const data = Object.assign({}, {
            user: doc.user,
            type: doc.type
        }, body)
        return res.json({code: 0, data})
    })
})
Router.get('/info', function (req, res) {
    //用户有没有用cookie
    const {userId} = req.cookies
    if(!userId) {
        return res.json({code:1})
    }
    User.findOne({_id: userId}, function (err, data) {
        if(err) {
            return res.json({code: 1, msg: '后端出错了'})
        }
        return res.json({data, code: 0})
    })
})
function md5Pwd(pws){
    const salt = 'sssssdfggaa';
    return utility.md5(salt+ utility.md5(pws))
}
module.exports = Router
