import { JournalValues } from "@/lib/validations";
import { useFormContext } from "react-hook-form";

const JournalPreview = () => {
  const { watch } = useFormContext<JournalValues>();
  const formPreviewValues = watch();
  return (
    <div>
      <pre>{JSON.stringify(formPreviewValues, null, 2)}</pre>
    </div>
  );
};
export default JournalPreview;
