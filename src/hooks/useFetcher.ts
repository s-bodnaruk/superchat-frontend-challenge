import useSWR from "swr";

import { fetcher } from "../utils/fetcher";

import { ILink } from "@/types";

export const useFetcher = () => {
  const { data, error } = useSWR<{ data: ILink }, Error>("/api/link", fetcher);
  return {
    links: data?.data,
    error,
    loading: !data,
  };
};
