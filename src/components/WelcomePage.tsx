const WelcomePage = ({ siteName = "Films Library" }: { siteName?: string }) => {
  return (
    <>
      <h1 style={{ fontSize: "72px" }}>Welcome on {siteName}!</h1>
    </>
  );
};

export default WelcomePage;
