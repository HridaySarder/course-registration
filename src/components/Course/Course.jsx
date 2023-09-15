/* eslint-disable react/jsx-key */


const Course = ({selectedCourses, remaining, totalCredit}) => {
  console.log(selectedCourses);
  return (
    <div className="my-5 bg-base-100 shadow-xl p-7 rounded-lg w-80">
      <h3 className="text-[#2F80ED] font-bold border-b-2 mb-5">Credit Hour Remaining {remaining} hr</h3>
      <h3 className="font-bold mb-4">Course Name:</h3>
      {
        selectedCourses.map((course) => (
          <li type="1">{course.course_name}</li>
        )
        )
      }
      <p className="border-t-2 mt-5">Total Credit Hour: {totalCredit}</p>
    </div>
  );
};

export default Course;