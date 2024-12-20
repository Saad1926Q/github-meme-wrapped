import React from 'react';
import Card from 'antd/es/card/Card';

const BadgeCard = ({ imagePath, message, gradient }) => {
    return (
      <Card
        className="shadow-lg border border-gray-300 rounded-md w-full h-[250px] flex flex-col items-center justify-center"
        style={{ background: `${gradient}` }}
      >
            <div className="flex items-center justify-center w-full h-2/3">
                <img
                    src={imagePath}
                    alt="Badge"
                    className="w-36 h-36 object-contain"
                />
            </div>
        <p className="text-sm text-gray-800 font-bold text-center">
          {message}
        </p>
      </Card>
    );
  };

  
export default BadgeCard