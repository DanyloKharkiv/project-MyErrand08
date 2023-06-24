
import { Formik, ErrorMessage } from "formik";
import { Form, Nav, Input, Link, Fields, Button} from "./RegistrationForm.Styled";




export const  RegistrationForm= () =>{
   
    return (
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validateOnBlur
      >
        {({ isSubmitting, isValid, dirty }) => (
          <Form >
            <Nav>
            <Link>Registration</Link>
            <Link >Log In</Link>
            </Nav>
           < Fields >
            <label>
              <Input
                name="name"
                placeholder="Enter your name"
                autoComplete="off"
              />
              <ErrorMessage name="name" />
            </label>
  
            <label>
              <Input 
                name="email"
                placeholder="Enter your email"
                type="email"
                autoComplete="off"
              />
              <ErrorMessage name="email" />
            </label>
  
            <label>
              <Input 
                name="password"
                placeholder="Create a password"
                type="password"
                autoComplete="off"
              />
              <ErrorMessage name="password" />
            </label>
            </ Fields>
            <Button type="submit" disabled={isSubmitting || !isValid || !dirty}>
              Register Now
            </Button>
          </Form>
        )}
      </Formik>
    );
  };