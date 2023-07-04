import { useSelector } from "react-redux";
import { selectCards } from "../../redux/cards/selectors";
import { List, Typography } from "@mui/material";
import CardTask from "../CardTask/CardTask";
import { fetchCards } from "../../redux/cards/operations";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function CardTaskList({ currentColumn }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCards(currentColumn));
  }, [dispatch, currentColumn]);

  // console.log("currentColumn:", currentColumn);

  const list = useSelector(selectCards);
  //console.log("List from selector", list);

  const listCardsColumn = list.filter(
    ({ ownerColumn }) => ownerColumn === currentColumn
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
