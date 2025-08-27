import { resumes } from "constants/index";
import Navbar from "~/components/Navbar";
import ResumeCard from "~/components/ResumeCard";




export function Welcome() {
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

