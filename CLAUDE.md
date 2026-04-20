# Guía de Contexto - AI-STEAM Mockup

**Última actualización:** 2026-04-20 (Sesión QA - ENRED alignment, statistics homogenization)  
**Estado:** ✅ Proyecto Mockup, Reestructuración y QA Finalizados (ES, VA, EN)

---

## 🎯 Contexto del Proyecto

Este es el mockup interactivo de **AI-STEAM Network**, una plataforma de retos educativos multilingües (ES, EN, VA) que conecta estudiantes de FP y Máster con desafíos reales de empresas e instituciones.

---

## 🌍 Sistema de Traducciones Multilingües

### Estructura Global
```
translations = {
  es: { header: {...}, nav: {...}, marketplace: {...}, ... },
  en: { header: {...}, nav: {...}, marketplace: {...}, ... },
  va: { header: {...}, nav: {...}, marketplace: {...}, ... }
}
```

### Contexto de Lenguaje (LanguageContext.tsx)
- **Archivo:** `src/context/LanguageContext.tsx`
- **Proporciona:** `language`, `setLanguage`, `t()`, `translations`
- **Estructura del contexto:**
  ```tsx
  {
    language: 'es' | 'en' | 'va',
    setLanguage: (lang: Language) => void,
    t: (key: string) => any,
    translations: { es: {...}, en: {...}, va: {...} }  // ← Objeto COMPLETO, no filtrado
  }
  ```

### ✅ FORMA CORRECTA de Acceder a Traducciones

**Patrón 1: Usando el hook `useLanguage()` (RECOMENDADO)**
```tsx
import { useLanguage } from '../../context/LanguageContext';

export default function Component() {
  const { t } = useLanguage();  // Usa la función t() con notación de punto
  
  // Acceso directo con notación de punto
  const title = t('home.title');           // string
  const home = t('home');                   // Record<string, string>
}
```

**Patrón 2: Usando `useContext()` (Para casos especiales)**
```tsx
import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';

export default function Component() {
  const languageContext = useContext(LanguageContext);
  const language = languageContext?.language || 'es';
  
  // ⚠️ IMPORTANTE: translations tiene estructura { es: {...}, en: {...}, va: {...} }
  // Acceso correcto:
  const t = languageContext?.translations[language]?.marketplace || {};
  
  // Uso:
  const title = t.title;       // "Banco de Retos"
  const desc = t.description;  // Descripción...
}
```

### ❌ ERRORES COMUNES

❌ **INCORRECTO:**
```tsx
const t = languageContext?.translations.marketplace || {};
// marketplace NO es una propiedad de translations
// translations[language] sí lo es
```

✅ **CORRECTO:**
```tsx
const t = languageContext?.translations[language]?.marketplace || {};
```

---

## 📋 Componentes Actualizados (2026-04-17)

| Componente | Archivo | Estado | Detalles |
|-----------|---------|--------|----------|
| Marketplace (Banco de Retos) | `src/components/views/Marketplace.tsx` | ✅ Completo | Deadline label, team singular/plural |
| ChallengeDetail (Detalles de Retos) | `src/components/views/ChallengeDetail.tsx` | ✅ Completo | All challenge details translated |
| Governance (Gobernanza) | `src/components/views/Governance.tsx` | ✅ Completo (2026-04-19) | Dual Track, ENRED, límites de responsabilidad y flujo operativo |
| News (Actualidad) | `src/components/views/News.tsx` | ✅ Completo | Event type translations (Presencial, Online, Híbrido) |
| Training (Formación) | `src/components/views/Training.tsx` | ✅ Completo (2026-04-19) | 3 tabs: FP/VET, Teacher Training, Master Bridge |
| Home | `src/components/views/Home.tsx` | ✅ Completo | All home sections translated |
| Knowledge (Conocimiento) | `src/components/views/Knowledge.tsx` | ✅ Completo | All knowledge sections translated |
| Network (Red) | `src/components/views/Network.tsx` | ✅ Completo | Stakeholder roles and descriptions |
| Sectors (Sectores) | `src/components/views/Sectors.tsx` | ✅ Completo (2026-04-19) | Transfer chain view, FP/VET skills, bridge candidates |

