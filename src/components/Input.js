

function Input(props) {
    const type = props.type;
    const name = props.name;
    const label = props.label;
    const placeHolder = props.placeHolder;

    const handleKeyPress =  function () {
      
    }
    return (
      <div>
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm"></span>
          </div>
          <input
            type={type}
            name={name}            
            className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder={placeHolder}
          />
          
        </div>
      </div>
    )
  }

  export default Input;