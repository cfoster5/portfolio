/** Canonical origin, used for absolute URLs in metadata, the sitemap and RSS. */
export const siteUrl = "https://coreyfoster.dev";

/** Site name, used as the Open Graph site name and the RSS feed title. */
export const siteName = "Corey Foster";

/** Author name, used for metadata and structured data. */
export const author = "Corey Foster";

/** Profiles that belong to the same person, used by `sameAs` structured data. */
export const authorProfiles = ["https://github.com/cfoster5"];

/**
 * Canonical URL plus RSS autodiscovery for a page.
 *
 * Next replaces the whole `alternates` object when a page defines one, so the
 * feed link has to travel with the canonical rather than being inherited from
 * the root layout.
 */
export function alternatesFor(path: string) {
  return {
    canonical: path,
    types: {
      "application/rss+xml": [{ url: "/rss.xml", title: siteName }],
    },
  };
}
