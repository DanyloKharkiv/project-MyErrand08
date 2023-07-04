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
import HelpModal from "../../Modals/NeedHelp/NeedHelpModal";
import { useRef } from "react";

export const CustomerSupport = () => {
  const helpModalRef = useRef(null);

  const openHelpModal = () => {
    if (helpModalRef.current) {
      helpModalRef.current.openModal()
    }
  }
  return (
    <HelpElement>
      <IMG src={img} alt="flowerpot" height="78" width="54" />
      <Text>
        If you need help with <TextSpan>TaskPro</TextSpan>, check out our
        support resources or reach out to our customer support team.
      </Text>
      <HelpBtn onClick={openHelpModal}>
        <svg width="20" height="20" stroke="var(--contrastColor)" fill="none">
          <use href={sprite + `#icon-help-circle`}></use>
        </svg>
        <HelpText>Need Help?</HelpText>
      </HelpBtn>
      <HelpModal ref={helpModalRef} />
    </HelpElement>
  );
};
