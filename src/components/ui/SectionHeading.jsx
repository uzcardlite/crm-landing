export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow && (
        <div className="mb-3 text-sm font-semibold text-accent-dark">{eyebrow}</div>
      )}
      <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className={`mt-3 max-w-xl text-gray-500 ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}
