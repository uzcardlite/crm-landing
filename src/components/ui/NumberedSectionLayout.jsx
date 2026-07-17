import SectionHeading from "./SectionHeading";

export default function NumberedSectionLayout({
  index,
  title,
  description,
  screen,
  reverse = false,
  tone = "background",
}) {
  return (
    <section className={`border-b border-gray-100 py-16 sm:py-24 ${tone === "background" ? "bg-background" : "bg-white"}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={`flex flex-col gap-10 lg:items-center lg:gap-16 ${
            reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
          <div className="flex-1">
            <SectionHeading eyebrow={index} title={title} description={description} />
          </div>
          <div className="flex-1">{screen}</div>
        </div>
      </div>
    </section>
  );
}
