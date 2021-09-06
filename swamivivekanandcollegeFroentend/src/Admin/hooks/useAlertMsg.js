import { useContext } from "react";
import { MsgContext } from "../components/AlertMsg";

export default function useAlertMsg() {
  return useContext(MsgContext);
}
