import React,{useEffect} from 'react'
import {useHistory,useLocation,useSelector,useDispatch} from 'umi'

const Login = () => {

    //发请求=============================================

    let dispatch = useDispatch()

    let user = useSelector((state:any)=>state.user.users) //state.user.users user是你命名空间的名字

    useEffect(()=>{
        dispatch({
            type:'user/getUser',  //user/getUser  命名空间user下面的getUser方法
            payload:{}  //请求的参数
        })
    },[])
    return (
        <div>
            登录
        </div>
    )
}

export default Login
