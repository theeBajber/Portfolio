'use client'
import { useState, useEffect } from 'react';

export default function Clock({ className }) {
  const [time, setTime] = useState(new Date());


  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hour = time.getHours() % 12;
  const minute = time.getMinutes();
  const second = time.getSeconds();
  const ampm = time.getHours() >= 12 ? 'PM' : 'AM';

  const hourRotation = hour * 30 + minute / 2;
  const minuteRotation = minute * 6;
  const secondRotation = second * 6;

  return (
    <div className={`${className}`}>
      {/* Background layers */}
      <div className="absolute flex justify-center items-center w-[71.25%] h-full top-0 left-[14.5%]">
        {[65, 80, 90, 80, 65].map((heightPercent, index) => (
          <div 
            key={index}
            className="bg-white/10 mx-[0.25%] border border-current backdrop-blur-3xl"
            style={{
              width: '100%',
              height: `${heightPercent}%`,
              borderRadius: '5px',
            }}
          ></div>
        ))}
      </div>

      {/* Analog clock face */}
      <div className="absolute w-[68.75%] h-[78.57%] top-[10%] left-[15.625%]">
        {/* Clock hands */}
        <div 
          className="absolute bg-white bottom-1/2 left-1/2 origin-[50%_100%] z-2 border-black border"
          style={{ 
            width: '8px',
            height: '30%',
            borderRadius: '10px 10px 0 0',
            transform: `rotate(${hourRotation}deg)`
          }}
        ></div>
        <div 
          className="absolute bg-white bottom-1/2 left-1/2 origin-[50%_100%] z-3 border-black border"
          style={{ 
            width: '6px',
            height: '33%',
            borderRadius: '6px 6px 0 0',
            transform: `rotate(${minuteRotation}deg)`
          }}
        ></div>
        <div 
          className="absolute bg-[#fe7474] bottom-1/2 left-1/2 origin-[50%_100%] z-4 border-black border"
          style={{ 
            width: '4px',
            height: '37%',
            borderRadius: '5px 5px 0 0',
            transform: `rotate(${secondRotation}deg)`
          }}
        ></div>
        <div 
          className="absolute bg-[#050505] bottom-1/2 left-1/2 rounded-full z-5"
          style={{ 
            width: '12px',
            height: '12px',
            transform: 'translate(-30%, 50%)'
          }}
        ></div>



        {/* Clock markings */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
          <div 
            key={i} 
            className="absolute text-center w-full h-full"
            style={{ transform: `rotate(${i * 30}deg)` }}
          >
            {i % 3 === 0 ? (
              <div 
                className="text-white font-satisfy absolute left-1/2 top-0"
                style={{ 
                  fontSize: '25px',
                  transform: `translateX(-50%) rotate(${-i * 30}deg)`
                }}
              >
                {i === 0 ? 12 : i}
              </div>
            ) : (
              <div 
                className="absolute left-1/2 top-0 bg-black"
                style={{ 
                  width: '2px',
                  height: '12px',
                  transform: 'translateX(-50%)'
                }}
              ></div>
            )}
          </div>
        ))}
      </div>

      {/* Digital clock with perfect responsive font sizing */}
      <div 
        className="absolute text-center bg-black rounded-[5px] flex items-center justify-center"
        style={{
          height: '11.43%', // 40/350
          width: '30%',     // 120/400
          top: '65%',
          left: '35%',
          color: "#009688" 
        }}
      >
      <div className="font-digital flex items-center justify-center gap-1" 
           style={{ 
             fontSize: 'min(3vw, 16px)',
             lineHeight: '1'
           }}>
        <span>{hour.toString().padStart(2, '0')}</span>
        <span>:</span>
        <span>{minute.toString().padStart(2, '0')}</span>
        <span className="text-[0.8em]">{ampm}</span>
      </div>
      </div>
    </div>
  );
}
