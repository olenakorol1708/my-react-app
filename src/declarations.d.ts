declare module '*.svg' {
    import * as React from 'react';
    const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    export default ReactComponent;
    const content: string;
    export default content;
  }
  declare module "*.png" {
    const content: string;
    export default content;
  }
  
  declare module "*.jpg" {
    const content: string;
    export default content;
  }