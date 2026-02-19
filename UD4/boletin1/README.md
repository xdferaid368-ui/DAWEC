🧪 Configuración del Laboratorio React + TypeScript (Entorno Oficial)

Esta es la configuración base del laboratorio para trabajar con React y TypeScript usando Dev Containers.
Garantiza que todos trabajamos con el mismo entorno y evita errores de versiones.

📁 1. Estructura Inicial del Proyecto

Antes de crear ninguna app React, se debe crear la siguiente estructura en una carpeta raíz (por ejemplo Laboratorio-React):

Laboratorio-React/
├── tsconfig.json
└── .devcontainer/
    ├── devcontainer.json
    └── docker-compose.yml


📌

Laboratorio-React → carpeta principal de la asignatura

.devcontainer → configuración del entorno Docker + VS Code

⚙️ 2. Archivo tsconfig.json

📍 Ubicación: raíz del proyecto

Este archivo indica a TypeScript cómo debe comportarse en todo el proyecto.

{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}

🧠 Qué significa lo importante

strict: true → TypeScript no perdona errores (bien para el examen)

target: ES2022 → sintaxis moderna de JavaScript

esModuleInterop → permite imports limpios

🐳 3. Carpeta .devcontainer

Esta carpeta permite a VS Code crear un entorno de desarrollo automático usando Docker.

📄 Archivo .devcontainer/devcontainer.json

📍 Para qué sirve
Define:

extensiones de VS Code

herramientas globales

configuración automática del entorno

{
  "name": "React + TS Lab",
  "dockerComposeFile": "docker-compose.yml",
  "service": "react-ts-dev",
  "workspaceFolder": "/workspace",

  "features": {
    "ghcr.io/devcontainers/features/git:1": {},
    "ghcr.io/devcontainers/features/common-utils:2": {
      "installZsh": true,
      "configureZshAsDefaultShell": true,
      "installOpenssh": true,
      "upgradePackages": true
    },
    "ghcr.io/devcontainers/features/github-cli:1": {}
  },

  "customizations": {
    "vscode": {
      "settings": {
        "editor.formatOnSave": true,
        "editor.defaultFormatter": "esbenp.prettier-vscode"
      },
      "extensions": [
        "dbaeumer.vscode-eslint",
        "esbenp.prettier-vscode",
        "dsznajder.es7-react-js-snippets",
        "yoavbls.pretty-ts-errors",
        "ms-vscode.vscode-typescript-next"
      ]
    }
  },

  "postCreateCommand": "npm install -g vite typescript tsx",
  "remoteUser": "node"
}

🧠 Claves de examen

Se instalan automáticamente:

vite

typescript

tsx

Prettier y ESLint vienen ya configurados

No hay que instalar nada a mano

📄 Archivo .devcontainer/docker-compose.yml

📍 Para qué sirve
Define el contenedor Docker y qué puertos se pueden usar.

version: '3.8'

services:
  react-ts-dev:
    image: mcr.microsoft.com/devcontainers/typescript-node:20
    container_name: react_ts_lab
    command: sleep infinity
    volumes:
      - ..:/workspace:cached
    working_dir: /workspace
    ports:
      - "3000-3010:3000-3010"
      - "5173-5183:5173-5183"

🧠 Importante

5173 → puerto típico de Vite

3000 → otros frameworks (por si acaso)

El proyecto se monta automáticamente en /workspace

▶️ 4. Arranque del Entorno
Pasos

Abrir VS Code

Archivo → Abrir carpeta

Seleccionar Laboratorio-React

VS Code mostrará:
👉 “Reopen in Container”

Aceptar y esperar (la primera vez tarda)

📌
Si no sale el mensaje:

F1

Buscar: Dev Containers: Reopen in Container

✅ 5. Verificación del Entorno

Una vez cargado el contenedor:

Abrir la terminal integrada

Ejecutar:

tsx --version

Resultado esperado
vX.X.X


👉 Si aparece un número de versión, el laboratorio está listo.

🧠 Flujo Mental Completo (Resumen)
Crear estructura
↓
Reopen in Container
↓
Entorno listo
↓
Crear proyecto con Vite
↓
Programar React + TypeScript

🚀 A partir de aquí…

Desde este entorno ya puedes ejecutar:

npm create vite@latest


Elegir:

React

TypeScript

Y empezar el CRUD sin problemas de configuración.


