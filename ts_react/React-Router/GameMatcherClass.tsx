import * as React from "react";
import { Component } from "react";
import {
  withRouter,
  RouteComponentProps,
  RouteChildrenProps,
} from "react-router-dom";
import NumberBaseballClass from "../NumberBaseball/NumberBaseballClass";
import LottoClass from "../Lotto/LottoClass";
import RSPClass from "../RSP/RSPClass";

interface Props extends RouteComponentProps<{ name: string }> {
  //if use 'withRouter' you must use RouteComponentProps
  hello?: "momo";
}
class GameMatcher extends Component<Props> {
  render() {
    if (!this.props.match) {
      return <div>no game match</div>;
    }
    let urlSearchParams = new URLSearchParams(
      this.props.location.search.slice(1) //delete ? at params
    );
    console.log(
      urlSearchParams.get("limit"),
      urlSearchParams.get("skip"),
      urlSearchParams.get("page")
    ); //10,5,3
    if (this.props.match.params.name === "number-baseball") {
      return <NumberBaseballClass />;
    } else if (this.props.match.params.name === "rock-scissors-paper") {
      return <RSPClass />;
    } else if (this.props.match.params.name === "lotto-generator") {
      return <LottoClass />;
    } else {
      return <div>일치하는 게임이 없습니다.</div>;
    }
  }
}

export default withRouter(GameMatcher);
// if GameMatcherClass not get route props(location, history, match) use withRouter
//<Route
// path="/game/:name"
// render={(props) => <GameMatcherClass {...props} hello="momo" />}
// />
