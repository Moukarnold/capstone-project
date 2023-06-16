export default function Difficulty(props) {
  const { difficulty, onDifficulty } = props;

  function handleDifficulty(event) {
    onDifficulty(event.target.value);
  }
  return (
    <>
      <label htmlFor="lang-select">Difficulty:</label>
      <select
        required
        name="difficulty-select"
        id="difficulty-select"
        value={difficulty}
        onChange={handleDifficulty}
      >
        <option value="">--Please choose an option--</option>
        <option value="Basic">🧍🏼‍♂️ Basic</option>
        <option value="Intermediate"> 🚶🏼‍♂️Intermediate</option>
        <option value="Advanced"> 🏃🏼‍♂️ Advanced</option>
      </select>
    </>
  );
}
