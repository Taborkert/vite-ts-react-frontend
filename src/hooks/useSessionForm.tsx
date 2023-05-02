import { useEffect } from "react";
import { useSessionStorage } from "usehooks-ts";
import inputChangeHandler from "../libs/inputChangeHandler";

export default function useSessionForm(key: string, value: any = null) {
  const [sessionKey, sessionValue] = useSessionStorage(key, value);
  useEffect(() => {
    // If the item is not in the storage, we add it by default
    if (sessionStorage.getItem(key) == null)
      sessionStorage.setItem(key, JSON.stringify(value));
  }, [key]);
  return [sessionKey, inputChangeHandler(sessionValue)];
}
