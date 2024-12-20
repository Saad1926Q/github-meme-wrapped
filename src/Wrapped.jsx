import { useParams,useLocation } from "react-router-dom"
import React from 'react';
import { Carousel } from 'antd';
import StartingCard from "./components/StartingCard";
import ContributionsCard from "./components/ContributionsCard";
import PullRequestsCard from "./components/PullRequestsCard";
import BadgeCard from "./components/BadgeCard";

//Import Assets
import badgeTouchgrass from "./assets/badge_touchgrass.png"
import broStinks from "./assets/badge_stinky.png"
import BroIsCooked from "./assets/badge_cooked.png"
import chillGuy from "./assets/badge_chillguy.png"
import badgeAura from "./assets/badge_aura.png"
import letHimCook from "./assets/badge_let_him_cook.png"

export default function Wrapped(){

    const gradients=["linear-gradient(135deg, #a18cd1, #fbc2eb)","linear-gradient(to top left, #00b4db, #0083b0)","linear-gradient(90deg, #2bc0e4, #eaecc6)","linear-gradient(to top, #2c3e50, #bdc3c7),linear-gradient(90deg, #f6d365, #fda085),linear-gradient(135deg, #a6c0fe, #f68084),linear-gradient(45deg, #9dff2f, #1b9e77),linear-gradient(to top, #2bc0e4, #eaecc6),linear-gradient(135deg, #d500f9, #ff4081),linear-gradient(90deg, #c9e2c7, #d6f9e8),linear-gradient(45deg, #fbd3e9, #bb377d),linear-gradient(135deg, #ff9800, #ff5722)"]

    const gradient=gradients[Math.floor(Math.random()*gradients.length)]

    const {user}=useParams()
    const location = useLocation();
    const state=location.state

    const userInfo=state.generalUserData

    const thisYear=2024
    const lastYear=2023

    const username=state.generalUserData.login
    const pullRequests=state.prCountData.total_count
    const lastYearContributions=state.contributionsData.total[lastYear]
    const thisYearContributions=state.contributionsData.total[thisYear]
    const avatar=state.generalUserData.avatar_url


    return(
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
  <div className="max-w-md mx-auto my-8">
    <Carousel className="w-full h-[70vh]">
      <div className="flex justify-center items-center h-full">
        <StartingCard username={username} year={thisYear} gradient={gradient} avatar={avatar}/>
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
      <div className="flex justify-center items-center h-full">
        <BadgeCard imagePath={broStinks} message="Over 500 contributions in a year! Bro hasn't taken a bath in ages. 🛁😂" gradient={gradient} />
      </div>
    </Carousel>
  </div>
</div>

    )
}