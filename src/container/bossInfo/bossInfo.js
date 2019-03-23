import React from 'react'
import AvatarSelect from '../../components/avatarSelect/avatarSelect'
import {NavBar, InputItem, TextareaItem, Button} from 'antd-mobile'
import {connect} from 'react-redux'
import {updateInfo} from "../../redux/user.redux";
import {Redirect} from "react-router-dom";

@connect(
    state => state.user,
    {updateInfo}
)
class BossInfo extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            title: '',
            company: '',
            desc: '',
            money: '',
        }
    }
    onChange (key, val) {
        this.setState({
            [key]: val
        })
    }
    render () {
        const redirect = this.props.redirectTo
        const path = this.props.location.pathname
        return (
            <div>
                {redirect && redirect !== path ? <Redirect to={redirect}/> : ''}
                <NavBar mode={'dark'}>BOSS完善信息页</NavBar>
                <AvatarSelect selectName={(imageName) => {
                    this.setState({
                        avatar:  imageName
                    })
                }}/>
                <InputItem
                    onChange={(v) => this.onChange('title',v)}
                >招聘职位</InputItem>
                <InputItem
                    onChange={(v) => this.onChange('company',v)}
                >公司名称</InputItem>
                <InputItem
                    onChange={(v) => this.onChange('money',v)}
                >职位薪资</InputItem>
                <TextareaItem
                    title={'职位要求'}
                    rows={3}
                    autoHeight
                    onChange={(v) => this.onChange('desc',v)}
                />
                <Button
                    onClick={() => {
                        this.props.updateInfo(this.state)
                    }}
                    type={'primary'}>保存</Button>
            </div>
        )
    }
}

export default BossInfo
