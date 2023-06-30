import { Formik } from "formik";
import * as Yup from "yup";
import { Typography } from "@mui/material";

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
  description: Yup.string(),
  priority: Yup.string(),
  dedline: Yup.string(),
});

export default function AddCard({ closeForm }) {
  const [selectedValue, setSelectedValue] = useState("without");
  const [dedlineValue, setDedlineValue] = useState(null);

  const handleChange = (event) => setSelectedValue(event.target.value);

  const onChangeDedline = (newValue) => setDedlineValue(newValue);

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
      <SpanClose onClick={closeForm}>
        <svg width="18" height="18" stroke="var(--addBtnText)">
          <use href={sprite + `#icon-x-close`}></use>
        </svg>
      </SpanClose>
      <Formik
        initialValues={{
          title: "",
          description: "",
          priority: "",
          dedline: "",
        }}
        validationSchema={CardSchema}
        onSubmit={(values, actions) => {
          values.priority = selectedValue;
          values.dedline = dedlineValue.$d;
          console.log(values);
          actions.resetForm();
        }}
      >
        <Form>
          <Field type="text" name="title" placeholder="Tille" />
          <ErrorMessage name="title" component="div" />
          <Textarea
            name="description"
            component="textarea"
            placeholder="Desctiption"
          />
          <ErrorMessage name="description" component="div" />
          {/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
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
              value="without"
              control={
                <Radio
                  {...controlProps("without")}
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
          {/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
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

          <Calendar value={dedlineValue} onChange={onChangeDedline} />

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