🧱 Cómo Crear un Componente en React (Paso a Paso SIN LIARSE)

Regla de oro:
Un componente = un archivo .tsx
Empieza simple, luego ya complicas.

1️⃣ Crear el archivo del componente

📁 Ruta recomendada:

src/components/


📄 Nombre:

EquipmentCard.tsx


👉 SIEMPRE en PascalCase
❌ equipmentcard.tsx
✅ EquipmentCard.tsx

2️⃣ Importaciones básicas
import React from 'react';


💡 En proyectos modernos no es obligatorio, pero no pasa nada por ponerlo en examen.

Si usa tipos:

import { Equipment } from '../types';

3️⃣ Definir las Props (SIEMPRE ANTES)
interface Props {
  equipment: Equipment;
}


🧠

Las props SIEMPRE se tipan

Esto es el contrato del componente

4️⃣ Crear el componente (forma estándar)
const EquipmentCard = ({ equipment }: Props) => {
  return (
    <div>
      <h3>{equipment.nombre}</h3>
      <p>{equipment.tipo}</p>
      <p>{equipment.estado}</p>
    </div>
  );
};


📌

Componente = función

Props van entre { }

JSX dentro del return

5️⃣ Exportar el componente
export default EquipmentCard;


❌ Error típico de examen: olvidarse el export
➡️ Luego no puedes usarlo en ningún lado

6️⃣ Usar el componente en otro sitio
import EquipmentCard from './components/EquipmentCard';


Y luego:

<EquipmentCard equipment={equipo} />


🧠

El nombre de la prop tiene que coincidir

TS te avisa si falta algo

🔄 Pasar Funciones entre Componentes (MUY IMPORTANTE)
Padre
const deleteEquipment = (id: string): void => {
  console.log(id);
};

<EquipmentCard
  equipment={eq}
  onDelete={deleteEquipment}
/>

Hijo
interface Props {
  equipment: Equipment;
  onDelete: (id: string) => void;
}

<button onClick={() => onDelete(equipment.id)}>
  Eliminar
</button>


📌

Las funciones también se tipan

void = no devuelve nada

🧠 Plantilla Mental de Componente (MEMORIZA ESTO)
import { Tipo } from '../types';

interface Props {
  dato: Tipo;
}

const MiComponente = ({ dato }: Props) => {
  return (
    <div>
      {dato.algo}
    </div>
  );
};

export default MiComponente;


➡️ Esto te vale para el 90% del examen

🧪 Componentes con Estado (useState)
import { useState } from 'react';

const Contador = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
};

export default Contador;


📌

useState<T>()

Nunca dejarlo sin tipo si empieza vacío

⚠️ Errores Clásicos de Examen (EVÍTALOS)

❌ No tipar props
❌ Usar any
❌ Olvidar key en .map()
❌ Mutar arrays (push)
❌ No exportar el componente
❌ JSX sin return

🧠 Checklist Rápido Antes de Entregar

 ¿Cada componente tiene su interface Props?

 ¿Los estados están tipados?

 ¿Las funciones tienen tipos?

 ¿No hay any?

 ¿CRUD claro (crear / listar / borrar)?


🚀 TechInventory – React + TypeScript CRUD Cheat Sheet

Objetivo del proyecto:
Aplicación React + TypeScript para listar, crear y eliminar equipos informáticos, usando estado local y Firebase Firestore.

🧠 Mentalidad de Examen (IMPORTANTE)

❌ NO usar any

✅ Interfaces siempre

✅ Estados tipados

✅ Componentes pequeños

✅ CRUD claro

❌ Nada de cosas raras / avanzadas

🛠️ Stack

React (Vite)

TypeScript

Firebase Firestore

CSS / Tailwind (da igual para el examen)

📁 Estructura Recomendada
src/
│── components/
│   ├── EquipmentCard.tsx
│   ├── EquipmentList.tsx
│   └── EquipmentForm.tsx
│
│── firebase/
│   └── config.ts
│
│── data/
│   └── mockData.ts
│
│── types.ts
│── App.tsx
│── main.tsx

🧾 FASE 0 – El Contrato (Types)

📌 SIEMPRE EMPEZAR AQUÍ

// src/types.ts
export interface Equipment {
  id: string;
  nombre: string;
  tipo: 'portatil' | 'monitor' | 'teclado';
  estado: 'disponible' | 'asignado' | 'averiado';
}


💡

interface = contrato