---

## 📝 Archivo de Traducciones

**Ubicación:** `src/translations.ts`  
**Líneas por idioma:**
- ES (Español): línea 4 hasta 229
- EN (Inglés): línea 230 hasta 447
- VA (Valenciano): línea 448 hasta final

**Estructura de cada idioma:**
```tsx
es: {
  header: { ... },
  nav: { ... },
  footer: { ... },
  cookieBanner: { ... },
  home: { ... },
  marketplace: {
    title: 'Banco de Retos',
    description: '...',
    openChallenges: 'Abiertos',
    inProgressChallenges: 'En Resolución',
    resolvedChallenges: 'Resueltos',
    // ... más propiedades
  },
  challengeDetail: { ... },
  // ... más secciones
}
```

---

## ✅ Reestructuración Track B y QA Final - COMPLETADA (Sesión 2026-04-19)

**Prompts ejecutados:**

### Prompt 3: Restructure Training into 3 Pathways
- ✅ Actualizar VA translation section (fpSkills, teacherTopics, masterBridgeItems, disclaimers)
- ✅ Reescribir Training.tsx con 3 tabs principales:
  - **Tab 1 (FP/VET)**: 9-skill grid + filtered FP course cards + pathway steps
  - **Tab 2 (Teacher Training)**: 6-topic list + Docentes course cards + CEFIRE note
  - **Tab 3 (Master Bridge)**: disclaimer amber, 4 bridge items, master cards con "Track A" badge, pathway steps
- ✅ Update stats: microCredentialsPilots=6, countries=11 (real data)
- ✅ All 3 languages (ES, EN, VA) fully translated

### Prompt 4: Realign Sectors as AI-SECRETT Transfer Map
- ✅ Verify exactly 7 sectors (no changes needed)
- ✅ Add new fields per sector:
  - `stakeholderTypes`: 3 tipos concretos de stakeholders
  - `teacherRelevance`: relevancia para formación docente
  - `exampleChallenge`: reto prototipo marcado como demo
- ✅ Rename labels:
  - FP Modules → "FP/VET Skills (prototype examples)"
  - Master Topics → "Academic Bridge Candidates"
- ✅ Add "Transfer Chain" visual view per sector
- ✅ Rewrite all sector descriptions: triple transition, ethics/privacy, no techno-solutionism
- ✅ Update keywords: ODS, algorithmic equity, digital divide, food sovereignty
- ✅ Mark stats as demo: Retos (demo), Skills FP/VET (demo)
- ✅ All 3 languages (ES, EN, VA) fully translated

### Ajustes de copy Home/Sectors: "Retos y casos"
- ✅ Hero Home: `home.stats.totalChallenges` cambiado a "Retos y Casos" / "Challenges & Cases" / "Reptes i Casos"
- ✅ Sectors: contador superior y tarjetas cambiado a "Retos y casos" / "Challenges & cases" / "Reptes i casos"
- ✅ Eliminado "(demo)" visible de contadores de Sectores y de Skills FP/VET en estadísticas superiores
- ✅ Commit: `68eb3e1` - `Update challenges and cases labels`

### Prompt 5: Gobernanza, Track Boundaries y AI-STEAM Network
- ✅ Governance refinada para presentación a socios, centrada en la AI-STEAM Network y no en obligaciones administrativas puras de AI-SECRETT
- ✅ Añadido bloque "Data and responsibility boundaries":
  - CEICE: datos de miembros, participación comunitaria, ENRED/AI-STEAM, retos/casos y evidencias Track B
  - UVEG/socios académicos: expedientes, evaluación del Máster, criterios docentes, ECTS y decisiones curriculares Track A
  - ConsensUE/Decidim: participación, deliberación, votaciones y trazabilidad
  - Aules/PortalEdu: entornos de aprendizaje/recursos según responsable de actividad
- ✅ Añadido "Operating flow":
  - Input stakeholder/ENRED/centro → clasificación → validación → actividad/recurso/piloto → evidencia → seguimiento
