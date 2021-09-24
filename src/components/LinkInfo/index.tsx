import React, { FC } from "react";

import { IRepoInfo } from "@/types";

import LinkInfoStyles from "@/components/LinkInfo/link.style.module.scss";

interface LinkInfoProps {
  linkInfo: IRepoInfo;
}

const LinkInfo: FC<LinkInfoProps> = ({ linkInfo }) => {
  return (
    <div className={LinkInfoStyles.linkWrapper}>
      <div>
        <div className={LinkInfoStyles.infoArea}>
          <span className={LinkInfoStyles.infoTitle}> Repo owner name:</span>
          <span className={LinkInfoStyles.infoBody}> {linkInfo.userName}</span>
        </div>
        <div className={LinkInfoStyles.infoArea}>
          <span className={LinkInfoStyles.infoTitle}>Repo name: </span>
          <span className={LinkInfoStyles.infoBody}>{linkInfo.repoName}</span>
        </div>
      </div>
      <div className={LinkInfoStyles.linkArea}>
        <span>
          <a className={LinkInfoStyles.linkBody} href={linkInfo.generatedLink}>
            Link
          </a>
        </span>
      </div>
    </div>
  );
};

export default LinkInfo;
