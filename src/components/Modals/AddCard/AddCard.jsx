import { Formik } from "formik";
import * as Yup from "yup";
import { Typography } from "@mui/material";
import sprite from "../../../images/sprite.svg";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

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
  FieldRadio,
} from "./AddCard.Styled";

const controlProps = (item) => ({
  // checked: selectedValue === item,
  // onChange: handleChange,
  value: item,
  name: "color-radio-button-demo",
  inputProps: { "aria-label": item },
});

const CardSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  priority: Yup.boolean(),
  dedline: Yup.string(),
});

export default function AddCard() {
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
      <SpanClose>
        <svg width="18" height="18" stroke="var(--addBtnText)">
          <use href={sprite + `#icon-x-close`}></use>
        </svg>
      </SpanClose>
      <Formik
        initialValues={{
          title: "",
          description: "",
          priority: null,
          dedline: null,
        }}
        validationSchema={CardSchema}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm();
        }}
      >
        <Form>
          <Field
            type="text"
            name="name"
            placeholder="Tille"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
          <ErrorMessage name="name" component="div" />
          <Textarea
            name="description"
            component="textarea"
            placeholder="Desctiption"
          />
          <ErrorMessage name="description" component="div" />
          {/* <label>
            Label color
            <FieldRadio type="radio" name="picked" value="One" />
            <FieldRadio type="radio" name="picked" value="One" />
          </label> */}
          {/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
          <FormLabel id="demo-row-radio-buttons-group-label">
            Label color
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={
                <Radio
                  {...controlProps("e")}
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
              value="male"
              control={
                <Radio
                  {...controlProps("a")}
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
              value="other"
              control={
                <Radio
                  {...controlProps("b")}
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
              value="disabled"
              control={
                <Radio
                  {...controlProps("c")}
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

          {/* <Radio
            {...controlProps("e")}
            sx={{
              color: "tomato",
              padding: 0,
              backgroundColor: "tomato",
              "&.Mui-checked": {
                color: "green",
                backgroundColor: "tomato",
              },
              "&:hover": {
                color: "tomato",
                backgroundColor: "tomato",
              },
            }}
          /> */}
          {/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

          <label htmlFor="start">Start date:</label>

          <Field
            type="date"
            id="start"
            name="trip-start"
            value="2018-07-22"
            min="2018-01-01"
            max="2018-12-31"
          />

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
