# 📋 Instrucciones de Sincronización - Multi-plataforma

**Fecha de creación:** 2026-04-18  
**Propósito:** Sincronizar el historial git después de eliminar la carpeta `Documentos/` del remoto  
**Compatible:** Windows, macOS, Linux

---

## 🎯 ¿Qué pasó?

Se eliminó accidentalmente la carpeta `Documentos/` que había sido subida al remoto. Se reescribió el historial en **todas las ramas** para limpiarla completamente. 

---

## ⚠️ IMPORTANTE

- Este proceso **reescribe tu historial local**
- Si tienes cambios locales sin hacer commit, **se perderán**
- Guarda cualquier cambio importante en otro lugar antes de empezar
- Este proceso es **seguro** porque trabajas solo en el proyecto

---

## 📝 Pasos a Seguir

### Paso 0: Navegar a la carpeta del proyecto

Abre una terminal/consola en tu ordenador y navega a donde tengas clonado el repositorio AI-STEAM-MOCKUP:

```bash
cd /ruta/a/tu/AI-STEAM-MOCKUP
```

**Para verificar que estás en el lugar correcto:**
```bash
ls  # En Mac/Linux
dir # En Windows (o usa 'ls' en Git Bash)
```

Deberías ver archivos como `package.json`, `tsconfig.json`, carpeta `src/`, etc.

---

### Paso 1: Verificar estado actual

```bash
git status
```

**Expected output:**
- Verás el estado de tu repositorio local
- Si hay cambios pendientes importantes, guárdalos primero

---

### Paso 2: Hacer stash de cualquier cambio local (si es necesario)

Si tienes cambios sin hacer commit que quieres preservar:

```bash
git stash
```

**Nota:** Después puedes recuperarlos con `git stash pop`

---

### Paso 3: Traer los cambios del remoto

```bash
git fetch origin
```

**Expected output:**
```
From https://github.com/jsmiragregori/AI-STEAM-MOCKUP.git
   [actualización de ramas]
```

---

### Paso 4: Sincronizar todas las ramas locales

Ejecuta **exactamente estos comandos en orden**:

```bash
git reset --hard origin/main
```

```bash
git checkout feature/multilingüismo
git reset --hard origin/feature/multilingüismo
```

```bash
git checkout style
git reset --hard origin/style
```

```bash
git checkout style-comparison-original
git reset --hard origin/style-comparison-original
```

```bash
git checkout main
```

**Expected output en cada reset:**
```
HEAD is now at [hash] [mensaje del commit]
```

---

### Paso 5: Verificar sincronización

```bash
git log --oneline -5
git status
```

**Expected output:**
- `git log`: Verás los últimos 5 commits
- `git status`: Debe decir `nothing to commit, working tree clean`

---

## ✅ Checklist Final

- [ ] Estoy en la carpeta correcta del proyecto
- [ ] Ejecuté todos los pasos en orden
- [ ] No hay errores en la consola
- [ ] `git status` muestra "working tree clean"
- [ ] El archivo `.gitignore` contiene `Documentos/`:
  ```bash
  grep "Documentos" .gitignore
  ```

---

## 🐛 Troubleshooting

### Error: "Cannot checkout / Your local changes would be overwritten"

```bash
git stash
# Luego repite el Paso 4
```

### Error: "untracked working tree files would be overwritten"

```bash
git clean -fd
# Luego repite el Paso 4
```

### Error: "fatal: not a git repository"

Verifica que estés en la carpeta correcta:
```bash
ls .git  # En Mac/Linux
dir .git # En Windows
```

Deberías ver una carpeta `.git`. Si no la ves, estás en la carpeta equivocada.

### ¿La carpeta `Documentos/` sigue existiendo?

Es normal - no fue eliminada del disco, solo del historial git. Puedes eliminarla si quieres:

**En Mac/Linux:**
```bash
rm -rf Documentos/
```

**En Windows (Git Bash):**
```bash
rm -rf Documentos/
```

---

## 📞 ¿Qué hacer después?

Una vez completado:

1. Abre una sesión con Claude Code desde este ordenador
2. Di: "He sincronizado este ordenador con SYNC_INSTRUCTIONS.md"
3. Yo verificaré que todo está correcto

---

## 📌 Resumen técnico (para referencia)

- **Operación realizada:** `git filter-branch` para eliminar `Documentos/` de todos los commits
- **Ramas afectadas:** main, feature/multilingüismo, style, style-comparison-original  
- **Cambios al remoto:** Force push (`git push --force`)
- **Cambios locales:** Reset hard de todas las ramas para sincronizar
