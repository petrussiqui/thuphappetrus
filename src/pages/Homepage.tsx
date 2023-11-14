import {
  About,
  CollectionBoxes,
  CollectionWatches,
  Introduction,
  Newsletters,
  Partners,
  ProcessInformation,
  TheApp,
} from "components/home";

export default function Homepage() {
  return (
    <div>
      <Introduction />
      <ProcessInformation />
      <About />
      <CollectionBoxes />
      <CollectionWatches />
      <TheApp />
      <Partners />
      <Newsletters />
    </div>
  );
}
