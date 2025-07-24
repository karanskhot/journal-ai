import JournalWriter from "./_components/JournalWriter";

const JournalWriterPage = () => {
  return (
    <div className="">
      <div className="h-10">
        <h1>Journal Content</h1>
      </div>
      <div className="flex h-[calc(100svh-10rem)] gap-2">
        <div className="w-full border md:w-1/2">l</div>
        <div className="hidden border md:flex md:w-1/2">r</div>
      </div>
      <div className="h-10 border"></div>
    </div>
  );
};
export default JournalWriterPage;
