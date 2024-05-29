import { useNavigate } from "react-router-dom";

type Props = {
  replyBody: string;
  replyAuthor: string;
  replyCreatedDate: string;
  replyCreatedTime: string;
};
const Reply = (props: Props) => {
  const navigate = useNavigate();

  const handleUsernameNavigation = (username: string) => {
    navigate(`/user/${username}`);
  };
  return (
    <>
      <article>
        <p className="border rounded-lg p-4 border-bordercol bg-odark">
          {props.replyBody}
        </p>
        <div className="flex justify-end mt-2 text-xs ">
          <div className="flex gap-6">
            <span
              className=" cursor-pointer hover:underline"
              onClick={() => handleUsernameNavigation(props.replyAuthor)}
            >
              {props.replyAuthor}
            </span>
            <span className="text-txtdark">{props.replyCreatedDate}</span>
            <span className="text-txtdark">{props.replyCreatedTime}</span>
          </div>
        </div>
      </article>
    </>
  );
};
export default Reply;
