import Header from "../components/Header";
import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import Footer from "../components/Footer";

export default function Landing() {
  const features = [
    { title: "Track Projects", description: "Monitor progress and deadlines easily." },
    { title: "Team Insights", description: "View stats and productivity analytics." },
    { title: "Secure Login", description: "Keep your project data safe with JWT auth." },
  ];

  return (
    <div>
      <Header />
      <Hero />
      <section className="grid md:grid-cols-3 gap-6 p-8">
        {features.map((f, i) => (
          <FeatureCard key={i} title={f.title} description={f.description} />
        ))}
      </section>
      <Footer />
    </div>
  );
}
