import axios from "axios";

const TOKEN = "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";
const GIST_ID = "d5c059723a1986b55c9c563355a248a6";
const GIST_FILENAME = "db.json";

declare module 'axios' {
  interface AxiosRequestConfig {
    files?: any;
    username?: string;
  }
}

export const getData = async ()  => {
  const res = await axios.get(`https://api.github.com/gists/${GIST_ID}`).then(gist => gist.data.files[GIST_FILENAME].content);
  return res;
};
