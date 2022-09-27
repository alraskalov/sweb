import { API_CONFIG } from "./constants";

export const getVps = async () => {
  const vps = await fetch(API_CONFIG.url, {
    method: "POST",
    body: API_CONFIG.body,
  })
    .then((res) => res.json())
    .catch((e) => console.log(e));
  return vps;
};
