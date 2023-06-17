export default function Themes(props) {
  const { theme, onTheme } = props;

  function handleTheme(event) {
    onTheme(event.target.value);
  }

  return (
    <>
      <label htmlFor="theme-select">theme:</label>
      <select
        required
        name="theme-select"
        id="theme-select"
        value={theme}
        onChange={handleTheme}
      >
        <option value="">--Please choose an option--</option>
        <option value="Poems"> 💐 Poems</option>
        <option value="Jokes"> 🤣 Jokes</option>
        <option value="For Kids"> 🧒 For Kids</option>
      </select>
    </>
  );
}
