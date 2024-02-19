const e1 = () => {
  let name     = prompt("Ingrese un nombre"),
      lastname = prompt("Ingrese un apellido"),
      age      = parseInt(prompt("Ingrese una edad"));
  console.log(`Hola mi nombre es ${name} ${lastname} y mi edad ${age}.`);
};

const e2 = () => {
  let num = parseInt(prompt("Ingrese una cantidad de números")),
      res = 0;
  for (let i = 1; i <= num; i++) {
    let x    = prompt(`Ingrese el número ${i}`);
        x    = parseInt(x);
        res += x ** 3;
  }
  console.log("La suma de sus cubos es: ", res);
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
  console.log(res);
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
  for (let i = 1; i < cant; i++) {
    const num = parseInt(prompt(`Ingrese el número ${i}:`));
    nums.push(num);
  }
  const men = Math.min(...nums),
        may = Math.max(...nums);
  console.log(`[${men}, ${may}]`);
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
  console.log(res);
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
  console.log(`(${res1}) ➞ ${res}`);
};

const e9 = () => {
  const wd   = prompt("Ingrese una palabra"),
        ix   = prompt("Ingrese un índice"),
        find = wd.indexOf(ix),
        lind = wd.lastIndexOf(ix);
  console.log(`("${wd}", "${ix}") ➞ [${find}, ${lind}]`);
};

const e10 = () => {
  const no  = parseInt(prompt("Ingrese la cantidad de objetos a ingresar:"));
  const at  = "abcdefghijklmnopqrstuvwxyz",
        res = [];
  for (let n = 1; n <= no; n++) {
    const nl = parseInt(
        prompt(`Ingrese la cantidad de letras en el objeto ${n} a ingresar:`)
      ),
      obj = {};
    for (let j = 0; j < nl; j++) {
      const [lt, val] = [
        at[j],
        parseInt(prompt(`Ingrese el valor para la letra "${at[j]}"`)),
      ];
      if (isNaN(val)) {
        console.log(
          `Valor no válido para la letra "${at[j]}" en el objeto ${n}, este debe ser un número.`
        );
        return;
      }
      obj[lt] = val;
    }
    res.push(...Object.entries(obj));
  }
  const x = res.map(([key, value]) => `${key}: ${value}`).join(", "),
        y = JSON.stringify(res).replace(/,/g, ", ");
  console.log(`{${x}} ➞ ${y}`);
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
  const person = objs
      .map((obj) => `{"${obj.name}", ${obj.age}, ${obj.bud}}`)
      .join(", ")
      .replace("\n"),
    res = objs.reduce((tot, obj) => tot + obj.bud, 0);
  console.log(`${person} ➞ ${res}`);
};

const e12 = () => {
  const getStudentNames = () => {
    const students         = [];
    const numberOfStudents = parseInt(
      prompt("Ingrese la cantidad de estudiantes:")
    );
    for (let i = 1; i <= numberOfStudents; i++) {
      const studentName = prompt(`Ingrese el nombre del estudiante ${i}:`);
      students.push({ name: studentName });
    }
    students.forEach((student) => console.log(`{name: "${student.name}"}`));
    return students.map((student) => student.name).join(", ");
  };
  const studentNames = getStudentNames();
  console.log(`➞ [${studentNames}]`);
};

const e13 = () => {
  const obj  = {};
  const keys = ["likes", "dislikes", "followers"];
  const res  = [];

  for (const key of keys) {
    const value = parseInt(prompt(`Ingrese el valor para la clave "${key}":`));
    obj  [key]  = value;
    res.push([key, value]);
  }

  const output = JSON.stringify(res).replace(/,/g, ", ");
  console.log(`➞ ${output}`);
};

const e14 = () => {
  const n   = parseInt(prompt("Ingrese una cantidad de números"));
  let   sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i * i;
  }
  console.log(sum);
};

const e15 = () => {
  const cant = parseInt(prompt("Ingrese una cantidad de valores:"));
  const nums = [];
  const arr  = [];
  for (let i = 0; i < cant; i++) {
    const num = parseInt(prompt(`Ingrese el número ${i + 1}:`));
    const res = num * cant;
    nums.push(num);
    arr.push(res);
  }
  console.log(`[${nums.join(", ")}] ➞ [${arr.join(", ")}]`);
};

const e16 = () => {
  const n   = parseInt(prompt("Ingrese un número")),
        res = [];
  for (let i = n; i >= 0; i--) {
    res.push(i);
  }
  console.log(`[${res.join(", ")}]`);
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
  console.log(`[${arr.join(", ")}] ➞ ${res}`);
};

const e18 = () => {
  const cant = parseInt(prompt("Ingrese una cantidad de valores:")),
        arr  = [];
  for (let i = 1; i <= cant; i++) {
    const input = prompt(`Ingrese el valor ${i}:`);
    arr.push(isNaN(input) ? `"${input}"` : parseFloat(input));
  }
  const res = arr.filter((num) => typeof num === "number" && !isNaN(num));
  console.log(`[${arr.join(", ")}] ➞ [${res.join(", ")}]`);
};

const e19 = () => {
  const ele = parseInt(prompt("Ingrese un número:")),
        rep = parseInt(prompt("Ingrese n veces a repetir:")),
        res = Array.from({ length: rep }, () => ele);
  console.log(`(${ele}, ${rep}) ➞ [${res.join(", ")}]`);
};

const e20 = () => {
  String.prototype.vreplace = function (vowel) {
    return this.replace(/[aeiou]/gi, vowel);
  };
  const or  = prompt("Ingrese una oración:");
  const res = or.vreplace(
    prompt("Ingrese la vocal que reemplazará todas las vocales:")
  );
  console.log(`"${or}" ➞ "${res}"`);
};

const e21 = () => {
  const sent    = prompt("Ingrese una oración:"),
        words   = sent.split(" "),
        index   = words.indexOf("Nemo");
        res     = 
        index !== -1
      ? `Enconctre a nemo en orden de la palabra ${index + 1} de la oración!`
      :  "No encontre a nemo :(";
  console.log(res);
};

const e22 = () => {
  const str              = prompt("Ingrese una palabra:"),
        words            = str.split(" ");
  const capitalizedWords = words.map((word) => {
    const lastLetter = word.slice(-1).toUpperCase(),
          restOfWord = word.slice(0, -1);
    return restOfWord + lastLetter;
  });
  const res = capitalizedWords.join(" ");
  console.log(`"${str}" ➞ "${res}"`);
};
