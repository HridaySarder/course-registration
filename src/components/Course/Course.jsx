/* eslint-disable react/jsx-key */


const Course = ({selectedCourses}) => {
  console.log(selectedCourses);
  return (
    <div>
      <h2 className="text-4xl">Course Name:</h2>
      {
        selectedCourses.map((course) => (
          <p>{course.course_name}</p>
        )
        )
      }
    </div>
  );
};

export default Course;