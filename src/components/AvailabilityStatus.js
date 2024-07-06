import React, { useEffect } from 'react';
import '../components/AvailabilityStatus.css';



function AvailabilityStatus() {
  useEffect(() => {
    const checkTimeAndExecuteFunction = () => {
      const currentTime = new Date();
      const currentHour = currentTime.getHours();
      let availBtn = document.querySelector('.available-elem');
      let unavailBtn = document.querySelector('.unavailable-elem');

      // Check if current time is between 9 AM and 6 PM Eastern Time
      if (currentHour >= 9 && currentHour < 18) {
        // Current time is between 9 AM and 6 PM Eastern Time
        // Execute your function here
        availBtn.style.display = "block";
        unavailBtn.style.display = "none";
      } else {
        // Current time is outside the specified range
        availBtn.style.display = "none";
        unavailBtn.style.display = "block";
      }
    };

    // Call the function initially
    checkTimeAndExecuteFunction();

    // Periodically check the time and update the display every minute (60000 milliseconds)
    const intervalId = setInterval(checkTimeAndExecuteFunction, 60000);

    // Clear the interval when the component is unmounted to avoid memory leaks
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array ensures that this effect runs once after the initial render

  return (
    <div>
      <div className="status-elem-container">
        <div className="available-elem">
          <span className="status-txt">Available</span>
        </div>
        <div className="unavailable-elem">
          <span className="status-txt">Unavailable</span>
        </div>
      </div>
    </div>
  );
}

export default AvailabilityStatus;
