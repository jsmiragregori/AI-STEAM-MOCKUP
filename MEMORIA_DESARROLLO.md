# Memoria de Desarrollo - AI-STEAM Mockup

**Última actualización:** 2026-04-21 (Sesión Content Cleanup & Branch Synchronization)  
**Estado:** ✅ Mockup limpio, references internas removidas, branches sincronizadas

---

## 🎯 Sesión 2026-04-21: Content Cleanup & Branch Sync

### Cambios Realizados

#### 1. Limpieza de Referencias Internas
**Objetivo:** Remover referencias a detalles internos de AI-SECRETT que no deben exponerse públicamente.

**Archivos modificados:**
- `src/translations.ts` — 3 cambios

**Específicamente:**
- ✅ Removido "(CEICE)" de títulos FP en ES, EN, VA:
  - ES: "FP y Ciclos Formativos CEICE" → "FP y Ciclos Formativos"
  - EN: "VET and CEICE Training Cycles" → "VET and Training Cycles"
  - VA: "FP i Cicles Formatius CEICE" → "FP i Cicles Formatius"

- ✅ Generalizado descriptor de evidencias sectoriales (removidos milestones específicos):
  - **De:** "Generador de evidencias sectoriales (CEICE) para hitos como el Milestone 14 y entregables D2.2, D4.2 y D6.2 de AI-SECRETT"
  - **A:** "Generador de evidencias sectoriales que proporciona datos e indicadores para validar el impacto educativo y sectorial del programa"
  - Aplicado en ES, EN, VA

#### 2. Reordenación de Secciones Home

**Archivo:** `src/components/views/Home.tsx`

**Cambios:**
- ✅ Invertido orden de cards en "Foco Educativo Dual":
  - **Antes:** Master → FP
  - **Ahora:** FP → Master
- ✅ Razonamiento: FP es el nivel inicial, Master es el puente académico avanzado

#### 3. Eliminación de Bloque de Credenciales

**Archivo:** `src/components/views/Training.tsx`

**Cambios:**
- ✅ Eliminado completamente el bloque "Credentials Framework":
  - Disclaimer amarillo (línea 315)
  - 4 cards de certificaciones (EDC, Open Badges, Europass, TÜV)
  
**Razonamiento:** Evitar confusión con Track A (donde van las certificaciones formales). Track B es community-focused, no credenciales.

#### 4. Reordenación de Menú de Navegación

**Archivo:** `src/components/Header.tsx`

**Cambios:**
- ✅ Intercambiado orden: Gobernanza antes que Noticias (Actualidad)
- ✅ Nuevo orden: inicio → red → sectores → banco-retos → formacion → conocimiento → **gobernanza** → **actualidad**

**Razonamiento:** Gobernanza es estructura, Actualidad es contenido dinámico. Estructura primero.

#### 5. Cherry-pick a offline-ready

**Proceso:**
```bash
git checkout offline-ready
git cherry-pick 3d7217c  # Commit con los 5 cambios de main
```

**Resultado:**
- ✅ Commit `4eeff1c` en offline-ready con todos los cambios
- ✅ Auto-merge exitoso (sin conflictos)
- ✅ Ambas ramas sincronizadas

### Commits Generados

| Rama | Commit | Descripción |
|------|--------|-------------|
| main | `3d7217c` | Refine Track B presentation and menu organization |
| offline-ready | `4eeff1c` | (cherry-pick de 3d7217c) |

### Estado Final

- ✅ Working tree limpio (git status: clean)
- ✅ main sincronizado con origin/main
- ✅ offline-ready pusheado con los cambios
- ✅ Servidor offline-ready verificado en http://localhost:3000 (cambios visibles)
- ✅ Branches en remoto: main (`3d7217c`), offline-ready (`4eeff1c`)

---

## 📝 Guía para Próxima Sesión (desde otro PC)

### 1. Verificar Estado del Repo
```bash
git log --oneline -5          # Ver últimos commits (debe aparecer 3d7217c)
git branch -a                 # Verificar main y offline-ready
git status                    # Confirmar working tree limpio
```

### 2. Cambiar entre Versiones (SIGUE GUIA_CAMBIO_VERSIONES.md)

**Online (main):**
```bash
git checkout main
npm run dev
# http://localhost:3000
```

**Offline (offline-ready):**
```bash
git checkout offline-ready
npm run dev:offline
# http://localhost:3000
```

### 3. Cambios Visibles en la Sesión 2026-04-21

Si abres el navegador verás:
- ✅ Página de inicio: "Foco Educativo Dual" — FP primero (naranja), Master segundo (púrpura)
- ✅ Menú superior: Gobernanza antes que Noticias
- ✅ Sección Formación: Sin bloque amarillo de credenciales
- ✅ Todos los idiomas (ES, EN, VA): Títulos de FP sin CEICE, descripciones genéricas

---

## 🔄 Notas Técnicas

### Archivos Modificados
- `src/translations.ts` — Títulos y descriptores (3 idiomas)
- `src/components/Header.tsx` — Orden de navegación
- `src/components/views/Home.tsx` — Orden de cards
- `src/components/views/Training.tsx` — Eliminación de bloque

### Decisiones de Diseño

1. **CEICE en subtítulos:** Se mantiene "Coordinado por CEICE" en los subtítulos de las cards para no perder claridad de responsables.
2. **Credenciales removidas:** Solo Track A (Master) tiene credenciales formales. Track B es red comunitaria.
3. **Referencias internas:** Milestone 14, D2.2, D4.2, D6.2 son internos de AI-SECRETT. La web es pública y Track B es el foco.
4. **Orden de menú:** Gobernanza = estructura/responsabilidades, Actualidad = noticias. Estructura primero para claridad.

---

## ✅ Tareas Completadas

- [x] Remover referencias internas (CEICE, milestones, deliverables)
- [x] Generalizar descriptores para audiencia pública
- [x] Reordenar Foco Educativo Dual (FP → Master)
- [x] Eliminar bloque de credenciales
- [x] Intercambiar orden de menú (Gobernanza → Actualidad)
- [x] Cherry-pick a offline-ready sin conflictos
- [x] Verificar offline-ready en navegador
- [x] Pushear ambas ramas a remoto
- [x] Actualizar memorias de desarrollo

---

## 📋 Próximas Sesiones (si aplica)

- Revisar si hay feedback de stakeholders sobre reordenamientos
- Verificar que offline-ready funcione en modo completamente offline
- Considerar modularizar `translations.ts` si crece más (líneas > 2500)

---

**Creado:** 2026-04-21  
**Por:** Claude Haiku 4.5  
**Ramas sincronizadas:** main, offline-ready  
