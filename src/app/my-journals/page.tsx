import { create_new_journal, get_all_journals } from "@/actions/journals";
import JournalEntries from "./JournalEntries";
import { format } from "date-fns";

const MyJournals = async () => {
  // await create_new_journal();
  const data = await get_all_journals();

  // return ;
  return (
    <div>
      {data.map((d) => (
        <div className="" key={d.id}>
          <p>======</p>
          <h1>{format(new Date(d.createdAt), "MM dd yyyy HH:mm:ss")}</h1>
          <h1>{new Date(d.createdAt).toLocaleTimeString()}</h1>
          <p>======</p>
        </div>
      ))}
      <JournalEntries data={data} />
    </div>
  );
};
export default MyJournals;
