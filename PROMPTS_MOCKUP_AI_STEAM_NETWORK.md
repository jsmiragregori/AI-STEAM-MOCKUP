# Prompts para Evolucionar el Mockup AI-STEAM Network

Este documento contiene una secuencia de prompts para aplicar, uno tras otro, sobre el proyecto del mockup publicado en GitHub Pages:

`https://jsmiragregori.github.io/AI-STEAM-MOCKUP/`

La recomendación es no ejecutar todo como un único prompt. La modificación afecta a narrativa estratégica, arquitectura de información, datos dummy, relación con el máster, ENRED, stakeholders, FP, formación del profesorado, microcredenciales y evidencias CEICE. Separarlo en fases reduce el riesgo de romper el mockup o desalinearlo con AI-SECRETT.

Los contenidos seguirán siendo dummy cuando sean métricas, retos, estadísticas, inscripciones, badges, descargas o actividad de usuarios. Los contenidos que sí deben mantenerse alineados con el proyecto son: nombre AI-SECRETT, CEICE, UVEG, relación Track A/Track B, ENRED, 7 sectores AI-SECRETT, socios/paises del consorcio si ya existen en datos del mockup, WPs/entregables CEICE y plataformas CEICE mencionadas.

---

## Prompt 1 - Reorientar Narrativa Principal y Home

```text
Actúa como lead product strategist, UX writer y senior frontend engineer del mockup AI-STEAM Network.

Necesito reorientar la portada y el relato principal del MVP para que esté estrictamente alineado con AI-SECRETT.

Contexto estratégico:
- AI-STEAM Network es un subproyecto/comunidad dentro de AI-SECRETT liderado por CEICE.
- No es un máster paralelo.
- No es solo una web o repositorio.
- Es el Track B / Education Community Track: la capa de comunidad, transferencia, stakeholders, FP/VET, formación del profesorado, retos/casos del ecosistema y evidencias.
- El máster pertenece al Track A académico, liderado por UVEG y socios académicos. La red puede alimentar el máster con necesidades, retos, validación y casos, pero no gobierna el currículo, los ECTS ni la evaluación.
- ENRED es la base institucional previa de CEICE: red europea de departamentos regionales de educación. AI-STEAM Network debe presentarse como evolución temática de ENRED dentro de AI-SECRETT, centrada en IA, STEAM, creatividad y triple transición.

Objetivo de esta fase:
Reescribe y reorganiza la home para que, al abrir la web, un socio del consorcio entienda en 30 segundos:
- qué es la AI-STEAM Network;
- qué papel tiene CEICE;
- cómo se diferencia del máster;
- cómo conecta con ENRED;
- cómo activa stakeholders, FP y formación docente;
- cómo genera evidencias para AI-SECRETT.

Cambios concretos:
1. Añade un bloque hero con mensaje claro:
   "AI-STEAM Network is CEICE's Track B ecosystem for AI-SECRETT: a community and transfer layer connecting ENRED, stakeholders, VET/FP, teacher training and the 7 AI-SECRETT sectors."
   Adapta el texto a los idiomas existentes del mockup si la app ya tiene i18n.

2. Sustituye CTAs demasiado estrechos:
   - Cambia "Sube tu Reto Industrial" por "Propose a challenge, case or contribution".
   - Cambia "Solicita adhesión a la Red" por "Join the AI-STEAM Network".
   Mantén traducciones equivalentes.

3. Añade un bloque "What this network is / is not":
   - Is: Track B community and transfer layer.
   - Is: stakeholder activation, VET/FP transfer, teacher training, sectoral evidence.
   - Is not: a parallel Master.
   - Is not: an unvalidated certification platform.
   - Is not: a simple content repository.

4. Añade un bloque "From ENRED to AI-STEAM":
   Explica que ENRED aporta cooperación entre departamentos educativos regionales europeos, intercambio de buenas prácticas, visitas/relaciones institucionales e internacionalización educativa. AI-STEAM Network especializa esa base dentro de AI-SECRETT.

5. En las estadísticas de home, marca explícitamente los datos dummy:
   - Añade una etiqueta "MVP demo indicators" o "Demo data for prototype".
   - No presentes métricas dummy como resultados reales.

6. Cambia "7 sectores clave de la economía valenciana y europea" por "7 AI-SECRETT sectoral areas".

7. Mantén el diseño general si funciona, pero mejora jerarquía narrativa. La home debe parecer una presentación institucional preparada para socios del consorcio.

Restricciones:
- No inventes datos reales nuevos.
- Si una cifra es dummy, etiquétala como demo.
- No elimines navegación existente todavía.
- No rompas multilingüismo.
- Mantén la app compilable.

Al finalizar:
- Resume archivos modificados.
- Explica qué textos clave cambiaste.
- Indica si quedan TODOs para fases posteriores.
```

