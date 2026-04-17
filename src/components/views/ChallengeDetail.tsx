import { ArrowLeft, Calendar, Users, Tag, Building2, Clock, CheckCircle, FileText, Star, ChevronRight, Download, MessageSquare, Target, Database, Award } from 'lucide-react';
import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { challengeExtras } from '../../challengeExtras';

interface Challenge {
  id: string;
  title: string;
  entity: string;
  entityType: string;
  level: 'Máster' | 'FP';
  status: 'Abierto' | 'En Resolución' | 'Resuelto';
  sector: string;
  description: string;
  posted: string;
  deadline: string;
  teams: number;
  tags: string[];
  country: string;
}

interface Milestone {
  date: string;
  label: string;
  done: boolean;
}

interface EvalCriterion {
  label: string;
  weight: number;
  desc: string;
}

interface Mentor {
  name: string;
  role: string;
  org: string;
}

interface ChallengeExtra {
  fullDescription: string;
  context: string;
  objectives: string[];
  eligibility: string[];
  teamSize: string;
  datasets: { label: string; format: string; size: string }[];
  tools: string[];
  deliverables: { label: string; format: string }[];
  evalCriteria: EvalCriterion[];
  milestones: Milestone[];
  mentors: Mentor[];
  recognition: string[];
  faq: { q: string; a: string }[];
}

