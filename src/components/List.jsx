function List() {
  const students = ["zana", "xhenis", "hana"];

  return (
    <div>
      <h1>
        this is the list
      </h1>

      <ul>
        {students.map((student) => (
          <li key={student}>{student}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;