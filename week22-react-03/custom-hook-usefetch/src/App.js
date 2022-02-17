import useFetch from './CustomHooks/useFetch';

function App() {
  const { data, isLoading, hasError } = useFetch('https://api.randomuser.me/');

  if (hasError) {
    return `Ooops! Something went wrong!...`;
  } else if (isLoading) {
    return `Loading...`;
  }

  return (
    <div className="App">
      <img
        style={{ margin: '20px' }}
        src={data.picture.medium}
        alt={`${data.name.title} ${data.name.first} ${data.name.last}`}
      />
      <ul>
        <li>
          Full Name: {data.name.title} {data.name.first} {data.name.last}
        </li>
        <li>Age: {data.dob.age}</li>
        <li>Cell Phone: {data.cell}</li>
        <li>Email: {data.email}</li>
      </ul>
    </div>
  );
}

export default App;