const extras: Record<string, ChallengeExtra> = {
  r1: {
    fullDescription: 'La Conselleria d\'Educació i la Generalitat Valenciana gestionan una red de 38 museos públicos con consumos energéticos muy heterogéneos y escasamente monitorizados. El principal gasto energético recae en los sistemas HVAC (climatización), que en algunos edificios patrimoniales supone hasta el 65% de la factura eléctrica. El objetivo de este reto es desarrollar un modelo predictivo basado en IA que optimice automáticamente la programación de los sistemas HVAC en función de variables como la afluencia prevista, la temperatura exterior y las condiciones de conservación de las colecciones.',
    context: 'Los edificios son en su mayoría inmuebles históricos con baja instrumentación. Se dispone de datos históricos de consumo (2019-2025) de 8 museos piloto, junto con datos meteorológicos y registros de visitantes.',
    objectives: [
      'Reducir el consumo energético de HVAC en al menos un 25% respecto a la línea base 2024',
      'Garantizar condiciones de conservación (T 18-22°C, HR 45-55%) en salas de colecciones permanentes',
      'Diseñar un sistema de alertas automáticas ante desviaciones críticas',
      'Generar un dashboard de monitorización accesible para el personal técnico',
    ],
    eligibility: [
      'Equipos de 2 a 4 estudiantes matriculados en FP de Grado Superior en el curso 2025-2026',
      'Al menos un integrante del ciclo formativo de Informática, Electrónica o Mecatrónica',
      'Centros educativos adheridos a la red AI-STEAM o vinculados a CEICE',
      'Un tutor docente por equipo (responsable de la entrega final)',
    ],
    teamSize: '2 – 4 estudiantes de FP + tutor docente',
    datasets: [
      { label: 'Histórico consumo HVAC (8 museos, 2019–2025)', format: 'CSV', size: '4.2 GB' },
      { label: 'Datos meteorológicos AEMET estación Valencia-Aeropuerto', format: 'CSV', size: '120 MB' },
      { label: 'Afluencia diaria visitantes 2019–2025', format: 'XLSX', size: '18 MB' },
      { label: 'Planos y especificaciones técnicas HVAC (8 edificios)', format: 'PDF', size: '340 MB' },
    ],
    tools: ['Python 3.11+', 'TensorFlow / PyTorch', 'Grafana (visualización)', 'Node-RED (IoT)', 'PostgreSQL TimescaleDB'],
    deliverables: [
      { label: 'Código fuente del modelo predictivo', format: 'Repositorio GitHub' },
      { label: 'Dashboard de monitorización funcional', format: 'Demo desplegada + vídeo 3 min' },
      { label: 'Memoria técnica del proyecto', format: 'PDF ≤ 20 páginas' },
      { label: 'Presentación ejecutiva para gestores del museo', format: 'PPTX / PDF ≤ 10 diapositivas' },
    ],
    evalCriteria: [
      { label: 'Reducción de consumo demostrada', weight: 30, desc: 'Evaluada sobre los datos de test; se requiere backtesting sobre 2024' },
      { label: 'Viabilidad de implantación real', weight: 25, desc: 'Coste estimado, compatibilidad con infraestructura existente y plan de despliegue' },
      { label: 'Calidad técnica del código y documentación', weight: 20, desc: 'Clean code, reproducibilidad, tests unitarios, README completo' },
      { label: 'Usabilidad del dashboard', weight: 15, desc: 'Evaluado por técnicos del museo sin formación en IA' },
      { label: 'Presentación oral y defensa', weight: 10, desc: 'Claridad, respuesta a preguntas del jurado' },
    ],
    milestones: [
      { date: '10 Mar 2026', label: 'Publicación del reto y acceso a datos', done: true },
      { date: '31 Mar 2026', label: 'Cierre de inscripción de equipos', done: true },
      { date: '15 Abr 2026', label: 'Kick-off: sesión de presentación con técnicos GVA', done: false },
      { date: '15 May 2026', label: 'Checkpoint 1: entrega de prototipo inicial', done: false },
      { date: '15 Jun 2026', label: 'Checkpoint 2: demo del dashboard', done: false },
      { date: '30 Jun 2026', label: 'Entrega final', done: false },
      { date: '15 Jul 2026', label: 'Presentaciones y resolución', done: false },
    ],
    mentors: [
      { name: 'Dra. Amparo Seguí', role: 'Ingeniería de Sistemas de Control', org: 'Universitat Politècnica de València' },
      { name: 'Carlos Monzó', role: 'Responsable de Infraestructuras', org: 'GVA – Conselleria de Cultura' },
    ],
    recognition: [
      '1.er equipo: estancia de prácticas remunerada en GVA (3 meses) + badge AI-Industry Badge',
      '2.º equipo: reconocimiento oficial en expediente CEICE + badge AI-Industry Badge',
      'Todos los participantes: certificado de participación AI-STEAM + micro-credencial Open Badge 3.0',
      'Los mejores resultados se publicarán como recurso OER en Aules',
    ],
    faq: [
      { q: '¿Puedo participar si no tengo experiencia previa en IA?', a: 'Sí. El reto está diseñado para nivel FP. Se proporcionan materiales introductorios en Aules y hay sesiones de mentoría quincenales.' },
      { q: '¿Los datos están anonimizados?', a: 'Los datos de consumo están agregados por edificio. No contienen datos personales de visitantes.' },
      { q: '¿Puedo usar librerías de terceros?', a: 'Sí, siempre que sean de código abierto y estén debidamente referenciadas en el repositorio.' },
      { q: '¿Qué pasa si mi equipo se disuelve a mitad del reto?', a: 'Contacta con el coordinador del reto. Es posible fusionar equipos o continuar con menos integrantes mínimo 2.' },
    ],
  },
  r2: {
    fullDescription: 'La Xylella fastidiosa y el cotonet de les Valls (Planococcus citri) están causando pérdidas millonarias en la citricultura valenciana. La detección temprana es clave para contener la propagación, pero los métodos actuales (inspección visual de campo) son lentos y costosos. AVA-ASAJA propone desarrollar un pipeline de visión computacional que, a partir de imágenes multiespectrales tomadas con drones comerciales, detecte automáticamente síntomas de infección en estadios tempranos, antes de que sean visibles al ojo humano.',
    context: 'Se dispone de un dataset etiquetado de 12.000 imágenes multiespectrales (RGB + NIR + RedEdge) de parcelas de naranjos y limoneros de la provincia de Valencia, tomadas entre 2023 y 2025 en distintas fases del ciclo de cultivo.',
    objectives: [
      'Alcanzar una precisión de detección ≥ 85% en el dataset de test con F1-score equilibrado',
      'Minimizar los falsos negativos (coste agronómico de no detectar una plaga infectada)',
      'Diseñar un pipeline ejecutable en campo con hardware de bajo coste (Raspberry Pi 5 o similar)',
      'Generar un mapa georreferenciado de riesgo por parcela en formato GeoJSON',
    ],
    eligibility: [
      'Equipos de 2 a 4 estudiantes de Máster universitario o último año de Grado',
      'Formación sólida en Deep Learning y visión por computador',
      'Acceso a GPU para entrenamiento (se puede solicitar acceso al clúster de UPV)',
    ],
    teamSize: '2 – 4 estudiantes de Máster o Grado + director académico',
    datasets: [
      { label: 'Dataset imágenes multiespectrales etiquetadas (12.000 imágenes)', format: 'TIFF + JSON', size: '48 GB' },
      { label: 'Parcelas de referencia GPS (coordenadas + estado sanitario)', format: 'GeoJSON', size: '2 MB' },
      { label: 'Bibliografía científica de referencia (15 artículos)', format: 'PDF', size: '45 MB' },
    ],
    tools: ['PyTorch / TensorFlow', 'GDAL / Rasterio', 'Ultralytics YOLOv8', 'QGIS', 'Docker'],
    deliverables: [
      { label: 'Modelo entrenado y documentado', format: 'Repositorio GitHub + pesos .pt' },
      { label: 'Pipeline de inferencia en campo', format: 'Docker image + README' },
      { label: 'Mapa de riesgo georreferenciado (demo)', format: 'GeoJSON + visor web' },
      { label: 'Artículo técnico', format: 'PDF con formato IEEE ≤ 8 páginas' },
    ],
    evalCriteria: [
      { label: 'Métricas de detección (F1, Recall, Precision)', weight: 35, desc: 'Evaluadas sobre conjunto de test reservado por AVA-ASAJA' },
      { label: 'Eficiencia computacional en edge', weight: 25, desc: 'Latencia de inferencia en Raspberry Pi 5 o hardware equivalente' },
      { label: 'Calidad del mapa de riesgo geoespacial', weight: 20, desc: 'Precisión georreferenciada y utilidad práctica para el agricultor' },
      { label: 'Robustez ante variaciones de iluminación y estación', weight: 15, desc: 'Evaluada con imágenes de distintas épocas y condiciones' },
      { label: 'Documentación y reproducibilidad', weight: 5, desc: 'Claridad del README, instrucciones de ejecución' },
    ],
    milestones: [
      { date: '15 Ene 2026', label: 'Apertura del reto y acceso al dataset', done: true },
      { date: '31 Ene 2026', label: 'Cierre de inscripciones', done: true },
      { date: '28 Feb 2026', label: 'Checkpoint: baseline model entregado', done: true },
      { date: '30 Abr 2026', label: 'Checkpoint: modelo mejorado + primeros mapas', done: false },
      { date: '15 Jul 2026', label: 'Entrega final + artículo técnico', done: false },
      { date: '30 Jul 2026', label: 'Presentación ante el jurado', done: false },
    ],
    mentors: [
      { name: 'Dr. Jorge Recatalá', role: 'Computer Vision & Precision Agriculture', org: 'Universitat de València (ETSE)' },
      { name: 'Ing. Marta Gómez', role: 'Técnico de Sanidad Vegetal', org: 'AVA-ASAJA' },
    ],
    recognition: [
      '1.er equipo: contrato de colaboración con AVA-ASAJA para implantación piloto (6 meses) + 3.000€',
      '2.º equipo: 1.000€ + publicación del artículo en revista de acceso abierto',
      'Todos los participantes: badge HealthAI Badge + micro-credencial CEDEFOP',
    ],
    faq: [
      { q: '¿Puedo usar modelos preentrenados como base?', a: 'Sí. Se recomienda usar transfer learning desde modelos entrenados en ImageNet o datasets agrícolas públicos. Documenta claramente qué usas.' },
      { q: '¿Cómo accedo al clúster GPU de la UPV?', a: 'Tras inscribirte, recibirás credenciales de acceso al clúster ARTEMIS de la UPV con una asignación de 500 GPU-horas.' },
      { q: '¿El dataset tiene datos de validación separados?', a: 'El dataset incluye una partición de entrenamiento pública (80%) y un test reservado (20%) que se liberará al cierre de inscripciones de evaluación.' },
    ],
  },
  r3: {
    fullDescription: 'Bodegas Murviedro opera 4 plantas de embotellado en la provincia de Valencia con una producción conjunta de 18 millones de botellas/año. Las paradas no planificadas en los sistemas de embotellado suponen actualmente un coste de 320.000€/año entre piezas, mano de obra y producción perdida. El reto consiste en desarrollar un sistema de mantenimiento predictivo basado en sensórica vibratoria y modelos LSTM capaz de anticipar fallos en rodamientos y motores con al menos 72 horas de antelación.',
    context: 'Se han instrumentado 12 máquinas críticas (llenadoras, taponadoras, etiquetadoras) con acelerómetros triaxiales a 10 kHz. Existe un histórico de 18 meses de lecturas y 47 eventos de fallo documentados.',
    objectives: [
      'Predecir fallos con al menos 72 horas de antelación y precisión ≥ 80%',
      'Reducir los falsos positivos a menos del 10% para evitar paradas innecesarias',
      'Desarrollar un sistema de alertas integrable con el GMAO existente (SAP PM)',
      'Documentar el ROI estimado del sistema implantado',
    ],
    eligibility: [
      'Equipos de 2 a 3 estudiantes de FP en Mecatrónica Industrial, Automatización o Informática',
      'Conocimientos básicos de Python y Series Temporales',
      'Disponibilidad para visita técnica a planta (jornada de 1 día)',
    ],
    teamSize: '2 – 3 estudiantes de FP',
    datasets: [
      { label: 'Series temporales vibración (12 máquinas, 18 meses)', format: 'Parquet', size: '22 GB' },
      { label: 'Log de eventos de mantenimiento y fallos', format: 'CSV', size: '8 MB' },
      { label: 'Documentación técnica máquinas (manuales fabricante)', format: 'PDF', size: '210 MB' },
    ],
    tools: ['Python', 'TensorFlow / Keras', 'Pandas', 'Scipy', 'InfluxDB', 'Grafana'],
    deliverables: [
      { label: 'Modelo LSTM de predicción de fallos', format: 'Repositorio GitHub + notebook Jupyter' },
      { label: 'Sistema de alertas (prototipo)', format: 'API REST + webhook SAP PM' },
      { label: 'Informe de ROI estimado', format: 'PDF ≤ 10 páginas' },
      { label: 'Presentación para dirección técnica', format: 'PPTX ≤ 8 diapositivas' },
    ],
    evalCriteria: [
      { label: 'Antelación y precisión de predicción', weight: 40, desc: 'Evaluado sobre los últimos 3 meses del dataset (test temporal)' },
      { label: 'Integrabilidad con SAP PM', weight: 25, desc: 'Documentación de la interfaz y prueba de concepto' },
      { label: 'Análisis de vibraciones y feature engineering', weight: 20, desc: 'Calidad del preprocesado y extracción de características en frecuencia' },
      { label: 'Documentación técnica y ROI', weight: 15, desc: 'Claridad del informe y realismo de las estimaciones económicas' },
    ],
    milestones: [
      { date: '01 Feb 2026', label: 'Apertura del reto', done: true },
      { date: '20 Feb 2026', label: 'Cierre inscripciones + visita técnica a planta', done: true },
      { date: '30 Mar 2026', label: 'Checkpoint: análisis exploratorio y baseline', done: false },
      { date: '31 May 2026', label: 'Checkpoint: modelo LSTM entrenado', done: false },
      { date: '30 Ago 2026', label: 'Entrega final + demo del sistema de alertas', done: false },
    ],
    mentors: [
      { name: 'Dr. Pau Muñoz', role: 'Mantenimiento Predictivo e IIoT', org: 'Hochschule Wismar' },
      { name: 'Sergio Villanueva', role: 'Director de Planta', org: 'Bodegas Murviedro' },
    ],
    recognition: [
      '1.er equipo: contrato FCT en Bodegas Murviedro (3 meses) + badge AI-Industry Badge',
      'Los 3 mejores equipos: visita técnica a Hannover Messe 2026 con la red AI-STEAM',
      'Todos: micro-credencial AI-STEAM + certificado de participación',
    ],
    faq: [
      { q: '¿Necesito conocimientos de mecánica industrial?', a: 'No es imprescindible, pero sí recomendable. Se impartirá una sesión introductoria de mantenimiento predictivo antes del inicio.' },
      { q: '¿Cuándo es la visita técnica a planta?', a: 'Se realizará la semana del 16 de febrero. Será presencial en la planta de Requena (Valencia). El transporte corre a cargo de la empresa.' },
    ],
  },
  r4: {
    fullDescription: 'El Hospital Universitario La Fe de Valencia atiende más de 95.000 urgencias pediátricas al año. El proceso de triaje actual (escala de Manchester) depende íntegramente de la valoración enfermera y presenta una variabilidad interobservador significativa. Este reto propone desarrollar un sistema de apoyo a la decisión clínica (CDSS) que, a partir de constantes vitales, motivo de consulta en texto libre (NLP) e historial clínico previo, asigne automáticamente un nivel de triaje (I-V) con explicabilidad (XAI).',
    context: 'El sistema debe cumplir el Reglamento Europeo de IA (AI Act, Anexo III, categoría de alto riesgo) y el RGPD. Los datos están pseudoanonimizados y se accede bajo acuerdo de uso de datos firmado.',
    objectives: [
      'Alcanzar una concordancia con el triaje gold standard ≥ 88% (kappa de Cohen)',
      'Implementar explicabilidad (SHAP / LIME) para que el profesional entienda cada decisión',
      'Desarrollar una interfaz clínica de usuario basada en principios de usabilidad HCI',
      'Cumplir los requisitos del AI Act para sistemas de IA de alto riesgo (documentación técnica)',
    ],
    eligibility: [
      'Equipos de 2 a 4 estudiantes de Máster en IA, Ingeniería Biomédica o Ciencias de la Salud',
      'Obligatorio firmar acuerdo de confidencialidad y uso de datos antes del acceso al dataset',
      'Al menos un integrante con formación en ética de IA o ciencias de la salud',
    ],
    teamSize: '2 – 4 estudiantes de Máster + director académico + tutor clínico',
    datasets: [
      { label: 'Episodios de urgencias pediátricas anonimizados (2021–2024, 280.000 episodios)', format: 'JSON (HL7 FHIR R4)', size: '12 GB' },
      { label: 'Constantes vitales estructuradas', format: 'CSV', size: '4 GB' },
      { label: 'Texto libre de anamnesis (NLP)', format: 'JSON', size: '800 MB' },
    ],
    tools: ['Python', 'HuggingFace Transformers', 'SHAP', 'FastAPI', 'React (UI prototipo)', 'PostgreSQL'],
    deliverables: [
      { label: 'Modelo CDSS con XAI integrado', format: 'Repositorio GitHub + API REST' },
      { label: 'Prototipo de interfaz clínica', format: 'Demo web accesible (Figma o funcional)' },
      { label: 'Documentación técnica AI Act', format: 'PDF (plantilla proporcionada)' },
      { label: 'Estudio de validación clínica', format: 'PDF con formato IMRAD ≤ 12 páginas' },
    ],
    evalCriteria: [
      { label: 'Concordancia clínica (kappa de Cohen)', weight: 35, desc: 'Evaluado por comité de urgencias pediátricas de La Fe' },
      { label: 'Calidad de la explicabilidad (XAI)', weight: 25, desc: 'Evaluada por enfermeras de triaje: ¿les ayuda la explicación?' },
      { label: 'Conformidad con AI Act y RGPD', weight: 20, desc: 'Revisada por el DPO del hospital' },
      { label: 'Usabilidad de la interfaz clínica', weight: 15, desc: 'Test de usabilidad con 5 usuarios clínicos (SUS Score)' },
      { label: 'Rigor metodológico del estudio de validación', weight: 5, desc: 'Revisión por pares del equipo investigador de La Fe' },
    ],
    milestones: [
      { date: '05 Mar 2026', label: 'Publicación y firma de acuerdos de confidencialidad', done: true },
      { date: '20 Mar 2026', label: 'Acceso al dataset tras validación de firma', done: true },
      { date: '30 Abr 2026', label: 'Checkpoint: modelo baseline + análisis exploratorio', done: false },
      { date: '30 Jun 2026', label: 'Checkpoint: sistema XAI funcional', done: false },
      { date: '30 Sep 2026', label: 'Entrega final + estudio de validación', done: false },
      { date: '20 Oct 2026', label: 'Presentación ante el jurado clínico', done: false },
    ],
    mentors: [
      { name: 'Dra. Laura Ferrer', role: 'Urgencias Pediátricas', org: 'Hospital Universitario La Fe' },
      { name: 'Dr. Nikos Papadopoulos', role: 'Clinical NLP & XAI', org: 'Università Gabriele d\'Annunzio' },
    ],
    recognition: [
      '1.er equipo: oferta de contrato de investigación con La Fe (6 meses) + 5.000€ beca',
      'Publicación del trabajo en revista biomédica indexada (coautores)',
      'Todos: badge HealthAI Badge + micro-credencial European Digital Credential',
    ],
    faq: [
      { q: '¿Cómo se gestiona el acceso a datos clínicos?', a: 'Se firma un acuerdo de uso de datos según la normativa del CEIm. Los datos solo son accesibles desde un entorno controlado (VPN del hospital).' },
      { q: '¿El sistema se implantará realmente?', a: 'Si los resultados son suficientemente sólidos, se planea un piloto clínico supervisado en el turno de tarde de urgencias pediátricas en 2027.' },
    ],
  },
  r5: {
    fullDescription: 'El Archivo Histórico de Las Palmas custodia 50.000 documentos del periodo colonial (siglos XVI-XIX) en español, inglés y neerlandés. Solo el 12% están catalogados digitalmente. La Sociedad para la Promoción de Las Palmas (LPGA) impulsa un proyecto de digitalización masiva que requiere OCR robusto para texto histórico degradado, extracción de entidades (personas, lugares, fechas) y enriquecimiento semántico con vocabularios históricos controlados.',
    context: 'Los documentos han sido escaneados en alta resolución (400 dpi, TIFF). La caligrafía es una mezcla de escritura cursiva y humanística de los siglos XVII-XIX. Se requiere un nivel de error de caracteres (CER) menor al 5%.',
    objectives: [
      'Alcanzar CER < 5% en documentos del corpus de prueba para los 3 idiomas',
      'Extraer y clasificar entidades nombradas (NER) con F1 ≥ 80%',
      'Generar metadatos estructurados Dublin Core para integración en Europeana',
      'Desarrollar una interfaz de revisión para el equipo archivístico',
    ],
    eligibility: [
      'Equipos de 2 a 4 estudiantes de Máster en IA, Lingüística Computacional o Humanidades Digitales',
      'Recomendable conocimiento de al menos uno de los tres idiomas del corpus',
      'Abierto a estudiantes internacionales del consorcio AI-SECRETT',
    ],
    teamSize: '2 – 4 estudiantes de Máster',
    datasets: [
      { label: 'Corpus escaneado (50.000 documentos, muestra de 5.000 para el reto)', format: 'TIFF + XML TEI', size: '85 GB' },
      { label: 'Ground truth de 500 documentos transcritos manualmente', format: 'XML TEI', size: '120 MB' },
      { label: 'Ontología histórica de entidades (vocabulario controlado)', format: 'OWL / Turtle', size: '45 MB' },
    ],
    tools: ['Python', 'Tesseract 5 / Kraken OCR', 'HuggingFace (mBERT, XLM-R)', 'spaCy', 'Apache Solr'],
    deliverables: [
      { label: 'Pipeline OCR + NER multilingüe', format: 'Repositorio GitHub + Docker' },
      { label: 'Dataset de metadatos Dublin Core (5.000 documentos)', format: 'CSV / JSON-LD' },
      { label: 'Interfaz de revisión archivística', format: 'Demo web funcional' },
      { label: 'Artículo de humanidades digitales', format: 'PDF ≤ 10 páginas' },
    ],
    evalCriteria: [
      { label: 'Character Error Rate (CER) del OCR', weight: 35, desc: 'Evaluado sobre el corpus de test reservado por LPGA' },
      { label: 'F1-Score de NER (3 idiomas)', weight: 30, desc: 'Evaluado por lingüistas del equipo de LPGA' },
      { label: 'Calidad de los metadatos Dublin Core', weight: 20, desc: 'Conformidad con estándar Europeana Data Model' },
      { label: 'Usabilidad de la interfaz de revisión', weight: 15, desc: 'Evaluada por el equipo archivístico del Archivo Histórico' },
    ],
    milestones: [
      { date: '20 Nov 2025', label: 'Apertura del reto', done: true },
      { date: '15 Dic 2025', label: 'Cierre inscripciones', done: true },
      { date: '31 Ene 2026', label: 'Checkpoint: resultados OCR baseline', done: true },
      { date: '31 Mar 2026', label: 'Checkpoint: pipeline NER funcional', done: false },
      { date: '20 May 2026', label: 'Entrega final', done: false },
      { date: '05 Jun 2026', label: 'Presentación en Las Palmas', done: false },
    ],
    mentors: [
      { name: 'Dr. Alejandro Bia', role: 'Humanidades Digitales y OCR histórico', org: 'LPGA / Universidad de Alicante' },
      { name: 'Msc. Joris van der Berg', role: 'NLP Multilingüe', org: 'KEA European Affairs' },
    ],
    recognition: [
      '1.er equipo: residencia de trabajo en Las Palmas (2 semanas) + integración del trabajo en Europeana',
      'Coautoría en publicación en revista Digital Humanities Quarterly',
      'Todos: badge CreativeAI Badge + micro-credencial CEDEFOP',
    ],
    faq: [
      { q: '¿Necesito ser historiador para participar?', a: 'No. El equipo de archivístas de LPGA actúa como dominio experto. Tu rol es el técnico.' },
      { q: '¿Puedo usar GPT-4 o modelos comerciales?', a: 'Solo para exploración inicial. La entrega final debe basarse en modelos de código abierto reproducibles.' },
    ],
  },
  r6: {
    fullDescription: 'El lago Vänern (Suecia) es el mayor lago de la Unión Europea y fuente de agua potable para 200.000 personas. Region Värmland ha detectado un incremento preocupante de nitratos y fosfatos en las últimas dos décadas, relacionado con la actividad agrícola y el cambio climático. Este reto busca modelos de series temporales que integren datos de sensores remotos, estaciones meteorológicas y registros históricos para predecir la calidad del agua con 30 días de antelación.',
    context: 'Se dispone de 15 años de datos de 24 estaciones de monitorización lacustre, imágenes Sentinel-2 para clorofila y turbidez, y datos meteorológicos SMHI.',
    objectives: [
      'Predecir concentración de nitratos y fosfatos con RMSE < 0.8 mg/L a 30 días vista',
      'Integrar datos satelitales Sentinel-2 en el modelo',
      'Generar mapas de calidad del agua georreferenciados en formato GeoTIFF',
      'Desarrollar un sistema de alerta temprana para gestores del agua',
    ],
    eligibility: [
      'Equipos de 2 a 4 estudiantes de Máster en IA, Ciencias Ambientales o Ingeniería Hidrológica',
      'Deseable conocimiento de teledetección o hidrología',
      'Reto internacional: se aceptan equipos de cualquier país del consorcio AI-SECRETT',
    ],
    teamSize: '2 – 4 estudiantes de Máster (equipos internacionales bienvenidos)',
    datasets: [
      { label: 'Series temporales calidad del agua (24 estaciones, 2009–2024)', format: 'CSV + NetCDF', size: '3.2 GB' },
      { label: 'Imágenes Sentinel-2 lago Vänern (2017–2024)', format: 'GeoTIFF', size: '180 GB' },
      { label: 'Datos meteorológicos SMHI (precipitación, temperatura)', format: 'CSV', size: '450 MB' },
      { label: 'Datos de uso del suelo cuenca hidrográfica', format: 'Shapefile + GeoPackage', size: '2 GB' },
    ],
    tools: ['Python', 'PyTorch (Temporal Fusion Transformer)', 'xarray / rasterio', 'QGIS', 'Streamlit'],
    deliverables: [
      { label: 'Modelo de predicción de calidad del agua', format: 'Repositorio GitHub + notebook' },
      { label: 'Mapas georreferenciados de calidad (demo)', format: 'GeoTIFF + visor web' },
      { label: 'Sistema de alertas prototipo', format: 'API + dashboard Streamlit' },
      { label: 'Informe técnico', format: 'PDF ≤ 15 páginas con metodología y resultados' },
    ],
    evalCriteria: [
      { label: 'Precisión de predicción (RMSE, MAE)', weight: 40, desc: 'Evaluado sobre el último año del dataset (test temporal)' },
      { label: 'Integración de datos satelitales', weight: 25, desc: 'Calidad del pipeline de procesado Sentinel-2' },
      { label: 'Utilidad del sistema de alertas', weight: 20, desc: 'Evaluado por gestores de water management de Region Värmland' },
      { label: 'Rigor metodológico e incertidumbre', weight: 15, desc: 'Intervalos de confianza y análisis de sensibilidad' },
    ],
    milestones: [
      { date: '01 Mar 2026', label: 'Apertura del reto', done: true },
      { date: '20 Mar 2026', label: 'Cierre inscripciones', done: true },
      { date: '30 Abr 2026', label: 'Checkpoint: análisis exploratorio y baseline', done: false },
      { date: '30 Jun 2026', label: 'Checkpoint: modelo integrado con Sentinel-2', done: false },
      { date: '30 Sep 2026', label: 'Entrega final', done: false },
      { date: '20 Oct 2026', label: 'Presentación online ante jurado sueco', done: false },
    ],
    mentors: [
      { name: 'Dr. Erik Lindström', role: 'Hidrología y Calidad del Agua', org: 'Region Värmland / NTNU' },
      { name: 'Dra. Annika Svensson', role: 'Teledetección ambiental', org: 'NTNU' },
    ],
    recognition: [
      '1.er equipo: estancia de investigación en Karlstad, Suecia (2 semanas) + badge GreenAI Badge',
      'Posibilidad de integración del modelo en el sistema de gestión del agua de Region Värmland',
      'Todos: micro-credencial AI-STEAM + certificado de participación en inglés',
    ],
    faq: [
      { q: '¿El reto está disponible en inglés?', a: 'Sí, toda la documentación está disponible en inglés, sueco y español.' },
      { q: '¿Las 180 GB de Sentinel-2 debo descargarlas todas?', a: 'No. Se proporciona un subconjunto preprocesado de 12 GB (máscaras de nubes aplicadas, bandas seleccionadas).' },
    ],
  },
  r7: {
    fullDescription: 'Canarias recibe 17 millones de turistas al año, pero el turismo de masas está saturando los espacios naturales y culturales más reconocidos. CulturaLink SL propone desarrollar un motor de recomendación personalizado que dirija al visitante hacia itinerarios alternativos y sostenibles, integrando sus preferencias declaradas, el nivel de afluencia en tiempo real y los criterios de huella de carbono del transporte.',
    context: 'Se dispone de APIs de afluencia en tiempo real de los principales puntos de interés, datos históricos de visitas de los últimos 3 años y un catálogo completo de 1.200 puntos de interés turístico de las islas.',
    objectives: [
      'Desarrollar un motor de recomendación con precisión@10 ≥ 0.7',
      'Integrar criterios de sostenibilidad (afluencia, carbono, horarios)',
      'Diseñar una UX conversacional (chatbot LLM) accesible en ES, EN y DE',
      'Generar itinerarios exportables a GPX para uso offline',
    ],
    eligibility: [
      'Equipos de 2 a 3 estudiantes de FP en Desarrollo de Aplicaciones Web/Multiplataforma',
      'Conocimientos de Python y APIs REST',
      'Valorable experiencia con LLMs (OpenAI API, LLaMA, etc.)',
    ],
    teamSize: '2 – 3 estudiantes de FP',
    datasets: [
      { label: 'Catálogo 1.200 puntos de interés (metadatos, fotos, coordenadas)', format: 'JSON + GeoJSON', size: '2.4 GB' },
      { label: 'Histórico de visitas 2022–2024 (anonimizado)', format: 'CSV', size: '850 MB' },
      { label: 'API tiempo real afluencia (acceso durante el reto)', format: 'REST API (Swagger doc)', size: '—' },
    ],
    tools: ['Python', 'LangChain / LlamaIndex', 'FastAPI', 'React / Vue', 'PostgreSQL + pgvector'],
    deliverables: [
      { label: 'Motor de recomendación (API)', format: 'Repositorio GitHub + API desplegada' },
      { label: 'Interfaz chatbot multilingüe', format: 'Demo web funcional' },
      { label: 'Generador de itinerarios GPX', format: 'Módulo Python + demo' },
      { label: 'Memoria del proyecto', format: 'PDF ≤ 12 páginas' },
    ],
    evalCriteria: [
      { label: 'Precisión@10 del sistema de recomendación', weight: 30, desc: 'Evaluado con usuarios reales y dataset de test histórico' },
      { label: 'Integración de criterios de sostenibilidad', weight: 25, desc: 'Calidad y relevancia de los indicadores de sostenibilidad incorporados' },
      { label: 'Experiencia de usuario del chatbot', weight: 25, desc: 'Evaluado mediante test con 10 usuarios turistas potenciales' },
      { label: 'Calidad técnica y escalabilidad', weight: 20, desc: 'Arquitectura, documentación y rendimiento de la API' },
    ],
    milestones: [
      { date: '12 Feb 2026', label: 'Apertura del reto', done: true },
      { date: '28 Feb 2026', label: 'Cierre inscripciones', done: true },
      { date: '31 Mar 2026', label: 'Checkpoint: catálogo procesado y baseline', done: false },
      { date: '15 Jun 2026', label: 'Checkpoint: chatbot funcional', done: false },
      { date: '12 Ago 2026', label: 'Entrega final + demo', done: false },
    ],
    mentors: [
      { name: 'Dra. Elena Suárez', role: 'Sistemas de Recomendación y LLMs', org: 'LPGA / ULPGC' },
      { name: 'Marc Hernández', role: 'Product Manager Turismo Digital', org: 'CulturaLink SL' },
    ],
    recognition: [
      '1.er equipo: licencia comercial del producto + acuerdo de revenue sharing con CulturaLink',
      'Posibilidad de incorporación al equipo de CulturaLink como becario',
      'Todos: badge CreativeAI Badge + certificado de participación',
    ],
    faq: [
      { q: '¿Puedo usar la API de OpenAI?', a: 'Sí para el prototipo, pero la versión final debe funcionar también con un LLM open-source (LLaMA 3 o equivalente) por razones de coste operativo.' },
      { q: '¿Debo desplegarlo en producción?', a: 'Solo se requiere una demo funcional. El despliegue definitivo, si procede, lo realizará CulturaLink.' },
    ],
  },
  r8: {
    fullDescription: 'La Conselleria d\'Educació gestiona anualmente 340.000 expedientes académicos en formato papel y PDF no estructurado. El proceso de validación manual requiere 8,5 FTE de funcionarios y tiene un tiempo medio de tramitación de 23 días. Este reto planteaba desarrollar un sistema de extracción automática de datos basado en OCR + LLM que redujera el tiempo a menos de 2 días con una tasa de error inferior al 1%.',
    context: 'RETO RESUELTO. El equipo ganador (IES Campanar + CEICE) implantó la solución en producción en enero de 2026. El sistema procesa actualmente 1.200 expedientes/día con un 99.3% de precisión.',
    objectives: [
      '✓ Reducir tiempo de tramitación de 23 a < 2 días — LOGRADO (1.4 días de media)',
      '✓ Tasa de error < 1% — LOGRADO (0.7% de tasa de error en producción)',
      '✓ Integración con sistema GVA (Documentum) — LOGRADO',
      '✓ Dashboard de monitorización de expedientes — LOGRADO',
    ],
    eligibility: ['Reto cerrado — en producción desde enero 2026'],
    teamSize: 'Reto cerrado',
    datasets: [
      { label: 'Dataset de expedientes anonimizados (acceso cerrado)', format: 'PDF', size: 'N/A' },
    ],
    tools: ['Python', 'Tesseract + PaddleOCR', 'LLaMA 3 (fine-tuning)', 'FastAPI', 'Apache Airflow'],
    deliverables: [
      { label: 'Sistema en producción GVA', format: 'Entregado y validado' },
      { label: 'Caso de éxito publicado', format: 'PDF público en la sección de Conocimiento' },
    ],
    evalCriteria: [
      { label: 'Tasa de error en producción', weight: 40, desc: 'Evaluado sobre expedientes reales' },
      { label: 'Tiempo de tramitación', weight: 30, desc: 'Medido en producción durante 3 meses' },
      { label: 'Integración y estabilidad del sistema', weight: 30, desc: 'SLA 99.5% uptime' },
    ],
    milestones: [
      { date: '01 Sep 2025', label: 'Publicación del reto', done: true },
      { date: '15 Sep 2025', label: 'Cierre inscripciones', done: true },
      { date: '31 Oct 2025', label: 'Checkpoint: OCR baseline funcional', done: true },
      { date: '30 Nov 2025', label: 'Checkpoint: integración LLM', done: true },
      { date: '28 Feb 2026', label: 'Entrega final y resolución', done: true },
      { date: '15 Mar 2026', label: 'Implantación en producción GVA ✓', done: true },
    ],
    mentors: [
      { name: 'Dr. Miguel Ángel Pastor', role: 'RPA y Automatización', org: 'CEICE / UPV' },
    ],
    recognition: [
      'Equipo ganador (IES Campanar): contrato de mantenimiento con GVA (12 meses)',
      'Publicación del caso de éxito en la sección de Conocimiento de la red',
      'Reconocimiento oficial en el BOE del CEICE',
    ],
    faq: [],
  },
  r9: {
    fullDescription: 'La desinformación climática es uno de los principales obstáculos para la acción colectiva frente al cambio climático. INESC TEC lidera un proyecto de investigación financiado por el ERC que busca desarrollar un sistema de detección automática de narrativas de desinformación sobre cambio climático en redes sociales (Twitter/X y Mastodon) en tres idiomas: español, portugués e inglés. El reto propone construir el clasificador de textos del sistema.',
    context: 'Se dispone de un corpus anotado de 45.000 tuits en los tres idiomas, con etiquetas de veracidad (verdadero / desinformación / incierto) y tipo de narrativa (negacionismo, exageración, whataboutism, etc.).',
    objectives: [
      'Clasificador multilingüe con F1-macro ≥ 0.82 para las 3 clases principales',
      'Identificación del tipo de narrativa de desinformación (multiclase)',
      'Construir un grafo de conocimiento de narrativas interconectadas',
      'Desarrollar una API de clasificación en tiempo real para integración con Mastodon',
    ],
    eligibility: [
      'Equipos de 2 a 4 estudiantes de Máster en IA, NLP o Ciencias Sociales Computacionales',
      'Conocimientos sólidos de transformers y clasificación de texto',
      'Valorable manejo de alguno de los tres idiomas del corpus',
    ],
    teamSize: '2 – 4 estudiantes de Máster',
    datasets: [
      { label: 'Corpus anotado 45.000 tuits (ES/PT/EN)', format: 'JSON + CSV', size: '820 MB' },
      { label: 'Grafo de narrativas de referencia (WP2 INESC TEC)', format: 'RDF / Turtle', size: '180 MB' },
      { label: 'Embeddings precomputados (XLM-R, mDeBERTa)', format: 'NumPy', size: '4.5 GB' },
    ],
    tools: ['Python', 'HuggingFace Transformers', 'NetworkX / Neo4j', 'FastAPI', 'Docker'],
    deliverables: [
      { label: 'Clasificador multilingüe de desinformación', format: 'Repositorio GitHub + modelo en HuggingFace Hub' },
      { label: 'Grafo de narrativas extendido', format: 'RDF / Neo4j dump' },
      { label: 'API de clasificación en tiempo real', format: 'Docker image + documentación Swagger' },
      { label: 'Artículo de investigación', format: 'PDF formato ACL ≤ 8 páginas' },
    ],
    evalCriteria: [
      { label: 'F1-macro del clasificador multilingüe', weight: 40, desc: 'Evaluado sobre test set reservado de cada idioma' },
      { label: 'Calidad del grafo de narrativas', weight: 25, desc: 'Evaluado por investigadores de INESC TEC mediante expert review' },
      { label: 'Rendimiento de la API en tiempo real', weight: 20, desc: 'Latencia < 500ms por petición, throughput > 100 req/s' },
      { label: 'Rigor del artículo científico', weight: 15, desc: 'Revisado por el grupo de investigación de INESC TEC' },
    ],
    milestones: [
      { date: '20 Feb 2026', label: 'Apertura del reto', done: true },
      { date: '10 Mar 2026', label: 'Cierre inscripciones', done: true },
      { date: '30 Abr 2026', label: 'Checkpoint: clasificador baseline', done: false },
      { date: '30 Jun 2026', label: 'Checkpoint: sistema multilingüe + grafo', done: false },
      { date: '20 Oct 2026', label: 'Entrega final + artículo', done: false },
      { date: '10 Nov 2026', label: 'Presentación en workshop INESC TEC (Porto)', done: false },
    ],
    mentors: [
      { name: 'Dr. João Magalhães', role: 'NLP & Fact Checking', org: 'INESC TEC' },
      { name: 'Dra. Isabel Trancoso', role: 'Procesamiento Multilingüe', org: 'INESC TEC / IST Lisboa' },
    ],
    recognition: [
      '1.er equipo: integración del modelo en el proyecto ERC de INESC TEC + co-autoría',
      'Publicación en ACL Findings o EMNLP',
      'Todos: badge GreenAI Badge + micro-credencial European Digital Credential',
      'Invitación al workshop de resultados en Porto (gastos cubiertos)',
    ],
    faq: [
      { q: '¿El corpus está desbalanceado?', a: 'Sí. Aproximadamente 60% verdadero, 30% desinformación, 10% incierto. Se recomienda técnicas de oversampling o loss weighting.' },
      { q: '¿Puedo publicar el modelo en HuggingFace Hub?', a: 'Sí, es parte de los entregables. El modelo se publicará bajo licencia Apache 2.0 en la organización AI-SECRETT de HuggingFace.' },
    ],
  },
};

