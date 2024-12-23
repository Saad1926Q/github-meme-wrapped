import { useLocation,useNavigate  } from "react-router-dom";
import { useEffect,useState } from "react";

const WrappedSummary=()=>{
    const location = useLocation();
    const state=location.state
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        username: '',
        gradient: '',
        totalContributions: 0,
        pullRequests: 0,
        badgesStatuses: {},
        badges: [],
        avatar: '',
        developerPersonality: {}
      });


    useEffect(() => {
        if (state===null) {
          navigate('/');
        }else{
            const {
                username,
                gradient,
                totalContributions,
                pullRequests,
                badgesStatuses,
                badges,
                avatar,
                developerPersonality
              } = state;

              setUserData({
                username,
                gradient,
                totalContributions,
                pullRequests,
                badgesStatuses,
                badges,
                avatar,
                developerPersonality
              });
        }
      }, [location, navigate]);

      const {
        username,
        gradient,
        totalContributions,
        pullRequests,
        badgesStatuses,
        badges,
        avatar,
        developerPersonality
      } = userData;


    return (
        <div
        className="shadow-lg border border-gray-300 rounded-md w-full max-w-4xl p-6 mx-auto mt-4"
        style={{ background: `${gradient}` }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1 md:col-span-2 flex justify-center items-center flex-col">
            <img
              src={avatar}
              alt={`${username}'s avatar`}
              className="w-24 h-24 rounded-full border-4 border-gray-300 mb-4"
            />
            <p className="text-xl font-bold text-center">Developer: {username}</p>
          </div>
      
          <div className="flex flex-col items-center md:items-start">
            <p className="font-semibold text-lg">Contributions</p>
            <p className="text-2xl">{totalContributions}</p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <p className="font-semibold text-lg">PRs Raised</p>
            <p className="text-2xl">{pullRequests}</p>
          </div>
      
          <div className="col-span-1 md:col-span-2 mt-6 text-center">
            <p className="text-xl font-semibold">{developerPersonality.name}</p>
            <p className="text-lg font-medium text-gray-600">{developerPersonality.message}</p>
            <p className="text-sm text-gray-600 mt-2">{developerPersonality.description}</p>
          </div>
      
          <div className="flex flex-col col-span-1 md:col-span-2 mt-6">
  <p className="text-xl font-semibold mb-4 text-center">Earned Badges</p>
  <div className="grid grid-cols-1 gap-4">
    {badges.length > 0 ? (
      badges.map((badge, index) => (
        <div key={index} className="flex flex-col items-center">
          <p className="text-sm mt-2">- {badge}</p>
        </div>
      ))
    ) : (
      <p className="col-span-1 text-center text-gray-700">
        No badges earned this year.
      </p>
    )}
  </div>
</div>
        </div>
      </div>
      
    )
}

export default WrappedSummary