import React from 'react'
import {TabBar} from "antd-mobile";
import PropTypes from 'prop-types'
import {withRouter} from "react-router-dom";

@withRouter
class NavLink extends React.Component {
    static  propTypes = {
        data: PropTypes.array.isRequired
    }
    render () {
        const list = this.props.data.filter(v => !v.hide)
        const pathname = this.props.location.pathname
        return (
            <div style={{position:'fixed',bottom: 0,width: '100%'}}>
                <TabBar
                    tabBarPosition="bottom"
                >
                    {
                        list.map(v => (
                            <TabBar.Item
                                key={v.path}
                                title={v.title}
                                icon={{uri: require(`../../assets/image/${v.icon}.png`)}}
                                selectedIcon={{uri: require(`../../assets/image/${v.icon}-active.png`)}}
                                selected={pathname === v.path}
                                onPress={() => {
                                    this.props.history.push(v.path)
                                }}
                            />
                        ))
                    }
                </TabBar>
            </div>
        )
}
}
export default NavLink
