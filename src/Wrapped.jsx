import { useParams,useLocation,useNavigate } from "react-router-dom"
import React, { useEffect } from 'react';
import { useState } from "react";
import { Carousel, message } from 'antd';
import Card from 'antd/es/card/Card';

import StartingCard from "./components/StartingCard";
import ContributionsCard from "./components/ContributionsCard";
import PullRequestsCard from "./components/PullRequestsCard";
import BadgeCard from "./components/BadgeCard";

//Import Assets
import touchGrass from "./assets/badge_touchgrass.png"
import broStinks from "./assets/badge_stinky.png"
import cooked from "./assets/badge_cooked.png"
import chillGuy from "./assets/badge_chillguy.png"
import badgeAura from "./assets/badge_aura.png"
import letHimCook from "./assets/badge_let_him_cook.png"
import broFellOff from "./assets/badge_brofelloff.png"
import npcAhh from "./assets/badge_npc.png"
import WrappedSummaryRedirectCard from "./components/WrappedSummaryRedirectCard";

export default function Wrapped(){

    const gradient="linear-gradient(135deg, #a18cd1, #fbc2eb)"

    const {user}=useParams()
    const location = useLocation();
    const state=location.state
    const navigate=useNavigate()

    useEffect(()=>{
      if(!state){
        navigate('/')
      }
    },[location,navigate])

    const [hasBadge,setHasBadge]=useState(false)
    const [badgeStatuses, setBadgeStatuses] = useState({
      cooked: false,
      chillGuy: false,
      touchGrass: false,
      broStinks: false,
      letHimCook: false,
      broFellOff: false,
    });

    const [earnedBadges,setEarnedBadges]=useState([])

    const badges={
      cooked:{
        message:"Bro is cooked... Where's the activity?",
        image:cooked
      },
      chillGuy:{
        message:"Just a chill guy",
        image:chillGuy
      },
      touchGrass:{
        message:"Take a break, step outside, and touch some grass!",
        image:touchGrass
      },
      broStinks:{
        message:"Bro Probably Hasn't Taken a Bath in Ages🛁😂🤢😂 Bro’s GitHub streak is longer than his last conversation with a human.",
        image:broStinks
      },
      letHimCook:{
        message:"Bro has been cooking… 🍳🔥",
        image:letHimCook
      },
      broFellOff:{
        message:"Bro Fell Off😂😂",
        image:broFellOff
      },
      npcAhh:{
        message:"Just vibing in the background like a true NPC. 🕶️🤖 Keep doing your thing, mysterious one!",
        image:npcAhh
      }
    }


    const thisYear=new Date().getFullYear()
    const lastYear=thisYear-1

    const username=state?.generalUserData?.login??''
    const pullRequests=state?.prCountData?.total_count??0
    const lastYearContributions=state?.contributionsData?.total[lastYear]??0
    const thisYearContributions=state?.contributionsData?.total[thisYear]??0
    const avatar=state?.generalUserData?.avatar_url??''


    const getEarnedBadges = (badgeStatuses) => {
      const badgeNames = {
        cooked: 'Cooked Coder',
        chillGuy: 'Chill Coder',
        touchGrass: 'Touch Grass',
        broStinks: 'Bro hasnt taken a bath in ages',
        letHimCook: 'Let Him Cook',
        broFellOff: 'Bro Fell Off',
        npcCoder: 'NPC Coder',
      };
  
      return Object.keys(badgeStatuses)
        .filter((badge) => badgeStatuses[badge])  
        .map((badge) => badgeNames[badge]);
    };

    useEffect(()=>{
      const statuses={...badgeStatuses}
      let badgeCriteriaMet = false;

      if (thisYearContributions < 20) {
        statuses.cooked = true;
        badgeCriteriaMet = true;
      } else if (thisYearContributions >= 50 && thisYearContributions < 200) {
        statuses.chillGuy = true;
        badgeCriteriaMet = true;
      } else if (thisYearContributions >= 200 && thisYearContributions < 500) {
        statuses.touchGrass = true;
        badgeCriteriaMet = true;
      } else if (thisYearContributions >= 500) {
        statuses.broStinks = true;
        badgeCriteriaMet = true;
      }

      if (lastYearContributions) {
        const improvement =
          ((thisYearContributions - lastYearContributions) /lastYearContributions) *100;
        if (improvement >= 40) {
          statuses.letHimCook = true;
          badgeCriteriaMet = true;
        } else if (thisYearContributions < lastYearContributions) {
          statuses.broFellOff = true;
          badgeCriteriaMet = true;
        }
      }

      setBadgeStatuses(statuses);
      setHasBadge(badgeCriteriaMet);

      const earnedBadges = getEarnedBadges(statuses);

      setEarnedBadges(earnedBadges)
      
    },[lastYearContributions, thisYearContributions,state])




    return(
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="max-w-md mx-auto my-8">
        <Carousel className="w-full h-[70vh]" draggable={true}>
          <div className="flex justify-center items-center h-full">
            <StartingCard username={username} year={thisYear} gradient={gradient} avatar={avatar} />
          </div>

          <div className="flex justify-center items-center h-full">
            <ContributionsCard
              lastYearContributions={lastYearContributions}
              thisYearContributions={thisYearContributions}
              lastYear={lastYear}
              gradient={gradient}
            />
          </div>

          <div className="flex justify-center items-center h-full">
            <PullRequestsCard pullRequests={pullRequests} gradient={gradient} />
          </div>
            {hasBadge ? (
              <div className="flex justify-center items-center h-full">
                <Card
                  className="shadow-lg border border-gray-300 rounded-md w-full h-[250px] flex flex-col items-center justify-center"
                  style={{ background: `${gradient}` }}
                >
                  <p className="mt-4 text-2xl font-bold text-center text-gray-900 px-6">
                    Here are your badges! 🎉🏅
                  </p>

                </Card>
              </div>
            ) : (<div className="flex justify-center items-center h-full">
              <Card
                className="shadow-lg border border-gray-300 rounded-md w-full h-[250px] flex flex-col items-center justify-center"
                style={{ background: `${gradient}` }}
              >
                <p className="mt-4 text-2xl font-bold text-center text-gray-900 px-6">
                  Your GitHub activity was too mysterious for us to find patterns. 🕵️‍♂️🔍
                </p>
              </Card>
            </div>)}
          {hasBadge?(Object.entries(badgeStatuses)
            .filter(([key, status]) => status)
            .map(([key]) => {
              return (
                <div className="flex justify-center items-center h-full" key={key}>
                  <BadgeCard
                    imagePath={badges[key].image}
                    message={badges[key].message}
                    gradient={gradient}
                  />
                </div>)
            })):(<div className="flex justify-center items-center h-full">
              <Card
                className="shadow-lg border border-gray-300 rounded-md w-full h-[250px] flex flex-col items-center justify-center"
                style={{ background: `${gradient}` }}
              >
                <div className="flex justify-center items-center">
                <img src={npcAhh} alt="NPC Ahh" className="w-[100px] h-[100px] object-contain" />
                </div>
                <p className="mt-4 text-2xl font-bold text-center text-gray-900 px-6">NPC Ahh</p>
                <p className="mt-2 text-center text-gray-900 px-6 font-semibold">
                  Sometimes, your GitHub contributions confuse us! 😅
                </p>
              </Card>
            </div>)}
            <div className="flex justify-center items-center h-full">
            <WrappedSummaryRedirectCard username={username} gradient={gradient} totalContributions={thisYearContributions} pullRequests={pullRequests} badgesStatuses={badgeStatuses} badges={earnedBadges} avatar={avatar} />
          </div>
        </Carousel>
      </div>
    </div>

  )
}