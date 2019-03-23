import React from 'react'
import {Grid, List} from 'antd-mobile'
import PropTypes from 'prop-types'

class AvatarSelect extends React.Component {
    static propTypes = {
        selectName: PropTypes.func.isRequired
    }
    constructor (props) {
        super(props)
        this.state = {}
    }
    render () {
        const avatarList = 'boy,girl,man,woman,bull,chick,crab,hedgehog,hippopotamus,koala,lemur,pig,tiger,whale,zebra'
            .split(',').map( v => ({
                icon:require(`../../assets/image/${v}.png`),
                text: v
            }))
        const gridHeader = this.state.icon
            ? (<div>
                <span>已选择头像</span>
                <img style={{width:20}} src={this.state.icon} alt=""/>
            </div>)
            : '请选择头像'
        return (
            <div>
                <List renderHeader={() => gridHeader}>
                    <Grid data={avatarList} columnNum={5}
                          onClick={el => {
                              this.setState(el)
                              this.props.selectName(el.text)
                          }}
                    />
                </List>
            </div>
        )
    }
}

export default AvatarSelect
