import PropTypes from 'prop-types';

function TextInput({ value, onChange, placeholder, type = 'text', className = '', style = {}, ...props }) {
  return (
    <input
      className={`w-full border-b-2 p-2 focus-visible:border-none ${className}`}
      style={{ background: 'none', ...style }}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...props}
    />
  );
}

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default TextInput;
