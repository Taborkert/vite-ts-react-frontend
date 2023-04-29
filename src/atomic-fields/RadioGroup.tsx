import BaseField from "./BaseField";
import Radio from "@mui/material/Radio";
import { default as RadioGroupMui } from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

interface RadioGroupType {
  title: string;
  value: string;
  onChange: any;
  // If no value is provided, it will become a label
  radios: { value?: string; label: string }[];
}

export default function RadioGroup({
  title,
  value,
  onChange,
  radios,
}: RadioGroupType) {
  return (
    <BaseField title={title}>
      <FormControl>
        <RadioGroupMui
          name="controlled-radio-buttons-group"
          value={value}
          onChange={onChange}
        >
          {radios.map(({ value: subValue, label }) =>
            subValue == null ? (
              <FormLabel>{label}</FormLabel>
            ) : (
              <FormControlLabel
                value={subValue}
                control={<Radio />}
                label={label}
              />
            )
          )}
        </RadioGroupMui>
      </FormControl>
    </BaseField>
  );
}
