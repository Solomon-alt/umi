import React,{FC} from 'react' //FC叫function component

interface Props{
    children:React.ReactNode //引入公共路由私有部分
}

const Layouts:FC<Props> = (props:Props) => {
    return (
        <div>
            123
            {props.children}  
            {/* props.children公共路由的私有部分 */}
        </div>
    )
}

export default Layouts
