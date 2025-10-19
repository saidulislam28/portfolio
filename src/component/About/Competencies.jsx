import { GoTriangleRight } from "react-icons/go";

const Competencies = ({ data }) => {
  const frontend = data?.filter((item) => item.is_frontend);
  const backend = data?.filter((item) => item.is_backend);
  const database = data?.filter((item) => item.is_database);
  const other = data?.filter((item) => item.is_other);

  return (
    <div className="my-20 p-5">
      <h5
        id="contact"
        className="text-xl lg:text-3xl font-semibold text-white text-center my-10 border-b-4 w-[70%] md:w-[30%] mx-auto py-5 border-yellow-400"
      >
        Core Competencies
      </h5>
      <section className=" text-gray-300">
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Frontend Expertise */}
          <div className="bg-[#111] p-8 rounded-2xl shadow-lg border border-gray-800  transition-all duration-1000 h-full md:h-[400px] lg:h-[280px] hover:border-green-400">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
              🚀 Frontend Expertise
            </h2>
            <ul className="space-y-2 text-sm">
              {frontend?.map((item, ind) => (
                <li className="flex items-center gap-2">
                  <GoTriangleRight size={12} color="#affa69" /> {item?.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Backend Mastery */}
          <div className="bg-[#111] p-8 rounded-2xl shadow-lg border border-gray-800  transition-all duration-1000  h-full md:h-[400px] lg:h-[280px] hover:border-green-400">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
              🧠 Backend Mastery
            </h2>
            <ul className="space-y-2 text-sm">
              {backend?.map((item, ind) => (
                <li className="flex items-center gap-2">
                  <GoTriangleRight size={12} color="#affa69" /> {item?.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Database Expertise */}
          <div className="bg-[#111] p-8 rounded-2xl shadow-lg border border-gray-800  transition-all duration-1000  h-full md:h-[400px] lg:h-[280px] hover:border-green-400">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
              🗄️ Database Expertise
            </h2>
            <ul className="space-y-2 text-sm">
              {database?.map((item, ind) => (
                <li className="flex items-center gap-2">
                  <GoTriangleRight size={12} color="#affa69" /> {item?.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Real-World Experience */}
          <div className="bg-[#111] p-8 rounded-2xl shadow-lg border border-gray-800  transition-all duration-1000  h-full md:h-[400px] lg:h-[280px] hover:border-green-400">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
              💼 Real-World Experience
            </h2>
            <ul className="space-y-2 text-sm">
              {other?.map((item, ind) => (
                <li className="flex items-center gap-2">
                  <GoTriangleRight size={12} color="#affa69" /> {item?.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Competencies;
