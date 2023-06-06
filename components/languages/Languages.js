export default function Languages(props) {
  const { language, onLanguage } = props;

  function handleLanguage(event) {
    onLanguage(event.target.value);
  }

  return (
    <>
      <label htmlFor="lang-select">Language:</label>
      <select
        required
        name="lang-select"
        id="lang-select"
        value={language}
        onChange={handleLanguage}
      >
        <option value="">--Please choose an option--</option>
        <option value="English">English</option>
        <option value="French">French</option>
        <option value="German">German</option>
      </select>
    </>
  );
}
