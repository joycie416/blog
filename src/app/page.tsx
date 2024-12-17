import Education from "@/components/resume/Education";
import Experience from "@/components/resume/Experience";
import Profile from "@/components/resume/Profile";
import Project from "@/components/resume/Project";

export default function Home() {
  return (
    <div className="w-full flex flex-col sm:gap-8">
      <Profile />
      <Project />
      <Experience />
      <Education />
    </div>
  );
}
