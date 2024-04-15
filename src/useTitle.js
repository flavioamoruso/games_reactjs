import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `GameStart - ${title}`;
  }, [title]);
};

export default useTitle;
