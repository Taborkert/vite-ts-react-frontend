import { ChangeEventHandler } from "react";
import BaseField from "../atomic-fields/BaseField";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";

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

interface BirthField {
  birthPlace: string;
  onBirthPlaceChange: ChangeEventHandler;
  birthYear: string;
  onBirthYearChange: ChangeEventHandler;
  birthMonth: string;
  onBirthMonthChange: ChangeEventHandler;
  birthDay: string;
  onBirthDayChange: ChangeEventHandler;
}

export default function BirthField({
  birthPlace,
  onBirthPlaceChange,
  birthYear,
  onBirthYearChange,
  birthMonth,
  onBirthMonthChange,
  birthDay,
  onBirthDayChange,
}: BirthField): JSX.Element {
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
          onChange={onBirthPlaceChange}
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
            onChange={onBirthYearChange}
            sx={{ width: "100%" }}
          />
          <TextField
            label="hónap"
            select
            value={birthMonth}
            onChange={onBirthMonthChange}
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
            onChange={onBirthDayChange}
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
