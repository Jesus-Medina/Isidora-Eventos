
# Documentación de Git Flow

## Estructura de Ramas

- **`main`**: Rama de producción, contiene las versiones estables.
- **`dev`**: Rama de integración para combinar las nuevas funcionalidades.
- **`features/*`**: Ramas específicas para cada funcionalidad (ejemplo: `features/contact`).

## Flujo de Trabajo para Desarrolladores

### 1. Comenzando Nuevo Trabajo

```bash
# Actualizar la rama dev
git checkout dev
git pull origin dev

# Crear una rama de funcionalidad (si es necesario)
git checkout -b features/nueva-funcionalidad

# Crear tu rama de trabajo
git checkout features/contact
git checkout -b tipo/descripción
# Ejemplo: git checkout -b style/formulario-contacto
```

### 2. Realizando Cambios

```bash
# Preparar los cambios para el commit
git add .

# Hacer un commit siguiendo el estándar de Commits Convencionales
git commit -m "tipo(alcance): descripción"
```

#### Formato de Commit Convencional

El formato es el siguiente:

```
<tipo>[opcional(alcance)]: <descripción>

[opcional cuerpo]

[opcional pie de página(s)]
```

#### Descripción de los Elementos

1. **`tipo`**: Define la categoría del cambio:
   - **feat**: Introducción de una nueva funcionalidad.
   - **fix**: Corrección de errores.
   - **docs**: Cambios en la documentación.
   - **style**: Cambios de estilo o formato (sin afectar la lógica).
   - **refactor**: Cambios en el código que no afectan su funcionalidad.
   - **test**: Adición o modificación de pruebas.
   - **chore**: Tareas de mantenimiento (configuración, herramientas, etc.).

2. **`alcance` (opcional)**: Contexto o área afectada (ejemplo: `login`, `navbar`, `API`).

3. **`descripción`**: Breve explicación del cambio realizado.

4. **Cuerpo (opcional)**: Proporciona más detalles sobre los cambios (motivos, contexto).

5. **Pie de página(s) (opcional)**:
   - Referencias a tickets o issues: `Closes #123`
   - Notas de ruptura: `BREAKING CHANGE: detalles`

#### Ejemplos de Commits

- `feat(contacto): añadir diseño responsivo al formulario`
- `fix(navegación): solucionar problema con el menú móvil`
- `style(home): actualizar colores en la sección principal`
- `refactor(autenticación): simplificar lógica de validación`
- `test(API): añadir pruebas unitarias para endpoints`

### 3. Subir Cambios

```bash
git push origin tipo/descripción
# Ejemplo: git push origin style/formulario-contacto
```

### 4. Proceso de Pull Request (PR)

1. Crear un Pull Request en GitHub: `tipo/descripción` → `features/*`.
2. Esperar revisión y aprobación del código.
3. Después de hacer merge, crear un segundo PR: `features/*` → `dev`.
4. Esperar la revisión final y aprobación.

### 5. Actualizar Tu Rama

```bash
# Solo si es necesario integrar cambios recientes de dev
git checkout features/tu-funcionalidad
git fetch origin dev
git merge origin dev
# Resolver conflictos si los hay
git push origin features/tu-funcionalidad
```

## Reglas de Protección de Ramas

- Todos los push a las ramas `main`, `dev` y `features/*` requieren un Pull Request (PR).
- Los PR deben ser aprobados por los responsables del código.
- Los checks de estado deben pasar antes de hacer un merge.

## Proceso de Lanzamiento

(Realizado por los responsables del código):

```bash
git checkout main
git merge dev
git tag -a v1.0.0 -m "Descripción del lanzamiento"
git push origin main --tags
```

## Notas Importantes

- **Nunca hagas commits directamente en ramas protegidas.**
- Mantén los Pull Requests enfocados y pequeños.
- Usa nombres descriptivos para las ramas y los mensajes de commit.
- Solo actualiza tu rama desde `dev` cuando sea necesario.
