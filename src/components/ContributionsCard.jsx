import React from 'react';
import Card from 'antd/es/card/Card';

import bochhi from '../assets/bochhi.png'
import holyMoly from '../assets/holy_moly.png'

const ContributionsCard = ({ lastYearContributions, thisYearContributions, lastYear,gradient }) => {
  const imageToDisplay =
  lastYearContributions > thisYearContributions ? bochhi : holyMoly;

  return (
    <Card className="shadow-lg border border-gray-300 rounded-md w-full h-[250px]" style={{ background: `${gradient}` }}>
      <div className="ml-2 text-lg">
        {lastYearContributions ? (
          <p>You had <strong>{lastYearContributions}</strong> contributions in {lastYear}.</p>
        ) : (
          <p>No contributions found for {lastYear}.</p>
        )}
        <p>
          You had <strong>{thisYearContributions}</strong> contributions this year.
        </p>
      </div>
      <div className="flex justify-center mt-4">
        <img src={imageToDisplay} alt="Image based on contributions" className="w-[100px] h-[100px] object-contain" />
      </div>
    </Card>
  );
};

export default ContributionsCard;
