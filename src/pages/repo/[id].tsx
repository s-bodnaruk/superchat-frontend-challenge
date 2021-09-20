import React from "react";
import { useRouter } from "next/dist/client/router";

import CardHeader from "@/components/CardHeader";
import CardBody from "@/components/CardHeader/CardBody";
import CardBottom from "@/components/CardBottom";

import { useFetcher } from "@/hooks/useFetcher";

const mockRepo = {
  name: "react",
  owner: {
    login: "duxianwei520",
    avatar_url: "https://avatars.githubusercontent.com/u/3249653?v=4",
  },
  html_url: "https://github.com/duxianwei520/react",
  description: " React+webpack+redux+ant design+axios+less全家桶后台管理框架",
  created_at: "2016-12-02T13:08:43Z",
  size: 2868,
  stargazers_count: 4325,
  language: "JavaScript",
  forks: 1560,
  watchers: 4325,
  subscribers_count: 202,
};

const wrapperBackground = "";
const cardBackground = "";
const avatarStyle = "";

// const buttonBackground1 = "#c81e81";
// const buttonBackground2 = "#ffffff";
// const border = "0";

const buttonBackground1 = "";
const buttonBackground2 = "";
const border = "";

const fontSize = "";

const Repo = () => {
  const router = useRouter();
  const { pageId } = router.query;
  //   const { linkData, loading, error } = useFetcher();

  //   if (!linkData) return <div>No data!</div>;

  return false ? (
    <h1>LOADING...</h1>
  ) : (
    <div className="wrapper" style={{ backgroundColor: wrapperBackground }}>
      <div
        className="card"
        style={{ backgroundColor: cardBackground, fontSize: fontSize }}
      >
        <CardHeader
          author={mockRepo.owner.login}
          avatar={mockRepo.owner.avatar_url}
          avatarStyle={avatarStyle}
          date={mockRepo.created_at}
        />
        <CardBody
          repoName={mockRepo.name}
          repoUrl={mockRepo.html_url}
          desc={mockRepo.description}
          lang={mockRepo.language}
        />
        <CardBottom
          size={mockRepo.size}
          watchers={mockRepo.watchers}
          subscribers={mockRepo.subscribers_count}
          forks={mockRepo.forks}
          stars={mockRepo.stargazers_count}
          buttonBackground1={buttonBackground1}
          buttonBackground2={buttonBackground2}
          border={border}
        />
      </div>
    </div>
  );
};

export default Repo;
