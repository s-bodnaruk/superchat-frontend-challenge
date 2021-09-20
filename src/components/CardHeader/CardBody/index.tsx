import React, { FC } from "react";

interface ICardHeaderProps {
  repoName: string;
  repoUrl: string;
  desc: string;
  lang: string;
}

const CardBody: FC<ICardHeaderProps> = ({ repoName, repoUrl, desc, lang }) => {
  return (
    <div className="card-body">
      <div className="card-body-info">
        Repository name: <a href={repoUrl}>{repoName}</a>
      </div>
      <div className="card-body-info">Description: {desc}</div>
      <div className="card-body-info">Language: {lang}</div>
    </div>
  );
};

export default CardBody;
