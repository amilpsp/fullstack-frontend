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
				<p className="border rounded-lg p-4">{props.replyBody}</p>
				<div className="flex justify-end mt-2 text-xs ">
					<div className="flex gap-4">
						<span>{props.replyAuthor} </span>
						<span>{props.replyCreatedDate}</span>
						<span>{props.replyCreatedTime}</span>
					</div>
				</div>
			</article>
		</>
	);
};
export default Reply;
