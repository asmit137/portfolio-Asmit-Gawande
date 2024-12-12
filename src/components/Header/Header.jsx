import { Link, NavLink } from "react-router-dom";

const Header = () => {
   
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-slate-900 border-gray-200 px-4 lg:px-6 py-4">
                <div className="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl">
                    
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink to="/"
                                     className={({isActive}) =>
                                     `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-slate-100"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                 }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/skillset"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-slate-100"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    SkillSet
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                to="/portfolio"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-slate-100"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    PortFolio
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                to="/Contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-slate-100"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>

                        </ul>
                        
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
