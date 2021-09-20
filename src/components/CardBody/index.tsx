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
        <span className="info-title">Repository name: </span>
        <a href={repoUrl}>{repoName}</a>
      </div>
      <div className="card-body-info">
        <span className="info-title">Description: </span>
        {desc}
      </div>
      <div className="card-body-info">
        <span className="info-title">Language: </span>
        {lang}
      </div>
    </div>
  );
};

export default CardBody;
