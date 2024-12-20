import React from 'react';
import Card from 'antd/es/card/Card';

const ContributionsCard = ({ lastYearContributions, thisYearContributions, lastYear,gradient }) => {
  return (
    <Card className="shadow-lg border border-gray-300 rounded-md w-full h-[250px]" style={{ background: `${gradient}` }}>
      <div className="text-lg">
        {lastYearContributions ? (
          <p>You had <strong>{lastYearContributions}</strong> contributions in {lastYear}.</p>
        ) : (
          <p>No contributions found for {year - 1}.</p>
        )}
        <p>
          You had <strong>{thisYearContributions}</strong> contributions this year.
        </p>
      </div>
    </Card>
  );
};

export default ContributionsCard;
