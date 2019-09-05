import { Message } from 'element-ui'

export default ({ $axios }) => {
    //错误拦截
    $axios.onError(res => {
        console.log(res.response);
        const {
            statusCode,
            message
        } = res.response.data
        if (statusCode == 400) {
            Message.error(message)
        }

    })
}
