import { Formik, ErrorMessage } from "formik";
import { Form, Nav, Input, Link, Fields, Button} from "./LoginForm.Styled";

export const LoginForm = () =>{
return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validateOnBlur
    >
      {({ isSubmitting, isValid, dirty }) => (
        <Form >
          <Nav>
          <Link>Registration</Link>
          <Link>Log In</Link>
          </Nav>
          <Fields>
          <label>
            <Input name="email" placeholder="Enter your email" type="email" />
            <ErrorMessage name="email" />
          </label>

          <label>
            <Input
             
              name="password"
              placeholder="Confirm a password"
              type="password"
            />
            <ErrorMessage name="password" />
          </label>
          </Fields>
          <Button type="submit" disabled={isSubmitting || !isValid || !dirty}>
            Log In Now
          </Button>
        </Form>
      )}
    </Formik>
)
};