import React, { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import { NextPage } from "next";

import axios from "axios";
import Loader from "react-loader-spinner";

import CardHeader from "@/components/CardHeader";
import CardBody from "@/components/CardBody";
import CardBottom from "@/components/CardBottom";

import { useFetcher } from "@/hooks/useFetcher";

const initialRepoInfo = {
  name: "",
  owner: {
    login: "",
    avatar_url: "https://avatars.githubusercontent.com/u/3249653?v=4",
  },
  html_url: "https://github.com/duxianwei520/react",
  description: "Description",
  created_at: "",
  size: 0,
  stargazers_count: 0,
  language: "English",
  forks: 0,
  watchers: 0,
  subscribers_count: 0,
};

const Repo: NextPage = () => {
  const router = useRouter();
  const pageId: string | string[] | undefined = router.query.id;

  const { linkData, loading, error } = useFetcher(pageId);
  const [repoInfo, setRepoInfo] = useState(initialRepoInfo);

  useEffect(() => {
    const getRepo = async () => {
      if (linkData) {
        try {
          const result = await axios.get(linkData.link);
          if (result && result.data) {
            setRepoInfo(result.data);
          }

          return result;
        } catch (error) {}
      }
    };
    getRepo();
  }, [linkData]);

  if (!linkData && !loading) return <div>No data!</div>;

  if (error) return <div>Failed to load!</div>;

  return loading ? (
    <div className="loader-container">
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  ) : (
    <div
      className="wrapper"
      style={{ backgroundColor: linkData?.wrapperBackground }}
    >
      <div
        className="card"
        style={{ backgroundColor: linkData?.cardBackground }}
      >
        <CardHeader
          author={repoInfo.owner.login}
          avatar={repoInfo.owner.avatar_url}
          avatarStyle={linkData?.avatarStyle || "rounded"}
          date={repoInfo.created_at}
        />
        <CardBody
          repoName={repoInfo.name}
          repoUrl={repoInfo.html_url}
          desc={repoInfo.description}
          lang={repoInfo.language}
        />
        <CardBottom
          size={repoInfo.size}
          watchers={repoInfo.watchers}
          subscribers={repoInfo.subscribers_count}
          forks={repoInfo.forks}
          stars={repoInfo.stargazers_count}
          metricBackground={linkData?.metricBackground || "#ffffff"}
          metricFontSize={linkData?.metricFontSize || "medium"}
          metricBorderRadius={linkData?.metricBorderRadius || "rounded"}
          metricFontColor={linkData?.metricFontColor || "#000000"}
        />
      </div>
    </div>
  );
};

export default Repo;
