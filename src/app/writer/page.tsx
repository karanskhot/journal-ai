import JournalWriter from "./_components/JournalWriter";

interface PageProps {
  searchParams: Promise<{ id?: string }>;
}
const JournalWriterPage = async ({ searchParams }: PageProps) => {
  return <JournalWriter />;
};
export default JournalWriterPage;
