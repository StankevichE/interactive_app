import './App.css';
import {useState} from "react";
import mastercard from './images/mastercard.svg';
import mir from './images/mir.svg';

import * as React from 'react';
import Feedback from "./Feedback";
import BasicTextFields from "./Feedback";
import LinearWithValueLabel from "./Progress";


function App(props) {
    const [currentStep, setCurrentStep] = useState(1);

    const steps = [
        {
            id: 1,
            title: 'Step 1',
            type: 'textAnswers',
            content: 'First-content',
            options: [
                {id: 1, title: 'Option1', content: 'First-content'},
                {id: 2, title: 'Option2', content: 'Second-content'},
            ]
        },
        {
            id: 2,
            title: 'Step 2',
            type: 'image2',
            content: 'Second cart-content',
            options: [
                {id: 1, title: 'Option1', imagePath: mastercard},
                {id: 2, title: 'Option2', imagePath: mir},
            ]
        },
        {
            id: 3,
            title: 'Step 3',
            type: 'textAnswers',
            content: 'Third card content',
            options: [
                {id: 1, title: 'Option1', content: 'First-content'},
                {id: 2, title: 'Option2', content: 'Second-content'},
                {id: 3, title: 'Option3', content: 'Third-content'},
                {id: 4, title: 'Option4', content: 'Fourth-content'},
            ]
        },
        {
            id: 4,
            title: 'Step 4',
            type: 'textAnswers',
            content: 'Feedback',
            options: [
            ]
        },
    ]


    const optionClick = (option, stepId) => {
        console.log(option, stepId);
        setCurrentStep(stepId + 1)
    }

    return (

    <div>

            {steps.map((step: { ... }) => (
                <div key={step.id}>
                    {step.id === currentStep &&

                        <div>
                            <h3>{step.title}</h3>
                            <div>{step.content}</div>

                            {step.type === 'textAnswers' &&

                            <div>
                                {step.options.map((option: T) => (
                                    <div key={option.id} onClick={() => optionClick(option, step.id)}>
                                        <h4>{option.title}</h4>
                                        <div> {option.content} </div>
                                    </div>
                                    ))}
                            </div>
                            }

                            {step.type === 'image2' &&
                                <div>
                                    {step.options.map((option:{...})=>(
                                        <div key ={option.id} onClick={()=> optionClick(option, step.id)}>
                                       <h4>{option.title}</h4>
                                        <img src={option.imagePath} alt={option.title} width={170}/>
                                        </div>
                                    )) }
                        </div>
                            }

<LinearWithValueLabel/>

                        </div>
                    }
                </div>

            ))}

        </div>

    );
}


export default App;
