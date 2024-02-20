const e1 = () => {
  let name     = prompt("Ingrese un nombre"),
      lastname = prompt("Ingrese un apellido"),
      age      = parseInt(prompt("Ingrese una edad"));
  console.log(`Hola mi nombre es ${name} ${lastname} y mi edad es ${age}.`);
};

const e2 = () => {
  let num = parseInt(prompt("Ingrese una cantidad de números")),
      res = 0,
      n   = [];
  for (let i = 1; i <= num; i++) {
    let x = prompt(`Ingrese el número ${i}`);
    x = parseInt(x);
    n.push(x);
    res += x ** 3;
  }
  console.log(`sumOfCubes(${n}) ➞ ${res}`);
};

const e3 = () => {
  let x = prompt("Ingrese un valor"),
    res;
  if (!isNaN(parseFloat(x))) {
    res = "number";
  } else if (x === "true" || x === "false") {
    res = "boolean";
  } else if (x === "undefined" || x === "") {
    res = "undefined";
  } else if (x === "null") {
    res = "object";
  } else {
    res = typeof x;
  }
  console.log(`El tipo del valor de "${x}" es un ${res}.`);
};

const e4 = () => {
  const cant = parseInt(prompt("Ingrese una cantidad de números:")),
        nums = [];
  for (let i = 0; i < cant; i++) {
    const num = parseInt(prompt(`Ingrese el número ${i + 1}:`));
    nums.push(num);
  }
  const sumarNumeros = (...nums) => {
    return nums.reduce((acc, num) => acc + num, 0);
  };
  const res = sumarNumeros(...nums);
  console.log(`La suma de los ${cant} números es: ${res}`);
};

const e5 = () => {
  const cant = parseInt(prompt("Ingrese una cantidad de valores:")),
        vals = [];
  for (let i = 1; i < cant; i++) {
    const val = prompt(`Ingrese el valor ${i}:`);
    vals.push(val);
  }
  for (let i = 1; i < vals.length; i++) {
    const val = vals[i];
    if (!isNaN(parseInt(val))) {
      console.log(`El valor en la posición ${i} del array no es un string.`);
    }
  }
};

const e6 = () => {
  const cant = parseInt(prompt("Ingrese una cantidad de números:")),
        nums = [];
  for (let i = 1; i <= cant; i++) {
    const num = parseInt(prompt(`Ingrese el número ${i}:`));
    nums.push(num);
  }
  const men = Math.min(...nums),
        may = Math.max(...nums);
  console.log(`minMax([${nums}]) ➞ [${men}, ${may}]`);
};

const e7 = () => {
  const nums = [];
  for (let i = 1; i < 10; i++) {
    const num = parseInt(prompt(`Ingrese el número ${i}:`));
    nums.push(num);
  }
  const ac  = nums.slice(0, 3).join(""),
        fp  = nums.slice(3, 6).join(""),
        sp  = nums.slice(6).join(""),
        res = `(${ac}) ${fp}-${sp}`;
  console.log(`formatPhoneNumber([${nums}])  ➞ ${res}`);
};

const e8 = () => {
  const cantm   = parseInt(prompt("Ingrese una cantidad de matrices:")),
        mats    = [],
        allmats = [];
  for (let m = 1; m <= cantm; m++) {
    const cantv = parseInt(
        prompt(`Ingrese cuantos valores va a tener la matriz ${m}:`)
      ),
      nums = [];
    for (let i = 1; i <= cantv; i++) {
      const num = parseInt(prompt(`Ingrese el valor ${i} en la matriz ${m}:`));
      nums.push(num);
    }
    allmats.push(nums);
    const maxv = Math.max(...nums);
    mats.push(maxv);
  }
  const res1 = JSON.stringify(allmats).replace(/\),/g, "]").replace(/,/g, ", "),
        res  = JSON.stringify(mats).replace(/,/g, ", ");
  console.log(`findLargestNums(${res1}) ➞ ${res}`);
};

const e9 = () => {
  const wd   = prompt("Ingrese una palabra"),
        ix   = prompt("Ingrese un índice"),
        find = wd.indexOf(ix),
        lind = wd.lastIndexOf(ix);
  console.log(`charIndex("${wd}", "${ix}") ➞ [${find}, ${lind}]`);
};

const e10 = () => {
  const at  = "abcdefghijklmnopqrstuvwxyz",
        res = [],
        nl  = parseInt(prompt(`Ingrese la cantidad de valores a ingresar`)),
        obj = {};
  for (let j = 0; j < nl; j++) {
    const lt  = at[j],
          val = parseInt(prompt(`Ingrese el valor de la letra "${at[j]}"`));
    if (isNaN(val)) {
      console.log(
        `Valor no válido para la letra "${at[j]}" en el objeto ${nl}, este debe ser un número.`
      );
      return;
    }
    obj[lt] = val;
  }
  res.push(...Object.entries(obj));
  const x = res.map(([key, value]) => `${key}: ${value}`).join(", "),
        y = JSON.stringify(res).replace(/,/g, ", ");
  console.log(`toArray({ ${x} }) ➞ ${y}`);
};

