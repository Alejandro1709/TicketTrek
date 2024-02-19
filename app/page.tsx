import List from "@/components/list";
import { getAllDestinations } from "./services/destinations";
import type IData from "./types/destination";

export default async function Home() {
  const res: IData[] = await getAllDestinations();

  console.log(res);

  return <List data={res} />;
}
