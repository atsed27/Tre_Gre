/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

function DropDownBox({ to, children }) {
  return <Link to={to}>{children}</Link>;
}

export default DropDownBox;
