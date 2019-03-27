import React from 'react'
import {Card, WingBlank} from "antd-mobile";
import {withRouter} from "react-router-dom";

@withRouter
class UserCard extends React.Component {
    handleClick(v) {
        this.props.history.push(`/chat/${v.user}`)
    }
    render () {
        return (<WingBlank >
            {
                this.props.userlist && this.props.userlist.map( v => (
                    v.avatar? (<Card key={v._id} onClick={() => this.handleClick(v)} style={{marginTop:"10px"}}>
                        <Card.Header
                            thumb={require(`../../assets/image/${v.avatar}.png`)}
                            title={v.user}
                            extra={<span>{v.title}</span>}
                        >
                        </Card.Header>
                        <Card.Body>
                            <div>{v.desc.split('\n').map( v => (
                                <span key={v}>{v}</span>
                            ))}</div>
                        </Card.Body>
                    </Card>) : null
                ))
            }
        </WingBlank>)
    }
}
export default UserCard
