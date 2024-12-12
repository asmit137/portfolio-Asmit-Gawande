import React, { useEffect, useState } from "react";
import ProfilePhoto from '/ProfilePhoto.jpg';
export default function Profile() {
  const roles = [
    "College Student",
    "Frontend Developer",
    "Backend Engineer",
    "Full Stack Developer",
    "Software Developer"
  ];

  const [currentRole, setCurrentRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timer;

    if (isTyping) {
      // Typing effect
      if (charIndex < roles[roleIndex].length) {
        timer = setTimeout(() => {
          setCurrentRole((prev) => prev + roles[roleIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 100); // Typing speed
      } else {
        // Pause after typing
        setIsTyping(false);
        timer = setTimeout(() => {}, 1000); // Pause duration
      }
    } else {
      // Deleting effect
      if (charIndex > 0) {
        timer = setTimeout(() => {
          setCurrentRole((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, 50); // Deleting speed
      } else {
        // Move to the next role
        setIsTyping(true);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timer); // Cleanup timer
  }, [charIndex, isTyping, roleIndex, roles]);

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left px-4 py-10 max-w-7xl mx-auto">
      <div className="sm:w-1/2">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Asmit Gawande</h1>
        <p className="text-lg sm:text-2xl font-medium">
          I am {currentRole}
        </p>
      </div>
      <div className="sm:w-1/2 flex justify-center mt-6 sm:mt-0">
        <img
          src={ProfilePhoto}
          alt="Profile"
          className="w-32 h-32 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-gray-700"
        />
      </div>
    </div>
  );
}
