import React from 'react'
import {connect} from 'react-redux'
import {NavBar} from "antd-mobile";
import NavLink from '../../components/navLink/navLink'
import Boss from '../boss/boss'
import {Switch, Route} from 'react-router-dom'
import User from '../user/user'
import Genius from '../genius/genius'
require('../../assets/css/index.css')

function Msg () {
    return <h1>消息栏</h1>
}

@connect(state => state)
class DashBoard extends React.Component {
    render () {
        const path = this.props.location.pathname
        const user = this.props.user
        const navList = [
            {
                path: '/boss',
                text: 'BOSS',
                icon: 'boss',
                title: '牛人列表',
                component: Boss,
                hide: user.type === 'genius'
            },
            {
                path: '/genius',
                text: 'boss',
                icon: 'job',
                title: 'BOSS列表',
                component: Genius,
                hide: user.type === 'boss'
            },
            {
                path: '/msg',
                text: '消息',
                icon: 'msg',
                title: '消息列表',
                component: Msg
            },
            {
                path: '/me',
                text: '我',
                icon: 'user',
                title: '个人中心',
                component: User
            }
        ]
        const data = navList.find(v => path === v.path)
        return (
            <div>
                <NavBar  mode={'dark'}>{data && data.title}</NavBar>
                <div >
                    <Switch>
                        {
                            navList.map(v => (
                                <Route path={v.path} key={v.path} component={v.component}/>
                            )
                            )
                        }
                    </Switch>
                </div>
                <NavLink data={navList} />
            </div>
        )
    }
}
export default DashBoard
