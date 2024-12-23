import { useNavigate,Link } from 'react-router-dom'; 
import Card from 'antd/es/card/Card';
import { Button } from 'antd';

const WrappedSummaryRedirectCard = ({ username,gradient,totalContributions,pullRequests,avatar,badgesStatuses,badges }) => {
    const navigate=useNavigate()

    const developerPersonalities = {
        cookedCoder: {
          name: "Cooked Coder",
          message: "Bro is cooked... Where's the activity?",
          description: "This coder has gone completely MIA—no activity, no contributions, just vibes. Maybe they’re taking an extended break from coding or lost in another dimension."
        },
        chillCoder: {
          name: "Chill Coder",
          message: "Just a chill guy. He does just enough to get noticed.",
          description: "This coder is all about balance—doing just enough to get noticed but not going overboard. They code when they feel like it, keeping it cool and stress-free."
        },
        touchGrass: {
          name: "Touch Grass",
          message: "Take a break, step outside, and touch some grass!",
          description: "This coder needs to remind themselves that there's life beyond the screen. Maybe step out, get some sun, and rejoin the real world."
        },
        streakKing: {
          name: "Streak King/Queen",
          message: "Bro Probably Hasn't Taken a Bath in Ages. 🛁😂🤢😂",
          description: "This coder is obsessed with maintaining streaks—grinding away on GitHub every single day, regardless of what’s happening in life. True dedication, questionable hygiene."
        },
        letHimCook: {
          name: "Let Him Cook",
          message: "Bro has been cooking… 🍳🔥",
          description: "This coder is on the rise! They’ve been quietly working on something big, with a consistent streak of improvement. Definitely a 'watch out for them' vibe."
        },
        broFellOff: {
          name: "Bro Fell Off",
          message: "Bro fell off. Time for a comeback arc?",
          description: "This coder was once at the top of their game, but something happened—they stopped pushing, and their contributions tanked. Time for a comeback arc?"
        },
        npcCoder: {
          name: "NPC Coder",
          message: "Just vibing in the background like a true NPC. 🕶️🤖",
          description: "When no badges are earned, this coder is just going through the motions—doing the bare minimum but staying in the game. A quiet presence, waiting for their moment."
        }
      };

      const getDeveloperPersonality = (badgeStatuses) => {
        if(badgeStatuses.touchGrass){
          return developerPersonalities.touchGrass
        }
        if ( badgeStatuses.broStinks) {
          return developerPersonalities.streakKing;
        }
        if (badgeStatuses.cooked) {
          return developerPersonalities.cookedCoder;
        }
        if (badgeStatuses.chillGuy) {
          return developerPersonalities.chillCoder;
        }
        
        if (badgeStatuses.broFellOff) {
          return developerPersonalities.broFellOff;
        }
      
        if (badgeStatuses.letHimCook) {
          return developerPersonalities.letHimCook;
        }
      
        return developerPersonalities.npcCoder;
      };

      const developerPersonality=getDeveloperPersonality(badgesStatuses)
      
      const info={
        username:username,
        gradient:gradient,
        totalContributions:totalContributions,
        pullRequests:pullRequests,
        developerPersonality:developerPersonality,
        badges:badges,
        avatar:avatar
      }


  return (
<Card
  className="shadow-lg border border-gray-300 rounded-md w-full h-[250px] flex flex-col items-center justify-center p-6"
  style={{ background: `${gradient}` }}
>
  <div className="text-center">
    <p className="text-2xl font-bold text-gray-900 mb-4">Check Out Your Wrapped Summary!</p>
    <p className="text-lg text-gray-800 mb-6">Want to see how your year went in coding? Click the button below to view your personal wrapped summary.</p>
    
<Button onClick={()=>{
        navigate(`/wrapped/${username}/summary`, {
            state: info, 
          });
}}>
      View Wrapped Summary
    </Button>
  </div>
</Card>
  );
};

export default WrappedSummaryRedirectCard;