import { useInView } from "../../hooks/useInView";
import SectionHeading from "./SectionHeading";

export default function NumberedSectionLayout({
  index,
  title,
  description,
  screen,
  reverse = false,
  tone = "background",
}) {
  const [ref, inView] = useInView();

  return (
    <section
      ref={ref}
      className={`border-b border-gray-100 py-16 sm:py-24 ${tone === "background" ? "bg-background" : "bg-white"}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={`flex flex-col gap-10 lg:items-center lg:gap-16 ${
            reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
          <div
            className={`flex-1 transition-all duration-700 ease-out ${
              inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <SectionHeading eyebrow={index} title={title} description={description} />
          </div>
          <div
            className={`flex-1 transition-all delay-150 duration-700 ease-out ${
              inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            {screen}
          </div>
        </div>
      </div>
    </section>
  );
}
