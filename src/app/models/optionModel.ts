export class OptionModel{
    DisplayName: string;
    Value: string;

    constructor(displayNameValue: string){
        this.DisplayName = displayNameValue;
        this.Value = displayNameValue;
    }
}