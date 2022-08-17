import { ChangeEventHandler } from "react";

export interface FormStepProps {
    currentStep: number;
    handleChange: ChangeEventHandler;
    values: any
}
