import { Link } from "react-router-dom"
export default function WorkExp() {
    
    return(
        <div className="py-10 px-4 max-w-7xl mx-auto">
                <h2 className="text-2xl font-bold mb-6">
                    Work Experience
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
                    {/* Left Side */}
                    <div className="text-left py-2 px-10">
                        <h5 className="text-lg font-bold">
                            Software Development Intern
                        </h5>
                        <p>HashedBit Innovation PVT LTD</p>
                        <p className="text-sm">(12<sup>th</sup> September 2024 - 12<sup>th</sup> November 2024)</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold">
                            Work Details
                        </h3>
                        <ul className="mb-4 list-disc list-inside">
                            <li>Worked remotely to gain hands-on experience in designing, developing, and maintaining dynamic web applications using the MERN stack.</li>
                            <li>
                                Actively utilized React.js to create responsive and user-friendly front-end interfaces, ensuring a seamless user experience.
                            </li>
                            <li>
                                Collaborated with the team to handle and develop backend APIs using Node.js and Express.js, ensuring efficient integration with MongoDB databases for data management.
                            </li>
                            <li>
                                Efficiently managed project workflows and tasks using Jira boards, ensuring timely delivery of assigned features and tasks while adhering to an agile development process.
                            </li>
                            <li>
                                Troubleshot and debugged issues in both front-end and back-end environments, contributing to the optimization and reliability of the applications.
                            </li>
                            <li>
                                Gained valuable insights into collaborative remote software development and team communication, delivering high-quality results within deadlines.</li>
                        </ul>
                        <div className="flex space-x-4">
                            {/* Experience Button */}
                            <Link
                                to="https://drive.google.com/file/d/1Q23SXpZXRfBjpV0-iYpcyzogA7l--4_f/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-medium transition"
                            >
                                Experience Letter
                            </Link>
                            {/* Internship Certificate Button */}
                            <Link
                                to="https://drive.google.com/file/d/1F2n0q1oeE7r5tAAjL1y5NTG31WYdRNav/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 rounded-full bg-green-500 hover:bg-green-600 text-white font-medium transition"
                            >
                                Internship Certificate
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}