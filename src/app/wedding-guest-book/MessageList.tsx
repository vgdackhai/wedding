import { GuestMessage } from "./types";

interface Props {
  guestMessages: GuestMessage[];
}

export const MessageList = ({ guestMessages }: Props) => {
  return (
    <div className="bg-white border-2 border-[#f0394d] divide-y max-h-[665px] overflow-y-auto">
      {guestMessages.map((guestMessage,index) => {
        return (
          <div key={`message-${index}`} className="p-2 text-sm">
            <div className="font-semibold">{guestMessage.name}</div>
            <div className="p-2 pl-0">{guestMessage.message}</div>
          </div>
        );
      })}
    </div>
  );
};
