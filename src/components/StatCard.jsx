
import { TrendingUp, TrendingDown } from "lucide-react";

function StatCard({
  title,
  value,
  change,
  description,
  icon: Icon,
  trend = "up",
}) {
  const isPositive = trend === "up";

  return (
    <div className="stat-card">
      <div className="stat-card-header">
        <span className="stat-title">{title}</span>

        <div className="stat-icon">
          {Icon && <Icon size={19} />}
        </div>
      </div>

      <div className="stat-value">{value}</div>

      <div className="stat-footer">
        <span
          className={`stat-change ${
            isPositive ? "positive" : "negative"
          }`}
        >
          {isPositive ? (
            <TrendingUp size={14} />
          ) : (
            <TrendingDown size={14} />
          )}
          {change}
        </span>

        <span className="stat-description">{description}</span>
      </div>
    </div>
  );
}

export default StatCard;
