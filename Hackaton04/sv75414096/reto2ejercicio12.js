function getStudentNames(estudiantes) {
    return estudiantes.map(estudiante => estudiante.name);
}

console.log(getStudentNames([
  { name: "Steve" },
  { name: "Mike" },
  { name: "John" }
])); // Output: ["Steve", "Mike", "John"]