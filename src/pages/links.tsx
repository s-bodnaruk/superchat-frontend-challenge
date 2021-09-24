import React, { useEffect, useState } from "react";
import { NextPage } from "next";

import LinkInfo from "@/components/LinkInfo";

import LocalStorageService from "@/services/localStorageService/";
import { IRepoInfo } from "@/types";

const LinksPage: NextPage = () => {
  const [linksInStorage, setLinksInStorage] = useState<IRepoInfo[] | []>([]);

  useEffect(() => {
    const linksInStorage = LocalStorageService.getLinksFromStorage();
    if (linksInStorage) {
      setLinksInStorage(linksInStorage);
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        marginTop: "50px",
        flexDirection: "column",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          padding: "15px",
          border: "1px solid blue",
          borderRadius: "5px",
          backgroundColor: "#99bbff",
        }}
      >
        {linksInStorage?.map((linkInfo) => (
          <LinkInfo key={linkInfo.generatedLink} linkInfo={linkInfo} />
        ))}
      </div>
    </div>
  );
};

export default LinksPage;
