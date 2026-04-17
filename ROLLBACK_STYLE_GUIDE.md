# Rollback Guide - Style Branch Merge

Fecha: 2026-04-17

## Hashes de referencia actuales

- `HEAD actual (rama style)`: `5803f7bad7471d3636453a32c7bdeff22a44749f`
- `main actual`: `5803f7bad7471d3636453a32c7bdeff22a44749f`
- `style actual`: `5803f7bad7471d3636453a32c7bdeff22a44749f`
- `merge-base(main, style)`: `5803f7bad7471d3636453a32c7bdeff22a44749f`

Nota importante:
- Ahora mismo los cambios de estilo están sin commit (working tree sucio). Por eso los hashes anteriores todavía coinciden.
- Para poder volver por hash a "la versión con estilo", primero hay que crear commit(s).

## Recomendación antes de mergear

1. Crear commit de cambios de estilo.
2. Crear tag de seguridad en `main` justo antes del merge.

Comandos sugeridos:

```bash
git checkout main
git pull
git tag backup-pre-style-2026-04-17
git push origin backup-pre-style-2026-04-17
```

## Escenario A - Ya mergeado en main y publicado

Usar `revert` (no reescribe historial):

1. Identificar el SHA del commit de merge.

```bash
git log --oneline --merges
```

2. Revertir el merge (manteniendo historial limpio):

```bash
git revert -m 1 <SHA_DEL_MERGE>
git push origin main
```

## Escenario B - Volver exactamente a un hash anterior

Si necesitas dejar `main` exactamente como estaba antes (reescribe historial):

```bash
git checkout main
git reset --hard backup-pre-style-2026-04-17
git push --force-with-lease origin main
```

## Escenario C - Recuperar un punto concreto de estilo

Tras crear commit de estilo, anotar aquí el hash:

- `STYLE_COMMIT_HASH`: `<PENDIENTE>`

Para volver a ese punto:

```bash
git checkout main
git cherry-pick <STYLE_COMMIT_HASH>
```

## Checklist rápido

- Si el merge ya está en remoto compartido: usar `revert`.
- Si aún no está compartido o está controlado: `reset --hard` + `--force-with-lease`.
- Mantener siempre un tag `backup-pre-*` antes de merges grandes.
