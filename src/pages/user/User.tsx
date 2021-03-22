import React,{useState} from 'react'
import {Modal,Button} from 'antd'

const user = () => {
    let [show,setShow] = useState<boolean>(false)
    let showModal = ():void=>{
        setShow(true)
    }
    return (
        <div>
          <div> 用户 </div>

          <div>
              <Button type="primary" onClick={showModal}>Open Modal</Button>
              <Modal title="Basic Modal" visible={show}>
                  <p>some context...</p>
                  <p>some context...</p>
                  <p>some context...</p>
                  <p>some context...</p>
              </Modal>
          </div>
        </div>
    )
}

export default user
