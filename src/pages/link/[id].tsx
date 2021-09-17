import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/dist/client/router";

import axios from "axios";

import { ILink } from "@/types";

interface LinkProps {
  link: ILink;
}

const Link: NextPage<LinkProps> = ({ link }) => {
  const router = useRouter();
  const { pageId } = router.query;

  if (!link) {
    return <h1>NOTHING FOUND</h1>;
  }

  return <div>{pageId}</div>;
};

export default Link;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    data: { link },
  } = await axios.get(`http://localhost:3000/api/link/${ctx.params!.pageId}`);
  return { props: { link } };
};
