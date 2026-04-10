import StatsCards from "./StatsCards";
import ChartsSection from "./ChartsSection";

const DashboardContent = () => {
  return (
    <div className="space-y-8">
      <StatsCards />
      <ChartsSection />
    </div>
  );
};

export default DashboardContent;