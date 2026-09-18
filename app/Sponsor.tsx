import Image from "next/image";
import { sponsor } from "@/lib/sponsor";

/**
 * A single, static sponsor slot. No ad network, no scripts, no tracking —
 * just a link the sponsor paid for. Renders nothing when no sponsor is set.
 */
export default function Sponsor() {
  if (!sponsor) {
    return null;
  }

  const { name, tagline, url, logo } = sponsor;

  return (
    <aside className="mb-12">
      <a
        href={url}
        target="_blank"
        rel="sponsored noopener noreferrer"
        title={name}
        className="flex items-center gap-4 rounded-lg border border-gray-200 px-4 py-3 transition-colors hover:border-gray-300 hover:bg-gray-50 dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:bg-zinc-800/50"
      >
        {logo ? (
          <>
            <Image
              src={logo.src}
              alt={name}
              width={logo.width}
              height={logo.height}
              className={
                logo.darkSrc
                  ? "h-6 w-auto shrink-0 dark:hidden"
                  : "h-6 w-auto shrink-0"
              }
            />
            {logo.darkSrc && (
              <Image
                src={logo.darkSrc}
                alt={name}
                width={logo.width}
                height={logo.height}
                className="hidden h-6 w-auto shrink-0 dark:block"
              />
            )}
          </>
        ) : (
          <span className="shrink-0 font-semibold dark:text-white">{name}</span>
        )}
        <span className="text-sm leading-snug text-gray-600 dark:text-gray-400">
          {tagline}
        </span>
        <span className="ml-auto hidden shrink-0 text-xs uppercase tracking-wide text-gray-400 sm:block dark:text-gray-500">
          Sponsor
        </span>
      </a>
    </aside>
  );
}
