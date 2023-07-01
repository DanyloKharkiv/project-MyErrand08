import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectCards } from "../../redux/cards/selectors";
import { List, Typography } from "@mui/material";
import CardTask from "../CardTask/CardTask";
import { fetchCards } from "../../redux/cards/operations";

export default function CardTaskList({ ownerColumn }) {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchCards(ownerColumn));
  // }, [dispatch]);

  const list = useSelector(selectCards);

  return (
    <>
      {list.length === 0 ? (
        <Typography>There are no cards in the column</Typography>
      ) : (
        <List>
          {list.map(({ _id: id, title, taskValue, priority, deadline }) => {
            return (
              <CardTask
                key={id}
                card={{ title, taskValue, priority, deadline }}
              />
            );
          })}
        </List>
      )}
    </>
  );
}
