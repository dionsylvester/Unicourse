import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, addMonths, subMonths } from 'date-fns';

const Schedule = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const courses = {
    '2024-06-18': [
      { session: 1, startTime: '10:00', endTime: '11:00', title: 'How to eat noodles properly', courseTitle: 'How to Eat Noodles', date: '18 June 2024' },
    ]
  };

  const randomDate = '2024-06-18';

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handlePrevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate)
  });

  return (
    <div className="flex flex-col h-auto p-12 font-satoshi">
      <div className="mb-6 ml-4">
        <h1 className="text-4xl font-bold">Schedule</h1>
        <p className="text-lg">Check your schedule for learning here</p>
      </div>
      <div className="flex">
        <div className="w-1/2 p-4 border-r border-gray-300">
          <div className="flex justify-between items-center mb-4">
            <button onClick={handlePrevMonth} className="px-4 py-2 bg-gray-200 rounded">Previous</button>
            <div className="text-xl font-bold">{format(currentDate, 'MMMM yyyy')}</div>
            <button onClick={handleNextMonth} className="px-4 py-2 bg-gray-200 rounded">Next</button>
          </div>
          <div className="grid grid-cols-7 gap-2">
            {daysInMonth.map((day, index) => {
              const date = format(day, 'yyyy-MM-dd');
              return (
                <div
                  key={index}
                  onClick={() => handleDateClick(date)}
                  className={`p-4 border rounded cursor-pointer ${date === randomDate ? 'bg-blue-200' : 'bg-white'} hover:bg-blue-100`}
                >
                  {format(day, 'd')}
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-1/2 p-4">
          <h2 className="text-xl font-bold mb-4">Check your schedule</h2>
          <div>
            {selectedDate && courses[selectedDate] ? (
              <ul>
                {courses[selectedDate].map((course, index) => (
                  <li key={index} className="mb-2 p-2 border rounded bg-gray-100">
                    <h1 className='text-2xl font-bold mb-4'>{course.courseTitle}</h1>
                    <div className="font-semibold">Session {course.session}</div>
                    <div>{course.title}</div>
                    <div>{course.date}</div>
                    <div>{course.startTime} - {course.endTime}</div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No courses scheduled for this date.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