const statusStyles: Record<string, { bg: string; text: string; dot: string }> = {
  'Abierto': { bg: 'bg-green-100', text: 'text-green-800', dot: 'bg-green-500' },
  'En Resolución': { bg: 'bg-yellow-100', text: 'text-yellow-800', dot: 'bg-yellow-500' },
  'Resuelto': { bg: 'bg-gray-100', text: 'text-gray-600', dot: 'bg-gray-400' },
};

const levelStyles: Record<string, string> = {
  FP: 'bg-eu-yellow text-eu-purple',
  Máster: 'bg-purple-100 text-purple-800',
};

interface ChallengeDetailProps {
  challenge: Challenge;
  onBack: () => void;
}

export default function ChallengeDetail({ challenge, onBack }: ChallengeDetailProps) {
  const languageContext = useContext(LanguageContext);
  const currentLanguage = languageContext?.language || 'es';
  const t = languageContext?.translations[currentLanguage]?.challengeDetail || {};

  // Get challenge data in current language
  const extra = challengeExtras[currentLanguage as keyof typeof challengeExtras]?.[challenge.id as keyof typeof challengeExtras.es] ||
    challengeExtras.es[challenge.id as keyof typeof challengeExtras.es];
  const st = statusStyles[challenge.status];

  return (
    <div className="animate-in fade-in duration-300">
      {/* Sticky nav */}
      <div className="bg-white border-b border-eu-border sticky top-[112px] z-40 px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-eu-blue font-bold text-sm hover:underline bg-transparent border-none cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> {t.backButton || 'Volver al Banco de Retos'}
          </button>
          <div className="flex items-center gap-2">
            <span className={`text-sm font-extrabold uppercase px-2 py-0.5 rounded ${levelStyles[challenge.level]}`}>
              {t.challengeLevel} {challenge.level}
            </span>
            <span className={`flex items-center gap-1.5 text-sm font-bold px-2 py-0.5 rounded ${st.bg} ${st.text}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${st.dot}`}></span>
              {challenge.status}
            </span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-eu-blue text-white px-6 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold uppercase tracking-widest text-eu-yellow">{challenge.sector}</span>
              <ChevronRight className="w-3 h-3 text-white/40" />
              <span className="text-xs text-white/60">{challenge.entityType}</span>
            </div>
            <h1 className="text-3xl font-extrabold mb-3 leading-tight">{challenge.title}</h1>
            <div className="flex items-center gap-3 mb-5">
              <Building2 className="w-4 h-4 text-white/60 shrink-0" />
              <span className="text-white/80 font-semibold">{challenge.entity}</span>
              <span className="text-white/40">·</span>
              <span className="text-white/60 text-sm">{challenge.country}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {challenge.tags.map((t) => (
                <span key={t} className="flex items-center gap-1 bg-white/10 text-white/80 text-xs font-semibold px-2.5 py-1 rounded-full">
                  <Tag className="w-3 h-3" />{t}
                </span>
              ))}
            </div>
          </div>

          {/* Key info card */}
          <div className="bg-white/10 rounded-xl p-5 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Calendar className="w-4 h-4 text-eu-yellow shrink-0" />
              <div>
                <p className="text-xs text-white/50 uppercase font-bold">{t.deadline || 'Plazo de entrega'}</p>
                <p className="font-bold text-white">{challenge.deadline}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-eu-yellow shrink-0" />
              <div>
                <p className="text-xs text-white/50 uppercase font-bold">{t.posted || 'Publicado'}</p>
                <p className="font-bold text-white">{challenge.posted}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-4 h-4 text-eu-yellow shrink-0" />
              <div>
                <p className="text-xs text-white/50 uppercase font-bold">{t.teamsEnrolled || 'Equipos inscritos'}</p>
                <p className="font-bold text-white">{challenge.teams} {challenge.teams === 1 ? (t.team || 'equipo') : (t.teams || 'equipos')}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-4 h-4 text-eu-yellow shrink-0" />
              <div>
                <p className="text-xs text-white/50 uppercase font-bold">{t.teamComposition || 'Composición de equipo'}</p>
                <p className="font-bold text-white text-sm">{extra?.teamSize ?? '—'}</p>
              </div>
            </div>
            {challenge.status === 'Abierto' && (
              <button className="mt-2 w-full bg-eu-orange text-white font-bold py-2.5 rounded-lg hover:bg-eu-purple transition-colors border-none cursor-pointer text-sm">
                {t.enrollButton || 'Inscribir mi equipo →'}
              </button>
            )}
            {challenge.status === 'En Resolución' && (
              <div className="mt-2 w-full bg-yellow-400/20 text-yellow-200 font-bold py-2.5 rounded-lg text-sm text-center">
                {t.enrollmentClosed || 'Inscripciones cerradas'}
              </div>
            )}
            {challenge.status === 'Resuelto' && (
              <div className="mt-2 w-full bg-white/10 text-white/60 font-bold py-2.5 rounded-lg text-sm text-center">
                {t.challengeCompleted || 'Reto completado'}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Main content */}
        <div className="lg:col-span-2 space-y-8">

          {/* Descripción */}
          <section className="bg-white rounded-xl border border-eu-border shadow-sm p-7">
            <h2 className="text-lg font-bold text-eu-text mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-eu-blue" /> {t.descriptionTitle || 'Descripción del Reto'}
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">{extra?.fullDescription ?? challenge.description}</p>
            {extra?.context && (
              <div className="bg-eu-bg border-l-4 border-eu-teal rounded-r-lg p-4">
                <p className="text-xs font-bold text-eu-teal uppercase mb-1">{t.contextLabel || 'Contexto y datos disponibles'}</p>
                <p className="text-sm text-gray-600">{extra.context}</p>
              </div>
            )}
          </section>

          {/* Objetivos */}
          {extra?.objectives && (
            <section className="bg-white rounded-xl border border-eu-border shadow-sm p-7">
              <h2 className="text-lg font-bold text-eu-text mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-eu-orange" /> {t.objectivesTitle || 'Objetivos y Resultados Esperados'}
              </h2>
              <ul className="space-y-2.5">
                {extra.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-eu-teal mt-0.5 shrink-0" />
                    {obj}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Datos y recursos */}
          {extra && (
            <section className="bg-white rounded-xl border border-eu-border shadow-sm p-7">
              <h2 className="text-lg font-bold text-eu-text mb-4 flex items-center gap-2">
                <Database className="w-5 h-5 text-eu-blue" /> {t.resourcesTitle || 'Datos y Recursos Disponibles'}
              </h2>
              <div className="mb-5">
                <p className="text-xs font-bold text-gray-500 uppercase mb-3">{t.datasetsLabel || 'Datasets proporcionados'}</p>
                <div className="space-y-2">
                  {extra.datasets.map((d, i) => (
                    <div key={i} className="flex items-center justify-between bg-eu-bg rounded-lg px-4 py-2.5 border border-eu-border">
                      <div className="flex items-center gap-2">
                        <Download className="w-4 h-4 text-eu-blue shrink-0" />
                        <span className="text-sm font-semibold text-eu-text">{d.label}</span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0 ml-4">
                        <span className="text-xs bg-eu-blue/10 text-eu-blue font-bold px-2 py-0.5 rounded">{d.format}</span>
                        <span className="text-xs text-gray-400 font-semibold">{d.size}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase mb-3">{t.toolsLabel || 'Tecnologías recomendadas'}</p>
                <div className="flex flex-wrap gap-2">
                  {extra.tools.map((t) => (
                    <span key={t} className="text-xs bg-eu-bg border border-eu-border px-2.5 py-1 rounded-full font-semibold text-gray-600">{t}</span>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Entregables */}
          {extra?.deliverables && (
            <section className="bg-white rounded-xl border border-eu-border shadow-sm p-7">
              <h2 className="text-lg font-bold text-eu-text mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-eu-teal" /> {t.deliverablesTitle || 'Entregables Requeridos'}
              </h2>
              <div className="space-y-2.5">
                {extra.deliverables.map((d, i) => (
                  <div key={i} className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-full bg-eu-teal/10 text-eu-teal text-xs font-extrabold flex items-center justify-center shrink-0">{i + 1}</span>
                      <span className="text-sm font-semibold text-eu-text">{d.label}</span>
                    </div>
                    <span className="text-xs text-gray-500 font-semibold shrink-0 text-right">{d.format}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Evaluación */}
          {extra?.evalCriteria && (
            <section className="bg-white rounded-xl border border-eu-border shadow-sm p-7">
              <h2 className="text-lg font-bold text-eu-text mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-eu-yellow" /> {t.evaluationTitle || 'Criterios de Evaluación'}
              </h2>
              <div className="space-y-4">
                {extra.evalCriteria.map((c, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-bold text-eu-text">{c.label}</span>
                      <span className="text-sm font-extrabold text-eu-blue">{c.weight}%</span>
                    </div>
                    <div className="w-full bg-eu-bg rounded-full h-1.5 mb-1.5">
                      <div className="bg-eu-blue h-1.5 rounded-full" style={{ width: `${c.weight}%` }}></div>
                    </div>
                    <p className="text-xs text-gray-500">{c.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Elegibilidad */}
          {extra?.eligibility && extra.eligibility.length > 0 && extra.eligibility[0] !== 'Reto cerrado — en producción desde enero 2026' && (
            <section className="bg-white rounded-xl border border-eu-border shadow-sm p-7">
              <h2 className="text-lg font-bold text-eu-text mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-eu-teal" /> {t.eligibilityTitle || 'Elegibilidad y Requisitos'}
              </h2>
              <ul className="space-y-2">
                {extra.eligibility.map((e, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-eu-teal mt-1.5 shrink-0"></span>
                    {e}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* FAQ */}
          {extra?.faq && extra.faq.length > 0 && (
            <section className="bg-white rounded-xl border border-eu-border shadow-sm p-7">
              <h2 className="text-lg font-bold text-eu-text mb-4 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-eu-orange" /> {t.faqTitle || 'Preguntas Frecuentes'}
              </h2>
              <div className="space-y-4">
                {extra.faq.map((f, i) => (
                  <div key={i} className="border-b border-eu-border pb-4 last:border-0 last:pb-0">
                    <p className="text-sm font-bold text-eu-text mb-1.5">{f.q}</p>
                    <p className="text-sm text-gray-600">{f.a}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">

          {/* Timeline */}
          {extra?.milestones && (
            <div className="bg-white rounded-xl border border-eu-border shadow-sm p-6">
              <h3 className="font-bold text-eu-text mb-4 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-eu-blue" /> {t.milestonesTitle || 'Hitos del Reto'}
              </h3>
              <div className="relative">
                <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-eu-border"></div>
                <div className="space-y-4">
                  {extra.milestones.map((m, i) => (
                    <div key={i} className="flex gap-3 pl-8 relative">
                      <div className={`absolute left-0 top-1 w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${m.done ? 'bg-eu-teal' : 'bg-white border-2 border-eu-border'}`}>
                        {m.done && <CheckCircle className="w-3.5 h-3.5 text-white" />}
                      </div>
                      <div>
                        <p className={`text-xs font-bold ${m.done ? 'text-eu-teal' : 'text-gray-400'}`}>{m.date}</p>
                        <p className={`text-xs mt-0.5 ${m.done ? 'text-eu-text font-semibold' : 'text-gray-500'}`}>{m.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Mentores */}
          {extra?.mentors && (
            <div className="bg-white rounded-xl border border-eu-border shadow-sm p-6">
              <h3 className="font-bold text-eu-text mb-4 flex items-center gap-2">
                <Users className="w-4 h-4 text-eu-blue" /> {t.mentorsTitle || 'Mentores del Reto'}
              </h3>
              <div className="space-y-4">
                {extra.mentors.map((m, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-eu-blue/10 flex items-center justify-center shrink-0 text-eu-blue font-extrabold text-sm">
                      {m.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-eu-text">{m.name}</p>
                      <p className="text-xs text-eu-teal font-semibold">{m.role}</p>
                      <p className="text-xs text-gray-400">{m.org}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Reconocimiento */}
          {extra?.recognition && (
            <div className="bg-white rounded-xl border border-eu-border shadow-sm p-6">
              <h3 className="font-bold text-eu-text mb-4 flex items-center gap-2">
                <Award className="w-4 h-4 text-eu-orange" /> {t.recognitionTitle || 'Reconocimiento'}
              </h3>
              <ul className="space-y-2.5">
                {extra.recognition.map((r, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-gray-700">
                    <span className="text-eu-orange font-extrabold shrink-0 mt-0.5">
                      {i === 0 ? '🥇' : i === 1 ? '🥈' : '✓'}
                    </span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA bottom */}
          {challenge.status === 'Abierto' && (
            <div className="bg-eu-blue rounded-xl p-6 text-white text-center">
              <p className="font-bold mb-1">{t.interestCTA || '¿Te interesa este reto?'}</p>
              <p className="text-xs text-white/70 mb-4">{t.enrollBeforeDeadline || 'Inscríbete antes del'} {challenge.deadline}</p>
              <button className="w-full bg-eu-orange text-white font-bold py-2.5 rounded-lg hover:bg-eu-purple transition-colors border-none cursor-pointer text-sm">
                {t.enrollButton || 'Inscribir mi equipo →'}
              </button>
              <p className="text-xs text-white/50 mt-3">{t.privateAreaAccess || 'Acceso con cuenta del Área Privada AI-STEAM'}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

