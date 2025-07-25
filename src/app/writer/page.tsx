import JournalWriter from "./_components/JournalWriter";

interface PageProps {
  searchParams: Promise<{ id?: string }>;
}
const JournalWriterPage = async ({ searchParams }: PageProps) => {
  const { id } = await searchParams;
  console.log(id, "from page");
  return <JournalWriter />;
};
export default JournalWriterPage;
