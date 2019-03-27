import React from 'react'
import UserCard from '../userCard/userCard'
import {connect} from 'react-redux'
import {getUserList} from "../../redux/chatUser.redux";

@connect( state => state.chatUser, {getUserList})
class Genius extends React.Component {
    componentWillMount() {
        this.props.getUserList('boss')
    }
    render () {
        return (<UserCard userlist={this.props.userlist} />)
    }
}
export default Genius;
