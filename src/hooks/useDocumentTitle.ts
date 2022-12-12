import { useEffect } from "react";

const defaultTitle = "아트앤가이드";
function useDocumentTitle(title: string, prevailOnUnmount = false) {
  useEffect(() => {
    document.title = defaultTitle;
    return () => {
      if (!prevailOnUnmount) {
        document.title = defaultTitle;
      }
    };
  }, []);

  useEffect(() => {
    document.title = title;
  }, [title]);
}

export default useDocumentTitle;
