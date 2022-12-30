import { FormEvent } from 'react';
import { AccountForm, AddressForm, UseForm } from './components';
import { useMultistepForm } from './hooks';

export const App: React.FC = () => {
  const { currentStepIndex, steps, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([<UseForm />, <AddressForm />, <AccountForm />]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    next();
  };

  return (
    <div
      style={{
        position: 'relative',
        background: 'white',
        border: '1px solid black',
        padding: '2rem',
        margin: '1rem',
        borderRadius: '.5rem',
        fontFamily: 'Arial',
      }}
    >
      <form onSubmit={onSubmit}>
        <div
          style={{
            position: 'absolute',
            top: '.5rem',
            right: '.5rem',
          }}
        >
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div
          style={{
            marginTop: '1rem',
            display: 'flex',
            gap: '.5rem',
            justifyContent: 'flex-end',
          }}
        >
          {!isFirstStep && (
            <button type='button' onClick={back}>
              Back
            </button>
          )}

          <button type='submit'>{isLastStep ? 'Finish' : 'Next'}</button>
        </div>
      </form>
    </div>
  );
};