---

## Prompt 2 - Reestructurar Stakeholders: Retos, Casos y Aportaciones

```text
Actúa como product designer y domain analyst de AI-SECRETT.

Necesito transformar el actual "Banco de Retos" del mockup para que no parezca solo un marketplace de desafíos industriales. Debe representar mejor el Track B de AI-STEAM Network.

Contexto:
En AI-SECRETT los stakeholders no solo proponen retos. También pueden:
- aportar casos reales;
- validar contenidos;
- mentorizar estudiantes/equipos;
- ofrecer espacios de pilotaje;
- revisar necesidades de skills;
- participar en eventos;
- aportar datos anonimizados o contextos;
- generar evidencia de adopción;
- ayudar a conectar FP, formación docente y, cuando corresponda, máster.

Objetivo:
Renombrar y rediseñar la sección "Banco de Retos" como "Retos y Casos del Ecosistema" o "Challenge and Case Bank", manteniendo datos dummy pero alineando los campos y filtros con AI-SECRETT.

Cambios concretos:
1. Renombra la sección en navegación:
   - ES: "Retos y Casos"
   - EN: "Challenges & Cases"
   - VA: "Reptes i Casos"

2. Cambia el CTA:
   - De "Publicar Reto" a "Proponer contribución".
   - Formulario: "Propose challenge, case or contribution".

3. Amplía tipos de aportación:
   - Challenge / Reto
   - Case study / Caso
   - Content validation / Validación
   - Mentoring / Mentoría
   - Pilot site / Pilotaje
   - Data/resource contribution / Recurso

4. Añade campos obligatorios al formulario:
   - AI-SECRETT sector
   - Contribution type
   - Target route: FP/VET, Teacher Training, Master Bridge, Mixed
   - Expected evidence
   - Data/privacy/ethics conditions
   - Stakeholder return/value

5. Ajusta filtros:
   - Sector
   - Contribution type
   - Route
   - Status
   - Evidence maturity: idea / validated / in pilot / completed

6. Revisa los retos dummy existentes:
   - Mantén solo los que puedan mapearse a los 7 sectores AI-SECRETT.
   - Si hay retos como sanidad/triaje pediátrico, reclasifícalos claramente como "Servicios No Turísticos" solo si tiene sentido, o sustitúyelos por un reto más alineado.
   - Evita "industrial" como etiqueta general. Usa "sectoral", "ecosystem", "real-world".

7. En las tarjetas de retos/casos, muestra:
   - Sector AI-SECRETT.
   - Tipo de contribución.
   - Ruta: FP/VET, Teacher Training, Master Bridge, Mixed.
   - Evidencia esperada.
   - Estado.
   - Stakeholder proponente dummy.

8. En detalle de reto/caso, añade:
   - Contexto.
   - Resultado esperado.
   - Quién puede trabajar con ello.
   - Cómo se valida.
   - Qué devuelve la red al stakeholder.

Restricciones:
- No conviertas todos los retos en actividades de máster.
- El máster solo debe aparecer como "Master Bridge" si el reto necesita profundidad académica y validación del Track A.
- Mantén datos dummy etiquetados como tal si aparecen como métricas.
- Conserva diseño responsive.

Al finalizar:
- Resume cambios.
- Enumera los nuevos campos de datos introducidos.
- Indica si hay retos dummy que sustituiste por desalineación.
```

---

## Prompt 3 - Separar Formación: FP/VET, Profesorado y Puente al Máster

