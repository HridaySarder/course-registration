/* eslint-disable react/jsx-key */
import { useState } from "react";
import { useEffect } from "react";

const Cart = () => {
  const [allCoures, setAllCourse] = useState([]);
  useEffect(() => {
    fetch("./course.json")
      .then((res) => res.json())
      .then((data) => setAllCourse(data));
  }, []);
  console.log(allCoures);

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
    <div className="flex justify-around">
      <p>$ Price: {course.course_prize}</p>
      <p>Credit:{course.course_credit}hr</p>
    </div>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
          ))
        }
      </div>
      <div>
        <h2 className="text-4xl">Course Name:</h2>
      </div>
    </div>
  );
};

export default Cart;
