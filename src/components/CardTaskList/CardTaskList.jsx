//import { selectSearchContacts } from "redux/contacts/selectors";
//import { useSelector } from "react-redux";
import { List, Typography } from "@mui/material";
import CardTask from "../CardTask/CardTask";

export default function CardTaskList() {
  //const list = useSelector(selectSearchContacts);
  const list = [
    {
      id: 1,
      title: "MyCard",
      description:
        "Generate engaging and persuasive content for various project deliverables, such as presentations, reports, website copy, social media posts, and other communication channel",
    },
    {
      id: 2,
      title: "MyCard2",
      description:
        "Generate engaging social media posts, and other communication channel",
    },
  ];
  return (
    <>
      {list.length === 0 ? (
        <Typography>There are no cards in the column</Typography>
      ) : (
        <List>
          {list.map((card) => {
            return <CardTask key={card.id} card={card} />;
          })}
        </List>
      )}
    </>
  );
}
