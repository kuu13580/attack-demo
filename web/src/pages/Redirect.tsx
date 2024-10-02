import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const Redirect = () => {
  const [searchParams] = useSearchParams();
  const url = searchParams.get("to");
  useEffect(() => {
    if (url) {
      window.location.href = url;
    }
  }, [url]);
  return <></>;
};
