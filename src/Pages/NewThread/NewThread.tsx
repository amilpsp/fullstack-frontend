import Button from "@mui/joy/Button";
import ButtonGroup from "@mui/joy/ButtonGroup";

const NewThread = () => {
	return (
		<>
			<form
				id="newPostForm"
				className="flex flex-col w-[50vw] p-4 border rounded-md border-bordercol text-txtbright gap-3 "
			>
				<input
					type="text"
					name="Title"
					id="Title"
					placeholder="Title"
					className="bg-bgcol border rounded-md border-bordercol text-txtbright w-[50%] text-xl p-2"
				/>
				<textarea
					name="content"
					id="content"
					rows={6}
					placeholder="Write about something..."
					className="bg-bgcol border rounded-md border-bordercol text-txtbright p-2"
				></textarea>
				<section className="flex justify-between gap-2">
					<div className="flex gap-2">
						<span className="">select a topic:</span>
						<ButtonGroup aria-label="outlined primary button group">
							<Button>Games</Button>
							<Button>Movies</Button>
							<Button>Animals</Button>
						</ButtonGroup>
					</div>
					<input
						type="submit"
						value="submit"
						className="bg-bgcol border rounded-md border-bordercol text-txtbright p-2"
					/>
				</section>
			</form>
		</>
	);
};
export default NewThread;
