import React, { useEffect, useState, useRef } from "react";
import "../../assets/css/course.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faBell, faMagnifyingGlass, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import myprofile from '../../assets/images/myProfile.svg'
import viewmore from '../../assets/images/viewmore.svg'
import smile from '../../assets/images/smile.svg'



export default function Course() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recIndex, setRecIndex] = useState(0);
  const [toast, setToast] = useState(null);
  const recTrackRef = useRef(null);

  
  const placeholderCourses = [
    { _id: "p1", title: "Loading...", description: "Please wait", image: "placeholder.jpg" },
    { _id: "p2", title: "Loading...", description: "Please wait", image: "placeholder.jpg" }
  ];

const handleEnroll = (courseId) => {
  
  const course = courses.find((c) => c._id === courseId);
  if (!course || course.enrolled) return; 

  const enrolledIds = JSON.parse(localStorage.getItem("enrolledCourses") || "[]");

  localStorage.setItem(
    "enrolledCourses",
    JSON.stringify([...enrolledIds, courseId])
  );

  function enrollCourse(courseId) {
  setCourses((prevCourses) =>
    prevCourses.map((course) =>
      course._id === courseId
        ? { ...course, enrolled: true } 
        : course
    )
  );
}
  enrollCourse(courseId);

  // Show a toast
  setToast(`You have enrolled in "${course.title}"`);
  setTimeout(() => setToast(null), 3000);
};

  useEffect(() => {
    async function loadCourses() {
      try {
        setLoading(true);
        const res = await fetch("https://ocube-backend.vercel.app/api/courses");
        let data = await res.json();
        let fetched = Array.isArray(data) ? data : data.courses || [];

        const storedIds = JSON.parse(localStorage.getItem("enrolledCourses") || "[]");
        fetched = fetched.map(c => ({
          ...c,
          enrolled: storedIds.includes(c._id) || c.enrolled
        }));

        setCourses(fetched);
      } catch (err) {
        console.error("Failed to fetch courses", err);
      } finally {
        setLoading(false);
      }
    }
    loadCourses();
  }, []);

  const yourCourses = courses.filter((c) => c.enrolled);
  const recommendedCourses = courses.filter((c) => !c.enrolled);

  // Search filter
  const filteredYour = yourCourses.filter((c) =>
    c.title.toLowerCase().includes(query.toLowerCase())
  );
  const filteredRecommended = recommendedCourses.filter((c) =>
    c.title.toLowerCase().includes(query.toLowerCase())
  );

  // Date
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  // Carousel
  function slidePrev() {
    setRecIndex((i) => Math.max(0, i - 1));
  }
  function slideNext() {
    const itemsPerView = getItemsPerView();
    const maxIndex = Math.max(0, Math.ceil(filteredRecommended.length / itemsPerView) - 1);
    setRecIndex((i) => Math.min(maxIndex, i + 1));
  }
  function getItemsPerView() {
    const width = window.innerWidth;
    if (width < 600) return 1;
    if (width < 900) return 2;
    return 3;
  }

  function studentAvatars(course, limit = 4) {
    if (!course.students || !Array.isArray(course.students)) return [];
    return course.students.slice(0, limit).map((s) =>
      s.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(s.name || "S")}&background=ddd&color=555&size=64`
    );
  }

  return (
    <div className="courses-wrapper">
      {toast && (
        <div className="toast">{toast}</div>
      )}

       <div className="header-right">
          <div className="date-profile">
            <span className="date-text">{formattedDate}</span>
            <div className="profile-avatar text-black" ><FontAwesomeIcon icon={faBell} /></div>
            <img  src={myprofile} alt="Example" />
          </div>
        </div>

      {/* Header */}
      <header className="courses-header">
        
        <div className="title-block">
          
          <h1>Courses</h1>
          <p className="subtitle flex gap-2">Good you are here, Get ready and explore various courses <img src={smile} alt="smile" /> </p>

        </div>
        <div className="search-containe">
            <input
              className="px-6 mt-4 w-[100%] border-none  placeholder-gray-600 rounded-2xl bg-[#F8F8F8] py-3  "
              type="text"
              placeholder=" Search for any course here " 
              onChange={(e) => setQuery(e.target.value)}/>
              <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
          </div>

       </header>

      {/* YOUR COURSES */}
      <section className="section your-courses">
        <h2>Your Courses</h2>
        <div className="cards-grid">
          {filteredYour.length === 0 && (
            <div className="empty">You have no courses yet. Explore recommended courses below.</div>
          )}
          {filteredYour.map((course) => (
            <article className="course-card your" key={course._id}>
              <img src={course.imageUrl || "placeholder.jpg"} alt={course.title} className="course-img" />
              <div className="course-body">
                <h3 className="course-title">{course.title}</h3>
                <p className="course-author">By {course.author || "Unknown"}</p>
                <div className="course-meta">
                  <div className="avatars">
                    {studentAvatars(course).map((a, i) => (
                      <img src={a} key={i} alt={`student-${i}`} className="avatar" />
                    ))}
                  </div>
                  <div className="lessons">{course.lessons ?? 0} lessons</div>
                </div>
                <button
                  className="btn continue"
                  onClick={() => window.open(course.link, "_blank")}
                >
                  Continue to course
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* RECOMMENDED COURSES */}
      <section className="section recommended-section">
        <div className="section-header">
          <h2>Recommended Courses</h2>
          <div className="carousel-controls">
            <button className="carousel-btn" onClick={slidePrev} aria-label="Previous">‹</button>
            <button className="carousel-btn" onClick={slideNext} aria-label="Next"> › </button>
          </div>
        </div>

        <div className="carousel-viewport">
          <div
            className="carousel-track"
            ref={recTrackRef}
            style={{ transform: `translateX(-${recIndex * 100}%)` }}
          >
            {filteredRecommended.map((course) => (
              <article className="course-card recommended " key={course.id}>
                <div className="flex justify-between items-center">
                  <img src={course.imageUrl || "placeholder.jpg"} alt={course.title} className="course-img" />
                  <img src={viewmore} alt="view more" />
                </div>
                
                <div className="course-body">
                  <h3 className="course-title">{course.title}</h3>
                  <div className="course-meta small">
                    <p className="course-instructor"> <span className="course-author"> By </span>{course.instructor || "Unknown"}
                    </p>
                    <div className="duration">{course.duration ?? 0}h</div>
                  </div>
                  
                  <div className="course-meta small">
                    
                  </div>
                  <div className="relative flex justify-between h-72 mt-">
                    <div className="flex items-center gap-2 bg-amber-300" >
                      <FontAwesomeIcon icon={faPeopleGroup}/>
                     <div className="students-count">  {course.students?.length ?? 0}</div>
                    </div>
                    
                    <button className="btn enroll absolute bottom-0 right-0" onClick={() => handleEnroll(course._id)} disabled={course.enrolled}>
                      {course.enrolled ? "Enrolled" : "Enroll Course ›"}

                    </button>
                  </div>
                  
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
