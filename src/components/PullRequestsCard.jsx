import React from 'react';
import Card from 'antd/es/card/Card';


const PullRequestsCard = ({ pullRequests,gradient }) => {
  return (
    <Card className="shadow-lg border border-gray-300 rounded-md w-full h-[250px]" style={{ background: `${gradient}` }}>
      <p className="text-lg font-semibold mb-2">
    {pullRequests === 0 
      ? <>You didn't raise any pull requests this year 😢😢</>
      : <>You raised <strong>{pullRequests}</strong> pull requests this year.</>
    }
  </p>
  
  {pullRequests === 0 
    ? (
      <p className="text-sm text-gray-500">
        Not the only place where bro doesn't have a good pull game. 😅
      </p>
    )
    : (
      <p className="text-sm text-gray-800 font-bold">
        If only bro had the same pull game IRL. 😂
      </p>
    )
  }
    </Card>
  );
};

export default PullRequestsCard;
