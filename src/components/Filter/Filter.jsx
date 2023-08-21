import { Input, Label } from './Filter.styled';

export const Filter = ({ filter, findContact, clearInput }) => {
  return (
    <>
      <Label>
        Find contact by name
        <Input
          type="text"
          value={filter}
          onChange={findContact}
          placeholder={'search'}
        />
      </Label>
    </>
  );
};
