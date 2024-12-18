import { useParams,useLocation } from "react-router-dom"

export default function Wrapped(){

    const {user}=useParams()
    const location = useLocation();

    const userInfo=location.state

    return(
        <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-extrabold text-center text-blue-600 mb-6">
          Github Wrapped for <span className="text-indigo-600">{user}</span>
        </h1>

        <div className="space-y-6">
          <div className="border-b pb-4">
            <h2 className="text-2xl font-semibold text-gray-800">User Information</h2>
            <p className="text-lg text-gray-600 mt-2">
              <strong className="font-semibold">Name: </strong>
              {userInfo.name}
            </p>
            <p className="text-lg text-gray-600 mt-2">
              <strong className="font-semibold">Followers: </strong>
              {userInfo.followers}
            </p>
          </div>

          <div className="border-b pb-4">
            <h2 className="text-2xl font-semibold text-gray-800">Your GitHub Stats</h2>
            <p className="text-lg text-gray-600 mt-2">
              <strong className="font-semibold">Public Repos: </strong>
              {userInfo.public_repos}
            </p>
            <p className="text-lg text-gray-600 mt-2">
              <strong className="font-semibold">Public Gists: </strong>
              {userInfo.public_gists}
            </p>
            <p className="text-lg text-gray-600 mt-2">
              <strong className="font-semibold">Following: </strong>
              {userInfo.following}
            </p>
          </div>
        </div>
      </div>
    </div>
    )
}