import { ReactNode } from "react";
import * as s from "./styled.label";

interface LabelProps {
    children: ReactNode;
    htmlFor?: string;
}

const Label = ({ children, htmlFor }: LabelProps ) => {
    return <s.label htmlFor={htmlFor}>{children}</s.label>
};

export default Label;