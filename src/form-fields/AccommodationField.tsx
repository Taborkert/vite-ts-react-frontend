import BaseField from "../atomic-fields/BaseField";
import useSessionForm from "../hooks/useSessionForm";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const accommodationOptions = [
  { value: "tent", label: "Sátor" },
  { value: "caravan", label: "Lakókocsi" },
  { value: "woodenHouse", label: "Bérelt faház" },
];

const woodenHouses = [
  { value: "agape", label: "Agapé Pünkösdi Gyülekezet" },
  { value: "pecs", label: "Pécsi Gyülekezet" },
];

export default function AccommodationField() {
  const [firstTour, handleFirstTour] = useSessionForm("firstTour", false);
  const [secondTour, handleSecondTour] = useSessionForm("secondTour", false);
  const [accommodation, handleAccommodation] = useSessionForm(
    "accommodation",
    ""
  );
  const [woodenHouse, handleWoodenHouse] = useSessionForm("woodenHouse", "");
  return (
    <BaseField title="Turnus és Szállás">
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        spacing={2}
        useFlexGap
      >
        <FormControl sx={{ width: "100%" }}>
          <Typography variant="button" component="h2" gutterBottom align="left">
            Lehet több turnusba is jelentkezni!
          </Typography>

          <FormControlLabel
            control={
              <Checkbox checked={firstTour} onChange={handleFirstTour} />
            }
            label="1. turnus (július 15. - július 21.)"
          />
          <FormControlLabel
            control={
              <Checkbox checked={secondTour} onChange={handleSecondTour} />
            }
            label="2. turnus (július 22. - július 28.)"
          />
        </FormControl>
        <FormControl sx={{ width: "100%" }}>
          <Typography variant="h6" component="h3" gutterBottom align="left">
            Szállás
          </Typography>
          <RadioGroup value={accommodation} onChange={handleAccommodation}>
            {accommodationOptions.map(({ value: subValue, label }) => (
              <FormControlLabel
                key={subValue}
                value={subValue}
                control={<Radio />}
                label={label}
              />
            ))}
          </RadioGroup>
          {accommodation === "woodenHouse" && (
            <TextField
              label="Bérelt faház"
              select
              value={woodenHouse}
              onChange={handleWoodenHouse}
            >
              {woodenHouses.map(({ value, label }) => (
                <MenuItem key={value} value={value}>
                  {label}
                </MenuItem>
              ))}
            </TextField>
          )}
          <RadioGroup value={accommodation} onChange={handleAccommodation}>
            <FormControlLabel value="etc" control={<Radio />} label="Egyéb" />
          </RadioGroup>
        </FormControl>
      </Stack>
    </BaseField>
  );
}
