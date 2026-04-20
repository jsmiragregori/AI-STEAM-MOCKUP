# Guía de Cambio Entre Versiones (Online / Offline)

Esta guía explica cómo cambiar entre las dos versiones del proyecto y cómo arrancar el servidor local en cada caso.

## 1) Qué es cada rama

- `main`: versión **online** (flujo normal de desarrollo).
- `offline-ready`: versión preparada para **trabajo/demo sin conexión**.

## 2) Cambiar a versión online

```bash
git checkout main
git pull origin main
npm run dev
```

Servidor local:
- URL habitual: `http://localhost:3000`

## 3) Cambiar a versión offline

```bash
git checkout offline-ready
npm run dev:offline
```

Servidor local:
- URL habitual: `http://localhost:3000`

Notas:
- Esta versión activa `VITE_OFFLINE_MODE=true` (archivo `.env.offline`).
- Los enlaces externos quedan deshabilitados visualmente.
- Las banderas usan fallback seguro (emoji) si no hay red o falla carga remota.

## 4) Verificar que offline está bien antes de una demo

```bash
git checkout offline-ready
npm run build:offline
```

Checklist rápido:
- Build sin errores.
- En `Network`, las banderas se ven (aunque sea en fallback emoji).
- Los botones con destino externo no rompen UI.

## 5) Mantener la versión offline al día con la online

Haz esto cuando haya cambios nuevos en `main`:

```bash
git checkout main
git pull origin main
git checkout offline-ready
git merge main
npm run build:offline
```

Si hay conflictos:
- Resolverlos en `offline-ready`.
- Volver a lanzar `npm run build:offline`.

## 6) Flujo recomendado de trabajo

1. Desarrollar en `main` (online).
2. Cuando necesites preparar demo offline: pasar a `offline-ready`.
3. Sincronizar `offline-ready` con `main` regularmente (merge).

## 7) Comandos de referencia rápida

```bash
# Online
git checkout main
npm run dev

# Offline
git checkout offline-ready
npm run dev:offline

# Build de seguridad offline
npm run build:offline
```

## 8) Archivo clave para pedirme la operación

Si quieres que yo lo haga por ti en cada sesión, puedes pedírmelo con este formato:

- "Sigue `GUIA_CAMBIO_VERSIONES.md`: pásame a online y arranca servidor"
- "Sigue `GUIA_CAMBIO_VERSIONES.md`: pásame a offline, sincroniza con main y verifica build"
