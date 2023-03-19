import React, { useEffect} from "react";

export const ErrorPage = () => {

  useEffect(() => {
    document.title = "Error page"
  }, []);
  return <div>ErrorPage</div>;
};
