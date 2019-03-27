import React from 'react'
import {connect} from "react-redux";
import {getUserList} from "../../redux/chatUser.redux";
import UserCard from '../userCard/userCard'

@connect(state => state.chatUser, {getUserList})
class Boss extends React.Component {

    componentWillMount() {
        this.props.getUserList('genius')
    }
    render () {
        return (<UserCard userlist={this.props.userlist} />)
    }
}
export default Boss
