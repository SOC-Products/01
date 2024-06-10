import PropTypes from 'prop-types';

function DynamicButton({ onClick, className = '', children, ...props }) {
  return (
    <button
      onClick={onClick}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
}

DynamicButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default DynamicButton;
