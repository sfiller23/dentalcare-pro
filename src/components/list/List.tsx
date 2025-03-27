import { Link } from "react-router-dom";
import { Direction } from "../../types/themeTypes";
import { StyledList } from "./List.styles";

type ListProps = {
  direction?: Direction;
  data: string[];
};

const List = (props: ListProps) => {
  const { direction = "horizontal", data } = props;

  return (
    <StyledList direction={direction}>
      {data.map((text) => (
        <li key={text}>
          <Link to="/">{text}</Link>
        </li>
      ))}
    </StyledList>
  );
};

export default List;
