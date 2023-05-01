import { ChangeEventHandler } from "react";
import BaseField from "../atomic-fields/BaseField";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";
import { useSessionStorage } from "usehooks-ts";
import inputChangeHandler from "../libs/inputChangeHandler";

type Select = { value: string; label: string };

const months: Select[] = [
  { value: "01", label: "Január" },
  { value: "02", label: "Február" },
  { value: "03", label: "Március" },
  { value: "04", label: "Április" },
  { value: "05", label: "Május" },
  { value: "06", label: "Június" },
  { value: "07", label: "Július" },
  { value: "08", label: "Augusztus" },
  { value: "09", label: "Szeptember" },
  { value: "10", label: "Október" },
  { value: "11", label: "November" },
  { value: "12", label: "December" },
];

const days = Array.from({ length: 31 }, (v, k) => {
  const label = k + 1 + "";
  return {
    value: label.padStart(2, "0"),
    label,
  };
});

export default function BirthField(): JSX.Element {
  const [birthPlace, setBirthPlace] = useSessionStorage("birthPlace", "");
  const [birthYear, setBirthYear] = useSessionStorage("birthYear", "");
  const [birthMonth, setBirthMonth] = useSessionStorage("birthMonth", "");
  const [birthDay, setBirthDay] = useSessionStorage("birthDay", "");
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
          onChange={inputChangeHandler(setBirthPlace)}
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
            onChange={inputChangeHandler(setBirthYear)}
            sx={{ width: "100%" }}
          />
          <TextField
            label="hónap"
            select
            value={birthMonth}
            onChange={inputChangeHandler(setBirthMonth)}
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
            onChange={inputChangeHandler(setBirthDay)}
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
