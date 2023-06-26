import { Card, CardHeader, CardContent, CardActions } from "@mui/material";
import { Button, Box, Grid, Typography } from "@mui/material";

const line = (
  <Box
    sx={{
      width: "100%",
      height: "2px",
      mx: "2px",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    }}
  ></Box>
);
const bull = (color) => (
  <Box
    sx={{
      mx: "4px",
      borderRadius: "50%",
      transform: "scale(0.8)",
      backgroundColor: `${color}`,
    }}
  ></Box>
);
export default function CardTask({ card }) {
  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: 335,
        height: 154,
        backgroundColor: "var(--sidebarColor)",
        borderRadius: 2,
        borderLeftWidth: "4px",
        borderLeftColor: "tomato",
      }}
    >
      <CardContent>
        <Typography
          variant="h2"
          sx={{ color: "var(--whiteColor)", fontSize: 14, fontWeight: 700 }}
          gutterBottom
        >
          {card.title}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "var(--opacityWhite2)",
            fontSize: 12,
            fontWeight: "400",
          }}
          gutterBottom
        >
          {card.description}
        </Typography>
        {line}
        <Grid
          container
          spacing={2}
          sx={{
            color: "var(--opacityWhite2)",
            fontSize: 8,
          }}
        >
          <Grid item xs={6}>
            Priority
          </Grid>
          <Grid item xs={6}>
            Dedline
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              color: "var(--whiteColor)",
              fontSize: 10,
            }}
          >
            {"xs=4"}
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              color: "var(--whiteColor)",
              fontSize: 10,
            }}
          >
            {"xs=8"}
          </Grid>
        </Grid>
        <CardActions>
          <Button size="small">Icon1</Button>
          <Button size="small">Icon2</Button>
          <Button size="small">Icon3</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
