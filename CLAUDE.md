# Guía de Contexto - AI-STEAM Mockup

**Última actualización:** 2026-04-19 (Sesión cerrada - Prompts 3 y 4 completados)  
**Estado:** ✅ Reestructuración Track B completa - Training (3 pathways) y Sectors (transfer map) implementados

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
| Governance (Gobernanza) | `src/components/views/Governance.tsx` | ✅ Completo | All governance sections translated |
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

## ✅ Reestructuración Track B - COMPLETADA (Sesión 2026-04-19)

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

**Commits de esta sesión (2026-04-19):**
- `bc81227`: feat: Complete Prompt 3 - Restructure Training into 3 pathway tabs
- `4264f1b`: fix: Master course cards layout and link
- `08d416e`: fix: Move Track A badge inside master course cards, remove UVEG text
- `789a020`: feat(Prompt 4): Realign Sectors as AI-SECRETT transfer map

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

## 📋 Prompts Pendientes para Próxima Sesión

Quedan 3 prompts por ejecutar (en orden):

### Prompt 5 - Gobernanza, Evidencias y Entregables CEICE
Restructuring: Governance view (WPs, role-based governance, decision flows), Evidence framework (triple transition indicators, maturity levels), CEICE deliverables alignment.

### Prompt 6 - Conocimiento, Actualidad y Etiquetado Editorial
Restructuring: Knowledge section (OER flow, badge wall, success cases), News/Actualidad section (event types, institutional news), Editorial tagging (editorial policy, content labeling).

### Prompt 7 - Revisión Final de Coherencia, Copy y Datos Dummy
Final review: narrative coherence across all pages, copy consistency, dummy data labeling, performance/accessibility check, i18n completeness.

**Location:** `PROMPTS_MOCKUP_AI_STEAM_NETWORK.md`

---

## 🔄 Instrucciones para Futuras Sesiones

1. Lee este archivo (CLAUDE.md) primero para contexto rápido
2. Lee la tabla de cambios en `PROMPTS_MOCKUP_AI_STEAM_NETWORK.md` para ver qué prompts quedan
3. Los commits recientes están en rama `reestructuracion-proyecto`
4. Todas las traducciones multilingües están integradas (ES, EN, VA)
5. El sistema de transferencia AI-SECRETT está ahora más explícito en Training y Sectors
