import { cx, layout, text, bg, color, btn, badge } from "../../../styles/classes";

interface HeroProps {
  badge?: string;
  heading: string;
  subheading: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function HeroSection({
  badge: badgeText,
  heading,
  subheading,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <section className={cx(layout.fullScreen, bg.gradient, layout.flexCenter, "relative overflow-hidden", "py-16 px-8 md:px-24 md:py-24")}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-white blur-3xl" />
      </div>

      <div className={cx(layout.container, layout.flexCol, "items-center text-center gap-8 relative z-10 px-6")}>
        {badgeText && (
          <span className={cx(badge.base, "bg-white/20 text-white border border-white/30 backdrop-blur-sm")}>
            {badgeText}
          </span>
        )}

        <h1 className={cx(text.hero, color.white, "max-w-4xl")}>
          {heading}
        </h1>

        <p className={cx("text-xl text-white/80 max-w-2xl leading-relaxed")}>
          {subheading}
        </p>

        {(primaryCta || secondaryCta) && (
          <div className="flex flex-wrap gap-4 justify-center">
            {primaryCta && (
              <a
                href={primaryCta.href}
                className={cx(btn.base, btn.accent, btn.lg)}
              >
                {primaryCta.label} →
              </a>
            )}
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className={cx(btn.base, "border-2 border-white text-white px-8 py-4 text-lg hover:bg-white/10")}
              >
                {secondaryCta.label}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}