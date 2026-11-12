
import { Search, Bell, ChevronDown, Plus } from "lucide-react";

function Header({ title = "Overview" }) {
  return (
    <header className="dashboard-header">
      <div className="header-title">
        <h1>{title}</h1>
        <p>Monitor your development and deployment activity.</p>
      </div>

      <div className="header-actions">
        <div className="search-box">
          <Search size={17} />
          <input type="text" placeholder="Search anything..." />
          <kbd>⌘ K</kbd>
        </div>

        <button className="icon-button" aria-label="Notifications">
          <Bell size={19} />
          <span className="notification-dot" />
        </button>

        <div className="header-divider" />

        <div className="user-profile">
          <div className="user-avatar">F</div>
          <div className="user-details">
            <strong>Funmibi</strong>
            <span>Administrator</span>
          </div>
          <ChevronDown size={16} />
        </div>

        <button className="create-button">
          <Plus size={17} />
          New Pipeline
        </button>
      </div>
    </header>
  );
}

export default Header;

