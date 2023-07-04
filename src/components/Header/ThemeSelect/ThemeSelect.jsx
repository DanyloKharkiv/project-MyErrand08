import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../../redux/theme/themeSlice";
import { updateTheme } from "../../../redux/auth/authOperation";
import { Container, Title, Wrapper, List, Item } from "./ThemeSelect.Styled";
import { IoIosArrowDown } from "react-icons/io";
import { selectGetTheme } from "../../../redux/auth/authSelector";

const themes = [
  { name: "Light", value: "light" },
  { name: "Dark", value: "dark" },
  { name: "Violet", value: "violet" },
];

export const ThemeSelect = () => {
  const dispatch = useDispatch();
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("dark");
  const localTheme = useSelector(selectGetTheme);

  useEffect(() => {
    document.body.classList.remove("light-theme", "dark-theme", "violet-theme");
    document.body.classList.add(selectedTheme + "-theme");
  }, [selectedTheme]);

  const handleThemeToggle = (theme) => {
    dispatch(setTheme(theme));
    dispatch(updateTheme(theme));
    setTimeout(() => {
      setSelectedTheme(theme);
    }, 10);
    setIsSelectOpen(false);
  };

  useEffect(() => {
    if (!localTheme) {
      return;
    }

    setSelectedTheme(localTheme);
  }, [localTheme]);

  return (
    <Container isOpen={isSelectOpen}>
      <Wrapper onClick={() => setIsSelectOpen(!isSelectOpen)}>
        <Title>Theme</Title>
        <IoIosArrowDown size={16} color="var(--themeTitle)" />
      </Wrapper>
      <List isOpen={isSelectOpen}>
        {themes.map(({ value, name }) => (
          <Item key={value} onClick={() => handleThemeToggle(value)}>
            {name}
          </Item>
        ))}
      </List>
    </Container>
  );
};
