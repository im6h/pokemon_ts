//import lib, component
import React from "react";

// import styles scss
import "../styles/components/typePokemon.scss";

/**
 * interface Props to recive prop from parent
 */
interface Props {
  type: string;
}

/**
 *	function TypePokemon to render type pokemon.
 * @param Props
 */
function TypePokemon({ type }: Props) {
  return (
    <div className="typePokemon">
      <div className={`typePokemon__type-${type.toLowerCase()}`}>
        <span>{type}</span>
      </div>
    </div>
  );
}

export default TypePokemon;
