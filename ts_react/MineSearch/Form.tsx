import * as React from "react";
import { useState, useCallback, useContext, memo } from "react";
import { TableContext } from "./MineSearch";
import { START_GAME } from "./action";

const Form = memo(() => {
  //원래  props값이 자주 변할 때 이를 캐싱하기 위해 memo를 사용함
  const [row, setRow] = useState(10);
  const [cell, setCell] = useState(10);
  const [mine, setMine] = useState(20);
  const { dispatch } = useContext(TableContext);

  const onChangeRow = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setRow(Number(e.target.value));
  }, []);

  const onChangeCell = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setCell(Number(e.target.value));
  }, []);

  const onChangeMine = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setMine(Number(e.target.value));
  }, []);

  const onClickBtn = useCallback(() => {
    dispatch({ type: START_GAME, row, cell, mine });
  }, [row, cell, mine]);

  return (
    <div>
      <input
        type="number"
        placeholder="세로"
        value={row}
        onChange={onChangeRow}
      />
      <input
        type="number"
        placeholder="가로"
        value={cell}
        onChange={onChangeCell}
      />
      <input
        type="number"
        placeholder="지뢰"
        value={mine}
        onChange={onChangeMine}
      />
      <button onClick={onClickBtn}>시작</button>
    </div>
  );
});

export default Form;
