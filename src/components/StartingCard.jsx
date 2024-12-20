import React from 'react';
import Card from 'antd/es/card/Card';


const StartingCard = ({ username, year,gradient,avatar=null }) => {
  return (
    <Card className="shadow-lg border border-gray-300 rounded-md w-full h-[250px]" style={{ background: `${gradient}` }}>
      <h2 className="text-2xl font-bold text-center">
        {username}'s Github Wrapped for {year}
      </h2>
      {avatar && (            <div className="flex items-center justify-center w-full h-2/3">
                <img
                    src={avatar}
                    alt="avatar"
                    className="mt-5 w-28 h-28 object-contain"
                />
            </div>)}
    </Card>
  );
};

export default StartingCard;
