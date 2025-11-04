import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";

export default function Landing() {
  return (
    <div className="flex flex-col items-center text-center px-4 sm:px-8">
      {/* Hero Section */}
      <section className="max-w-3xl mt-24 mb-16">
        <Hero />
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mb-24">
        <FeatureCard
          title="Real-Time Tracking"
          description="Monitor project progress and team performance instantly."
        />
        <FeatureCard
          title="Team Collaboration"
          description="Invite members, assign tasks, and stay aligned on goals."
        />
        <FeatureCard
          title="Analytics Dashboard"
          description="Visualize KPIs and gain insights with beautiful charts."
        />
      </section>
    </div>
  );
}
