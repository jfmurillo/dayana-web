export function useCalendlyUrl(): string {
  return (
    (import.meta.env.VITE_CALENDLY_URL as string | undefined) ??
    "https://calendly.com/dayanamurilloc/30min"
  );
}
