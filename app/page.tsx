import data from "@/data/resume.json";
import Header from "@/components/Header";
import Summary from "@/components/Summary";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";

export default function Resume() {
  return (
    <div className="mx-auto max-w-[210mm] bg-white shadow-2xl p-12">
      <Header profile={data.profile} />
      <Summary summary={data.summary} />
      <Skills skills={data.skills} />
      <Projects projects={data.projects} />
      <Education education={data.education} />
    </div>
  );
}
