/**
 * The blog's single sponsor slot.
 *
 * Set `sponsor` to `null` to turn the slot off — nothing renders, no layout
 * shift, no requests. To run a sponsorship, fill in the fields below. Logos
 * live in `public/` and should be SVG or a transparent PNG.
 */

export interface Sponsor {
  /** Sponsor name, used for the logo's alt text and the link's title. */
  name: string;
  /** One line. Keep it short enough to sit on a single row on desktop. */
  tagline: string;
  /** Destination, including any campaign parameters the sponsor asked for. */
  url: string;
  /**
   * `"sponsor"` (the default) labels the slot as paid placement. Use
   * `"house"` when the slot points at something of your own, so it isn't
   * disclosed as a sponsorship it isn't.
   */
  kind?: "sponsor" | "house";
  /** Optional logo in `public/`. Omitted renders the name as text. */
  logo?: {
    src: string;
    /** Optional variant swapped in on dark backgrounds. */
    darkSrc?: string;
    width: number;
    height: number;
    /** Extra classes, e.g. `rounded-md` for a square app icon. */
    className?: string;
  };
}

export const sponsor: Sponsor | null = {
  name: "LookForward",
  tagline:
    "LookForward tracks upcoming movies and video games, so you always know what's next.",
  url: "https://getlookforward.app",
  kind: "house",
  logo: {
    src: "/lookforward-icon.png",
    width: 1024,
    height: 1024,
    className: "rounded-md",
  },
};
