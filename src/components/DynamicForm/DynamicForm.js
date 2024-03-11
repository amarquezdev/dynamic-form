import { Container } from "react-bootstrap";
import { useState } from "react";
import './DynamicForm.css'

export default function DynamicForm() {
    const [step, setStep] = useState(1); 

    const showNextStep = () => {
        setStep(step + 1);
    };

    const showPreviewStep = () => {
        setStep(step - 1);
    };
    console.log(step);
    return( 
    <div className="dynamic-form mt-4 mb-5" id="dynamic-form">
        <Container className="text-center p-4">
            <div className="content-dynamic-form mt-5 p-4">
                <h1 className="title-dynamic-form">Fill the form</h1>
                <p className="steps-numbers">Step {step} of  YYY</p>
            
            <div className="actions">
                <div className="container-text">
                    <p className="before" onClick={showPreviewStep}>Back
                        Before Step
                    </p>
                </div>
                <div className="container-text">
                    <p className="next" onClick={showNextStep}>Back
                        Next Step
                    </p>
                </div>
            </div>
            </div>
        </Container>
    </div>);
}


