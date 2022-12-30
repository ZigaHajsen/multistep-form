import { FormWrapper } from './FormWrapper';

export const AddressForm: React.FC = () => {
  return (
    <FormWrapper title='Address'>
      <label>Street</label>
      <input autoFocus required type='text' />
      <label>City</label>
      <input required type='text' />
      <label>State</label>
      <input required type='text' />
      <label>Zip</label>
      <input required type='text' />
    </FormWrapper>
  );
};
