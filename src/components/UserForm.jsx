import { Form, Input, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Octokit } from "@octokit/rest";



function UserForm(){
    const navigate=useNavigate()
    const [form] = Form.useForm();

    const PERSONAL_ACCESS_TOKEN=import.meta.env.VITE_PERSONAL_ACCESS_TOKEN

    const octokit = new Octokit({
      auth: PERSONAL_ACCESS_TOKEN, 
    });

    async function fetchData(url){
      try {
        const response=await fetch(url)
        if(!response.ok){
          throw new Error(`Error fetching data from ${url}`)
        }
        const data=await response.json()
        return data
      } catch (error) {
        console.error(error)
        return null
      }
    }

    async function getInfo(username){
        try {
          const generalUserResponse = await octokit.rest.users.getByUsername({
            username: username,
          });

          const generalUserData=await generalUserResponse.data


          const contributionsData = await fetchData(`https://github-contributions-api.jogruber.de/v4/${username}`);

          const prCountData = await fetchData(`https://api.github.com/search/issues?q=author:${username}+type:pr+created:2024-01-01..2024-12-31`);

          return {
            generalUserData:generalUserData,
            contributionsData:contributionsData,
            prCountData:prCountData
          }

        } catch (error) {
            console.log(error)
        }
    }

    async function onFinish(values){
        try {
          let info = await getInfo(values.username)
            navigate(`/wrapped/${info.generalUserData.login}`,{state:info,})
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