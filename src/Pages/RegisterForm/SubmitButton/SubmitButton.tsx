import React from 'react'
import { Button} from 'antd';

interface SubmitButtonProps{
    loading:boolean;
}

const SubmitButton:React.FC<SubmitButtonProps> = ({loading}) => {
  return (
    <div>
      <Button type="primary" block htmlType="submit" loading ={loading} >
        Submit
        </Button>
    </div>
  )
}

export default SubmitButton
