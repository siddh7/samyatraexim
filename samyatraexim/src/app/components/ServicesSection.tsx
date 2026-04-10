import { cx, layout, text, bg, card, color, space } from "../../../styles/classes";

interface ServiceCard {
  icon: string;
  title: string;
  description: string;
}

interface ServicesSectionProps {
  heading: string;
  subheading?: string;
  cards: ServiceCard[];
}

export default function ServicesSection({ heading, subheading, cards }: ServicesSectionProps) {
  return (
    <section id="services" className={cx(layout.section, bg.light)}>
      <div className={cx(layout.container)}>
        {/* Header */}
        <div className={cx("text-center mb-14", space.stack)}>
          <h2 className={cx(text.h2, color.dark)}>{heading}</h2>
          {subheading && (
            <p className={cx(text.bodyLg, "text-gray-500 max-w-xl mx-auto")}>{subheading}</p>
          )}
        </div>

        {/* Cards Grid */}
        <div className={layout.grid3}>
          {cards.map((service, i) => (
            <div
              key={i}
              className={cx(card.base, card.padding, card.hover, "group cursor-default")}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className={cx(text.h4, color.dark, "mb-2 group-hover:text-blue-600 transition-colors")}>
                {service.title}
              </h3>
              <p className={cx(text.body, "text-gray-500")}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}