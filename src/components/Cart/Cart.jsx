/* eslint-disable react/jsx-key */
import { useState } from "react";
import { useEffect } from "react";
import Course from "../Course/Course";

const Cart = () => {
  const [allCoures, setAllCourse] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([])
  useEffect(() => {
    fetch("./course.json")
      .then((res) => res.json())
      .then((data) => setAllCourse(data));
  }, []);
const handleSelectCourse = (course) =>{
  setSelectedCourses([...selectedCourses,course])

}

  console.log(selectedCourses);

  return (
    <div className="flex gap-5">
      <div className="grid grid-cols-3 gap-5">
        {
          allCoures.map((course)=> (
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={course.course_img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{course.course_name}</h2>
    <p>{course.course_details}</p>
    <div className="flex justify-between gap-5">
      <p>$ Price: {course.course_prize}</p>
      <p>Credit:{course.course_credit}hr</p>
    </div>
    
      <button onClick={() => handleSelectCourse(course)} className="btn w-full rounded-lg text-white bg-[#2F80ED]">Select</button>
    
  </div>
</div>
          ))
        }
      </div>
      <div>
        <Course selectedCourses={selectedCourses}></Course>
      </div>
    </div>
  );
};

export default Cart;
