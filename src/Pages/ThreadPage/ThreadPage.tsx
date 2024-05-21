import './ThreadPage.css';
import Reply from '../../Components/Reply/Reply';
import '/src/Components/Reply/Reply.tsx';
/* import { TextField } from "@mui/material"; /* type Props = {} */

const ThreadPage = (/* props: Props */) => {
  return (
    <div
      id="thread-page"
      className="flex flex-col align-stretch w-[50vw] gap-6"
    >
      <div>BREADCRUMS GO HERE</div>
      <section className="flex flex-col gap-2 ">
        <article id="post-body" className="border rounded-lg p-4">
          <div className="flex flex-row justify-between">
            <h2 className="text-xl">Thread title</h2>
            <div className="text-xs">
              posted on <span>forum</span>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eum
            sint ullam tempora fugit aut, non eos nisi laborum porro eveniet
            blanditiis dicta quaerat ipsa cumque deserunt? Dolore earum possimus
            laboriosam fuga similique perferendis suscipit quis aliquid saepe,
            aut voluptatum commodi debitis officiis minima aperiam quibusdam
            amet aspernatur recusandae blanditiis. Fuga, ab aliquid. Animi
            dignissimos veritatis labore libero cum molestiae accusamus sunt
            voluptate voluptas, reprehenderit voluptatum ex sit quo at porro,
            perspiciatis architecto eligendi aspernatur repudiandae tempora
            ipsam repellat repellendus ad? Tenetur animi nisi cum ducimus illo
            porro blanditiis libero, a nemo quae eveniet labore doloribus,
            reprehenderit repudiandae iste beatae.
          </p>
        </article>
        {/* end of post body */}
        <div id="post-info" className="flex flex-row justify-end gap-2">
          <span>author</span>
          <span>created</span>
        </div>
      </section>

      <input
        type="text"
        aria-label="add-reply"
        placeholder="Add a reply"
        className="text-white bg-black border rounded-lg p-2"
      ></input>

      <section className="flex flex-col gap-6">
        <div>
          <span className="text-xl">3 replies</span> <hr className="mb-4" />
        </div>
        <Reply />
        <Reply />
        <Reply />
      </section>
    </div>
  );
};

export default ThreadPage;
