/* eslint-disable react/jsx-key */


const Course = ({selectedCourses}) => {
  console.log(selectedCourses);
  return (
    <div className="my-5 bg-base-100 shadow-xl p-7 rounded-lg">
      <h3 className="text-[#2F80ED] font-bold border-b-2 mb-5">Credit Hour Remaining</h3>
      <h3 className="font-bold mb-4">Course Name:</h3>
      {
        selectedCourses.map((course) => (
          <p>{course.course_name}</p>
        )
        )
      }
      <p className="border-t-2 mt-5">Total Credit Hour:</p>
    </div>
  );
};

export default Course;