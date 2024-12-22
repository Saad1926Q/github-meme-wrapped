import React from 'react';
import Card from 'antd/es/card/Card';

import makingFunOf from '../assets/making_fun_of_resized.png';
import noRizz from '../assets/no_rizz.png';


const PullRequestsCard = ({ pullRequests,gradient }) => {
  return (
    <Card className="shadow-lg border border-gray-300 rounded-md w-full h-[250px]" style={{ background: `${gradient}` }}>
      <p className="ml-3 text-lg font-semibold mb-2">
    {pullRequests === 0 
      ? <>You didn't raise any pull requests this year 😢😢</>
      : <>You raised <strong>{pullRequests}</strong> pull requests this year.</>
    }
  </p>
  
  {pullRequests === 0 
    ? (
      <p className="ml-3 text-sm text-gray-800 font-bold">
        Not the only place where bro doesn't have a good pull game. 😅
      </p>
    )
    : (
      <p className="ml-3 text-sm text-gray-800 font-bold">
        If only bro had the same pull game IRL. 😂
      </p>
    )
  }

<div className="p-0 mt-4 flex justify-center">
    <img
      src={pullRequests === 0 ? makingFunOf : noRizz}
      alt={pullRequests === 0 ? 'Making fun of image' : 'No rizz image'}
      className="p-2 w-32 h-32 object-contain"
    />
  </div>
    </Card>
  );
};

export default PullRequestsCard;
