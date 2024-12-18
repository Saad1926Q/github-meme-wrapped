import { Form, Input, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';

function UserForm(){
    const navigate=useNavigate()
    const [form] = Form.useForm();

    async function getInfo(username){
        try {
            const response = await fetch(`https://api.github.com/users/${username}`)
            return response.json()
        } catch (error) {
            console.log(error)
        }
    }

    async function onFinish(values){
        try {
            let userInfo=await getInfo(values.username)
            navigate(`/wrapped/${userInfo.login}`,{state:userInfo})
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <>
            <Form
            form={form}
            onFinish={onFinish}
            layout="vertical"
            >
            <Form.Item
          name="username"
          label="Username"
          rules={[
            { required: true, message: 'Please input your username!' },
          ]}
        >
          <Input placeholder="Enter github username" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </Form.Item>    
            </Form>        
        </>
    )
}

export default UserForm