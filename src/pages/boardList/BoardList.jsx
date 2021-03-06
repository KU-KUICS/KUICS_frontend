import React from 'react';

const BoardList = () => {
  const month = [];
  month[0] = 'Jan';
  month[1] = 'Feb';
  month[2] = 'Mar';
  month[3] = 'Apr';
  month[4] = 'May';
  month[5] = 'Jun';
  month[6] = 'Jul';
  month[7] = 'Aug';
  month[8] = 'Sep';
  month[9] = 'Oct';
  month[10] = 'Nov';
  month[11] = 'Dec';

  const today = new Date();
  const date = today.getDate();
  const mon = month[today.getMonth()];
  const hour = today.getHours();
  const min = today.getMinutes();
  const minProc = min < 10 ? `0${min}` : min;
  const time = `${hour}:${minProc}`;

  const todayString = `${date} ${mon} ${time}`;

  return (
    <>
      <div>
        drwxrwx--- - kuics kuics 4096
        {' '}
        {todayString}
        {' '}
        notice
      </div>
      <div>
        drwxrwx--- - kuics kuics 4096
        {' '}
        {todayString}
        {' '}
        board
      </div>
    </>
  );
};

export default BoardList;
