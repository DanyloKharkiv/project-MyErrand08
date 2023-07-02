import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectCards } from "../../redux/cards/selectors";
import { selectOwnerCards } from "../../redux/cards/selectors";
import { List, Typography } from "@mui/material";
import CardTask from "../CardTask/CardTask";
import { fetchCards } from "../../redux/cards/operations";

export default function CardTaskList() {
  const dispatch = useDispatch();
  const currentOwnerColumn = useSelector(selectOwnerCards);

  useEffect(() => {
    dispatch(fetchCards(currentOwnerColumn));
  }, [dispatch, currentOwnerColumn]);

  const list = useSelector(selectCards);

  const listCardsColumn = list.filter(
    ({ ownerColumn }) => ownerColumn === currentOwnerColumn
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
                  card={{ title, taskValue, priority, deadline }}
                />
              );
            }
          )}
        </List>
      )}
    </>
  );
}
