import * as React from "react";
import { useCallback, memo, FC, Dispatch } from "react";
import { clickCell } from "./TicTacToe";
interface Props {
  rowIndex: number;
  cellIndex: number;
  dispatch: Dispatch<any>;
  cellData: string;
  children: string;
}
const Td: FC<Props> = ({ rowIndex, cellIndex, dispatch, cellData }) => {
  console.log("td rendered");

  const onClickTd = useCallback(() => {
    console.log(rowIndex, cellIndex);
    if (cellData) {
      return;
    }
    dispatch(clickCell(rowIndex, cellIndex));
  }, [cellData]);

  return <td onClick={onClickTd}>{cellData}</td>;
};

export default memo(Td);
