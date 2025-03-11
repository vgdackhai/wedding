import { EventItem } from "./Item";

export default function Event() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <EventItem />
      <EventItem />
      <EventItem />
      <EventItem />
    </div>
  );
}
