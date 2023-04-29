import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export type MainServiceFieldValue =
  | "no-service"
  | "attendant"
  | "animator"
  | "full";

function MainServiceField({
  value,
  onChange,
}: {
  value: MainServiceFieldValue;
  onChange: any;
}) {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Milyen minőségben jössz a táborba?
      </Typography>
      <FormControl>
        <RadioGroup
          aria-labelledby="main-service"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={onChange}
        >
          <FormControlLabel
            value="no-service"
            control={<Radio />}
            label="Nyaraló felnőtt (szolgálat nélkül) - 35.000 Ft"
          />
          <FormLabel id="main-service">Milyen szolgálatot vállalsz?</FormLabel>
          <FormControlLabel
            value="attendant"
            control={<Radio />}
            label="Kísérő szolgálat - 30.000 Ft"
          />
          <FormControlLabel
            value="animator"
            control={<Radio />}
            label="Szabadidős animátor - 28.000 Ft"
          />
          <FormControlLabel
            value="full"
            control={<Radio />}
            label="Teljes idős munkatárs - 9.000 Ft"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}

export default MainServiceField;
