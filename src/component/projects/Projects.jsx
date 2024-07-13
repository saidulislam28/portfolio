import { IoArrowForwardCircleOutline, IoLogoGithub } from 'react-icons/io5';
import assignment10 from '../../../public/assignment10picture.png';
import assignment11 from '../../../public/assignment11picture.png';
import assignment12 from '../../../public/assignment12picture.png';
import { LuArrowUpRightSquare } from 'react-icons/lu';


const Projects = () => {
  return (
    <div id='projects1'>

      
<h5 id='projects' className=" text-2xl lg:text-5xl font-semibold text-white   text-center my-10 border-b-4 w-[60%] lg:w-[30%] mx-auto py-5 border-yellow-400 ">My Projects</h5>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center p-3 my-10">
      <div className="max-w-2xl overflow-hidden bg-gray-300 rounded-lg shadow-md ">
        <img
          className="object-cover w-full h-64"
          src={assignment10}
          alt="Article"
        />

        <div className="p-6">
          <div>
           
            <p
            
              className=" mt-2 text-2xl font-semibold text-gray-800 "
              
            >
             TourOp
            </p>
            <p className="mt-2 text-sm text-black">
            TourOp is a dynamic web application designed for travel enthusiasts looking to explore the best tourist destinations across South Asia. With TourOp, users can effortlessly browse through a comprehensive list of stunning locations, add new places, and keep the information up-to-date by editing details about the creators of each tour place card.
            </p>
          </div>
        </div>
        <div className='flex justify-between p-5 text-gray-700'>

          <a href='https://tourop-client.netlify.app/' target='_blank' className='flex items-center gap-2 font-semibold hover:underline hover:text-black hover:font-bold'>Live Demo <LuArrowUpRightSquare /></a>
          <a href='https://github.com/saidulislam28/TourOP-client' target='_blank' className='flex items-center gap-2 font-semibold hover:underline hover:text-black hover:font-bold'>Github <IoLogoGithub />
          </a>
          <a href='' className='flex items-center gap-2 font-semibold hover:underline hover:text-black hover:font-bold'>View More <IoArrowForwardCircleOutline /></a>

        </div>
      </div>
      <div className="max-w-2xl overflow-hidden bg-gray-300  rounded-lg shadow-md ">
        <img
          className="object-cover w-full h-64"
          src={assignment11}
          alt="Article"
        />

        <div className="p-6">
          <div>
           
            <p
            
              className=" mt-2 text-2xl font-semibold text-gray-800 "
              
            >
             StudyMate
            </p>
            <p className="mt-2 text-sm text-black">
            Study Mate is an innovative web platform designed to enhance collaborative learning among students. It serves as a hub where students can manage their academic tasks efficiently by taking on assignments, creating tasks for peers, and providing constructive feedback.
            </p>
          </div>
        </div>
        <div className='flex justify-between p-5 text-gray-700'>

          <a href='https://elegant-torrone-7cb8a9.netlify.app/' target='_blank' className='flex items-center gap-2 font-semibold hover:underline hover:text-black hover:font-bold'>Live Demo <LuArrowUpRightSquare /></a>
          <a href='https://github.com/saidulislam28/studymate-client'
          target='_blank'  className='flex items-center gap-2 font-semibold hover:underline hover:text-black hover:font-bold'>Github <IoLogoGithub />
          </a>
          <a href='' className='flex items-center gap-2 font-semibold hover:underline hover:text-black hover:font-bold'>View More <IoArrowForwardCircleOutline /></a>

        </div>
      </div>
      <div className="max-w-2xl overflow-hidden bg-gray-300 rounded-lg shadow-md ">
        <img
          className="object-cover w-full h-64"
          src={assignment12}
          alt="Article"
        />

        <div className="p-6">
          <div>
           
            <p
            
              className=" mt-2 text-2xl font-semibold text-gray-800 "
              
            >
             MicroEarn
            </p>
            <p className="mt-2 text-sm text-black">
            Micro Earn is an innovative platform designed to facilitate micro-earning opportunities for users. It provides a streamlined environment where individuals can perform small tasks, complete various assignments, and earn rewards.
            </p>
          </div>
        </div>
        <div className='flex justify-between p-5 text-gray-700'>

          <a href='https://micro-earn-authentication.web.app/' target='_blank' className='flex items-center gap-2 font-semibold hover:underline hover:text-black hover:font-bold'>Live Demo <LuArrowUpRightSquare /></a>
          <a href='https://github.com/saidulislam28/micro-earn-client'  target='_blank'className='flex items-center gap-2 font-semibold hover:underline hover:text-black hover:font-bold'>Github <IoLogoGithub />
          </a>
          <a href='' className='flex items-center gap-2 font-semibold hover:underline hover:text-black hover:font-bold'>View More <IoArrowForwardCircleOutline /></a>

        </div>
      </div>
    </div>
    </div>
  );
};

export default Projects;
