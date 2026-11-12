
import {
  CheckCircle2,
  Clock,
  XCircle,
  ExternalLink,
} from "lucide-react";

const deployments = [
  {
    id: "#DEP-1042",
    branch: "main",
    commit: "Initial project setup",
    environment: "Development",
    date: "Just now",
    status: "success",
  },
  {
    id: "#DEP-1041",
    branch: "main",
    commit: "Configure ESLint",
    environment: "Development",
    date: "Earlier",
    status: "success",
  },
  {
    id: "#DEP-1040",
    branch: "main",
    commit: "Initialize Vite application",
    environment: "Development",
    date: "Earlier",
    status: "success",
  },
];

function DeploymentHistory() {
  return (
    <section className="deployment-card">
      <div className="section-header">
        <div>
          <h2>Deployment History</h2>
          <p>Recent deployment activity</p>
        </div>

        <button className="view-all-button">
          View all <ExternalLink size={14} />
        </button>
      </div>

      <div className="deployment-table-wrapper">
        <table className="deployment-table">
          <thead>
            <tr>
              <th>Deployment</th>
              <th>Commit</th>
              <th>Environment</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {deployments.map((deployment) => (
              <tr key={deployment.id}>
                <td>
                  <div className="deployment-id">
                    {deployment.id}
                  </div>
                  <span className="deployment-branch">
                    {deployment.branch}
                  </span>
                </td>

                <td>{deployment.commit}</td>
                <td>{deployment.environment}</td>
                <td>{deployment.date}</td>

                <td>
                  <span className={`deployment-status ${deployment.status}`}>
                    {deployment.status === "success" ? (
                      <CheckCircle2 size={14} />
                    ) : deployment.status === "failed" ? (
                      <XCircle size={14} />
                    ) : (
                      <Clock size={14} />
                    )}
                    {deployment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default DeploymentHistory;
