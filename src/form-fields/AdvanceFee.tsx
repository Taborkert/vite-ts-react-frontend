import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

function AdvanceFee({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: any;
}) {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Táborelőleg: 9000 Ft
      </Typography>
      <FormControlLabel
        control={<Checkbox checked={checked} onChange={onChange} />}
        label="a helyi táborszervezőnek befizettem"
      />
    </Box>
  );
}

export default AdvanceFee;
