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
          <li key={match.match}>
            <h4 className="mt-8 text-xl font-semibold text-gray-600">
              {formattedDate}
            </h4>
            <div className="text-gray-700 mt-2 flex justify-between border border-gray-200 rounded overflow-hidden px-4 py-2 bg-white">
              <span className="flex-1 font-semibold">{match.team1}</span>
              <span className="flex-1 text-center">{formattedTime}</span>
              <span className="flex-1 text-right font-semibold">
                {match.team2}
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
