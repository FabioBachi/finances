import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`  
    
body {
  margin: 0; line-height: normal;
}
:root {

/* Color */
--color-white: #fff;

/* Gap */
--gap-4: 4px;
--gap-10: 10px;

/* Figma Variables */

/* Spacing */
--fontWeightRegular: 400;
--fontWeightMedium: 500;
--borderRadius: 4px;
---fontSize-0875rem: 14px;
--2: 16px;
--3: 24px;

/* Color */
--yellow-600: #fdd835;
--text-secondary: rgba(0, 0, 0, 0.6);
--cyan-600: #00acc1;
--text-disabled: rgba(0, 0, 0, 0.38);
--text-primary: rgba(0, 0, 0, 0.87);
--primary-main: #1976d2;
--blueGrey-50: #eceff1;

/* Font */
--fontFamily: Roboto;

}
  
`;
