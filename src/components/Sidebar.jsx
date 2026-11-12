import {
  Activity,
  LayoutDashboard,
  GitBranch,
  Rocket,
  Server,
  ShieldCheck,
  Settings,
  Workflow,
  ChevronLeft,
} from "lucide-react";

const navigation = [
  {
    title: "MAIN MENU",
    items: [
      { label: "Overview", icon: LayoutDashboard },
      { label: "Pipelines", icon: GitBranch },
      { label: "Deployments", icon: Rocket },
      { label: "Environments", icon: Server },
    ],
  },
  {
    title: "MANAGEMENT",
    items: [
      { label: "Security", icon: ShieldCheck },
      { label: "Settings", icon: Settings },
    ],
  },
];

function Sidebar({ activePage = "Overview", onNavigate }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="brand-icon">
          <Workflow size={23} />
        </div>

        <div className="brand-text">
          <h2>DevOps<span>Flow</span></h2>
          <p>CI/CD CONTROL CENTER</p>
        </div>
      </div>

      <div className="sidebar-workspace">
        <div className="workspace-avatar">D</div>
        <div className="workspace-info">
          <strong>DevOps Workspace</strong>
          <span>Free Plan</span>
        </div>
        <ChevronLeft size={16} />
      </div>

      <nav className="sidebar-navigation">
        {navigation.map((section) => (
          <div className="nav-section" key={section.title}>
            <p className="nav-section-title">{section.title}</p>

            {section.items.map(({ label, icon: Icon }) => (
              <button
                key={label}
                className={`nav-item ${
                  activePage === label ? "active" : ""
                }`}
                onClick={() => onNavigate?.(label)}
              >
                <Icon size={18} />
                <span>{label}</span>
              </button>
            ))}
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="system-status">
          <span className="status-indicator" />
          <span>All systems operational</span>
        </div>

        <div className="sidebar-version">
          <Activity size={14} />
          <span>DevOpsFlow v1.0.0</span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
