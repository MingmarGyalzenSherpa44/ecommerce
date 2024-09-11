import { useNavigate } from "react-router-dom";
import { ILink } from "../interfaces/ILink";
const Link = (props: ILink) => {
    const navigate = useNavigate();
  const { url="/", children } = props;

  function handleOnClick(){
    navigate(url);
  }
  return <a onClick={handleOnClick} >{children}</a>;
};
export default Link;