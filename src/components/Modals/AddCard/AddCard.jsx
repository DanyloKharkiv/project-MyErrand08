import { Formik } from "formik";
import * as Yup from "yup";
import { Typography } from "@mui/material";
import dayjs from "dayjs";

import sprite from "../../../images/sprite.svg";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

import Calendar from "../Calendar/Calendar";

import { useState } from "react";

import {
  Wrapper,
  Form,
  Field,
  ErrorMessage,
  Button,
  Textarea,
  Span,
  Div,
  SpanClose,
} from "./AddCard.Styled";

const CardSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  taskValue: Yup.string(),
  priority: Yup.string(),
  deadline: Yup.string(),
});

export default function AddCard({ onSave, close }) {
  const [selectedValue, setSelectedValue] = useState("without");
  const [deadlineValue, setDeadlineValue] = useState(null);

  const handleChange = (event) => setSelectedValue(event.target.value);

  const onChangeDedline = (newValue) => setDeadlineValue(newValue);

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "priority",
    inputProps: { "aria-label": item },
  });

  return (
    <Wrapper>
      <Typography
        sx={{
          marginBottom: "24px",
          textAlign: "start",
          fontWeight: "500",
          fontSize: "18px",
          color: "var(--contrastColor)",
          fontFamily: "var(--poppinsFont)",
        }}
      >
        Add card
      </Typography>
      <SpanClose onClick={close}>
        <svg width="18" height="18" stroke="var(--addBtnText)">
          <use href={sprite + `#icon-x-close`}></use>
        </svg>
      </SpanClose>
      <Formik
        initialValues={{
          title: "",
          taskValue: "",
          priority: "",
          deadline: "",
        }}
        validationSchema={CardSchema}
        onSubmit={(values, actions) => {
          values.priority = selectedValue;
          values.deadline = `${dayjs(deadlineValue).format("MM-DD-YYYY")}`;
          onSave(values);
          actions.resetForm();
          close();
        }}
      >
        <Form>
          <Field type="text" name="title" placeholder="Tille" />
          <ErrorMessage name="title" component="div" />
          <Textarea
            name="taskValue"
            component="textarea"
            placeholder="Desctiption"
          />
          <ErrorMessage name="taskValue" component="div" />

          <FormLabel id="radio-buttons-group-label">
            {" "}
            <Typography
              sx={{
                marginBottom: "4px",
                textAlign: "start",
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: 1.5,
                color: "var(--opacityWhite2)",
                fontFamily: "var(--poppinsFont)",
              }}
            >
              Label color
            </Typography>
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="row-radio-buttons-group-label"
            name="priority-color-radio-button"
            sx={{ marginLeft: "10px", marginBottom: "14px" }}
          >
            <FormControlLabel
              value="low"
              control={
                <Radio
                  {...controlProps("low")}
                  sx={{
                    color: "var(--lowColor)",
                    padding: 0,
                    backgroundColor: "var(--lowColor)",
                    "&.Mui-checked": {
                      color: "var(--themeBgColor)",
                      backgroundColor: "var(--lowColor)",
                    },
                    "&:hover": {
                      backgroundColor: "var(--lowColor)",
                    },
                  }}
                />
              }
            />
            <FormControlLabel
              value="medium"
              control={
                <Radio
                  {...controlProps("medium")}
                  sx={{
                    color: "var(--mediumColor)",
                    padding: 0,
                    backgroundColor: "var(--mediumColor)",
                    "&.Mui-checked": {
                      color: "var(--themeBgColor)",
                      backgroundColor: "var(--mediumColor)",
                    },
                    "&:hover": {
                      backgroundColor: "var(--mediumColor)",
                    },
                  }}
                />
              }
            />
            <FormControlLabel
              value="high"
              control={
                <Radio
                  {...controlProps("high")}
                  sx={{
                    color: "var(--highColor)",
                    padding: 0,
                    backgroundColor: "var(--highColor)",
                    "&.Mui-checked": {
                      color: "var(--themeBgColor)",
                      backgroundColor: "var(--highColor)",
                    },
                    "&:hover": {
                      backgroundColor: "var(--highColor)",
                    },
                  }}
                />
              }
            />

            <FormControlLabel
              value="without priority"
              control={
                <Radio
                  {...controlProps("without priority")}
                  sx={{
                    color: "var(--withoutColor)",
                    padding: 0,
                    backgroundColor: "var(--withoutColor)",
                    "&.Mui-checked": {
                      color: "var(--themeBgColor)",
                      backgroundColor: "var(--withoutColor)",
                    },
                    "&:hover": {
                      backgroundColor: "var(--withoutColor)",
                    },
                  }}
                />
              }
            />
          </RadioGroup>

          <Typography
            sx={{
              marginBottom: "4px",
              textAlign: "start",
              fontWeight: "400",
              fontSize: "12px",
              lineHeight: 1.5,
              color: "var(--opacityWhite2)",
              fontFamily: "var(--poppinsFont)",
            }}
          >
            Deadline
          </Typography>

          <Calendar value={deadlineValue} onChange={onChangeDedline} />

          <Button type="submit">
            <Div>
              <Span>
                <svg width="20" height="20" stroke="var(--addBtnText)">
                  <use href={sprite + `#icon-plus`}></use>
                </svg>
              </Span>
              Add
            </Div>
          </Button>
        </Form>
      </Formik>
    </Wrapper>
  );
}