tipo y estado = Literal Types (evita magic strings)

🧪 FASE 1 – Datos Mock
// src/data/mockData.ts
import { Equipment } from '../types';

export const mockData: Equipment[] = [
  {
    id: '1',
    nombre: 'MacBook Air M2',
    tipo: 'portatil',
    estado: 'asignado',
  },
  {
    id: '2',
    nombre: 'Monitor LG 27"',
    tipo: 'monitor',
    estado: 'disponible',
  },
  {
    id: '3',
    nombre: 'Teclado Logitech',
    tipo: 'teclado',
    estado: 'averiado',
  },
];

🧩 EquipmentCard (Mostrar datos)
import { Equipment } from '../types';

interface Props {
  equipment: Equipment;
  onDelete?: (id: string) => void;
}

const EquipmentCard = ({ equipment, onDelete }: Props) => {
  return (
    <div>
      <h3>{equipment.nombre}</h3>
      <p>Tipo: {equipment.tipo}</p>
      <p>Estado: {equipment.estado}</p>

      {onDelete && (
        <button onClick={() => onDelete(equipment.id)}>
          🗑️ Eliminar
        </button>
      )}
    </div>
  );
};

export default EquipmentCard;


🧠 Claves:

Props tipadas

onDelete es opcional → ?

Callback devuelve void

📃 EquipmentList (Renderizar lista)
import { Equipment } from '../types';
import EquipmentCard from './EquipmentCard';

interface Props {
  equipments: Equipment[];
  onDelete: (id: string) => void;
}

const EquipmentList = ({ equipments, onDelete }: Props) => {
  return (
    <>
      {equipments.map((eq) => (
        <EquipmentCard
          key={eq.id}
          equipment={eq}
          onDelete={onDelete}
        />
      ))}
    </>
  );
};

export default EquipmentList;


📌 SIEMPRE key

✍️ FASE 2 – Formulario
import { useState } from 'react';
import { Equipment } from '../types';

interface Props {
  onAdd: (equipment: Equipment) => void;
}

const EquipmentForm = ({ onAdd }: Props) => {
  const [nombre, setNombre] = useState('');
  const [tipo, setTipo] = useState<'portatil' | 'monitor' | 'teclado'>('portatil');
  const [estado, setEstado] = useState<'disponible' | 'asignado' | 'averiado'>('disponible');

  const handleSubmit = () => {
    const newEquipment: Equipment = {
      id: crypto.randomUUID(),
      nombre,
      tipo,
      estado,
    };

    onAdd(newEquipment);
    setNombre('');
  };

  return (
    <div>
      <input
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Nombre"
      />

      <select onChange={(e) => setTipo(e.target.value as any)}>
        <option value="portatil">Portátil</option>
        <option value="monitor">Monitor</option>
        <option value="teclado">Teclado</option>
      </select>

      <select onChange={(e) => setEstado(e.target.value as any)}>
        <option value="disponible">Disponible</option>
        <option value="asignado">Asignado</option>
        <option value="averiado">Averiado</option>
      </select>

      <button disabled={!nombre} onClick={handleSubmit}>
        Guardar
      </button>
    </div>
  );
};

export default EquipmentForm;


⚠️

Botón deshabilitado si nombre vacío

Estado controlado

useState<T> siempre tipado

🧠 App.tsx – Estado Central
import { useState } from 'react';
import { Equipment } from './types';
import { mockData } from './data/mockData';
import EquipmentList from './components/EquipmentList';
import EquipmentForm from './components/EquipmentForm';

function App() {
  const [equipments, setEquipments] = useState<Equipment[]>(mockData);

  const addEquipment = (equipment: Equipment) => {
    setEquipments([...equipments, equipment]);
  };

  const deleteEquipment = (id: string) => {
    setEquipments(equipments.filter((eq) => eq.id !== id));
  };

  return (
    <>
      <EquipmentForm onAdd={addEquipment} />
      <EquipmentList equipments={equipments} onDelete={deleteEquipment} />
    </>
  );
}

export default App;

☁️ FASE 3 – Firebase (Teórico de Examen)
useEffect(() => {
  const fetchData = async () => {
    setIsLoading(true);
    const snapshot = await getDocs(collection(db, 'equipments'));
    const data = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    })) as Equipment[];
    setEquipments(data);
    setIsLoading(false);
  };

  fetchData();
}, []);


📌

