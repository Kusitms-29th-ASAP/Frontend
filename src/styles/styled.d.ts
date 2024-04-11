//styled.d.ts
import "styled-components";
import { ColorsTypes, DevicesTypes, FontsTypes } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: ColorsTypes;
    fonts: FontsTypes;
  }
}
