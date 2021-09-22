import useSWR from "swr";

import { fetcher } from "../utils/fetcher";

import { ILink } from "@/types";

interface IFetcherResponse {
  linkData: ILink | undefined;
  error: Error | undefined;
  loading: boolean;
}

export const useFetcher = (
  url: string | string[] | undefined
): IFetcherResponse => {
  const { data, error } = useSWR<{ link: ILink }, Error>(
    `/api/link/${url}`,
    fetcher
  );

  return {
    linkData: data?.link,
    error,
    loading: !data,
  };
};
