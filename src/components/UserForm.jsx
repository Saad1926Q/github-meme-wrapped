import { notification,Form, Input, Button, message, Spin } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Octokit } from "@octokit/rest";
import { useState } from 'react';



function UserForm(){
    const navigate=useNavigate()
    const [form] = Form.useForm();
    const [loading,setLoading] = useState(false)

    const PERSONAL_ACCESS_TOKEN=import.meta.env.VITE_PERSONAL_ACCESS_TOKEN

    const octokit = new Octokit({
      auth: PERSONAL_ACCESS_TOKEN, 
    });

    const openNotificationWithIcon = (type, message, description) => {
      notification[type]({
        message,
        description,
        placement: 'topRight',
      });
    };

    async function fetchData(url){
      try {
        const response=await fetch(url)
        if(!response.ok){
          openNotificationWithIcon('error', 'Error', `Failed to fetch data from ${url}.`);
        }
        const data=await response.json()
        return data
      } catch (error) {
        openNotificationWithIcon('error', 'Error', `An error occurred while fetching data: ${error.message}`);
        return null
      }
    }

    async function getInfo(username){
      setLoading(true)
        try {
          const generalUserResponse = await octokit.rest.users.getByUsername({
            username: username,
          });

          const generalUserData=await generalUserResponse.data


          const contributionsData = await fetchData(`https://github-contributions-api.jogruber.de/v4/${username}`);

          const prCountData = await fetchData(`https://api.github.com/search/issues?q=author:${username}+type:pr+created:2024-01-01..2024-12-31`);

          const stars=await fetch(`https://api.github-star-counter.workers.dev/user/${username}`)

          if (!contributionsData || !prCountData) {
            openNotificationWithIcon('error', 'Error', 'Some data could not be fetched.');
            setLoading(false);
            return null;
          }

          setLoading(false)
          return {
            generalUserData:generalUserData,
            contributionsData:contributionsData,
            prCountData:prCountData
          }

        } catch (error) {
          openNotificationWithIcon('error', 'Error', `Failed to fetch user data`);
          setLoading(false);
        }
    }

    async function onFinish(values){
        try {
          let info = await getInfo(values.username)
            navigate(`/wrapped/${info.generalUserData.login}`,{state:info,})
        } catch (error) {
          openNotificationWithIcon('error', 'Error', `Failed to get your wrapped `);
        }
    }

    return (
      <>
  {loading ? (
          <div className="flex flex-col items-center justify-center bg-gray-800 rounded-lg p-4">
            <Spin size="large" className="text-white mb-2" />
            <span className="text-white text-lg">Preparing your wrapped...</span>
          </div>
  ) : (
    <Form form={form} onFinish={onFinish} layout="vertical" className="max-w-md mx-auto p-4 bg-gray-800 rounded-lg shadow-md">
      <Form.Item
        name="username"
        label={<span className="text-white">Username</span>}
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input
          placeholder="Enter GitHub username"
          className="border-gray-500 bg-gray-700 text-black rounded-md p-2"
        />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          block
          className="bg-blue-500 hover:bg-blue-600 text-white"
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  )}
</>

    )
}

export default UserForm