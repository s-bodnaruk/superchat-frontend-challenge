import { IRepoInfo } from "@/types";

class LocalStorageService {
  getLinksFromStorage() {
    const repoInfo: string | null = localStorage.getItem("repoInfo");
    if (repoInfo) {
      const parsedRepoInfo: IRepoInfo[] = JSON.parse(repoInfo);
      return parsedRepoInfo;
    }
  }

  setLinkToStorage(repoInfo: IRepoInfo[]) {
    localStorage.setItem("repoInfo", JSON.stringify(repoInfo));
  }
}

const instance = new LocalStorageService();

export default instance;
