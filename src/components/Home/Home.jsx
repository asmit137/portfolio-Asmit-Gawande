import About from "./About";
import WorkExp from "./WorkExp";
import Profile from "./Profile";

export default function Home() {
    return (
        <main className="bg-slate-900 min-h-screen">
            <Profile/>
            <About/>
            <WorkExp/>
        </main>
    );
}
