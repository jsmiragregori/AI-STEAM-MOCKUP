# 📋 Instrucciones de Sincronización - Ordenador 2 y 3

**Fecha de creación:** 2026-04-18  
**Propósito:** Sincronizar el historial git después de eliminar la carpeta `Documentos/` del remoto  
**Estado:** Aplicable al Ordenador 2 y Ordenador 3

---

## 🎯 ¿Qué pasó?

Se eliminó la carpeta `Documentos/` que había sido subida al remoto. Se reescribió el historial en **todas las ramas** para limpiarla completamente. 

---

## ⚠️ IMPORTANTE

- Este proceso **reescribe tu historial local**
- Si tienes cambios locales sin hacer commit, **se perderán**
- Si tienes cambios en `.claude/settings.local.json` u otros archivos, guárdalos en otro lugar primero
- Este proceso es **seguro** porque trabajas solo en el proyecto

---

## 📝 Pasos a Seguir (COPIAR Y EJECUTAR)

### Paso 1: Verificar estado actual
```bash
cd "d:\Núvol\OneDrive - Conselleria d'Educació\Curs 2025-2026\Projectes\AI-STEAM-MOCKUP"
git status
```

**Expected output:**
- Deberías ver archivos sin cambios o modificados
- Si hay cambios importantes, guárdalos primero en otro lugar

---

### Paso 2: Hacer stash de cualquier cambio local (si es necesario)
```bash
git stash
```

**Nota:** Esto guarda temporalmente cualquier cambio. Si necesitas recuperarlos después:
```bash
git stash pop
```

---

### Paso 3: Traer los cambios del remoto
```bash
git fetch origin
```

**Expected output:**
```
From https://github.com/jsmiragregori/AI-STEAM-MOCKUP.git
   [varios cambios de ramas]
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
- `git log`: Debes ver los últimos 5 commits
- `git status`: Debe decir `nothing to commit, working tree clean`

---

## ✅ Checklist Final

- [ ] Ejecuté todos los pasos en orden
- [ ] No hay errores en la consola
- [ ] `git status` muestra "working tree clean"
- [ ] La carpeta `Documentos/` NO existe en el directorio local
- [ ] El archivo `.gitignore` contiene `Documentos/`

---

## 🐛 Troubleshooting

### Error: "Cannot checkout Reason: Your local changes to the following files would be overwritten"

**Solución:**
```bash
git stash
# Luego repite el paso 4
```

### Error: "fatal: the following untracked working tree files would be overwritten by checkout"

**Solución:**
```bash
git clean -fd
# Luego repite el paso 4
```

### ¿La carpeta `Documentos/` sigue existiendo localmente?

Es normal - no fue eliminada del disco, solo del git. Puedes eliminarla manualmente si quieres:
```bash
rm -rf "Documentos/"
```

---

## 📞 ¿Qué hacer después?

Una vez completado:
1. Abre una sesión con Claude Code
2. Di: "He sincronizado este ordenador siguiendo SYNC_INSTRUCTIONS.md"
3. Yo verificaré que todo está correcto

---

## 📌 Resumen técnico (para referencia)

- **Operación realizada:** `git filter-branch` para eliminar `Documentos/` de todos los commits
- **Ramas afectadas:** main, feature/multilingüismo, style, style-comparison-original
- **Cambios al remoto:** Force push (`git push --force`)
- **Cambios locales:**  Reset hard de todas las ramas para sincronizar
