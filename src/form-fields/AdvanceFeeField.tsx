import { ChangeEventHandler } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import BaseField from "../atomic-fields/BaseField";

export default function AdvanceFeeField({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: ChangeEventHandler;
}) {
  return (
    <BaseField title="Táborelőleg: 9000 Ft">
      <FormControlLabel
        control={<Checkbox checked={checked} onChange={onChange} />}
        label="a helyi táborszervezőnek befizettem"
      />
    </BaseField>
  );
}
