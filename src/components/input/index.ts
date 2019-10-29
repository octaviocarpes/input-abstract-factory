import { ReactNode } from 'react';

export class Input {
  private label: string;
  private type: string;
  private onChange: Function;
  private render: ReactNode;

  constructor(label: string, type:string, onChange: Function, render: Function) {
    this.label = label;
    this.type = type;
    this.onChange = onChange;
    this.render = render;
  };

  public getLabel(): string {
    return this.label;
  };

  public getType(): string {
    return this.type;
  };

  public getOnChange(): Function {
    return this.onChange();
  };

  public renderInput(): ReactNode {
    return this.render;
  };
};
