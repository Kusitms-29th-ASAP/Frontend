declare module 'react-signature-canvas' {
    import { Component, RefObject } from 'react';
  
    interface SignatureCanvasProps {
      canvasProps?: object;
      clearOnResize?: boolean;
      backgroundColor?: string;
      penColor?: string;
      velocityFilterWeight?: number;
      minWidth?: number;
      maxWidth?: number;
      dotSize?: number | (() => number);
      throttle?: number;
      onBegin?: () => void;
      onEnd?: (event: MouseEvent | TouchEvent) => void;
    }
  
    class SignatureCanvas extends Component<SignatureCanvasProps> {
      clear(): void;
      isEmpty(): boolean;
      fromDataURL(base64String: string): void;
      toDataURL(type?: string, encoderOptions?: any): string;
      fromData(pointGroups: object[]): void;
      toData(): object[];
      getCanvas(): HTMLCanvasElement;
      getTrimmedCanvas(): HTMLCanvasElement;
      off(): void;
      on(): void;
    }
  
    export default SignatureCanvas;
  }
  