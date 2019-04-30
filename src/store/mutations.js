import {GET_CITY,GET_CITY1} from './mutation-types'

export default {
    [GET_CITY] (state, data) {
        state.citys = data
    },
    [GET_CITY1] (state, data) {
        state.conts = data
    }
}