const e11 = () => {
  const nobj = parseInt(prompt("Ingrese la cantidad de objetos a ingresar:")),
        objs = [];
  for (let i = 1; i <= nobj; i++) {
    const name = prompt(`Ingrese un nombre en el objeto ${i}`),
          age  = parseInt(prompt(`Ingrese una edad en el objeto ${i}`)),
          bud  = parseInt(prompt(`Ingrese un presupuesto en el objeto ${i}`)),
          obj  = { name, age, bud };
    objs.push(obj);
  }
  const person = objs.map((obj) => `{name: "${obj.name}", age: ${obj.age}, budget: ${obj.bud}}`).join(",\n  "),
        res    = objs.reduce((tot, obj) => tot + obj.bud, 0);
  console.log(`getBudgets([\n  ${person}\n]) ➞ ${res}`);
};

const e12 = () => {
  const getStudentNames = () => {
    const students         = [],
          numberOfStudents = parseInt(
      prompt("Ingrese la cantidad de estudiantes:")
    );
    for (let i = 1; i <= numberOfStudents; i++) {
      const studentName = prompt(`Ingrese el nombre del estudiante ${i}:`);
      students.push({ name: studentName });
    }
    return students.map((student) => student.name);
  };
  const studentNames = getStudentNames(),
        res          = studentNames.map((student) => `"${student}"`).join(", ");
  console.log(
    `getStudentNames([\n${studentNames
      .map((name) => `{ name: "${name}" }`)
      .join(",\n")}\n]) ➞ [${res}]`
  );
};

const e13 = () => {
  const obj = {
    likes: parseInt(prompt("Ingrese el valor para la clave 'likes':")),
    dislikes: parseInt(prompt("Ingrese el valor para la clave 'dislikes':")),
    followers: parseInt(prompt("Ingrese el valor para la clave 'followers':")),
  };
  const res = Object.entries(obj).map(([key, value]) => [`"${key}", ${value}`]);
  console.log(
    `objectToArray({\n  likes: ${obj.likes},\n  dislikes: ${
      obj.dislikes
    },\n  followers: ${obj.followers}\n}) ➞ [${res
      .map((pair) => `[${pair.map((item) => `${item}`).join(", ")}]`)
      .join(", ")}]`
  );
};

const e14 = () => {
  const n = parseInt(prompt("Ingrese una cantidad de números"));
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i * i;
  }
  console.log(`squaresSum(${n}) ➞ ${sum}`);
};

const e15 = () => {
  const cant = parseInt(prompt("Ingrese una cantidad de valores:")),
        nums = [],
        arr  = [];
  for (let i = 1; i <= cant; i++) {
    const num = parseInt(prompt(`Ingrese el número ${i}:`)),
          res = num * cant;
    nums.push(num);
    arr.push(res);
  }
  console.log(`multiplyByLength([${nums.join(", ")}]) ➞ [${arr.join(", ")}]`);
};

const e16 = () => {
  const n   = parseInt(prompt("Ingrese un número")),
        res = [];
  for (let i = n; i >= 0; i--) {
    res.push(i);
  }
  console.log(`countdown(${n}) ➞ [${res.join(", ")}]`);
};

const e17 = () => {
  const cant = parseInt(prompt("Ingrese una cantidad de valores:")),
        arr  = [];
  for (let i = 1; i <= cant; i++) {
    const num = parseInt(prompt(`Ingrese el número ${i}:`));
    arr.push(num);
  }
  const max = Math.max(...arr),
    min = Math.min(...arr),
    res = max - min;
  console.log(`diffMaxMin([${arr.join(", ")}]) ➞ ${res}`);
};

const e18 = () => {
  const cant = parseInt(prompt("Ingrese una cantidad de valores:")),
        arr  = [];
  for (let i = 1; i <= cant; i++) {
    const input = prompt(`Ingrese el valor ${i}:`);
    arr.push(isNaN(input) ? `"${input}"` : parseFloat(input));
  }
  const res = arr.filter((num) => typeof num === "number" && !isNaN(num));
  console.log(`filterList([${arr.join(", ")}]) ➞ [${res.join(", ")}]`);
};

const e19 = () => {
  const ele = parseInt(prompt("Ingrese un número:")),
        rep = parseInt(prompt("Ingrese n veces a repetir:")),
        res = Array.from({ length: rep }, () => ele);
  console.log(`repeat(${ele}, ${rep}) ➞ [${res.join(", ")}]`);
};

const e20 = () => {
  String.prototype.vreplace = function (v) {
    return this.replace(/[aeiou]/gi, v);
  };
  const or  = prompt("Ingrese una oración:"),
        v   = prompt("Ingrese la vocal que reemplazará todas las vocales:"),
        res = or.vreplace(v);
  console.log(`"${or}".vreplace("${v}") ➞ "${res}"`);
};

const e21 = () => {
  const or = prompt("Ingrese una oración:"),
    pal = or.split(" "),
    i =
      pal.indexOf("Nemo") !== -1
        ? pal.indexOf("Nemo") + 1
        : pal.indexOf("nemo") + 1;
  res =
    i !== 0
      ? `Encontré la palabra nemo en la posición ${i} de la oración!`
      : "No encontré a Nemo :(";
  console.log(`findNemo("${or}") ➞ "${res}"`);
};

const e22 = () => {
  const str  = prompt("Ingrese una palabra:"),
        pals = str.split(" "),
        cap  = pals.map((pal) => {
          const last = pal.slice(-1).toUpperCase(),
                resp = pal.slice(0, -1);
    return resp + last;
  });
  const res = cap.join(" ");
  console.log(`capLast("${str}") ➞ "${res}"`);
};
