import { Card, CardContent, CardActions } from "@mui/material";
import { Button, Box, Typography } from "@mui/material";
import sprite from "../../images/sprite.svg";
import EllipsisText from "react-ellipsis-text";
import { useState, useEffect } from "react";
import Modal from "../Modals/Modal";
import EditCard from "../Modals/EditCard/EditCard";
import { useDispatch } from "react-redux";
import { editCard, deleteCard } from "../../redux/cards/operations";
import dayjs from "dayjs";
import PopoverCard from "./PopoverCard";

const line = (color) => (
  <Box
    sx={{
      width: "100%",
      height: "1px",
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

const priorityColor = (priority) => {
  switch (priority) {
    case "low":
      return "var(--lowColor)";
    case "medium":
      return "var(--mediumColor)";
    case "high":
      return "var(--highColor)";
    case "without":
      return "var(--withoutColor)";
    default:
      return "var(--withoutColor)";
  }
};

export default function CardTask({ card }) {
  const { id, title, taskValue, priority, deadline } = card;
  const [showModal, setShowModal] = useState(false);
  const [showRemDedline, setShowRemDedline] = useState(false);

  const dispatch = useDispatch();

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleDeleteCard = () => dispatch(deleteCard(id));

  const onSaveEdit = (values) => {
    dispatch(editCard({ id, ...values }));
  };

  useEffect(() => {
    const today = dayjs().format("MM/DD/YYYY");
    const dedlineDay = `${dayjs(deadline).format("MM/DD/YYYY")}`;
    if (today === dedlineDay) setShowRemDedline(true);
  }, [deadline]);
  //--------------------------------------------------------------------
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  //--------------------------------------------------------------------
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
        borderLeftColor: priorityColor(priority),
      }}
    >
      <CardContent sx={{ fontFamily: "Poppins" }}>
        <Typography
          variant="h2"
          sx={{
            color: "var(--filterModalTitle)",
            fontSize: 14,
            fontWeight: 700,
            fontFamily: "inherit",
          }}
          gutterBottom
        >
          {title}
        </Typography>
        <Typography
          sx={{
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
            text={taskValue}
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
            gap: "30px",
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
                {bull(priorityColor(priority))}
                <Box
                  sx={{
                    color: "var(--filterModalText)",
                    fontSize: 10,
                    fontFamily: "inherit",
                    lineHeight: 1.5,
                  }}
                >
                  {priority === "without priority" ? "without" : priority}
                </Box>
              </Box>
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "var(--filterModalText)",
                  fontSize: 10,
                  fontFamily: "inherit",
                  lineHeight: 1.5,
                  mt: "4px",
                }}
              >
                {`${dayjs(deadline).format("MM/DD/YYYY")}`}
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
            {showRemDedline && (
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="var(--filterModalText)"
                style={{
                  boxShadow: " 0 0 6px 4px  #bedbb0",
                  borderRadius: "50%",
                  marginRight: "8px",
                }}
              >
                <use href={sprite + `#icon-Icon-bell`}></use>
              </svg>
            )}

            <CardActions sx={{ pt: 0, pb: 0, pr: 0 }}>
              <Button
                onClick={handleClick}
                sx={{ minWidth: "18px", borderRadius: "50%" }}
              >
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="var(--opacityWhite2)"
                >
                  <use href={sprite + `#icon-arrow-circle-broken-right`}></use>
                </svg>
              </Button>

              <PopoverCard anchorEl={anchorEl} onClose={handleClose} />

              <Button
                size="small"
                sx={{ minWidth: "18px", borderRadius: "50%" }}
                onClick={openModal}
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

              {showModal && (
                <Modal close={closeModal}>
                  <EditCard
                    title={title}
                    taskValue={taskValue}
                    onSaveEdit={onSaveEdit}
                    closeForm={closeModal}
                  />
                </Modal>
              )}
              <Button
                size="small"
                sx={{ minWidth: "18px", borderRadius: "50%" }}
                onClick={handleDeleteCard}
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
