import React from 'react';
import { Link } from 'react-router-dom';
import certificate1 from './Certificates/certificate_1.pdf'
import certificate2 from './Certificates/certificate_2.jpg'
import certificate3 from './Certificates/certificate_3.jpg'
import certificate4 from './Certificates/certificate_4.jpg'
import certificate5 from './Certificates/certificate_5.jpg'
import certificate6 from './Certificates/certificate_6.jpg'
import certificate7 from './Certificates/certificate_7.pdf'



export default function Certificate(){
  const certificates = [
    { no: 1, title: 'Internship Certificate by Digipplus Pvt Ltd', url: certificate1  },
    { no: 2, title: "Woodpecker's Hackathon provided by Woodpecker Analytics and Services Private Limited", url: certificate2 },
    { no: 3, title: 'Flipkart GRiD 6.0 - Software Development Track provided by Flipkart', url: certificate3 },
    { no: 4, title: 'TATA Crucible Campus Quiz 2024 provided by Tata Group', url: certificate4 },
    { no: 5, title: 'Hack-Wars Hackathon provided by Chandigarh University (CU), Ajitgarh, Punjab', url: certificate5 },
    { no: 6, title: 'MERN Developer Internship provided by DevRhylme Foundation', url: certificate6 },
    { no: 7, title: 'Participation Certificate for Full Stack Web Development Internship Program', url: certificate7 },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Participation Certificates</h2>
      <div className="flex justify-center overflow-auto">
        <table className="table-auto border-collapse border border-gray-600 w-full max-w-4xl">
          <thead>
            <tr className="bg-gray-800 text-center">
              <th className="py-2 px-4 border-b">No.</th>
              <th className="py-2 px-4 border-b">Title</th>
              <th className="py-2 px-4 border-b">Link</th>
            </tr>
          </thead>
          <tbody>
            {certificates.map((certificate, index) => (
              <tr key={index} className="hover:bg-gray-700">
                <td className="py-2 px-4 border-b text-center">{certificate.no}</td>
                <td className="py-2 px-4 border-b text-left">{certificate.title}</td>
                <td className="py-2 px-4 border-b text-center">
                  <Link to={certificate.url} target="_blank" className="text-blue-400 hover:underline">
                    View Certificate
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


