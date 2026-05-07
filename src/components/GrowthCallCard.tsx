import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { CalendarIcon, ChartIcon, ArrowUpRightIcon } from "./Icons";
import { useCalendlyUrl } from "../hooks/useCalendly";

interface GrowthCallCardProps {
  /** Optional fallback handler if Calendly is not used. */
  onCtaClick?: () => void;
}

const EASE = [0.22, 1, 0.36, 1] as const;

export default function GrowthCallCard({ onCtaClick }: GrowthCallCardProps) {
  const { t } = useTranslation();
  const calendlyUrl = useCalendlyUrl();

  return (
    <motion.div
      className="growth-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: EASE }}
    >
      <div className="growth-card__icon" aria-hidden="true">
        <CalendarIcon />
      </div>

      <div className="growth-card__body" style={{ textAlign: "center" }}>
        <h3 className="growth-card__title">{t("services.ctaTitle")}</h3>
        <p className="growth-card__sub">{t("services.ctaSubtitle")}</p>
        <div className="growth-card__rule">
          <span aria-hidden="true">◇</span>
        </div>
        <p className="growth-card__body-text">{t("services.ctaBody")}</p>

        <div style={{ marginTop: 16 }}>
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
            onClick={onCtaClick}
          >
            {t("services.ctaButton")}
            <ArrowUpRightIcon className="btn__arrow" width={16} height={16} />
          </a>
        </div>
      </div>

      <div className="growth-card__chart" aria-hidden="true">
        <ChartIcon />
      </div>
    </motion.div>
  );
}
