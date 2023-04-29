import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import BaseField from "../atomic-fields/BaseField";

export default function AdvanceFee({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: any;
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