- ✅ Reforzado ENRED como base institucional previa y AI-STEAM como evolución temática dentro de AI-SECRETT
- ✅ Corregidos textos conflictivos:
  - "co-diseñar currículo" → "informar necesidades, validar relevancia y contribuir casos/retos"
  - CEICE/Track B no decide ECTS, evaluación ni currículo del Máster
  - Aules se describe como entorno de aprendizaje; la evaluación y ECTS del Máster quedan bajo Track A
- ✅ Se eliminó el dashboard "Evidence for CEICE deliverables" porque confundía el foco: era demasiado AI-SECRETT administrativo y aportaba poco a AI-STEAM Network
- ✅ Subtítulo de ConsensUE cambiado:
  - "Plataforma Decidim" → "Plataforma ConsensUE" (ES/VA)
  - "Decidim Platform" → "ConsensUE Platform" (EN)
- ✅ Build verificado con `npm run build`
- ✅ Commit: `f165982` - `Refine governance terminology and track boundaries`

**Commits de esta sesión (2026-04-19):**
- `bc81227`: feat: Complete Prompt 3 - Restructure Training into 3 pathway tabs
- `4264f1b`: fix: Master course cards layout and link
- `08d416e`: fix: Move Track A badge inside master course cards, remove UVEG text
- `789a020`: feat(Prompt 4): Realign Sectors as AI-SECRETT transfer map
- `68eb3e1`: Update challenges and cases labels
- `f165982`: Refine governance terminology and track boundaries

---

## 📌 Notas Importantes

1. **El merge de multilingüismo (2026-04-16)** cambió la forma de acceder a las traducciones - ahora completamente implementado
2. **El hook `useLanguage()`** es el método recomendado y es más seguro que `useContext()` directo
3. **El contexto proporciona `translations` completo**, no filtrado por idioma, requiere acceso manual como `translations[language]`
4. **Los cambios del 2026-04-16** fueron publicados en commit `57bcd5a`
5. **Los cambios finales de traducción del 2026-04-17** están en commits:
   - `dca2f99`: Complete multilingual translations for Marketplace and Training
   - `8a1d0ab`: Add event type translation to News component
   - `d4706bf`: Fix - Allow nested objects in translation function return type (resuelve News section)

## 🐛 Bug Fixes Sesión Actual (2026-04-17)

### 1. News Section Type Issue
**Problema:** News section mostraba contenido solo en VA, no en ES/EN  
**Causa:** Restricción de tipo en `LanguageContext.tsx` - `t()` estaba tipada como `(key: string) => string | Record<string, string>`, lo que impedía acceso a objetos anidados  
**Solución:** Cambiar retorno de `t()` a `any` para soportar estructuras de datos arbitrarias  
**Commit:** `d4706bf`  
**Impacto:** News (Actualidad) ahora funciona correctamente en ES, EN y VA

### 2. Category Filter Reset Issue
**Problema:** Al cambiar de idioma, el filtro de categoría se quedaba en la categoría del idioma anterior  
**Causa:** `categoryFilter` (estado) no se actualizaba cuando cambiaba el idioma  
**Solución:** Agregar `useEffect` para resetear `categoryFilter` cuando `language` cambia  
**Commit:** Incluido en cambios de News  
**Impacto:** Filtro de categoría se sincroniza correctamente con cambios de idioma

### 3. Social Link Update
**Cambio:** Reemplazar Zenodo por Substack en sección "Follow Us"  
**Descripciones agregadas:**
- ES: "Substack – Artículos y Papers"
- EN: "Substack – Articles and Papers"  
- VA: "Substack – Articles i Papers"
**Commits:** `a2ace48`, `9f8ee09`, `46b5f1e`

---

## ✅ Sesión QA Final (2026-04-20) - ENRED Alignment & Statistics Homogenization

### Cambios Realizados

#### 1. ENRED Narrative Alignment
- ✅ Aplicado lenguaje complementario ("builds on", "benefits from") en lugar de sucesión
- ✅ Cambio de icono en Home hero: ArrowRightCircle → Link2 (conexión, no transformación)
- ✅ Agregado sistema dinámico de tags ENRED en Home.tsx (enredBlock?.enredTags, networkTags)
- ✅ Profundo análisis de Referencias de ENRED en toda la web para alineación coherente
- **Commit:** `3f4d8e0`

