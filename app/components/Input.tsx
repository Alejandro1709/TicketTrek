type InputProps = {
  id: string;
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
};

function Input({ id, label, name, type = 'text', placeholder }: InputProps) {
  return (
    <div className='flex flex-col justify-center items-center border p-2 rounded'>
      <label htmlFor={id} className='sr-only'>
        {label}
      </label>
      <input
        className='w-full outline-none'
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
