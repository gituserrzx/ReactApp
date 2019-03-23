import React from 'react'
import Logo from '../../components/logo/logo'
import {Button, WhiteSpace ,InputItem, WingBlank, List} from "antd-mobile";
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import {login} from '../../redux/user.redux'
require('../../assets/css/index.css')

@connect(
    state => state.user,
    {login}
)
class Login extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            psw: ''
        }
        this.register = this.register.bind(this)
    }
    register() {
        this.props.history.push('/register')
    }
    handleChange (key, v) {
        this.setState({
            [key]: v
        })
    }
    handleLogin = () => {
        this.props.login(this.state)
    }
    render() {
        return (
            <div>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo}/> : null}
                <Logo/>
                <WingBlank>
                    {this.props.msg ? <div className="err-msg">{this.props.msg}</div> : ''}
                    <List>
                        <InputItem
                        type = {'text'}
                        onChange = {v => this.handleChange('user', v)}
                        >用户</InputItem>
                        <WhiteSpace/>
                        <InputItem
                            type={'password'}
                            onChange = {v => this.handleChange('pwd', v)}
                        >密码</InputItem>
                    </List>
                    <WhiteSpace/>
                    <Button type='primary' onClick={this.handleLogin}>登录</Button>
                    <WhiteSpace/>
                    <Button onClick={this.register} type='primary'>注册</Button>
                </WingBlank>
            </div>
        )
    }
}
export default Login
