import { ChangeEventHandler } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import BaseField from "../atomic-fields/BaseField";

interface AdvanceFeeField {
  checked: boolean;
  onChange: ChangeEventHandler;
}

export default function AdvanceFeeField({
  checked,
  onChange,
}: AdvanceFeeField) {
  return (
    <BaseField title="Táborelőleg: 9000 Ft">
      <FormControlLabel
        control={<Checkbox checked={checked} onChange={onChange} />}
        label="a helyi táborszervezőnek befizettem"
      />
    </BaseField>
  );
}
