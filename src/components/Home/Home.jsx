import React from "react";
import backgroundImage from '/bg_images.jpg';
import About from "./About";
import WorkExp from "./WorkExp";
import Profile from "./Profile";

export default function Home() {
    return (
        <div className="bg-gray-900 text-gray-100 min-h-screen">
           
            <div>
                <img
                    src={backgroundImage}
                    alt="Background"
                    className="w-full h-80 sm:h-96 object-cover"
                />
            </div>
           <Profile/>
            <About/>
            <WorkExp/>
            
        </div>

    );
}
