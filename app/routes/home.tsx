import type { Route } from "./+types/home";
import { usePuterStore } from "~/lib/puter";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import ResumeCard from "~/components/ResumeCard";
import Navbar from "~/components/Navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResumeAnalyzer" },
    { name: "description", content: "Welcome my resume analyzer agent" },
  ];
}

export default function Home() {
  const { auth, kv } = usePuterStore();
  const navigate = useNavigate();
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [loadingResumes, setLoadingResumes] = useState(false);

  useEffect(() => {
    if(!auth.isAuthenticated) navigate('/auth?next=/');
  }, [auth.isAuthenticated])

    return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">

      <Navbar />

      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Track Your Applications & Resume Rating</h1>
          <h2>Review your submissions and check AI-powred feedback</h2>
        </div>
     
        {
          resumes.length > 0 && (    
          <div className="resumes-section">
            {
              resumes.map(resume => (
                <ResumeCard key={resume.id} resume={resume} />
              ))
            }
          </div>
          )
        }
       </section>

    </main>
  );
}
