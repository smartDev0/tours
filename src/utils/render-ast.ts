import unified from "unified";
import rehypeReact from "rehype-react";
import React from "react";

const createRendererAst = (components: any) => {
  return (ast: any): JSX.Element => {
    const processor = unified().use(rehypeReact, {
      createElement: React.createElement,
      components: components,
    });

    return processor.stringify(ast) as unknown as JSX.Element;
  };
};

export { createRendererAst };
