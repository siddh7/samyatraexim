import { cx, layout, text, bg, color } from "../../../styles/classes";

interface StatItem {
  value: string;
  label: string;
}

interface StatsSectionProps {
  items: StatItem[];
}

export default function StatsSection({ items }: StatsSectionProps) {
  return (
    <section className={cx(bg.dark, layout.section)}>
      <div className={cx(layout.container, layout.grid4)}>
        {items.map((stat, i) => (
          <div key={i} className="text-center py-4">
            <div className={cx("text-5xl font-black mb-2", color.accent)}>
              {stat.value}
            </div>
            <div className={cx(text.label, "text-gray-400")}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}