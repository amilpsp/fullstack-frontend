type Props = {
  replyBody: string;
  replyAuthor: string;
  replyCreatedDate: string;
  replyCreatedTime: string;
};
const Reply = (props: Props) => {
  return (
    <>
      <article>
        <p className="border rounded-lg p-4 border-bordercol">
          {props.replyBody}
        </p>
        <div className="flex justify-end mt-2 text-xs ">
          <div className="flex gap-6">
            <span>{props.replyAuthor}</span>
            <span className="text-txtdark">{props.replyCreatedDate}</span>
            <span className="text-txtdark">{props.replyCreatedTime}</span>
          </div>
        </div>
      </article>
    </>
  );
};
export default Reply;
