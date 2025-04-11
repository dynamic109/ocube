import React from 'react';
import CourseCard from './Coursecard';
import RecommendedCourseCard from './Recomendedcourse';
RecommendedCourseCard;
const Course = () => {
  const yourCourses = [
    {
      courseimg:[< img className='w-[60px]' src="/google.png" alt="google"/>],
      title: 'Google UX Design',
      author: [<img src='/googleicon.png' alt='googleicon'/>],
      students:[<img src='/student.png' alt='student'/>],
      progress: 10,
      total: 22,
    },
    {
      courseimg:[< img className='w-[60px]' src="/meta.png" alt="google"/>],
      title: 'Intro to Front-End Dev.',
      author:[<img src='/metaicon.png' alt='metaicon'/>],
      students: [<img src='/student.png' alt='student'/>],
      progress: 6,
      total: 33,
    },
    {
      courseimg:[< img className='w-[60px]' src="/pm.png" alt="google"/>],
      title: 'Product Management',
      author: 'Maximillian Blanco',
      students: [<img src='/student.png' alt='student'/>],
      progress: 23,
      total: 52,
    },
  ];

  const recommendedCourses = [
    {
      courseimg:[< img className='w-[60px]' src="/rmc1.png" alt="rmc"/>],
      title: 'Fundamentals of Webflow',
      author: 'Olayinka Yusuf',
      students: 1342,
      hours: '6h',
    },
    {
      courseimg:[< img className='w-[60px]' src="/rmc2.png" alt="rmc"/>],
      title: 'Complete React Course',
      author: 'Bobby Harold',
      students: 993,
      hours: '93h',
    },
    {
      courseimg:[< img className='w-[60px]' src="/rmc3.png" alt="rmc"/>],
      title: 'Complete Javascript for Beginner',
      author: 'Bobby Harold',
      students: 993,
      hours: '93h',
    },
    {
      courseimg:[< img className='w-[60px]' src="/rmc4.png" alt="rmc"/>],
      title: 'Mastering Figma Basis',
      author: ' Raymond Zuma',
      students: 993,
      hours: '93h',
    },
  ];




    return (
        <section className="m-auto bg-[white]  p-auto ">
                <div className=" p-6">
                  <h1 className="font-bold text-[34px] pt-5">Courses</h1>
                  <p className="text-[grey] text-[14px] ">
                  Good you are here, Get ready and explore various courses
                  </p>
                  <div className="flex mt-3 ">
                   
                    <input
                      className="px-6 w-[100%] border-none  placeholder-gray-600 rounded-2xl bg-[#F8F8F8] py-3  "
                      type="text"
                      placeholder=" Search for any course here " 
                    />{" "}
                  </div>
                  <h2 className="text-xl font-semibold mb-4">Your Courses</h2>
      <div className="flex flex-col md:flex-row justify-between gap-4">
        {yourCourses.map((course, i) => (
          <CourseCard key={i} {...course} />
        ))}
      </div>

      <h2 className="text-xl font-semibold mb-4">Recommended Courses</h2>
      <div className="flex gap-4 flex-wrap">
        {recommendedCourses.map((course, i) => (
          <RecommendedCourseCard key={i} {...course} />
        ))}
      </div>
   
                   <div>
                   {/* 
                    */}
                
   

                   </div>
                  </div>
                  </section>
  );
};
export default Course;