#### 2. Remoción de Subsistema de Insignias/Badges
- ✅ Eliminado tabs.badgesTab de Training.tsx
- ✅ Removidas propiedades badge de todos los 8 course objects en translations.ts
- ✅ Eliminado statsBadges de estadísticas
- ✅ Removido entire badges data array (8 badge objects)
- ✅ Removidos badgesTitle, badgesDesc, badgesIssues, badgesCriteria de translations
- ✅ Eliminada la sección JSX de insignias (222 líneas) en Knowledge.tsx
- **Commits:** Incluido en cleanup session anterior

#### 3. Remoción de Entregables AI-SECRETT
- ✅ Eliminado news11 (referencias a entregables de AI-SECRETT)
- ✅ Eliminado "entregables" pills del hero description
- **Impacto:** News section (Actualidad) enfocada en logros de AI-STEAM Network, no en obligaciones administrativas

#### 4. Corrección de Knowledge Component
- ✅ Removida línea `badgesData = t('knowledge.badges')`
- ✅ Removida tab 'insignias' de KnowledgeTab type
- ✅ Removida entrada 'insignias' de tabs array
- ✅ Removido badges statistics card (reduce operation)
- ✅ Removido JSX rendering block completo de badges tab (222 líneas)
- **Impacto:** Knowledge component ahora renderiza correctamente sin blank page

#### 5. Homogeneización de Micro-Credenciales
- ✅ Cambio: "Pilotos de micro-credencial" → "Pilotos Activos"
- ✅ Cambio: Hero stat "Micro-credenciales" → "Experiencias Piloto"
- ✅ Removidas referencias de micro-credenciales de Track B (solo Track A/Master)
- ✅ Clarificadas descripciones Track A para mencionar ECTS credits, no micro-credenciales

#### 6. Corrección de País Count (11 → 12)
- ✅ Identificado Bosnia and Herzegovina como 1 país (no 2)
- ✅ Identificado LAUREA (Finlandia) como 12º país faltante
- ✅ Home.tsx: "12 países europeos" en stat
- ✅ translations.ts: "12 países europeos" en master descriptions (ES, EN, VA)
- ✅ News (VA): Corrección de lista de países en lanzamiento oficial GVA
- **Commits:** `a456fdf`, `967ef0c`

#### 7. Homogeneización de Miembros del Consorcio (22/23)
- ✅ Agregado `consortiumLabel: '23 miembros/members/membres'` a challengeDetail en ES, EN, VA
- ✅ Creada sección completa challengeDetail en ES (faltaba)
- ✅ Corregido Home.tsx: "11 countries2" → "12 countries"
- ✅ Agregado LAUREA (Finland) a Network.tsx partners array → ahora 23 partners dinámicos
- ✅ Network geographic coverage ahora muestra 12 países automáticamente
- **Commits:** `967ef0c`, `6d9a181`

### Commits de Esta Sesión (2026-04-20)
- `967ef0c`: Add Finland (LAUREA) to Network geographic coverage
- `6d9a181`: Homogenize consortium member count to 23 across all pages

### Estado Final
- ✅ Build exitoso (npm run build: Exit code 0)
- ✅ Todos los cambios pusheados a origin/main
- ✅ Mockup limpio, consistente y listo para stakeholders
- ✅ ENRED relationship properly positioned (complementary, not successor)
- ✅ Master-exclusive elements (badges, micro-credentials) isolated
- ✅ Statistics homogenized: 23 consortium members, 12 European countries

### Tareas Pendientes
- ✅ Ninguna identificada. Proyecto en estado estable.

---

## 🔄 Instrucciones de Cierre de Sesión

**Cuando llegues al final de la sesión, di:**
- "Cerrar sesión"
- "Cierre de sesión"  
- "Fin de sesión"
- O cualquier variante similar

