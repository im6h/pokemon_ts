//import lib, component
import React from "react";

// import styles scss
import "./typePokemon.scss";

/**
 * interface Props to receive prop from parent
 */
interface Props {
  type: string;
}

/**
 * TODO:
 * function TypePokemon to render type pokemon.
 * @param type
 */
function TypePokemon({ type }: Props) {
  return (
    <div className="typePokemon">
      {/* block type pokemon */}
      <div className={`typePokemon__type-${type.toLowerCase()}`}>
        <span>{type}</span>
      </div>
      {/* ---- */}
    </div>
  );
}

export default TypePokemon;