useEffect → carga inicial

isLoading → UX

Firestore devuelve DocumentData

🗑️ FASE 4 – Eliminar (CRUD Completo)
const deleteEquipment = async (id: string) => {
  await deleteDoc(doc(db, 'equipments', id));
  setEquipments(equipments.filter(eq => eq.id !== id));
};

🧠 RESUMEN DE EXAMEN EXPRESS
Concepto	Cómo se usa
Props	interface Props { ... }
Estado	useState<T>()
Listas	.map() + key
Formularios	Estado controlado
CRUD	add / list / delete
Firebase	useEffect
Seguridad	Nada de any

🔁 ¿Cómo se hace un CRUD en React + TypeScript?

CRUD = Create, Read, Update, Delete
En React TODO gira alrededor del estado.

Piensa siempre esto:

🧠 “Tengo un array en el estado y lo modifico correctamente”

📦 Modelo Base (El Contrato)

Antes de CRUD, definimos qué gestionamos:

export interface Equipment {
  id: string;
  nombre: string;
  tipo: 'portatil' | 'monitor' | 'teclado';
  estado: 'disponible' | 'asignado' | 'averiado';
}


Este modelo manda en todo el CRUD.

🧠 Estado Central (El Corazón del CRUD)
const [equipments, setEquipments] = useState<Equipment[]>([]);


📌

equipments → Base de datos en memoria

setEquipments → Única forma de cambiarla

📖 READ – Leer / Mostrar Datos
Qué es

Mostrar los datos del estado en pantalla.

Cómo se hace
<EquipmentList equipments={equipments} />

equipments.map((eq) => (
  <EquipmentCard key={eq.id} equipment={eq} />
))


🧠

.map() para renderizar

key obligatorio

Si equipments cambia → React se actualiza solo

➕ CREATE – Crear un nuevo elemento
Qué es

Añadir un nuevo objeto al array del estado.

1️⃣ El formulario crea el objeto
const newEquipment: Equipment = {
  id: crypto.randomUUID(),
  nombre,
  tipo,
  estado,
};

2️⃣ Se lo pasa al componente padre
onAdd(newEquipment);

3️⃣ El padre actualiza el estado
const addEquipment = (equipment: Equipment) => {
  setEquipments([...equipments, equipment]);
};


📌

Nunca push

Siempre crear un nuevo array

✏️ UPDATE – Actualizar un elemento

Aunque no lo implementes, esto cae en examen teórico

Qué es

Modificar un elemento existente del array.

Ejemplo típico: cambiar estado
const updateEquipment = (id: string, newEstado: Equipment['estado']) => {
  setEquipments(
    equipments.map((eq) =>
      eq.id === id
        ? { ...eq, estado: newEstado }
        : eq
    )
  );
};


🧠

.map() para actualizar

...eq para no perder datos

Inmutabilidad SIEMPRE

🗑️ DELETE – Eliminar un elemento
Qué es

Quitar un objeto del array.

Botón en el componente hijo
<button onClick={() => onDelete(equipment.id)}>
  Eliminar
</button>

Lógica en el padre
const deleteEquipment = (id: string) => {
  setEquipments(
    equipments.filter((eq) => eq.id !== id)
  );
};


📌

.filter() elimina

React re-renderiza automáticamente

☁️ CRUD + Firebase (Teórico Importante)
READ (al cargar)
useEffect(() => {
  const fetchData = async () => {
    const snapshot = await getDocs(collection(db, 'equipments'));
    const data = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    })) as Equipment[];

    setEquipments(data);
  };

  fetchData();
}, []);

CREATE
await addDoc(collection(db, 'equipments'), {
  nombre,
  tipo,
  estado,
});

DELETE
await deleteDoc(doc(db, 'equipments', id));

🧠 Flujo Mental de CRUD (APRENDÉTELO)
Formulario
   ↓
Función callback
   ↓
setState (nuevo array)
   ↓
React re-renderiza

⚠️ Errores TÍPICOS en CRUD (Suspenso Seguro)

❌ Mutar arrays (push, splice)
❌ No tipar el objeto
❌ No usar id único
❌ Mezclar lógica en el hijo
❌ No levantar el estado al padre

🧠 CRUD en 1 Frase (Examen)

Un CRUD en React consiste en gestionar un array en el estado usando useState, renderizarlo con .map() y modificarlo de forma inmutable mediante callbacks desde componentes hijos.