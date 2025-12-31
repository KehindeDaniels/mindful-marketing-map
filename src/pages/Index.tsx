import { Helmet } from "react-helmet-async";
import PresentationDeck from "@/components/presentation/PresentationDeck";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Balance Coffee | Email & SMS Marketing Audit</title>
        <meta
          name="description"
          content="First-Month Growth Foundation - Building trust, habit, and repeat purchase before scaling."
        />
      </Helmet>
      <main className="w-full min-h-screen">
        <PresentationDeck />
      </main>
    </>
  );
};

export default Index;
