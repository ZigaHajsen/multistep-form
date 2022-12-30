import { FormWrapper } from './FormWrapper';

interface AccountData {
  email: string;
  password: string;
}

type AccountFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void;
};

export const AccountForm: React.FC<AccountFormProps> = ({
  email,
  password,
  updateFields,
}) => {
  return (
    <FormWrapper title='Account Creation'>
      <label>Email</label>
      <input
        autoFocus
        required
        type='text'
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <label>Password</label>
      <input
        required
        type='text'
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
      />
    </FormWrapper>
  );
};
