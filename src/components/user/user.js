import React from 'react'
import {connect} from 'react-redux'
import {List, Result, WhiteSpace, Button, Modal} from 'antd-mobile'
import browserCookie from 'browser-cookies'
import {submitLogout} from '../../redux/user.redux'
import {Redirect} from "react-router-dom";

@connect(state => state.user,
    {submitLogout}
    )

class User extends React.Component {
    loginOut = () => {
        const alert = Modal.alert;
        alert('注销', '确定退出登陆吗？', [
            { text: '取消', onPress: '' },
            { text: '确认', onPress: () => {
                    browserCookie.erase('userId');
                    this.props.submitLogout()
                    // this.props.history.push('/login')
                    // window.location.href = window.location.href
                } },
        ])
    }
    render () {
        const props = this.props
        const Item = List.Item
        const Brief = Item.Brief
        return (
            props.user ?<div>
                { (<Result
                    img={<img src={require(`../../assets/image/${props.avatar}.png`)} style={{width: 50}} alt=""/>}
                    title={props.title}
                    message={props.type === 'boss'? props.company : null}
                />)}
                <List renderHeader={() => '简介'}>
                    <Item>
                        {props.title}
                        {props.desc && props.desc.split('\n').map(v => (<Brief key={v}>{v}</Brief>))}
                        {props.money ? <Brief>薪资：{props.money}</Brief>: null}
                    </Item>
                </List>
                <WhiteSpace  />
                <Button type={'primary'} onClick={this.loginOut}>退出登录</Button>
            </div> : (<Redirect to={props.redirectTo} /> )
        )
    }
}
export default User
