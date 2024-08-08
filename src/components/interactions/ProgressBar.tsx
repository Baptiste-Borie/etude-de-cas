import React from "react";

type ProgressBarProps = {
  likePercentage: number;
  dislikePercentage: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ likePercentage, dislikePercentage }) => {
  return (
    <div style={{ width: '100%', backgroundColor: '#eee', borderRadius: '5px', height: '8px', position: 'relative' }}>
      <div
        style={{
          width: `${likePercentage}%`,
          backgroundColor: 'rgb(190, 190, 190)',
          height: '100%',
          borderRadius: '5px 0 0 5px',
          position: 'absolute',
          left: 0,
        }}
      />
      <div
        style={{
          width: `${dislikePercentage}%`,
          backgroundColor: 'rgb(5, 5, 5)',
          height: '100%',
          borderRadius: '0 5px 5px 0',
          position: 'absolute',
          right: 0,
        }}
      />
    </div>
  );
};

export default ProgressBar;
