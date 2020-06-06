import { createGlobalStyle, GlobalStyleComponent } from "styled-components";

export const GlobalStyle: GlobalStyleComponent<{}, {}> = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    #root {
        height: 100vh;
        width: 100vw;
    }
`;
