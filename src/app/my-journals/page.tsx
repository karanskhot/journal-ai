import { Button } from "@/components/ui/button";
import Link from "next/link";

const MyJournals = () => {
  return (
    <div className="">
      <Button asChild>
        <Link href={"/writer"}>Write-Journal</Link>
      </Button>
    </div>
  );
};
export default MyJournals;
