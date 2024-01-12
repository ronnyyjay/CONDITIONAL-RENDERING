function Rainy() {
  return <h1>Bring your umbrella!</h1>;
}

function RainyOrShine(props) {
  const isRainy = props.isRainy;
  if (isRainy) {
    return <Rainy />;
  }
  return <h1>No rain today!</h1>;
}

export default function App() {
  return (
    <div>
      <RainyOrShine isRainy={true} />
    </div>
  );
}
