import { StyledInput } from './Calendar.Styled';

const { forwardRef } = require('react');

const CustomInput = forwardRef(({ value, onClick }, ref) => {
  return (
    <StyledInput onClick={onClick} ref={ref}>
      {value}
    </StyledInput>
  );
});

export default CustomInput;