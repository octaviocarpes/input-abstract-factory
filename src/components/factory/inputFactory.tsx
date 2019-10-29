import React, { ReactNode } from 'react';

export class InputFactory {

  private renderInput(label: string, type: string, onChange: Function): ReactNode {
    return (
      <div>
        <label>{label}</label>
        <input type={type} onChange={(text: any) => onChange(text)}/>
      </div>
    );
  };

  public createNumberInput(): ReactNode {
    const onChangeInput = (text: string) => { console.log(text) };
    const label: string = 'I am a Number Input';
    const type: string = 'number';
    return this.renderInput(label, type, onChangeInput);
  };

  public createTextInput(): ReactNode {
    const onChangeInput = (text: string) => { console.log(text) };
    const label: string = 'I am a text Input';
    const type: string = 'Text';
    return this.renderInput(label, type, onChangeInput);
  };
};
