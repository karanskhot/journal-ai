import { find_create_unique_journal } from "@/actions/journals";
import { Button } from "@/components/ui/button";

const MyJournals = async () => {
  return (
    <div className="">
      <div className="">
        <h1>Today Journal : ${new Date().toLocaleTimeString()}</h1>
      </div>
      <form action={find_create_unique_journal}>
        <Button type="submit">Create Journal</Button>
      </form>
    </div>
  );
};
export default MyJournals;
