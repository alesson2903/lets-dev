import React, { ReactNode } from 'react';
import * as s from "./styled-row";

interface Rowprops {
    children: ReactNode;
    style?: object;
}

const Row = ({ children, style }: Rowprops) => {
  return <s.Row style={style}>{children}</s.Row>;
};

export default Row;