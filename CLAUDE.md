# Guía de Contexto - AI-STEAM Mockup

**Última actualización:** 2026-04-17  
**Estado:** Sesión abierta - Información crítica del sistema de traducciones

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
    t: (key: string) => string | Record<string, string>,
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
| Training (Formación) | `src/components/views/Training.tsx` | ✅ Completo | Level, status, modality, sector labels |
| Home | `src/components/views/Home.tsx` | ✅ Completo | All home sections translated |
| Knowledge (Conocimiento) | `src/components/views/Knowledge.tsx` | ✅ Completo | All knowledge sections translated |
| Network (Red) | `src/components/views/Network.tsx` | ✅ Completo | Stakeholder roles and descriptions |
| Sectors (Sectores) | `src/components/views/Sectors.tsx` | ✅ Completo | Sector names, descriptions, keywords |

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

## ✅ Traducción Multilingüe - COMPLETADA

Todos los componentes principales tienen soporte multilingüe completo (ES, EN, VA). 

**Cambios en esta sesión (2026-04-17):**
- ✅ Fixed hardcoded deadline label "Plazo" and team singular/plural in Marketplace
- ✅ Added level/status/modality/sector label translations to Training component
- ✅ Added event type translation to News component (Presencial → In-person/Presencial)

---

## 📌 Notas Importantes

1. **El merge de multilingüismo (2026-04-16)** cambió la forma de acceder a las traducciones - ahora completamente implementado
2. **El hook `useLanguage()`** es el método recomendado y es más seguro que `useContext()` directo
3. **El contexto proporciona `translations` completo**, no filtrado por idioma, requiere acceso manual como `translations[language]`
4. **Los cambios del 2026-04-16** fueron publicados en commit `57bcd5a`
5. **Los cambios finales de traducción del 2026-04-17** están en commits:
   - `dca2f99`: Complete multilingual translations for Marketplace and Training
   - `8a1d0ab`: Add event type translation to News component

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

**Instrucciones para futuras sesiones:** Lee este archivo primero para contexto rápido sobre el sistema de traducciones.
