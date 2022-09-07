import { format, parseISO } from "date-fns";
import { FunctionComponent } from "react";
import { MatchListProps } from "./types";

export const MatchList: FunctionComponent<MatchListProps> = ({ matches }) => {
  return (
    <ul>
      {matches.map((match) => {
        const parsedDate = parseISO(match.date);
        const formattedDate = format(parsedDate, "EEEE d MMMM y");
        const formattedTime = format(parsedDate, "HH:mm");
        return (
          <li>
            <h4 className="mt-8 text-xl font-semibold">{formattedDate}</h4>
            <div className="mt-2 flex justify-between border border-gray-200 rounded overflow-hidden shadow-md px-4 py-2 bg-white">
              <span className="flex-1 font-medium">{match.team1}</span>
              <span className="flex-1 text-center">{formattedTime}</span>
              <span className="flex-1 text-right font-medium">
                {match.team2}
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
