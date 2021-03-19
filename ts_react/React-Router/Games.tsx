import * as React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import GameMatcherClass from "./GameMatcherClass";
import GameMatcher from "./GameMatcher";

const Games: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/game/number-baseball?limit=10&skip=5&page=3">
          NumberBaseball
        </Link>
        &nbsp;
        <Link to="/game/rock-scissors-paper">RSP</Link>
        &nbsp;
        <Link to="/game/lotto-generator">Lotto</Link>
        &nbsp;
        <Link to="/game/index">GameMatcherClass</Link>
      </div>

      <div>
        <Switch>
          <Route exact path="/" component={GameMatcher} />
          <Route path="/game/:name" component={GameMatcher} />
          {/* <Route
            path="/game/:name"
            render={(props) => <GameMatcher {...props} />}
          /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Games;
