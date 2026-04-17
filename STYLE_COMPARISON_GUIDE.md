# Guía de Comparación de Estilos - Style Branches

**Fecha de creación:** 2026-04-17  
**Estado:** ✅ Seguro y reversible

## 📋 Resumen

Se ha creado una estructura segura para comparar el aspecto actual de la web con el aspecto anterior a los cambios de estilo. Todo está versionado en git, sin riesgo de perder cambios.

---

## 🔀 Ramas Disponibles

### `main` (PRODUCCIÓN ACTUAL)
- **Estado:** Con cambios de estilo + todas las traducciones + nuevas features
- **Commits más recientes:**
  - `398f8c0` - Merge branch 'style' into main
  - `fa60e3b` - Refine EU visual identity with improved contrast and add rollback guide
  - `5803f7b` - Fix: Correct Valencian title for Governance section

### `style-comparison-original` (REFERENCIA PARA COMPARAR)
- **Estado:** Aspecto ANTERIOR a cambios de estilo
- **Basada en:** Commit `5803f7b` (antes de cualquier cambio de estilo)
- **Uso:** Comparar visualmente con `main` para ver el antes/después

---

## 🏷️ Tags de Seguridad

### `backup-style-current-2026-04-17`
- **Apunta a:** Commit `398f8c0` (main actual con estilos nuevos)
- **Propósito:** Snapshot de seguridad del estado actual
- **Uso:** Si necesitas volver exactamente a este punto, usa:
  ```bash
  git checkout backup-style-current-2026-04-17
  ```

---

## 🎯 Casos de Uso

### Caso 1: Ver el aspecto ANTES de cambios de estilo
```bash
git checkout style-comparison-original
npm run dev
# Abre http://localhost:3005/AI-STEAM-MOCKUP/
```

### Caso 2: Volver a ver el aspecto ACTUAL (con cambios)
```bash
git checkout main
npm run dev
# Abre http://localhost:3005/AI-STEAM-MOCKUP/
```

### Caso 3: Comparación rápida (en otra terminal)

Terminal 1 - Aspecto anterior:
```bash
git checkout style-comparison-original
npm run dev  # Corre en puerto 3005
```

Terminal 2 - Aspecto actual:
```bash
git checkout main
npm run dev  # Corre en puerto 3006 (o siguiente disponible)
```

Abre dos ventanas del navegador lado a lado:
- http://localhost:3005/AI-STEAM-MOCKUP/ (aspecto anterior)
- http://localhost:3006/AI-STEAM-MOCKUP/ (aspecto actual)

---

## 🔐 Seguridad Garantizada

✅ **Reversible en 100%:** Ambas ramas están versionadas en remoto  
✅ **Sin reescritura de historial:** Se usó `git checkout` para crear rama (no `rebase` o `reset --hard`)  
✅ **Backup de seguridad:** El tag `backup-style-current-2026-04-17` está respaldado en GitHub  
✅ **Main intacto:** Puedes cambiar entre ramas sin perder cambios en main  

---

## 📝 Cheat Sheet Rápido

| Acción | Comando |
|--------|---------|
| Ver aspecto anterior | `git checkout style-comparison-original` |
| Volver a main | `git checkout main` |
| Ver todas las ramas | `git branch -a` |
| Ver todos los tags | `git tag -l` |
| Crear rama desde tag | `git checkout -b mi-rama backup-style-current-2026-04-17` |

---

## ⚠️ Notas Importantes

1. **Los cambios de estilo están en main:** Si necesitas revertir cambios de estilo en main, usa `git revert` (no `reset`), para mantener historial limpio.

2. **La rama `style-comparison-original` es READ-ONLY:** Se creó solo para comparar. No hagas commits en ella.

3. **Cambios locales se preservan:** Si estás en `main` con cambios no committeados, `git checkout style-comparison-original` te avisa antes de sobrescribir.

---

## 🚀 Próximos Pasos (Opcional)

Si quieres mantener una rama de desarrollo de estilos en el futuro:

```bash
# Para futuras mejoras de estilo
git checkout main
git checkout -b feature/style-v2

# Haz tus cambios...

# Luego, cuando termines:
git push origin feature/style-v2
# Crea PR en GitHub para revisar antes de mergear
```

---

**Última actualización:** 2026-04-17  
**Estado:** ✅ Listo para usar
