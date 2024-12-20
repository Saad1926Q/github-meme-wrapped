import { useNavigate } from 'react-router-dom';

export default function HeroSection(){
  const navigate=useNavigate()


    return(
        <>
        <div className="hero-section text-center py-10 bg-gray-900 text-white">
          <h1 className="text-4xl font-bold mb-4">Your GitHub Year in Review</h1>
          <p className="text-lg text-gray-300 mb-6">
            Relive your year of coding adventures, achievements, and late-night commits.
            Discover your Developer Personality and share your milestones with the world!
          </p>
          <button className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition" onClick={()=>{
            navigate("/wrapped")
          }}>
            Get Started
          </button>
        </div>
      </>
      
    )
}