const Heading = ({ children, className = '' }) => {
  return (
    <h3
      className={`border-transparent whitespace-nowrap px-1 border-b-2 font-medium text-sm focus:outline-none 
    text-sky-500 ${className}`}
    >
      {children}
    </h3>
  )
}

const Tab = ({ children, isActive, className = '', onClick = () => null }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`border-transparent whitespace-nowrap px-1 border-b-2 font-medium text-sm focus:outline-none 
    ${
      isActive
        ? 'text-sky-500'
        : 'text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-400'
    } ${className}`}
    >
      {children}
    </button>
  )
}

const ColumnHeader = {
  Heading,
  Tab,
}

export default ColumnHeader
