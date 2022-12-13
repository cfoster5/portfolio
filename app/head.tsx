export default function Head() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Corey Foster | Portfolio</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="title" content="Corey Foster | Portfolio" />
      <meta
        name="description"
        content="A web and app developer based in Evansville, IN"
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Corey Foster | Portfolio" />
      <meta
        property="og:description"
        content="A web and app developer based in Evansville, IN"
      />
      <meta property="og:image" content="/site.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content="Corey Foster | Portfolio" />
      <meta
        property="twitter:description"
        content="A web and app developer based in Evansville, IN"
      />
      <meta property="twitter:image" content="/site.png" />
    </>
  );
}
