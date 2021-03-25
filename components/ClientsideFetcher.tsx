import { useEffect, useState } from "react";

const ClientsideFetcher = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const getPage = async () => {
    let resp = await fetch("/api/get-page");
    const json = await resp.json();

    setLoading(false);

    setData(json);
  };

  useEffect(() => {
    getPage();
  }, []);

  const handleClickToggle = async () => {
    setLoading(true);
    await fetch("/api/toggle");

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <>
      <div>
        <h2>Fetch page clientside:</h2>
        <p>
          This component fetches the page data client-side, and returns the
          result.
        </p>
        {loading && <p>Loading...</p>}
        {!loading && data && (
          <>
            <pre>{JSON.stringify(data, null, 2)}</pre>

            <p>
              "notFound": true will trigger the getStaticProps to return.
              <br />
              Currently: "notFound" is set to{" "}
              <strong>{data.notFound ? "true" : "false"}</strong> and the
              current page should therefore return the status{" "}
              <strong>{data.notFound ? "404" : "200"}</strong>
            </p>
          </>
        )}

        {!loading && (
          <div>
            <p>
              Click the button below to change the current state. Then refresh
              the page to see if the cache is cleared accurately.
            </p>
            <button onClick={handleClickToggle}>
              Toggle page "notFound" in database
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ClientsideFetcher;
