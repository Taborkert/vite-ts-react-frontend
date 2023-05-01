import BaseField from "../atomic-fields/BaseField";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useSessionStorage } from "usehooks-ts";
import inputChangeHandler from "../libs/inputChangeHandler";

export default function NameField(): JSX.Element {
  const [fullName, setFullName] = useSessionStorage("fullName", "");
  const [nickName, setNickName] = useSessionStorage("nickName", "");
  return (
    <BaseField title="Név">
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        spacing={2}
        useFlexGap
      >
        <TextField
          label="Teljes név"
          placeholder="Pl. Kovács Jánosné"
          value={fullName}
          onChange={inputChangeHandler(setFullName)}
          sx={{ width: "100%" }}
        />
        <TextField
          label="Megszólítás"
          placeholder="Pl. Marika"
          value={nickName}
          onChange={inputChangeHandler(setNickName)}
          sx={{ width: "100%" }}
        />
      </Stack>
    </BaseField>
  );
}
