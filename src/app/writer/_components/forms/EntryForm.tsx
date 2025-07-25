import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { JournalWriterValues } from "@/lib/validations";
import { useFormContext } from "react-hook-form";

interface IEntryFormTypes {
  toggleWriterPanel: () => void;
}
const EntryForm = ({ toggleWriterPanel }: IEntryFormTypes) => {
  const {} = useFormContext<JournalWriterValues>();
  return (
    <div>
      <Card className="mx-auto max-w-xl">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Button onClick={toggleWriterPanel}>Prev</Button>
            <h1 className="w-full text-center text-2xl font-semibold">
              Entries
            </h1>
          </CardTitle>
          <CardDescription className="">
            <p className="text-center">
              Add each moment from your day as an entry.
            </p>
            <ul>
              <li>asda</li>
              <li>asda</li>
              <li>asda</li>
              <li>asda</li>
            </ul>
          </CardDescription>
          <CardContent></CardContent>
        </CardHeader>
      </Card>
    </div>
  );
};
export default EntryForm;
