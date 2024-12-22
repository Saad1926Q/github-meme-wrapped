
export default function FeaturePreview(){
    return(
      <>
      <div className="features-preview py-10 bg-gray-800 text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center">What’s in Your Wrapped?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="feature-card text-center p-6 bg-gray-700 shadow rounded-lg">
              <h3 className="text-xl font-bold mb-2">Your Coder Personality</h3>
              <p className="text-gray-300">
                Are you the "Cooked Coder 💤" or the "Let Him Cook 🍳"? See how your coding year defines you!
              </p>
            </div>
            <div className="feature-card text-center p-6 bg-gray-700 shadow rounded-lg">
              <h3 className="text-xl font-bold mb-2">Contributions Over Time</h3>
              <p className="text-gray-300">
                Compare your contributions from last year to this year and see your growth!
              </p>
            </div>
            <div className="feature-card text-center p-6 bg-gray-700 shadow rounded-lg">
              <h3 className="text-xl font-bold mb-2">Achievements & Badges</h3>
              <p className="text-gray-300">
                Celebrate milestones like streaks, PR contributions, and more with custom badges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
    
      
    )
}