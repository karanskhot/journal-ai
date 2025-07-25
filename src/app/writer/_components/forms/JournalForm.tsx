import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { JournalWriterValues } from "@/lib/validations";

import { useFormContext } from "react-hook-form";

interface IJournalFormTypes {
  toggleWriterPanel: () => void;
}
const JournalForm = ({ toggleWriterPanel }: IJournalFormTypes) => {
  const { register, getValues } = useFormContext<JournalWriterValues>();
  const createNewJournal = async (data: JournalWriterValues) => {
    // You can use 'data' here to create a journal
    console.log(data);
  };
  return (
    <div className="mx-auto max-w-xl p-2">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <h1 className="w-full text-center text-2xl font-semibold">
              Journal Info.
            </h1>
          </CardTitle>
          <CardDescription className="text-center">
            These fields are optional. You can edit it later
          </CardDescription>
        </CardHeader>
        <CardContent className="flex w-full flex-col space-y-4">
          <div className="flex space-x-4">
            <Label htmlFor="title">Name:</Label>
            <Input id="title" className="w-full" {...register("title")} />
          </div>
        </CardContent>

        <CardFooter className="flex flex-col items-end justify-end">
          <Button
            onClick={() => {
              const formData = getValues();
              createNewJournal({ ...formData });
              toggleWriterPanel();
            }}
          >
            Next
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
export default JournalForm;
