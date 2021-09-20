import useSWR from "swr";

import { fetcher } from "../utils/fetcher";

import { ILink } from "@/types";

export const useFetcher = (url: string | string[] | undefined) => {
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
