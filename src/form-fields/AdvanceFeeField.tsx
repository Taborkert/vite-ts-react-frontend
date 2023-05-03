import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import BaseField from "../atomic-fields/BaseField";
import FormHelperText from "@mui/material/FormHelperText";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ErrorIcon from "@mui/icons-material/Error";
import PaidIcon from "@mui/icons-material/Paid";
import HouseSidingIcon from "@mui/icons-material/HouseSiding";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";
import useSessionForm from "../hooks/useSessionForm";

export default function AdvanceFeeField(): JSX.Element {
  const [advanceFee, handleAdvanceFee] = useSessionForm("advanceFee", false);
  return (
    <BaseField title="Tábori költségek">
      <List>
        <ListItem>
          <ListItemIcon>
            <ErrorIcon />
          </ListItemIcon>
          <strong>Táborelőleg: 9000 Ft</strong>
        </ListItem>
        <ListItem sx={{ border: "3px dashed red" }}>
          <FormControlLabel
            control={
              <Checkbox checked={advanceFee} onChange={handleAdvanceFee} />
            }
            label="a helyi táborszervezőnek befizettem a táborelőleget"
            aria-describedby="advanced-fee-helper-text"
          />
          <FormHelperText id="advanced-fee-helper-text">
            (pipáld be, ha igen)
          </FormHelperText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <PaidIcon />
          </ListItemIcon>
          Tábordíj
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <HouseSidingIcon />
          </ListItemIcon>
          Faházbérleti díj (előre leegyeztetett, bérelt faház esetén)
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <DirectionsBusIcon />
          </ListItemIcon>
          Utazási költség
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ChecklistRtlIcon />
          </ListItemIcon>
          Egyéb
        </ListItem>
      </List>
    </BaseField>
  );
}
