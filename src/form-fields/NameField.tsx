import BaseField from "../atomic-fields/BaseField";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import useSessionForm from "../hooks/useSessionForm";

export default function NameField(): JSX.Element {
  const [fullName, handleFullName] = useSessionForm("fullName", "");
  const [nickName, handleNickName] = useSessionForm("nickName", "");
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
          onChange={handleFullName}
          sx={{ width: "100%" }}
        />
        <TextField
          label="Megszólítás"
          placeholder="Pl. Marika"
          value={nickName}
          onChange={handleNickName}
          sx={{ width: "100%" }}
        />
      </Stack>
    </BaseField>
  );
}
