import './nav.css';



const Navbar = () => {



  const navlinks = (
    <>
      <li>
        <a href='#home' className='nav-link text-lg'>Home</a>
      </li>
      
      <li>
        <a href='#skill1' className='nav-link text-lg'>Skills</a>
      </li>
      <li>
        <a href='#projects1' className='nav-link text-lg'>Projects</a>
      </li>
     
      <li>
        <a  href='#education1' className='nav-link text-lg'>Education</a>
      </li>
      <li>
        <a  href='#contact1' className='nav-link text-lg'>Contact</a>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >{navlinks}</ul>
          </div>
          <p  id='home' className="text-3xl ">Saidul</p>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navlinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
