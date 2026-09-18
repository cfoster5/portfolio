/**
 * The blog's single sponsor slot.
 *
 * Set `sponsor` to `null` to turn the slot off — nothing renders, no layout
 * shift, no requests. To run a sponsorship, fill in the fields below. Logos
 * live in `public/sponsors/` and should be SVG or a transparent PNG.
 */

export interface Sponsor {
  /** Sponsor name, used for the logo's alt text and the link's title. */
  name: string;
  /** One line. Keep it short enough to sit on a single row on desktop. */
  tagline: string;
  /** Destination, including any campaign parameters the sponsor asked for. */
  url: string;
  /** Optional logo in `public/sponsors/`. Omitted renders the name as text. */
  logo?: {
    src: string;
    /** Optional variant swapped in on dark backgrounds. */
    darkSrc?: string;
    width: number;
    height: number;
  };
}

export const sponsor: Sponsor | null = null;
