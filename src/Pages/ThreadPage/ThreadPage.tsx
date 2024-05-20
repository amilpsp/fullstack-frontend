import './ThreadPage.css'
/* import { TextField } from "@mui/material"; /* type Props = {} */

const ThreadPage = (/* props: Props */) => {
  return (
    <div id="page" className='flex flex-col gap-6'>
        <div className='jusify-self-center'>BREADCRUMS GO HERE</div>
      <section className="align-stretch w-[50vw]">
        <article id="post-body" className="border rounded-lg p-2 ">
          <div className="flex flex-row justify-between gap-2">
            <h2 className="text-xl">Thread title</h2>{" "}
            <div className='text-xs'>
              posted on <span>forum</span>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            asperiores porro magnam eligendi, quod ea expedita fugit delectus
            aliquid alias enim consequuntur. Quibusdam, a nisi! Reprehenderit
            totam atque maxime obcaecati ex eligendi accusantium rerum facilis,
            nam quis ipsum deserunt? Fugit omnis quisquam sequi earum veniam,
            deserunt officiis quasi impedit, ipsa commodi praesentium assumenda
            obcaecati recusandae? Officia reiciendis voluptates explicabo
            assumenda?
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
        aria-label="Add-reply"
        placeholder="Add a reply"
        className='text-white bg-black border rounded-lg p-2'
      ></input>

      <div className=''><span>3 replies</span> <hr/></div>
    </div>

  );
};

export default ThreadPage
