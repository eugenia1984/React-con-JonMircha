/* eslint-disable react/prop-types */
export const ElementoLista = (props) => {
  return (
    <li>
      <a
        href={props.el.web}
        alt={props.el.name}
        target="_blank"
        rel="noreferrer"
      >
        {props.el.name}
      </a>
    </li>
  );
};
