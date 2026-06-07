import clsx from "clsx";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  id?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  id,
  className
}: SectionHeadingProps) {
  return (
    <div className={clsx("js-reveal max-w-3xl", className)}>
      <p className="eyebrow">{eyebrow}</p>
      <h2
        id={id}
        className="js-heading-mask reveal-mask mt-4 font-display text-4xl font-semibold leading-[1.02] tracking-normal text-white md:text-6xl"
      >
        <span>{title}</span>
      </h2>
      {intro ? (
        <p className="mt-5 max-w-2xl text-base leading-8 text-white/68 md:text-lg">
          {intro}
        </p>
      ) : null}
    </div>
  );
}
