import React from "react";
import * as s from "./styled-footer";

const Footer: React.FC = () => {
    return (
        <s.Footer> 
        <s.Row>
        <svg
         width="25"
        height="25"
        viewBox="0 0 25 25" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">
<path 
d="M12.5 0C5.5971 0 0 5.74219 0 12.8181C0 18.4821 3.58259 23.2812 8.5491 24.9777C8.61877 24.9928 8.68987 25.0003 8.76116 25C9.22433 25 9.4029 24.6596 9.4029 24.3638C9.4029 24.0569 9.39174 23.2533 9.38616 22.1819C8.97268 22.2788 8.54968 22.3294 8.125 22.3326C5.71986 22.3326 5.17299 20.4632 5.17299 20.4632C4.60379 18.9844 3.78348 18.5882 3.78348 18.5882C2.69531 17.8237 3.7779 17.8013 3.86161 17.8013H3.86719C5.12277 17.9129 5.78125 19.1295 5.78125 19.1295C6.40625 20.2232 7.2433 20.5301 7.99107 20.5301C8.48551 20.5202 8.9723 20.4061 9.41964 20.1953C9.53125 19.3694 9.85491 18.8058 10.212 18.4821C7.43861 18.1585 4.52009 17.0591 4.52009 12.1484C4.52009 10.7478 5.00558 9.60379 5.80357 8.71093C5.67522 8.38727 5.24553 7.08147 5.92634 5.31808C6.01766 5.29623 6.11152 5.28684 6.20535 5.29018C6.65736 5.29018 7.67857 5.46317 9.36384 6.63504C11.4116 6.06211 13.5773 6.06211 15.625 6.63504C17.3103 5.46317 18.3315 5.29018 18.7835 5.29018C18.8773 5.28684 18.9712 5.29623 19.0625 5.31808C19.7433 7.08147 19.3136 8.38727 19.1853 8.71093C19.9832 9.60937 20.4687 10.7533 20.4687 12.1484C20.4687 17.0703 17.5446 18.1529 14.76 18.471C15.2065 18.8672 15.6083 19.6484 15.6083 20.8426C15.6083 22.5558 15.5915 23.9397 15.5915 24.3582C15.5915 24.6596 15.7645 25 16.2277 25C16.3026 25.0003 16.3775 24.9928 16.4509 24.9777C21.423 23.2812 25 18.4766 25 12.8181C25 5.74219 19.4029 0 12.5 0Z"
 fill="white"
 />
</svg>


<a href="https://github.com/alesson2903/lets-dev123" target="_blank">
    Repositório Github
</a>
</s.Row>
<s.Column>
    <p>
        "O único lugar onde sucesso vem antes do trabalho é no dicionário."
    </p>
    <p>Albert Einstein</p>
    </s.Column>
    </s.Footer>
    );
};

export default Footer;