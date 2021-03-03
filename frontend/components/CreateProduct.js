import useForm from '../lib/useForm';

export default function CreateProduct() {
  const { inputs, handleChange, resetFrom, clearForm } = useForm({
    name: 'Nice shoes',
    price: 34234,
    description: 'These are the best shoes!',
  });
  console.log(inputs);

  return (
    <form>
      <label htmlFor="name">
        Name
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={inputs.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="price">
        Price
        <input
          type="number"
          id="price"
          name="price"
          placeholder="Price"
          value={inputs.price}
          onChange={handleChange}
        />
      </label>
      <button type="button" onClick={clearForm}>
        Clear form
      </button>
      <button type="button" onClick={resetFrom}>
        Reset form
      </button>
    </form>
  );
}
