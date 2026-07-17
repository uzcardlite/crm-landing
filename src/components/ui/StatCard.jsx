export default function StatCard({ icon: Icon, label, value, trend, dark = false }) {
  return (
    <div
      className={`rounded-card border p-4 shadow-card ${
        dark
          ? "border-navy-700 bg-navy-800"
          : "border-gray-100 bg-white"
      }`}
    >
      <div className="flex items-center justify-between">
        <div
          className={`flex h-9 w-9 items-center justify-center rounded-btn ${
            dark ? "bg-accent/20 text-accent-light" : "bg-accent-light/30 text-accent-dark"
          }`}
        >
          <Icon size={18} />
        </div>
        {trend && (
          <span
            className={`rounded-full px-2 py-0.5 text-xs font-medium ${
              trend.positive
                ? "bg-success-bg text-success"
                : "bg-danger-bg text-danger"
            }`}
          >
            {trend.label}
          </span>
        )}
      </div>
      <div className={`mt-3 text-xl font-semibold ${dark ? "text-white" : "text-gray-900"}`}>
        {value}
      </div>
      <div className={`text-sm ${dark ? "text-navy-text" : "text-gray-500"}`}>{label}</div>
    </div>
  );
}
