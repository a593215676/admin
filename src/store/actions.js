import {GET_CITY, GET_CITY1} from './mutation-types'
import axios from '../http'
import moment from 'moment'
export default {
    async getCity ({commit}) {
        let res = await axios.req("https://cnodejs.org/api/v1/topics")
        let day_=new Date().getTime()
        res.data.map(item =>{
             item.times=moment(day_).valueOf()-moment(item.last_reply_at).valueOf()
        })
        commit(GET_CITY, res.data)
    },
    async getCity1 ({commit}) {
        let res1 = await axios.req("https://cnodejs.org/api/v1/topic/5433d5e4e737cbe96dcef312")
        console.log(res1.data);
        commit(GET_CITY1, res1.data)
    }
}
