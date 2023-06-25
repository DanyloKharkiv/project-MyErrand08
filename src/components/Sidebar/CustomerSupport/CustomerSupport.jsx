import { HelpElement, Text, HelpLink } from "./CustomerSupport.Styled";
export const CustomerSupport = () => {
  return (
    <HelpElement>
      <img src="" alt="" />
      <Text>
        If you need help with TaskPro, check out our support resources or reach
        out to our customer support team.
      </Text>
      <HelpLink>
        {/* <svg>       </svg> */}
        <a href="">Need Help</a>
      </HelpLink>
    </HelpElement>
  );
};