**Yo actualizaré automáticamente:**
1. Este archivo (CLAUDE.md) con cambios nuevos
2. El archivo de memoria en `.claude/projects/d--Github-AI-STEAM-MOCKUP/memory/`
3. Registraré commits realizados y problemas resueltos
4. Apuntaré tareas pendientes para la próxima sesión

---

### Prompt 6: Conocimiento, Actualidad y Etiquetado Editorial (COMPLETADO)
- ✅ Inclusión de noticia oficial (GVA) de lanzamiento del proyecto AI-SECRETT con 7,2 M€ de financiación.
- ✅ Reestructuración del JSON en `translations.ts` para arreglar corrupción en bloque VA (mismatch de llaves y contenidos fantasma).
- ✅ Cambio de titular a "dotado con" / "dotat amb" / "endowed with" para mayor precisión.

### Prompt 7: Revisión Final de Coherencia, Copy y Datos Dummy (COMPLETADO)
- ✅ Modificado el hero description (isItems) en la Home para referenciar hitos precisos: "Generador de evidencias sectoriales (CEICE) para hitos como el Milestone 14 y entregables D2.2, D4.2 y D6.2 de AI-SECRETT".
- ✅ Verificación de build (`npm run build`) exitosa (Exit code 0).
- ✅ Merge de la rama `reestructuracion-proyecto` hacia `main` e integración total de todas las fases.
- ✅ Generado informe de QA final en `QA_FINAL_REVIEW.md`.

**Commits de esta sesión (Finalización):**
- `172f543`: Actualización de titular de noticia oficial (GVA) y sincronización multilingüe
- `5aca7b3`: QA Final: Inserción de referencias explícitas a hitos (Milestone 14) y entregables D2.2, D4.2, D6.2
- `66b4a2a`: QA Final: Añadido informe de revisión final en markdown
- Integración final (`git merge`) en `main` y subida limpia al remoto (origin).

---

## 📋 Prompts Pendientes para Próxima Sesión

✅ **No quedan prompts pendientes.** Todo el *PROMPTS_MOCKUP_AI_STEAM_NETWORK.md* ha sido ejecutado.

**Location:** `PROMPTS_MOCKUP_AI_STEAM_NETWORK.md`

---

## 🔄 Instrucciones para Futuras Sesiones

1. Lee este archivo (CLAUDE.md) primero para contexto rápido
2. El proyecto se encuentra actualmente en la rama `main` y está limpio y consolidado.
3. Todas las traducciones multilingües están integradas (ES, EN, VA) en `src/translations.ts`. Si dicho fichero crece mucho, modularizar.
4. El sistema de transferencia AI-SECRETT es claro ("Track A vs Track B"). Respetar los límites si se agregan nuevos copys en el futuro.
5. El Mockup es seguro para demostraciones a terceros y stakeholders. Revisar anchos muy pequeños (<360px) en producciones reales.

---

## ✅ Sesión de Ajustes UX/CTA y Coherencia Editorial (2026-04-20)

### Cambios Realizados

#### 1. Contribuciones del Ecosistema
- Se amplió la sección antes centrada en "Retos y Casos" para representar mejor la variedad real de aportaciones de la AI-STEAM Network.
- Se añadieron contribuciones demo de tipo:
  - Validación
  - Mentoría
  - Pilotaje
  - Recurso
- El encabezado del marketplace pasó a "Contribuciones del Ecosistema" / "Ecosystem Contributions" / "Contribucions de l'Ecosistema".
- Se mantuvo la narrativa segura: contenido demo, Track B como vía principal y Track A solo cuando proceda.
- **Commit:** `d6234a7` - `Refine contribution mockup and remove private access`

#### 2. Formulario de Propuesta de Contribución
- El formulario del mockup se mantiene como demo.
- Se aclaró que el canal real estará vinculado a ConsensUE para propuestas de miembros/stakeholders cuando proceda.
- Se explicitó que no es un formulario público abierto para cualquier usuario.
- **Commit:** `d6234a7`

#### 3. Eliminación del Acceso al Área Privada
- Eliminado el botón "Acceso Área Privada" del header en desktop, tablet y móvil.
- Eliminada referencia visible al Área Privada en la CTA de detalle de retos.
- **Commit:** `d6234a7`

