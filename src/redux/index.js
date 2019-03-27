import {combineReducers} from "redux";

import {user} from './user.redux'
import {chatUser} from './chatUser.redux'

export default  combineReducers({user, chatUser})
