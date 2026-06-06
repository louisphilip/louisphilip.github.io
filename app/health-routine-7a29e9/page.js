import HealthDashboard from "@/components/health/HealthDashboard";

export const metadata = {
  title: "Private Blueprint | LP Shahim",
  description: "Personalized recovery, posture, and nutrition blueprint.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function HealthPage() {
  return (
    <div className="container section" style={{ minHeight: '100vh', paddingBottom: '80px' }}>
      <HealthDashboard />
    </div>
  );
}
