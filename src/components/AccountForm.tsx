import { FormWrapper } from './FormWrapper';

export const AccountForm: React.FC = () => {
  return (
    <FormWrapper title='Account Creation'>
      <label>Email</label>
      <input autoFocus required type='text' />
      <label>Password</label>
      <input required type='text' />
    </FormWrapper>
  );
};
