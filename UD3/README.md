# 📚 Apuntes DWEC - DOM, eventos, validación y manipulación dinámica

## Índice

1. [Eventos y formularios](#eventos-y-formularios)  
2. [Manipulación de listas y selects](#manipulación-de-listas-y-selects)  
3. [Manipulación de tablas dinámicas](#manipulación-de-tablas-dinámicas)  
4. [Manejo avanzado del DOM](#manejo-avanzado-del-dom)  
5. [Validación de formularios](#validación-de-formularios)  
6. [Cookies](#cookies)  
7. [Ejercicios frecuentes y consejos](#ejercicios-frecuentes-y-consejos-para-el-examen)  
8. [Ejemplos completos de ejercicios](#ejemplos-completos-de-ejercicios) 
---

## Eventos y formularios

### Radiobutton y Select

Para detectar qué opción está seleccionada en un conjunto de radio botones:

```js
// Obtenemos el radio seleccionado con name='actor'
const seleccionado = document.querySelector('input[name="actor"]:checked');
console.log(seleccionado.value); // Muestra valor seleccionado
Para select simple y múltiple:

js
Copiar código
const select = document.getElementById('provincias');
console.log(select.value); // Para select simple

// Para select múltiple:
const opcionesSeleccionadas = Array.from(select.selectedOptions);
opcionesSeleccionadas.forEach(option => {
  console.log(option.value);
});
Añadir eventos con addEventListener
Asociar evento a botón para mostrar por consola datos del formulario:

js
Copiar código
document.getElementById('btnMostrar').addEventListener('click', () => {
  // Código que lee y muestra datos del formulario
});
Añadir o eliminar manejadores dinámicamente
js
Copiar código
const boton = document.getElementById('btnToggle');
const checkbox = document.getElementById('miCheckbox');

function toggleCheckbox() {
  checkbox.checked = !checkbox.checked;
}

boton.addEventListener('click', toggleCheckbox);
// Para eliminar el manejador:
boton.removeEventListener('click', toggleCheckbox);
Eventos del ratón y teclado
Cambiar estilos con mouseenter y mouseleave:

js
Copiar código
const cuadro = document.getElementById('cuadro');

cuadro.addEventListener('mouseenter', e => {
  cuadro.classList.add('amarillo');
  mostrarInfoEvento(e);
});

cuadro.addEventListener('mouseleave', e => {
  cuadro.classList.remove('amarillo');
  limpiarInfo();
});
Mostrar tecla pulsada:

js
Copiar código
input.addEventListener('keydown', e => {
  console.log(`Tecla pulsada: ${e.key}`);
});
Impedir entrada de dígitos:

js
Copiar código
input.addEventListener('keypress', e => {
  if (/\d/.test(e.key)) {
    e.preventDefault(); // Bloquea la tecla si es un dígito
  }
});
Impedir copiar texto:

js
Copiar código
input.addEventListener('copy', e => {
  e.preventDefault();
  alert('Copiar no permitido');
});
Manipulación de listas y selects
Añadir elementos a lista múltiple y moverlos entre listas
Añadir solo si no existe:

js
Copiar código
function agregarProvincia(lista, provincia) {
  for (let option of lista.options) {
    if (option.value === provincia) {
      alert("Ya existe esta provincia");
      return;
    }
  }
  let newOption = new Option(provincia, provincia);
  lista.add(newOption);
}
Mover seleccionados con flechas:

js
Copiar código
function moverSeleccionados(origen, destino) {
  const seleccionados = Array.from(origen.selectedOptions);
  seleccionados.forEach(opt => {
    if (![...destino.options].some(o => o.value === opt.value)) {
      destino.add(opt);
    }
  });
}
Creación dinámica de tablas y elementos
Crear filas y celdas con DOM:

js
Copiar código
let tr = document.createElement('tr');
let td = document.createElement('td');
td.textContent = 'Contenido';
tr.appendChild(td);
tabla.appendChild(tr);
Reordenar listas o tablas (ejemplo para listas):

js

// Transformar lista en array para ordenar
let items = Array.from(lista.children);
items.sort((a,b) => a.textContent.localeCompare(b.textContent));
items.forEach(i => lista.appendChild(i)); // Reordenar
Manipulación de tablas dinámicas
Añadir filas con numeración y borrar filas
Añadir fila y asignar número automático:

js

function addRow(texto) {
  const tr = document.createElement('tr');
  const tdNum = document.createElement('td');
  tdNum.textContent = tbody.children.length + 1;
  const tdTexto = document.createElement('td');
  tdTexto.textContent = texto;
  const tdBorrar = document.createElement('td');
  const btn = document.createElement('button');
  btn.textContent = 'X';

  btn.addEventListener('click', () => {
    tr.remove();
    actualizarNumeracion();
  });

  tdBorrar.appendChild(btn);
  tr.appendChild(tdNum);
  tr.appendChild(tdTexto);
  tr.appendChild(tdBorrar);
  tbody.appendChild(tr);
}

function actualizarNumeracion() {
  Array.from(tbody.children).forEach((fila, idx) => {
    fila.children[0].textContent = idx + 1;
  });
}
Selección de filas, colorear y moverlas
Seleccionar fila y aplicar clase para resaltarla:

js
Copiar código
tabla.addEventListener('click', e => {
  if (e.target.tagName === 'TD') {
    const fila = e.target.parentElement;
    tabla.querySelectorAll('tr').forEach(r => r.classList.remove('seleccionada'));
    fila.classList.add('seleccionada');
  }
});
Mover fila hacia arriba:

js
Copiar código
function subirFila() {
  const seleccionada = document.querySelector('.seleccionada');
  if (seleccionada && seleccionada.previousElementSibling) {
    seleccionada.parentElement.insertBefore(seleccionada, seleccionada.previousElementSibling);
  }
}
Manejo avanzado del DOM
Recorrer nodos y mostrar propiedades
Propiedades importantes:

Propiedad	Descripción
nodeType	Tipo de nodo (1=elemento, 3=text, 8=comentario)
nodeName	Nombre del nodo (ej: DIV, UL, LI)
nodeValue	Valor del nodo (normalmente null para elementos)
constructor.name	Clase del nodo DOM (ej: HTMLDivElement)
innerHTML	Contenido HTML (NO usar para este ejercicio)

Recorrido sin usar innerHTML (simplificado):

js
Copiar código
function mostrarNodo(nodo) {
  console.log('---------------------');
  console.log(`NodeType = ${nodo.nodeType}`);
  console.log(`Nombre de la clase = ${nodo.constructor.name}`);
  console.log(`NodeName = ${nodo.nodeName}`);
  console.log(`NodeValue = ${nodo.nodeValue}`);

  // Construir innerHTML a mano
  let contenido = '';
  nodo.childNodes.forEach(child => {
    if (child.nodeType === 1) { // Elemento
      contenido += `<${child.nodeName}>...</${child.nodeName}> `;
    } else if (child.nodeType === 3) { // Texto
      contenido += child.nodeValue.trim() + ' ';
    }
  });
  console.log(`innerHTML = ${contenido.trim()}`);
}
Clonación y eliminación de nodos
js
Copiar código
// Clonar nodo (con hijos)
const clon = nodo.cloneNode(true); // true para clonar con todos los hijos

// Eliminar nodo
nodo.remove();
Validación de formularios
Usar atributos HTML5
required para que un campo no pueda estar vacío

pattern con expresiones regulares para validar formato

Expresiones regulares clave para validar
Campo	Regex ejemplo	Explicación
Nombre / Apellido	^[A-ZÑÁÉÍÓÚ][a-zñáéíóú]+( [A-ZÑÁÉÍÓÚ][a-zñáéíóú]+)*$	Una o más palabras que empiecen con mayúscula
Fecha	^\d{2}\/\d{2}\/\d{4}$	Formato DD/MM/AAAA
DNI	^\d{7,8}[A-Z]$	7 u 8 dígitos y una letra mayúscula
Email	^[a-z0-9._-]+@[a-z0-9_-]+\.[a-z]{2,4}$	Letras minúsculas, puntos, guiones y extensión 2-4
Teléfono	^[6789]\d{8}$	9 dígitos empezando por 6,7,8 o 9
Twitter	^@[A-Za-z0-9_]{4,15}$	Empieza con @ y de 4 a 15 caracteres

Validar y mostrar errores
js
Copiar código
if (campo.value.trim() === '') {
  erroresVacios.push(campo.name);
} else if (!regex.test(campo.value)) {
  erroresFormato.push(campo.name);
}
Cookies
Guardar cookie
js
Copiar código
document.cookie = "clave=valor; path=/; max-age=3600";
Leer cookie
js
Copiar código
function leerCookie(nombre) {
  const cookies = document.cookie.split('; ');
  for (let c of cookies) {
    const [key, val] = c.split('=');
    if (key === nombre) return val;
  }
  return null;
}
Borrar cookie
js
Copiar código
document.cookie = "clave=; path=/; max-age=0";
Ejercicios frecuentes y consejos para el examen
Practica mucho addEventListener, creación y borrado de nodos

Usa classList para poner y quitar clases, evita modificar estilos directos

Para recorrer nodos, usa recursividad si te piden mostrar árbol DOM

No uses innerHTML cuando indiquen evitarlo; usa createElement y appendChild

Para mover elementos entre contenedores, usa appendChild (mueve, no copia)

Para clonar, usa cloneNode(true) y luego ajusta clases o atributos

Controla bien qué nodo es target y currentTarget en eventos

Para validación usa tanto HTML5 (atributos) como validación con JavaScript

Controla el orden de las tareas o elementos usando atributos data-* o reordenando el DOM

Para formularios, prevenir envío con event.preventDefault() cuando hay errores

Comprueba siempre si el elemento existe antes de manipularlo para evitar errores

🚀 Bonus: Mini esquema para repasar rápido
Eventos:

js
Copiar código
.addEventListener('click', fn)
event.target, event.currentTarget
classList.toggle('clase')
Crear elementos:

js
Copiar código
document.createElement('tag')
parent.appendChild(child)

Clonar:

js
Copiar código
node.cloneNode(true)
Eliminar:

js
Copiar código
node.remove()
Formularios:

js
Copiar código
input.value, select.value
pattern + required
preventDefault() para evitar submit si error
Cookies:

js
Copiar código
document.cookie = "clave=valor; path=/; max-age=..."
Leer con split('; ')
Recorrer nodos:

js
Copiar código
node.childNodes / node.children
node.nodeType / node.nodeName

## Ejemplos completos de ejercicios

### 1. Eventos y formularios  
**Ejercicio 1.1 - Mostrar radio seleccionado**

**Enunciado:**  
Dado un formulario con 3 actores con radio buttons, al pulsar un botón, mostrar por consola el valor del actor seleccionado.

**HTML:**

html
<form id="formActores">
  <input type="radio" name="actor" value="Actor 1" checked> Actor 1<br>
  <input type="radio" name="actor" value="Actor 2"> Actor 2<br>
  <input type="radio" name="actor" value="Actor 3"> Actor 3<br>
  <button type="button" id="btnMostrar">Mostrar Actor</button>
</form>
JavaScript:

js
Copiar código
document.getElementById('btnMostrar').addEventListener('click', () => {
  const seleccionado = document.querySelector('input[name="actor"]:checked');
  if(seleccionado) {
    console.log(`Actor seleccionado: ${seleccionado.value}`);
  } else {
    console.log('No hay actor seleccionado');
  }
});
2. Manipulación de listas y selects
Ejercicio 2.1 - Añadir provincias sin duplicados

Enunciado:
Un input y dos listas múltiples vacías. Al pulsar “Agregar”, añadir la provincia del input a la lista izquierda si no existe ya. Dos botones para mover seleccionados entre listas.

HTML:

html
Copiar código
<input type="text" id="inputProvincia" placeholder="Provincia">
<button id="btnAgregar">Agregar provincia</button>

<select id="listaIzq" multiple size="5"></select>
<button id="btnDerecha">→</button>
<button id="btnIzquierda">←</button>
<select id="listaDer" multiple size="5"></select>
JavaScript:

js
Copiar código
const inputProvincia = document.getElementById('inputProvincia');
const listaIzq = document.getElementById('listaIzq');
const listaDer = document.getElementById('listaDer');
const btnAgregar = document.getElementById('btnAgregar');
const btnDerecha = document.getElementById('btnDerecha');
const btnIzquierda = document.getElementById('btnIzquierda');

function existeEnLista(lista, valor) {
  return Array.from(lista.options).some(opt => opt.value === valor);
}

btnAgregar.addEventListener('click', () => {
  const prov = inputProvincia.value.trim();
  if(prov === '') {
    alert('Introduce una provincia');
    return;
  }
  if(existeEnLista(listaIzq, prov) || existeEnLista(listaDer, prov)) {
    alert('La provincia ya existe');
    return;
  }
  const nuevaOption = new Option(prov, prov);
  listaIzq.add(nuevaOption);
  inputProvincia.value = '';
});

btnDerecha.addEventListener('click', () => {
  moverSeleccionados(listaIzq, listaDer);
});

btnIzquierda.addEventListener('click', () => {
  moverSeleccionados(listaDer, listaIzq);
});

function moverSeleccionados(origen, destino) {
  const seleccionados = Array.from(origen.selectedOptions);
  seleccionados.forEach(opt => {
    if(!existeEnLista(destino, opt.value)) {
      destino.add(opt);
    }
  });
}
3. Manipulación de tablas dinámicas
Ejercicio 3.1 - Tabla tareas con eliminación

Enunciado:
Añadir tareas con prioridad a tabla. Cada fila tendrá número, tarea, prioridad y botón para borrar fila.

HTML:

html
Copiar código
<input type="text" id="inputTarea" placeholder="Tarea">
<select id="selectPrioridad">
  <option value="Muy alta">Muy alta</option>
  <option value="Alta">Alta</option>
  <option value="Media">Media</option>
  <option value="Baja">Baja</option>
  <option value="Muy baja">Muy baja</option>
</select>
<button id="btnAgregarTarea">Agregar tarea</button>

<table border="1">
  <thead>
    <tr><th>#</th><th>Tarea</th><th>Prioridad</th><th>Eliminar</th></tr>
  </thead>
  <tbody id="tbodyTareas"></tbody>
</table>
JavaScript:

js
Copiar código
const inputTarea = document.getElementById('inputTarea');
const selectPrioridad = document.getElementById('selectPrioridad');
const btnAgregarTarea = document.getElementById('btnAgregarTarea');
const tbody = document.getElementById('tbodyTareas');

btnAgregarTarea.addEventListener('click', () => {
  const tarea = inputTarea.value.trim();
  const prioridad = selectPrioridad.value;
  if(!tarea) {
    alert('Introduce una tarea');
    return;
  }
  agregarTarea(tarea, prioridad);
  inputTarea.value = '';
  ordenarTabla();
  actualizarNumeracion();
});

function agregarTarea(tarea, prioridad) {
  const tr = document.createElement('tr');

  const tdNum = document.createElement('td');
  const tdTarea = document.createElement('td');
  const tdPrioridad = document.createElement('td');
  const tdBorrar = document.createElement('td');

  tdTarea.textContent = tarea;
  tdPrioridad.textContent = prioridad;

  const btnBorrar = document.createElement('button');
  btnBorrar.textContent = 'X';
  btnBorrar.addEventListener('click', () => {
    tr.remove();
    actualizarNumeracion();
  });

  tdBorrar.appendChild(btnBorrar);

  tr.appendChild(tdNum);
  tr.appendChild(tdTarea);
  tr.appendChild(tdPrioridad);
  tr.appendChild(tdBorrar);

  tbody.appendChild(tr);
}

function actualizarNumeracion() {
  Array.from(tbody.children).forEach((tr, i) => {
    tr.children[0].textContent = i + 1;
  });
}

// Ordenar tabla según prioridad
function ordenarTabla() {
  const prioridades = {
    'Muy alta': 1,
    'Alta': 2,
    'Media': 3,
    'Baja': 4,
    'Muy baja': 5
  };
  const filas = Array.from(tbody.children);
  filas.sort((a, b) => {
    return prioridades[a.children[2].textContent] - prioridades[b.children[2].textContent];
  });
  filas.forEach(fila => tbody.appendChild(fila));
}
4. Manejo avanzado del DOM
Ejercicio 4.1 - Recorrer nodos y mostrar datos

Enunciado:
Dado un div con contenido, recorrer todos sus nodos y mostrar nodeType, nodeName, nodeValue, constructor.name y construir el innerHTML manualmente.

HTML:

html
Copiar código
<div id="capa">
  <ul>
    <li>Item uno</li>
    <li>Item dos</li>
  </ul>
</div>
<pre id="resultado"></pre>
JavaScript:

js
Copiar código
const capa = document.getElementById('capa');
const resultado = document.getElementById('resultado');

function recorrerNodo(nodo, nivel = 0) {
  let indent = ' '.repeat(nivel * 2);
  resultado.textContent += `${indent}-------------------------\n`;
  resultado.textContent += `${indent}NodeType = ${nodo.nodeType}\n`;
  resultado.textContent += `${indent}Nombre de la clase = ${nodo.constructor.name}\n`;
  resultado.textContent += `${indent}NodeName = ${nodo.nodeName}\n`;
  resultado.textContent += `${indent}NodeValue = ${nodo.nodeValue}\n`;
  
  // Construir innerHTML sin usar innerHTML real
  let inner = '';
  nodo.childNodes.forEach(child => {
    if(child.nodeType === 1) {
      inner += `<${child.nodeName.toLowerCase()}>...</${child.nodeName.toLowerCase()}> `;
    } else if(child.nodeType === 3) {
      inner += child.nodeValue.trim() + ' ';
    }
  });
  resultado.textContent += `${indent}innerHTML = ${inner.trim()}\n\n`;

  nodo.childNodes.forEach(child => recorrerNodo(child, nivel + 1));
}

recorrerNodo(capa);
5. Validación de formularios
Ejercicio 5.1 - Validar formulario simple con regex

HTML:

html
Copiar código
<form id="formValidar">
  <input type="text" name="nombre" placeholder="Nombre" required>
  <input type="text" name="dni" placeholder="DNI" required>
  <input type="email" name="email" placeholder="Email" required>
  <button type="submit">Enviar</button>
</form>
JavaScript:

js
Copiar código
const form = document.getElementById('formValidar');

form.addEventListener('submit', e => {
  e.preventDefault();

  const nombre = form.nombre.value.trim();
  const dni = form.dni.value.trim();
  const email = form.email.value.trim();

  const regexNombre = /^[A-ZÑÁÉÍÓÚ][a-zñáéíóú]+(\s[A-ZÑÁÉÍÓÚ][a-zñáéíóú]+)*$/;
  const regexDNI = /^\d{7,8}[A-Z]$/;
  const regexEmail = /^[a-z0-9._-]+@[a-z0-9_-]+\.[a-z]{2,4}$/;

  let errores = [];

  if(!regexNombre.test(nombre)) errores.push('Nombre incorrecto');
  if(!regexDNI.test(dni)) errores.push('DNI incorrecto');
  if(!regexEmail.test(email)) errores.push('Email incorrecto');

  if(errores.length > 0) {
    alert('Errores:\n' + errores.join('\n'));
  } else {
    alert('Formulario válido. Enviando...');
    form.submit();
  }
});
6. Cookies
Ejercicio 6.1 - Guardar, leer y borrar cookie

HTML:

html
Copiar código
<form id="formCookie">
  <input type="text" id="clave" placeholder="Clave cookie">
  <input type="text" id="valor" placeholder="Valor cookie">
  <button type="button" id="btnGuardar">Guardar</button>
  <button type="button" id="btnLeer">Leer</button>
  <button type="button" id="btnBorrar">Borrar</button>
</form>
JavaScript:

js
Copiar código
const clave = document.getElementById('clave');
const valor = document.getElementById('valor');
const btnGuardar = document.getElementById('btnGuardar');
const btnLeer = document.getElementById('btnLeer');
const btnBorrar = document.getElementById('btnBorrar');

btnGuardar.addEventListener('click', () => {
  if(clave.value.trim() && valor.value.trim()) {
    document.cookie = `${clave.value}=${valor.value}; path=/; max-age=3600`;
    alert('Cookie guardada');
  } else {
    alert('Introduce clave y valor');
  }
});

btnLeer.addEventListener('click', () => {
  const cookies = document.cookie.split('; ');
  const c = cookies.find(c => c.startsWith(clave.value + '='));
  if(c) {
    alert(`Valor: ${c.split('=')[1]}`);
  } else {
    alert('Cookie no encontrada');
  }
});

btnBorrar.addEventListener('click', () => {
  document.cookie = `${clave.value}=; path=/; max-age=0`;
  alert('Cookie borrada');
});

# 🧠 Expresiones Regulares (Regex) – Explicación completa para DWEC

Las **expresiones regulares** son patrones que permiten **validar**, **buscar** o **filtrar** texto.  
En DWEC se usan sobre todo para:

- Validar formularios
- Controlar formatos de entrada
- Evitar datos incorrectos antes de enviar un formulario

En JavaScript se usan principalmente con:
- `regex.test(cadena)`
- `cadena.match(regex)`

---

## 📌 1. Estructura básica de una expresión regular

```js
const regex = /patrón/;
Ejemplo:

js
Copiar código
const regex = /^[A-Z]+$/;
Significa:

“Solo letras mayúsculas, desde el inicio hasta el final del texto”.

📌 2. Anclas: inicio y fin del texto
Símbolo	Significado
^	Inicio del texto
$	Fin del texto

Ejemplo
js

/^\d+$/
✔ Válido: 12345
❌ No válido: 123a5

👉 Sin ^ y $ la regex puede validar solo una parte, lo que suele provocar errores en examen.

📌 3. Clases de caracteres
Letras y números
Expresión	Significado
[a-z]	Letras minúsculas
[A-Z]	Letras mayúsculas
[0-9] o \d	Dígitos
\w	Letras, números y _
\s	Espacios en blanco

Ejemplo
js

/^[A-Za-z]+$/
✔ Juan
❌ Juan1

📌 4. Cuantificadores (CUÁNTAS veces)
Símbolo	Significado
+	Una o más veces
*	Cero o más
?	Cero o una
{n}	Exactamente n
{n,m}	Entre n y m

Ejemplo
js
Copiar código
/^\d{9}$/
✔ 612345678
❌ 61234

📌 5. Grupos y repetición
Los paréntesis permiten agrupar partes del patrón.

js
Copiar código
([A-Z][a-z]+)
Un grupo que representa:

Una mayúscula

Varias minúsculas

Ejemplo (nombre con apellidos)
js

/^[A-Z][a-z]+( [A-Z][a-z]+)*$/
✔ Juan Pérez López
❌ juan Pérez

📌 6. Alternativas (OR)
El símbolo | funciona como o.

js

/^(hombre|mujer)$/
✔ hombre
✔ mujer
❌ otro

📌 7. Caracteres especiales escapados
Algunos caracteres tienen significado especial y deben escaparse con \.

Carácter	Cómo usarlo
.	\.
/	\/
+	\+
(	\(

Ejemplo (email)
js
Copiar código
/^[a-z]+@[a-z]+\.[a-z]{2,4}$/
📌 8. Lookahead (muy importante)
Sirve para exigir que algo exista, sin importar dónde.

js

(?=.*[A-Z])
Ejemplo contraseña segura
js
Copiar código
/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/
✔ Al menos:

Una mayúscula

Una minúscula

Un número

8 caracteres

📌 9. Uso REAL en JavaScript (DWEC)
Validar un input
js

const regexDNI = /^\d{7,8}[A-Z]$/;

if (!regexDNI.test(dni.value.trim())) {
  alert('DNI incorrecto');
}
Validar formulario completo
js
Copiar código
form.addEventListener('submit', e => {
  e.preventDefault();

  let errores = [];

  if (!regexNombre.test(nombre.value)) errores.push('Nombre');
  if (!regexEmail.test(email.value)) errores.push('Email');

  if (errores.length > 0) {
    alert('Errores en:\n' + errores.join('\n'));
  } else {
    form.submit();
  }
});
📌 10. Regex típicas de examen DWEC
Campo	Regex
Nombre	^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+( [A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)*$
DNI	^\d{7,8}[A-Z]$
Fecha	`^(0[1-9]
Teléfono	^[6789]\d{8}$
Email	^[a-z0-9._-]+@[a-z0-9_-]+\.[a-z]{2,4}$
Usuario	^[a-z][a-z0-9]{6}\d{3}$

⚠️ Errores comunes en examen
❌ No usar ^ y $
❌ Validar solo con regex sin trim()
❌ Usar .match() cuando solo necesitas .test()
❌ No mostrar mensajes claros
❌ Pensar que regex valida lógica (fechas reales, DNI correcto…)

🧠 Regla de oro DWEC
Regex valida FORMA, JavaScript valida LÓGICA

🚀 Resumen ultra rápido
js
Copiar código
regex.test(valor)        // validar
^ y $                    // inicio y fin
+ * ? {n}                // cantidad
()                       // grupos
|                        // OR
(?=...)                  // exigir condición

## 🔎 Ejercicios extra de Expresiones Regulares (DWEC)

---

### Ejercicio 5.2 – Validar nombre y apellidos (mayúsculas obligatorias)

**Enunciado:**  
Validar un campo que permita:
- Una o más palabras
- Cada palabra debe empezar por mayúscula
- El resto en minúscula
- Separadas por un solo espacio

✔ Válidos:
- Juan
- Juan Pérez
- María del Carmen ❌ (NO, "del" no empieza por mayúscula)

**Regex:**

```js
const regexNombre = /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+( [A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)*$/;
Explicación:

^ → inicio del texto

[A-ZÁÉÍÓÚÑ] → primera letra en mayúscula

[a-záéíóúñ]+ → resto en minúsculas

( ... )* → permite repetir el patrón (para apellidos)

Espacio obligatorio antes de cada nueva palabra

$ → fin del texto

Ejemplo JS:

js
Copiar código
if (!regexNombre.test(nombre.value)) {
  alert('Nombre mal formado');
}
Ejercicio 5.3 – Validar contraseña segura
Enunciado:
La contraseña debe tener:

Mínimo 8 caracteres

Al menos una mayúscula

Al menos una minúscula

Al menos un número

Regex:

js
const regexPass = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
Explicación:

(?=.*[A-Z]) → debe existir al menos una mayúscula

(?=.*[a-z]) → debe existir al menos una minúscula

(?=.*\d) → debe existir al menos un número

.{8,} → mínimo 8 caracteres

No importa el orden

Ejemplo JS:

js

if (!regexPass.test(password.value)) {
  alert('Contraseña insegura');
}
Ejercicio 5.4 – Validar código postal español
Enunciado:
Código postal válido:

5 dígitos

Empieza entre 01 y 52

Regex:

js
Copiar código
const regexCP = /^(0[1-9]|[1-4]\d|5[0-2])\d{3}$/;
Explicación:

(0[1-9]) → 01 a 09

([1-4]\d) → 10 a 49

(5[0-2]) → 50 a 52

\d{3} → últimos 3 dígitos

Total = 5 cifras

Ejercicio 5.5 – Validar número de teléfono con o sin prefijo
Enunciado:
Teléfono válido:

Empieza por 6, 7, 8 o 9

Puede llevar prefijo +34 opcional

✔ Válidos:

612345678

+34612345678

Regex:

js
Copiar código
const regexTel = /^(\+34)?[6789]\d{8}$/;
Explicación:

(\+34)? → prefijo opcional

[6789] → primer dígito válido

\d{8} → resto del número

Ejercicio 5.6 – Validar fecha real (DD/MM/AAAA)
Enunciado:
Validar formato y días reales (NO 32/01/2024).

Regex:

js
Copiar código
const regexFecha = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
Explicación:

Día:

0[1-9] → 01–09

[12]\d → 10–29

3[01] → 30–31

Mes:

0[1-9] → 01–09

1[0-2] → 10–12

Año:

\d{4} → 4 cifras

⚠ No controla meses con 30 días ni febrero (eso sería con JS adicional).

Ejercicio 5.7 – Validar usuario (login)
Enunciado:
Usuario válido:

5 a 12 caracteres

Letras y números

No puede empezar por número

Regex:

js
Copiar código
const regexUser = /^[A-Za-z][A-Za-z0-9]{4,11}$/;
Explicación:

[A-Za-z] → primera letra obligatoria

{4,11} → resto hasta llegar a 5–12 caracteres

No permite símbolos

Ejercicio 5.8 – Validar matrícula española moderna
Enunciado:
Formato:

4 números

3 letras (sin vocales)

Ejemplo: 1234BCD

Regex:

js
Copiar código
const regexMatricula = /^\d{4}[BCDFGHJKLMNPRSTVWXYZ]{3}$/;
Explicación:

\d{4} → cuatro números

Letras sin vocales para evitar palabras

{3} → tres letras exactas

Ejercicio 5.9 – Validar cuenta bancaria simple (IBAN ES)
Enunciado:
Formato IBAN español:

Empieza por ES

2 dígitos de control

20 números más

Regex:

js
Copiar código
const regexIBAN = /^ES\d{22}$/;
Explicación:

ES → literal

\d{22} → 22 números obligatorios

No valida matemáticamente, solo formato

Ejercicio 5.10 – Validación combinada (ejercicio típico de examen)
Enunciado:
Formulario con nombre, DNI y teléfono.
Mostrar errores acumulados.

JavaScript:

js
Copiar código
let errores = [];

if (!regexNombre.test(nombre.value)) errores.push('Nombre incorrecto');
if (!regexDNI.test(dni.value)) errores.push('DNI incorrecto');
if (!regexTel.test(telefono.value)) errores.push('Teléfono incorrecto');

if (errores.length > 0) {
  alert(errores.join('\n'));
} else {
  alert('Formulario válido');
}