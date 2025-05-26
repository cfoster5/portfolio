import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  itunes: { appId: "6742065968" },
};

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-16 dark:text-neutral-200 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="mx-auto max-w-2xl text-center">
        <Image
          src="/simply-water.png"
          alt="Simply Water App Icon"
          width={120}
          height={120}
          className="mx-auto"
        />
        <h1 className="mt-6 text-5xl font-bold">Simply Water</h1>
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
          {
            "Your clean, minimalistic hydration tracker! Stay on top of your daily water intake with ease. Simply Water helps you stay on top of your daily water intake with ease."
          }
        </p>
        <Link
          href="https://apps.apple.com/us/app/simply-water/id6742065968?itscg=30200&itsct=apps_box_link&mttnsubad=6742065968"
          className="mt-8 inline-block px-6 py-3"
        >
          <Image
            src="https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/en-us?releaseDate=1580860800"
            alt="Download on the App Store"
            width={245}
            height={82}
            className="object-contain align-middle"
          />
        </Link>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        <div className="text-center">
          <h3 className="mb-2 text-xl font-semibold">Quick Logging</h3>
          <p className="text-neutral-600 dark:text-neutral-300">
            Add your water intake in just a tap.
          </p>
        </div>
        <div className="text-center">
          <h3 className="mb-2 text-xl font-semibold">Minimal Interface</h3>
          <p className="text-neutral-600 dark:text-neutral-300">
            A sleek, distraction-free design focused on what matters.
          </p>
        </div>
        <div className="text-center">
          <h3 className="mb-2 text-xl font-semibold">Hydration History</h3>
          <p className="text-neutral-600 dark:text-neutral-300">
            View a log of all your past entries on a dedicated screen.
          </p>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="mt-16">
        <h2 className="mb-8 text-center text-3xl font-semibold">
          What Users Are Saying
        </h2>
        <div className="mx-auto max-w-2xl space-y-8">
          <blockquote className="text-xl italic text-gray-600 dark:text-gray-400">
            {
              "“Never thought I would find one that would do what this does. Didn't need all the other frills that come with all the other apps. I just wanted to input my total drinks as I drank during the day. This is perfect and worth the $.99 I paid for it for sure.”"
            }
          </blockquote>
          <blockquote className="text-xl italic text-gray-600 dark:text-gray-400">
            {
              "“I love this app! To be honest, I think I mainly like it for its straightforward and minimalist approach to this concept. A lot of the water trackers I've used and seen on here have too many features, and/or can track more than water. In terms of functionality and appearance, there's not much to it, but I think that's also part of the idea. It works well, and that's what matters most!”"
            }
          </blockquote>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="mt-16">
        <h2 className="mb-8 text-center text-3xl font-semibold">
          App Previews
        </h2>
        <div className="flex space-x-4 overflow-x-auto pb-4 sm:justify-center">
          <Image
            src="/water/preview_1.png"
            alt="Find tab preview showing movie posters"
            width={300}
            height={600}
            className="flex-shrink-0 rounded-xl shadow-md"
          />
          <Image
            src="/water/preview_2.png"
            alt="Movie details preview showing overview and cast"
            width={300}
            height={600}
            className="flex-shrink-0 rounded-xl shadow-md"
          />
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="mt-16 text-center">
        <h2 className="mb-4 text-3xl font-semibold">Support Simply Water</h2>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          {
            "This app is built by a single developer, so please consider a donation if you like what I'm making."
          }
        </p>
        <a
          href="/support"
          className="inline-block rounded-full bg-indigo-700 px-6 py-3 text-white transition hover:bg-indigo-600"
        >
          Support Me on Ko-fi
        </a>
      </section>
    </main>
  );
}
