/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-key */
import { useState } from "react";
import { useEffect } from "react";
import Course from "../Course/Course";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const [allCoures, setAllCourse] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [remaining, setRemaining] = useState(20);
  const [totalCredit, setTotalCredit] = useState(0);
  useEffect(() => {
    fetch("./course.json")
      .then((res) => res.json())
      .then((data) => setAllCourse(data));
  }, []);
  const handleSelectCourse = (course) => {
    const isExit = selectedCourses.find((item) => item.id == course.id);
    let count = course.course_credit;
    if (isExit) {
      return toast("Already selected");
    } else {
      selectedCourses.forEach((item) => {
        count = count + item.course_credit;
      });
      const totalRemaining = 20 - count;
      if (count > 20) {
        return toast("No credit available");
      }
      setTotalCredit(count);
      setRemaining(totalRemaining);
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  return (
    <div className="flex gap-5 mx-auto pb-10">
      <div className="grid grid-cols-3 gap-5 ml-16 ">
        {allCoures.map((course) => (
          <div className="card w-80 bg-base-100  shadow-xl">
            <figure className="px-10 pt-10">
              <img src={course.course_img} alt="Shoes" className="rounded-xl h-40" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{course.course_name}</h2>
              <p className="text-[#1C1B1B99]">{course.course_details}</p>
              <div className="flex justify-between gap-5">
                <p className="text-[#1C1B1B99]">
                  $ Price: {course.course_prize}
                </p>
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 6.042C10.3516 4.56336 8.2144 3.74694 6 3.75C4.948 3.75 3.938 3.93 3 4.262V18.512C3.96362 18.172 4.97816 17.9989 6 18C8.305 18 10.408 18.867 12 20.292M12 6.042C13.6483 4.56328 15.7856 3.74685 18 3.75C19.052 3.75 20.062 3.93 21 4.262V18.512C20.0364 18.172 19.0218 17.9989 18 18C15.7856 17.9969 13.6484 18.8134 12 20.292M12 6.042V20.292"
                      stroke="#1C1B1B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-[#1C1B1B99]">
                    Credit: {course.course_credit}hr
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleSelectCourse(course)}
                className="btn w-full rounded-lg text-white bg-[#2F80ED]"
              >
                Select
              </button>
              <ToastContainer />
            </div>
          </div>
        ))}
      </div>
      <div>
        <Course
          selectedCourses={selectedCourses}
          remaining={remaining}
          totalCredit={totalCredit}
        ></Course>
      </div>
    </div>
  );
};

export default Cart;
