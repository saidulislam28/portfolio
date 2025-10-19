const Education = ({ education }) => {
  return (
    <div id="education1" className="p-5">
      <h5
        id="education"
        className="text-xl lg:text-3xl font-semibold text-white text-center my-10 border-b-4 w-[50%] md:w-[18%] mx-auto py-5 border-yellow-400 "
      >
        Education
      </h5>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 rounded-sm ">
        {education?.map((edu, ind) => (
          <div className="flex space-x-2 sm:space-x-4 border rounded-xl w-full p-5 h-[250px] hover:border-green-400  transition-all duration-1000">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="flex-shrink-0 w-6 h-6 text-green-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              ></path>
            </svg>
            <div className="space-y-2">
              <p className="text-lg font-medium text-white">{edu?.title}</p>
              <p className="leading-snug">
                <span className="font-semibold">Institute:</span>{" "}
                {edu?.institute}
              </p>
              <p className="leading-snug">
                <span className="font-semibold">session:</span> {edu?.session}
              </p>
              <p className="leading-snug">
                <span className="font-semibold">Department:</span>{" "}
                {edu?.department}
              </p>
              {edu?.is_passed ? (
                <p className="leading-snug">
                  <span className="font-semibold">Result:</span> {edu?.gpa} out
                  of {edu?.out_of_gpa}
                </p>
              ) : (
                <p className="leading-snug">
                  <span className="font-semibold">Currently Studying:</span>{" "}
                  {edu?.level || "1st Year"}
                </p>
              )}
              {edu?.is_passed ? (
                <p className="leading-snug">
                  <span className="font-semibold">Passed Year:</span>{" "}
                  {edu?.passed_year}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
