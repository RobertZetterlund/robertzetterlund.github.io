// styled.d.ts
import "styled-components";
interface IPalette {
  main: string;
  contrastText: string;
}
declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    accent: string;
    gxc: string;
  }
}