#### 4. Formación
- Corregido contraste del botón "Acceder a Aules" manteniendo coherencia con CTAs sobre fondo azul: `bg-eu-orange`, `text-white`, hover `bg-eu-purple`.
- Corregida estadística de países en Formación: `11` → `12`.
- **Commits:**
  - `347661e` - `Align Aules CTA styling in training`
  - `d7cb46e` - `Unify stakeholder adhesion flow`

#### 5. Stakeholder Adhesion Flow
- Se unificó el formulario de adhesión: existe solo en "La Red".
- La CTA de "Sectores" ahora lleva al formulario de adhesión de "La Red", abre la pestaña de stakeholders y despliega el formulario.
- El formulario añadió campos útiles para ubicar al stakeholder:
  - Región / territorio
  - Tipo de aportación prevista
- Se aclaró que, tras la solicitud, un miembro del consorcio contactará con la organización para completar el proceso según país, región, sector y tipo de aportación.
- **Commit:** `d7cb46e`

#### 6. Normalización Terminológica
- Corregido uso en castellano de `PYMES`:
  - `PIMES` / `PYMEs` → `PYMES`
  - Singular `PYME` ya estaba correcto.
- Se respetó `PIME/PIMES` en valenciano.
- **Commit:** `d7cb46e`

#### 7. CTA de Participación en Detalle de Contribuciones
- Sustituida la lógica "Inscribe tu equipo" por una solicitud de participación revisada.
- Nueva CTA principal:
  - ES: "Solicitar participación"
  - EN: "Request participation"
  - VA: "Sol·licitar participació"
- La CTA se adapta al tipo de contribución:
  - Reto: solicitar participación
  - Caso: usar o validar caso
  - Validación: contribuir a validación
  - Mentoría: ofrecer mentoría
  - Pilotaje: solicitar pilotaje
  - Recurso: proponer o reutilizar recurso
- Se añadió formulario de solicitud de participación en el detalle, con:
  - Datos de contacto
  - Rol
  - Tipo de participación
  - Vía preferente
  - Contexto
  - Disponibilidad
  - Confirmaciones éticas y de datos
- Se aclaró que la solicitud no implica aceptación automática.
- Se ajustó ConsensUE: no es necesariamente la vía de entrada, sino el espacio al que la solicitud se eleva cuando requiere debate, validación comunitaria, aprobación formal, trazabilidad o seguimiento.
- **Commit:** `3c3f8f3` - `Refine contribution participation CTA`

#### 8. Lenguaje Neutro en Detalle
- Como la ficha puede mostrar retos, casos, validaciones, mentorías, pilotajes o recursos, se eliminaron etiquetas genéricas con "del reto":
  - "Descripción del Reto" → "Descripción"
  - "Hitos del Reto" → "Hitos"
  - "Mentores del Reto" → "Mentores"
  - "Reto completado" → "Contribución completada"
- **Commit:** `3c3f8f3`

### Verificación
- `npm run build` ejecutado correctamente tras los cambios.
- Único aviso persistente: warning habitual de Vite por chunk JS >500 kB.
- Todos los cambios funcionales fueron pusheados a `origin/main`.

### Commits de Esta Sesión
- `d6234a7`: Refine contribution mockup and remove private access
- `347661e`: Align Aules CTA styling in training
- `d7cb46e`: Unify stakeholder adhesion flow
- `3c3f8f3`: Refine contribution participation CTA

### Estado Final
- Rama activa: `main`
- Working tree limpio antes de actualizar esta memoria de cierre.
- Mockup mantiene separación Track B / Track A.
- ConsensUE queda descrito como espacio de deliberación, validación, aprobación y trazabilidad cuando proceda, no como canal universal de entrada.
- Aules queda reservado para formación estructurada, recursos docentes, certificación o actividades educativas cuando proceda.

### Tareas Pendientes
- Ninguna tarea funcional pendiente identificada.
- Deuda técnica conocida: `translations.ts` sigue creciendo y convendría modularizar si continúan las iteraciones.
