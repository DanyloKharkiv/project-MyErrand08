import {
  HelpElement,
  IMG,
  Text,
  TextSpan,
  HelpBtn,
  HelpText,
} from "./CustomerSupport.Styled";
import img from "../../../images/flowerpot.png";
import sprite from "../../../images/sprite.svg";

export const CustomerSupport = () => {
  return (
    <HelpElement>
      <IMG src={img} alt="flowerpot" height="78" width="54" />
      <Text>
        If you need help with <TextSpan>TaskPro</TextSpan>, check out our
        support resources or reach out to our customer support team.
      </Text>
      <HelpBtn>
        <svg width="20" height="20" stroke="var(--contrastColor)" fill="var(--needHelpBg)">
          <use href={sprite + `#icon-help-circle`}></use>
        </svg>
        <HelpText>Need Help?</HelpText>
      </HelpBtn>
    </HelpElement>
  );
};
