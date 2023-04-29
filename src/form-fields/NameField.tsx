import { ChangeEventHandler } from "react";
import BaseField from "../atomic-fields/BaseField";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function NameField({
  fullName,
  onFullNameChange,
  nickName,
  onNickNameChange,
}: {
  fullName: string;
  onFullNameChange: ChangeEventHandler;
  nickName: string;
  onNickNameChange: ChangeEventHandler;
}) {
  return (
    <BaseField title="Név">
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        spacing={{ xs: 1, sm: 2 }}
        useFlexGap
      >
        <TextField
          label="Teljes név"
          placeholder="Pl. Kovács Jánosné"
          value={fullName}
          onChange={onFullNameChange}
          sx={{ width: "100%" }}
        />
        <TextField
          label="Megszólítás"
          placeholder="Pl. Marika"
          value={nickName}
          onChange={onNickNameChange}
          sx={{ width: "100%" }}
        />
      </Stack>
    </BaseField>
  );
}
