import { Card, CardContent, CardActions } from "@mui/material";
import { Button, Box, Typography } from "@mui/material";
import sprite from "../../images/sprite.svg";
import EllipsisText from "react-ellipsis-text";

const line = (color) => (
  <Box
    sx={{
      width: "100%",
      height: "2px",
      mx: "2px",
      backgroundColor: `${color}`,
    }}
  ></Box>
);
const bull = (color) => (
  <Box
    sx={{
      width: "12px",
      height: "12px",
      borderRadius: "50%",
      transform: "scale(0.8)",
      backgroundColor: `${color}`,
    }}
  ></Box>
);
export default function CardTask({ card }) {
  console.log("CardTack");
  console.log(card.title);
  console.log(card.description);
  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: 335,
        height: 154,
        ml: "auto",
        mr: "auto",
        mb: "5px",
        backgroundColor: "var(--sidebarColor)",
        borderRadius: 2,
        borderLeftWidth: "4px",
        borderLeftColor: `${"var(--lowColor)"}`,
      }}
    >
      <CardContent sx={{ fontFamily: "Poppins" }}>
        <Typography
          variant="h2"
          sx={{
            color: "var(--whiteColor)",
            fontSize: 14,
            fontWeight: 700,
            fontFamily: "inherit",
          }}
          gutterBottom
        >
          {card.title}
        </Typography>
        <Typography
          sx={{
            // height: "38px",
            mt: "8px",
            mb: "14px",
            color: "var(--opacityWhite2)",
            fontSize: 12,
            fontWeight: "400",
            fontFamily: "Poppins",
          }}
          gutterBottom
        >
          <EllipsisText
            text={card.description}
            length={90}
            tooltip={{
              copyOnClick: true,
            }}
          />
        </Typography>

        {line("var(--opacityWhite2)")}

        <Box
          sx={{
            fontFamily: "Poppins",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            gap: "20px",
            mt: "10px",
          }}
        >
          <Typography
            sx={{
              color: "var(--opacityWhite2)",
              fontFamily: "inherit",
              fontSize: 8,
              lineHeight: 1.5,
            }}
          >
            Priority
          </Typography>
          <Typography
            sx={{
              color: "var(--opacityWhite2)",
              fontSize: 8,
              fontFamily: "inherit",
              lineHeight: 1.5,
            }}
          >
            Dedline
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Box
            sx={{
              fontFamily: "Poppins",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "14px",
            }}
          >
            {" "}
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between ",
                  alignItems: "center",
                  gap: "4px",
                  mt: "4px",
                }}
              >
                {bull("var(--lowColor)")}
                <Box
                  sx={{
                    color: "var(--whiteColor)",
                    fontSize: 10,
                    fontFamily: "inherit",
                    lineHeight: 1.5,
                  }}
                >
                  Low
                </Box>
              </Box>
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "var(--whiteColor)",
                  fontSize: 10,
                  fontFamily: "inherit",
                  lineHeight: 1.5,
                  mt: "4px",
                }}
              >
                12/05/2023
                {card.dedline}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "20px",
                height: "20px",
                mr: "8px",
                borderRadius: "50%",
                backgroundColor: "var(--gradientFonColor)",
                boxShadow: " 0 0 5px 3px  #bedbb0",
                textAlign: "center",
              }}
            >
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="var(--opacityWhite2)"
              >
                <use href={sprite + `#icon-Icon-bell`}></use>
              </svg>
            </Box>
            <CardActions sx={{ pt: 0, pb: 0, pr: 0 }}>
              <Button sx={{ minWidth: "18px", borderRadius: "50%" }}>
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="var(--opacityWhite2)"
                >
                  <use href={sprite + `#icon-arrow-circle-broken-right`}></use>
                </svg>
              </Button>
              <Button
                size="small"
                sx={{ minWidth: "18px", borderRadius: "50%" }}
              >
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="var(--opacityWhite2)"
                >
                  <use href={sprite + `#icon-Icon-pencil`}></use>
                </svg>
              </Button>
              <Button
                size="small"
                sx={{ minWidth: "18px", borderRadius: "50%" }}
              >
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="var(--opacityWhite2)"
                >
                  <use href={sprite + `#icon-trash-04`}></use>
                </svg>
              </Button>
            </CardActions>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
