import LocalStorageService from "@/services/localStorageService/";

export const setToStorage = (
  userName: string,
  repoName: string,
  link: string
) => {
  const newRepoInfo = {
    userName,
    repoName,
    link,
  };

  const linksInStorage = LocalStorageService.getLinksFromStorage();

  if (linksInStorage) {
    const newLinksInStorage = [...linksInStorage, newRepoInfo];
    LocalStorageService.setLinkToStorage(newLinksInStorage);
  } else {
    LocalStorageService.setLinkToStorage([newRepoInfo]);
  }
};
