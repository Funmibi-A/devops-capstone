
import {
  Monitor,
  TestTube,
  Globe,
  CheckCircle2,
  Clock,
} from "lucide-react";

const environments = [
  {
    name: "Development",
    description: "Local development environment",
    version: "Latest",
    status: "active",
    icon: Monitor,
  },
  {
    name: "Staging",
    description: "Pre-production testing",
    version: "Not deployed",
    status: "pending",
    icon: TestTube,
  },
  {
    name: "Production",
    description: "Live application",
    version: "Not deployed",
    status: "pending",
    icon: Globe,
  },
];

function EnvironmentStatus() {
  return (
    <section className="environment-card">
      <div className="section-header">
        <div>
          <h2>Environments</h2>
          <p>Deployment environment status</p>
        </div>
      </div>

      <div className="environment-list">
        {environments.map((environment) => {
          const Icon = environment.icon;
          const isActive = environment.status === "active";

          return (
            <div className="environment-item" key={environment.name}>
              <div className="environment-icon">
                <Icon size={20} />
              </div>

              <div className="environment-details">
                <h3>{environment.name}</h3>
                <p>{environment.description}</p>
                <span className="environment-version">
                  {environment.version}
                </span>
              </div>

              <span
                className={`environment-status ${
                  isActive ? "active" : "pending"
                }`}
              >
                {isActive ? (
                  <CheckCircle2 size={14} />
                ) : (
                  <Clock size={14} />
                )}
                {isActive ? "Active" : "Pending"}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default EnvironmentStatus;
