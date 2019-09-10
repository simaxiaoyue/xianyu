import { Message } from 'element-ui'

export default ({ $axios, redirect }) => {
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
        if(statusCode === 401 || statusCode === 403){
            Message.error("请登录！");
            // 跳转到登录页
            redirect("/user/login");
        }

    })
}