```text
Actúa como experto en diseño de experiencias de aprendizaje y senior frontend engineer.

Necesito reestructurar la sección de Formación del mockup para reflejar mejor la función de CEICE en AI-STEAM Network.

Contexto:
La formación no debe parecer un catálogo único que mezcla FP, máster y docentes sin frontera. Debe mostrar tres carriles:
1. FP/VET pathway.
2. Teacher Training pathway.
3. Master Bridge pathway.

La AI-STEAM Network puede crear transferencia hacia FP y formación docente, y puede tender puentes hacia el máster, pero no debe sustituir ni gobernar el máster.

Objetivo:
Rediseñar la sección "Formación" para que se entienda como itinerarios de transferencia del Track B.

Cambios concretos:
1. Mantén la sección "Formación", pero cambia su introducción:
   "Learning pathways generated by the AI-STEAM Network to transfer AI-SECRETT knowledge into VET/FP, teacher training and validated bridges to the Master."

2. Crea tres pestañas o bloques principales:
   - FP/VET Skills & Employability
   - Teacher Training / CEFIRE
   - Master Bridge

3. FP/VET debe incluir:
   - skills aplicadas por sector;
   - empleabilidad;
   - proyectos intermodulares;
   - retos/casos del ecosistema;
   - familias profesionales cuando sea posible;
   - portfolio/evidencias del alumnado.

4. Añade skills de FP:
   - Applied AI literacy
   - Data work in real contexts
   - Process automation
   - Responsible use of generative AI
   - Technical communication
   - Creative problem solving
   - Sustainability and efficiency
   - Privacy and ethics
   - Interdisciplinary teamwork

5. Teacher Training debe incluir:
   - formación del profesorado no universitario;
   - CEFIRE como referencia institucional si procede;
   - Aules como entorno de aprendizaje;
   - diseño de actividades basadas en retos;
   - evaluación con IA;
   - ética, privacidad y uso responsable.

6. Master Bridge debe incluir:
   - "candidate cases for academic treatment";
   - "stakeholder needs informing curriculum relevance";
   - "guest lectures or validation sessions";
   - "TFM/project inspiration when accepted by Track A".
   Evita lenguaje que sugiera que CEICE o la red gobiernan el máster.

7. Microcredenciales:
   Cambia cualquier afirmación fuerte de "microcredenciales emitidas" por:
   - "microcredential-ready pilots";
   - "recognition models under validation";
   - "badges/demo credentials in prototype".
   Solo deja cifras si están claramente marcadas como dummy/demo.

8. Añade un bloque de advertencia institucional:
   "Recognition mechanisms are subject to validation by AI-SECRETT governance and relevant CEICE/UVEG/TUV frameworks."

Restricciones:
- No inventes certificaciones oficiales.
- No mezcles ECTS del máster con badges de FP/profesorado.
- Mantén el enlace a Aules si ya existe.
- Mantén multilingüismo.

Al finalizar:
- Resume nueva estructura.
- Indica cómo se evita conflicto con el máster.
- Indica qué datos siguen siendo dummy.
```

---

## Prompt 4 - Alinear Sectores con AI-SECRETT y FP

```text
Actúa como analista de contenido del proyecto AI-SECRETT y frontend engineer.

Necesito revisar la sección de Sectores para que esté estrictamente alineada con los 7 sectores oficiales de AI-SECRETT y conecte mejor stakeholders, FP, formación docente y máster.

Sectores oficiales:
- Agrifood / Agroalimentario.
- Cultural and Creative Industries / Sectores Culturales y Creativos.
- Non-Touristic Services / Servicios No Turísticos.
- Manufacturing / Manufactura.
- Housing / Vivienda.
- Mobility and Transport / Transporte y Movilidad.
- Energy and Environment / Energía y Medio Ambiente.

Objetivo:
La página de sectores no debe parecer un catálogo tecnológico genérico. Debe funcionar como mapa de transferencia AI-SECRETT.

Cambios concretos:
1. Verifica que estén exactamente estos 7 sectores. No añadas otros.

2. Para cada sector, añade o reorganiza campos:
   - Sector description aligned with AI-SECRETT triple transition.
   - Stakeholder types.
   - FP/VET skills.
   - Teacher training relevance.
   - Example challenge/case.
   - Possible Master Bridge, if relevant.

3. Cambia "master topics" por "Master bridge candidates" o "Academic bridge candidates".
   La red no define asignaturas del máster; identifica posibles conexiones académicas.

4. Cambia "FP modules" por "FP/VET skills or learning situations", salvo que el mockup quiera mantener módulos como dummy. Si se mantienen como módulos, marca que son prototype examples.

5. Añade una vista o resumen:
   "Sector → Stakeholder need → FP skill → Teacher training use → Evidence → Optional Master bridge"

6. Revisa descripciones:
   - Evita tecnosolucionismo puro.
   - Incluye triple transición: digital, green/ecological, social.
   - Incluye ética/privacidad cuando aplique.

7. Mantén estadísticas dummy, pero etiquétalas como demo.

Restricciones:
- No cambiar nombres oficiales de sectores.
- No añadir sectores fuera de AI-SECRETT.
- No presentar ejemplos como datos reales.

Al finalizar:
- Resume cambios por sector.
- Indica si sustituiste algún contenido desalineado.
```

