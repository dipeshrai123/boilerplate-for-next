import Head from "next/head";

export const Header = () => {
  return (
    <div className="header-container">
      <Head>
        <title>Boilerplate for next</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="header">HEADER</div>
    </div>
  );
};
