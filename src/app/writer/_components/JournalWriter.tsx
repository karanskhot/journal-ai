const JournalWriter = () => {
  return (
    <div className="flex grow flex-col px-3">
      <h1 className="py-3 text-center text-2xl font-semibold">Journal</h1>
      <main className="relative grow">
        <div className="absolute top-0 bottom-0 flex w-full">
          <div className="w-full space-y-6 overflow-y-auto border p-3 md:block md:w-1/2">
            L
          </div>
          <div className="hidden w-full space-y-6 overflow-y-auto border p-3 md:block md:w-1/2">
            R
          </div>
        </div>
      </main>
      <div className="h-12 border">footer</div>
    </div>
  );
};
export default JournalWriter;
