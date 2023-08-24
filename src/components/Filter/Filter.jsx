import { Input, Label, Button, Wrapper } from './Filter.styled';
import { MdOutlineClear } from 'react-icons/md';

export const Filter = ({ filter, findContact, clearInput }) => {
  return (
    <Wrapper>
      <Label>
        Find contact by name
        <Input
          type="text"
          value={filter}
          onChange={findContact}
          placeholder={'search'}
        />
        <Button onClick={clearInput}>
          <MdOutlineClear size={21} color="#0D2146" />
        </Button>
      </Label>
    </Wrapper>
  );
};
