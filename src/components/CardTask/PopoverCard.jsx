import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

export default function PopoverCard({ anchorEl, onClose }) {
  const open = Boolean(anchorEl);

  return (
    <div>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={onClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>This should be a list of columns</Typography>
      </Popover>
    </div>
  );
}
