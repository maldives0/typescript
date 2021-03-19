import * as React from "react";
import { FC } from "react";
import {
  useLocation,
  useRouteMatch,
  useHistory,
  RouterProps,
} from "react-router";
import NumberBaseball from "../NumberBaseball/NumberBaseball";
import Lotto from "./Lotto";
import RSP from "../RSP/RSP";

const GameMatcher: FC<RouterProps> = () => {
  const location = useLocation();
  //   const history = useHistory();
  const match = useRouteMatch<{ name: string }>();

  if (!match) {
    return <div>no game match</div>;
  }
  let urlSearchParams = new URLSearchParams(
    location.search.slice(1) //delete ? at params
  );
  console.log(
    urlSearchParams.get("limit"),
    urlSearchParams.get("skip"),
    urlSearchParams.get("page")
  ); //10,5,3
  if (match.params.name === "number-baseball") {
    return <NumberBaseball />;
  } else if (match.params.name === "rock-scissors-paper") {
    return <RSP />;
  } else if (match.params.name === "lotto-generator") {
    return <Lotto />;
  } else {
    return <div>일치하는 게임이 없습니다.</div>;
  }
};

export default GameMatcher;
