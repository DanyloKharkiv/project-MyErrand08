import { useSelector } from "react-redux";
import { selectCards } from "../../redux/cards/selectors";
import { List, Typography } from "@mui/material";
import CardTask from "../CardTask/CardTask";
import { fetchCards } from "../../redux/cards/operations";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { selectRadio } from "../../redux/filter/filterSelectors";
import { CardList } from "../../components/CardTaskList/CardTaskList.styled";
export default function CardTaskList({ currentColumn }) {
  const dispatch = useDispatch();

  const filterValue = useSelector(selectRadio);

  useEffect(() => {
    dispatch(fetchCards(currentColumn));
  }, [dispatch, currentColumn]);

  const list = useSelector(selectCards);

  const listCardsColumn = list.filter(({ ownerColumn, priority }) =>
    filterValue
      ? ownerColumn === currentColumn && priority.includes(filterValue)
      : ownerColumn === currentColumn
  );

  return (
    <>
      {listCardsColumn.length === 0 ? (
        <Typography
          sx={{
            fontFamily: "Poppins",
            textAlign: "center",
            mt: "10px",
          }}
        >
          There are no cards in the column
        </Typography>
      ) : (
        <CardList>
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
        </CardList>
      )}
    </>
  );
}
