
export default function FeaturePreview(){
    return(
        <>
      <div className="features-preview py-10 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-3xl font-semibold mb-6 text-center">What’s in Your Wrapped?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="feature-card text-center p-6 bg-white shadow rounded-lg">
                        <h3 className="text-xl font-bold mb-2">Your Developer Personality</h3>
                        <p className="text-gray-600">
                            Are you the "Commit King 👑" or the "PR Machine 🤖"? Find out now!
                        </p>
                    </div>
                    <div className="feature-card text-center p-6 bg-white shadow rounded-lg">
                        <h3 className="text-xl font-bold mb-2">Your Year in Stats</h3>
                        <p className="text-gray-600">
                            Discover your most active days, top repos, and much more!
                        </p>
                    </div>
                    <div className="feature-card text-center p-6 bg-white shadow rounded-lg">
                        <h3 className="text-xl font-bold mb-2">Achievements & Badges</h3>
                        <p className="text-gray-600">
                            Earn badges for milestones like commit streaks and PR contributions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}