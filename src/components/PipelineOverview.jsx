
import {
  GitBranch,
  CheckCircle2,
  Clock,
  Rocket,
  Package,
  TestTube,
  ShieldCheck,
} from "lucide-react";

const stages = [
  {
    name: "Source",
    detail: "Code pushed to GitHub",
    status: "success",
    icon: GitBranch,
  },
  {
    name: "Lint",
    detail: "ESLint checks passed",
    status: "success",
    icon: ShieldCheck,
  },
  {
    name: "Tests",
    detail: "Unit tests completed",
    status: "success",
    icon: TestTube,
  },
  {
    name: "Build",
    detail: "Production bundle generated",
    status: "success",
    icon: Package,
  },
  {
    name: "Deploy",
    detail: "Awaiting deployment",
    status: "pending",
    icon: Rocket,
  },
];

function PipelineOverview() {
  return (
    <section className="pipeline-card">
      <div className="section-header">
        <div>
          <h2>Pipeline Overview</h2>
          <p>Latest CI/CD execution</p>
        </div>

        <span className="pipeline-status">
          <span className="status-indicator" />
          Ready
        </span>
      </div>

      <div className="pipeline-stages">
        {stages.map((stage) => {
          const Icon = stage.icon;

          return (
            <div className="pipeline-stage" key={stage.name}>
              <div className={`stage-icon ${stage.status}`}>
                <Icon size={20} />
              </div>

              <div className="stage-details">
                <h3>{stage.name}</h3>
                <p>{stage.detail}</p>
              </div>

              <div className="stage-result">
                {stage.status === "success" ? (
                  <CheckCircle2 size={18} />
                ) : (
                  <Clock size={18} />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default PipelineOverview;
