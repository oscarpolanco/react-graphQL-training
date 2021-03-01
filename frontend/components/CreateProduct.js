import { useState } from 'react';

export default function CreateProduct() {
  const [name, setName] = useState('Wes');

  return (
    <form>
      <label htmlFor="name">
        Name
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </label>
    </form>
  );
}
