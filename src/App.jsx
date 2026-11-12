
import {
  Activity,
  CheckCircle2,
  Clock,
  ShieldCheck,
} from "lucide-react";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatCard from "./components/StatCard";
import PipelineOverview from "./components/PipelineOverview";
import EnvironmentStatus from "./components/EnvironmentStatus";
import DeploymentHistory from "./components/DeploymentHistory";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Sidebar />

      <main className="main-content">
        <Header title="Overview" />

        <div className="dashboard-content">
          <div className="welcome-section">
            <div>
              <h1>Welcome back, Funmibi</h1>
              <p>
                Here's what's happening with your CI/CD infrastructure.
              </p>
            </div>
          </div>

          <section className="stats-grid">
            <StatCard
              title="Total Pipelines"
              value="24"
              change="+12.5%"
              description="vs. last month"
              icon={Activity}
              trend="up"
            />

            <StatCard
              title="Successful Builds"
              value="96.8%"
              change="+4.2%"
              description="vs. last month"
              icon={CheckCircle2}
              trend="up"
            />

            <StatCard
              title="Average Build Time"
              value="2m 34s"
              change="-8.4%"
              description="vs. last month"
              icon={Clock}
              trend="up"
            />

            <StatCard
              title="Security Issues"
              value="0"
              change="No issues"
              description="Current scan"
              icon={ShieldCheck}
              trend="up"
            />
          </section>

          <div className="dashboard-grid">
            <PipelineOverview />
            <EnvironmentStatus />
          </div>

          <DeploymentHistory />
        </div>
      </main>
    </div>
  );
}

export default App;
