import { useSearchParams } from "react-router-dom";

export default function useSearchParam(param: string) {
  const [searchParams] = useSearchParams();
  return [searchParams.get(param)];
}
