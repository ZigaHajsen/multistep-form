import { FormEvent, useState } from 'react';
import { AccountForm, AddressForm, UseForm } from './components';
import { useMultistepForm } from './hooks';

interface FormData {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
}

const INITIAL_DATA: FormData = {
  firstName: '',
  lastName: '',
  age: '',
  street: '',
  city: '',
  state: '',
  zip: '',
  email: '',
  password: '',
};

export const App: React.FC = () => {
  const [data, setData] = useState(INITIAL_DATA);

  const updateFields = (fields: Partial<FormData>) => {
    setData((prevData) => {
      return { ...prevData, ...fields };
    });
  };

  const {
    currentStepIndex,
    steps,
    step,
    isFirstStep,
    isLastStep,
    back,
    next,
    goTo,
  } = useMultistepForm([
    <UseForm {...data} updateFields={updateFields} />,
    <AddressForm {...data} updateFields={updateFields} />,
    <AccountForm {...data} updateFields={updateFields} />,
  ]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isLastStep) {
      return next();
    }

    alert('Successful Account Creation');
    setData(INITIAL_DATA);
    goTo(0);
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
        maxWidth: 'max-content',
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
