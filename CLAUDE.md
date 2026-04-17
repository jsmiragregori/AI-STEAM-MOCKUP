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

| Componente | Archivo | Estado | Fecha |
|-----------|---------|--------|--------|
| Marketplace (Banco de Retos) | `src/components/views/Marketplace.tsx` | ✅ Arreglado | 2026-04-17 |
| ChallengeDetail (Detalles de Retos) | `src/components/views/ChallengeDetail.tsx` | ✅ Arreglado | 2026-04-17 |
| Governance (Gobernanza) | `src/components/views/Governance.tsx` | ✅ Arreglado | 2026-04-17 |
| Home | `src/components/views/Home.tsx` | ✅ Correcto | — |
| Knowledge | `src/components/views/Knowledge.tsx` | ✅ Correcto | — |
| Network | `src/components/views/Network.tsx` | ✅ Correcto | — |
| Sectors | `src/components/views/Sectors.tsx` | ✅ Correcto | — |

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

## 🔧 Próximos Componentes a Traducir

- [ ] **News.tsx** (~300 líneas, contenido en ES)
- [ ] **Training.tsx** (~350 líneas, contenido en ES)

---

## 📌 Notas Importantes

1. **El merge de multilingüismo (2026-04-16)** cambió la forma de acceder a las traducciones pero no actualó completamente todos los componentes
2. **El hook `useLanguage()`** es el método recomendado y es más seguro que `useContext()` directo
3. **El contexto proporciona `translations` completo**, no filtrado por idioma, requiere acceso manual como `translations[language]`
4. **Los cambios del 2026-04-17** fueron publicados en commit `57bcd5a`

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