---

## Prompt 5 - Gobernanza, Evidencias y Entregables CEICE

```text
Actúa como experto en gobernanza de proyectos europeos y UX de dashboards.

Necesito reforzar la sección de Gobernanza para que sea útil en una presentación a socios del consorcio y muestre que la AI-STEAM Network protege los compromisos CEICE dentro de AI-SECRETT.

Contexto:
CEICE lidera tareas/entregables vinculados a la red:
- D2.2: AI-STEAM network fully functional.
- D4.2: AI-STEAM network revised.
- D6.2: AI-STEAM network further revised.
- Milestone 14: AI-STEAM network final release.

La gobernanza debe mostrar claramente:
- Track A: Master/academic governance, UVEG/socios académicos.
- Track B: AI-STEAM Network/community/transfer, CEICE.
- Puntos de enlace controlados.
- ENRED como base institucional.
- Evidencias auditables.

Cambios concretos:
1. Mantén la estructura Dual Track si ya existe, pero revisa todo el lenguaje:
   - Donde diga que stakeholders "co-diseñan el currículo", cambia a "inform needs, validate relevance and contribute cases/challenges".
   - Donde parezca que CEICE decide ECTS o currículo, corrige.

2. Añade un dashboard o bloque "Evidence for CEICE deliverables":
   - D2.2 fully functional network
   - D4.2 revised network
   - D6.2 further revised network
   - Milestone 14 final release

3. Para cada entregable, muestra evidencias dummy pero plausibles:
   - stakeholders registered/active;
   - sectors covered;
   - challenges/cases contributed;
   - ConsensUE discussions/votes;
   - FP/VET activities;
   - teacher training activities;
   - OER/resources published;
   - pilot cases;
   - feedback surveys.
   Marca todo como "demo evidence indicators".

4. Añade un bloque "Operating flow":
   Stakeholder/ENRED/centre input → classification by sector and route → validation → activity/resource/pilot → evidence → reporting.

5. Añade "Data and responsibility boundaries":
   - CEICE: Track B member/community participation data.
   - UVEG/academic partners: academic student records and Master evaluation.
   - ConsensUE/Decidim: participation and deliberation.
   - Aules/PortalEdu: learning/resource environments where applicable.

6. Añade o refuerza ENRED:
   - ENRED is the institutional base.
   - AI-STEAM is the AI-SECRETT thematic evolution.
   - ENRED contributes regional education cooperation, peer learning and institutional legitimacy.

Restricciones:
- No inventes obligaciones legales nuevas.
- No contradigas el Consorcio ni el Track A.
- No presentes indicadores dummy como resultados reales.
- Mantén visualmente claro y presentable.

Al finalizar:
- Resume cómo queda la gobernanza.
- Señala qué textos fueron corregidos para evitar conflicto con el máster.
```

---

## Prompt 6 - Conocimiento, Actualidad y Etiquetado Editorial

