export default function Log({ data }) {
  return (
    <ol id='log'>
      {data.map((data) => (
        <li key={`${data.square.row}${data.square.col}`}>
          {data.player} selected {data.square.row} , {data.square.col}
        </li>
      ))}
    </ol>
  );
}
