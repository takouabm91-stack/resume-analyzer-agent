import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResumeAnalyzer" },
    { name: "description", content: "Welcome my resume analyzer agent" },
  ];
}

export default function Home() {
  return <Welcome />;
}
