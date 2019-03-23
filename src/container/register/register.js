import React from 'react'
import Logo from '../../components/logo/logo'
import {List, InputItem,Radio, WingBlank, WhiteSpace, Button} from "antd-mobile";
import {connect} from 'react-redux'
import {register} from '../../redux/user.redux'
import {Redirect} from 'react-router-dom'

@connect(
    state => state.user,
    {register}
)
class Register extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            user: '',
            pwd: '',
            repwd: '',
            type: 'geniusInfo'
        }
    }
    handleChange (key, v) {
        this.setState({
            [key]: v
        })
    }
    handleRegister = () => {
        this.props.register(this.state)
    }
    render() {
        const RadioItem = Radio.RadioItem
        return (
            <div>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo}/> : ''}
                <Logo></Logo>
                <WingBlank>
                    <List>
                        {this.props.msg ? <div class="err-msg">{this.props.msg}</div> : ''}
                        <InputItem
                        type='text'
                        onChange={v => this.handleChange('user', v)}
                        >用户名</InputItem>
                        <WhiteSpace></WhiteSpace>
                        <InputItem
                            type='password'
                            onChange={v => this.handleChange('pwd', v)}
                        >密码</InputItem>
                        <WhiteSpace></WhiteSpace>
                        <InputItem
                            type='password'
                            onChange={v => this.handleChange('repwd', v)}
                        >确认密码</InputItem>
                        <WhiteSpace></WhiteSpace>
                        <RadioItem checked={this.state.type==='geniusInfo'}
                                   onClick={() => this.handleChange('type', 'geniusInfo')}
                        >
                            牛人
                        </RadioItem>
                        <RadioItem checked={this.state.type==='boss'}                                   onClick={() => this.handleChange('type', 'geniusInfo')}
                                   onClick={() => this.handleChange('type', 'boss')}
                        >
                            BOSS
                        </RadioItem>
                        <WhiteSpace></WhiteSpace>
                        <Button type='primary' onClick={this.handleRegister}>注册</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}
export default Register
