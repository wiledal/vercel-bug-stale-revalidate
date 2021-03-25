import { GetStaticPaths, GetStaticProps } from "next";
import { memo } from "react";
import ClientsideFetcher from "../components/ClientsideFetcher";

const Index = ({ page }) => {
  return (
    <>
      <h1>This page returns status 200</h1>
      The title of the page is "{page.title}"
      <ClientsideFetcher />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async () => {
  // async import to avoid importing client-side
  const { getPage } = await import("../utils/page");
  const page = await getPage();

  return {
    props: {
      page,
    },
    notFound: page.notFound,
    revalidate: 1,
  };
};

export default memo(Index);
