import { ChangeEventHandler } from "react";
import BaseField from "../atomic-fields/BaseField";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";
import { days, months } from "../libs/lists";
import useSessionForm from "../hooks/useSessionForm";

export default function BirthField(): JSX.Element {
  const [birthPlace, handleBirthPlace] = useSessionForm("birthPlace", "");
  const [birthYear, handleBirthYear] = useSessionForm("birthYear", "");
  const [birthMonth, handleBirthMonth] = useSessionForm("birthMonth", "");
  const [birthDay, handleBirthDay] = useSessionForm("birthDay", "");
  return (
    <BaseField title="Születési hely és idő">
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        spacing={2}
        useFlexGap
      >
        <TextField
          label="Születési hely"
          value={birthPlace}
          onChange={handleBirthPlace}
          sx={{ width: "100%" }}
        />
        <Stack
          direction="row"
          justifyContent="space-between"
          spacing={{ xs: 1, sm: 2 }}
          useFlexGap
          sx={{ width: "100%" }}
        >
          <TextField
            label="év"
            type="number"
            value={birthYear}
            onChange={handleBirthYear}
            sx={{ width: "100%" }}
          />
          <TextField
            label="hónap"
            select
            value={birthMonth}
            onChange={handleBirthMonth}
            sx={{ width: "100%" }}
          >
            {months.map(({ value, label }) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="nap"
            select
            value={birthDay}
            onChange={handleBirthDay}
            sx={{ width: "100%" }}
          >
            {days.map(({ value, label }) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </TextField>
        </Stack>
      </Stack>
    </BaseField>
  );
}
