import { useSelector } from "react-redux";
import { selectCards } from "../../redux/cards/selectors";
import { selectOwnerCards } from "../../redux/cards/selectors";
import { List, Typography } from "@mui/material";
import CardTask from "../CardTask/CardTask";
import { selectRadio } from "../../redux/filter/filterSelectors";

export default function CardTaskList() {
  const currentOwnerColumn = useSelector(selectOwnerCards);
  const filterValue = useSelector(selectRadio);

  console.log("CardTaskList");
  // console.log(currentOwnerColumn);

  const list = useSelector(selectCards);
  console.log("List from selector", list);

  const listCardsColumn = list.filter(
    ({ ownerColumn, priority }) => ownerColumn === currentOwnerColumn && priority.includes(filterValue)
  );

  return (
    <>
      {listCardsColumn.length === 0 ? (
        <Typography>There are no cards in the column</Typography>
      ) : (
        <List>
          {listCardsColumn.map(
            ({ _id: id, title, taskValue, priority, deadline }) => {
              return (
                <CardTask
                  key={id}
                  card={{ id, title, taskValue, priority, deadline }}
                />
              );
            }
          )}
        </List>
      )}
    </>
  );
}
