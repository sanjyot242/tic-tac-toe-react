import { useState } from 'react';

export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function onEditClickHandler() {
    setIsEditing((editing) => !editing);
    setPlayerName(playerName);
  }

  function onChangeHandler(event) {
    setPlayerName(event.target.value);
  }
  return (
    <li className={isActive ? 'active' : undefined}>
      <span className='player'>
        {isEditing ? (
          <input
            type='text'
            required
            value={playerName}
            onChange={onChangeHandler}></input>
        ) : (
          <span className='player-name'>{playerName}</span>
        )}

        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={onEditClickHandler}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </li>
  );
}
