import { Link } from "react-router-dom";


export default function Footer() {
    return (
        <footer className="bg-gray-800 border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-around">

                    <div className="grid grid-cols-2 gap-10 sm:gap-6 sm:grid-cols-3">
                        <div className="text-center">
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Resources</h2>
                            <ul className="text-white font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/skillset" className="hover:underline">
                                        SkillSet
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/portfolio" className="hover:underline">
                                        Portfolio
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/contact" className="hover:underline">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="text-center">
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Follow us</h2>
                            <ul className="text-white font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://github.com/asmit137"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <Link to="https://www.linkedin.com/in/asmitgawandeofficial/" target="_blank" className="hover:underline">
                                        LinkedIn
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="https://leetcode.com/u/Asmitgawande/" target="_blank" className="hover:underline">
                                        LeetCode
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2024
                        <a href="/" className="hover:underline">
                            Asmit Gawande
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <Link to="#" className="text-gray-500 hover:text-gray-900">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 8 19"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </Link>

                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">GitHub account</span>
                        </Link>

                        <Link to="#" className="text-gray-500 hover:text-gray-900">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5 12a7 7 0 0 1 7-7h5.472A7.005 7.005 0 0 1 24 12a7 7 0 0 1-7 7H12a7 7 0 0 1-7-7ZM12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">LeetCode profile</span>
                        </Link>

                        <Link to="#" className="text-gray-500 hover:text-gray-900">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M19.638 7.618c.014.193.014.387.014.58 0 5.922-4.498 12.74-12.74 12.74-2.53 0-4.875-.744-6.854-2.021.355.043.729.065 1.107.065 2.13 0 4.084-.727 5.64-1.948a4.396 4.396 0 0 1-4.097-3.04c.268.042.535.065.81.065.396 0 .783-.052 1.15-.151a4.393 4.393 0 0 1-3.522-4.303c.595.334 1.267.531 1.98.554a4.387 4.387 0 0 1-1.417-5.842 12.44 12.44 0 0 0 9.03 4.558c-5.478 5.134-12.347 3.763-12.347-5.054 0-.615.066-1.216.195-1.792a8.99 8.99 0 0 0 6.47-1.902c-.019-.138-.029-.28-.029-.422a4.392 4.392 0 0 1 1.146-2.983c-.396-.225-.824-.421-1.272-.598a4.394 4.394 0 0 1 2.013 6.104c-.7.308-1.392.55-2.118.79"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Twitter</span>
                        </Link>

                        <Link to="mailto:your-email@gmail.com" className="text-gray-500 hover:text-gray-900">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M18 6v12H6V6h12ZM5 5v14h14V5H5Zm2 2h10v10H7V7Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Gmail</span>
                        </Link>
                    </div>

                </div>
            </div>
        </footer>
    );
}