```text
Actúa como content strategist y frontend engineer.

Necesito ajustar las secciones de Conocimiento y Actualidad para que reflejen mejor la función de transferencia y evidencia de la AI-STEAM Network.

Objetivo:
Estas secciones deben dejar de parecer solo repositorio/noticias y convertirse en:
- repositorio de recursos y evidencias;
- escaparate de casos de transferencia;
- registro de actividad útil para AI-SECRETT;
- canal de comunicación para stakeholders, FP, profesorado y socios.

Cambios en Conocimiento:
1. Reorganiza tabs si existen:
   - OER and Resources
   - Transfer Cases
   - Pilot Evidence
   - Badges/Recognition Models
   - Templates and Toolkits

2. Cada recurso debe mostrar:
   - sector AI-SECRETT;
   - target route: FP/VET, teacher training, stakeholder, master bridge;
   - resource type;
   - validation status;
   - evidence/use case if available.

3. Añade plantillas dummy útiles:
   - Challenge intake template.
   - Stakeholder contribution form.
   - FP learning situation template.
   - Teacher training activity template.
   - Evidence capture checklist.

Cambios en Actualidad:
1. Ajusta categorías:
   - ENRED
   - FP/VET
   - Teacher Training
   - Stakeholders
   - Challenges & Cases
   - AI-SECRETT Deliverables
   - Events

2. Añade noticias dummy pero plausibles:
   - ENRED-to-AI-STEAM cooperation workshop.
   - VET skills pilot in one AI-SECRETT sector.
   - Teacher training session on responsible AI.
   - Stakeholder challenge validation session.
   - Evidence review for D2.2.

3. Marca claramente que las noticias son demo/prototype content unless they are official AI-SECRETT facts.

Restricciones:
- No inventes comunicados oficiales reales.
- No atribuyas resultados reales a socios si son dummy.
- Mantén el look & feel del mockup.

Al finalizar:
- Resume categorías nuevas.
- Lista recursos dummy añadidos.
- Indica qué contenido queda marcado como demo.
```

---

## Prompt 7 - Revisión Final de Coherencia, Copy y Datos Dummy

```text
Actúa como reviewer final de producto, experto en AI-SECRETT, UX writing y QA frontend.

Haz una revisión global del mockup tras las fases anteriores.

Objetivo:
Detectar y corregir incoherencias finales antes de publicar.

Checklist de coherencia:
1. La home explica claramente que AI-STEAM Network es Track B liderado por CEICE.
2. ENRED aparece como base institucional y evolución natural.
3. El máster aparece como Track A, no como espacio gobernado por la red.
4. Los stakeholders no solo proponen retos; también aportan casos, validación, mentoría, pilotaje, recursos y evidencia.
5. FP/VET y formación del profesorado tienen presencia clara.
6. Microcredenciales aparecen como modelo/piloto/posibilidad bajo validación, no como promesa cerrada.
7. Los 7 sectores son exactamente los de AI-SECRETT.
8. Los datos dummy están etiquetados como demo/prototype.
9. Las métricas no parecen resultados oficiales.
10. Hay referencias a evidencias CEICE y entregables D2.2, D4.2, D6.2 y Milestone 14.
11. No hay textos que digan que CEICE gobierna ECTS, evaluación o currículo del máster.
12. Las rutas FP/teacher training/master bridge son distintas pero conectadas.
13. El sitio sigue funcionando en español, valenciano e inglés si ya existía i18n.
14. La web compila y no hay errores de consola relevantes.
15. Responsive móvil y escritorio correcto.

Correcciones esperadas:
- Reescribe textos ambiguos.
- Añade etiquetas demo donde falten.
- Ajusta nombres de navegación si hay incoherencias.
- Elimina o reemplaza ejemplos fuera de los 7 sectores.
- Simplifica lo que parezca demasiado académico para Track B.

No hagas:
- No añadas datos reales no verificados.
- No elimines secciones útiles salvo que estén duplicadas.
- No cambies stack ni arquitectura sin necesidad.

Al finalizar:
- Ejecuta build/lint si existen scripts.
- Resume cambios finales.
- Enumera riesgos residuales.
- Indica qué debería revisarse manualmente antes de presentarlo al consorcio.
```

---

## Nota Para El Equipo Del Mockup

La dirección conceptual final debe ser:

```text
AI-STEAM Network is not a training catalogue and not a second Master.
It is CEICE's AI-SECRETT Track B ecosystem:
an ENRED-based European education community that turns stakeholder needs from the 7 AI-SECRETT sectors into VET/FP skills, teacher training resources, validated challenges/cases, evidence for project deliverables, and carefully governed bridges to the Master.
```

Esta frase puede usarse como norte de diseño y como comprobación final de coherencia.
