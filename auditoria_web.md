# Guía de Auditoría de Producto: Proyecto PSMaria

---

## Rol Sugerido para el Agente (Opus 4.6)
Actúa como un **Lead Product Engineer & Growth Specialist** con enfoque en escalabilidad, conversión y rendimiento de frontend.

## Objetivo del Análisis
Realizar una auditoría técnica y estratégica integral del repositorio para transformar el MVP actual en una plataforma web de alto impacto comercial (nivel Premium) que maximice la conversión de los servicios de la empresa.

---

## 1. Dimensiones de Análisis Solicitadas

### A. Diseño & UX (User Experience)
* **Evaluación Tailwind:** Auditoría de la implementación de Tailwind CSS en los componentes de `src`.
* **Consistencia Visual:** Identificación de inconsistencias en espaciados, tipografías y paleta de colores.
* **Jerarquía de Confianza:** Sugerencias para integrar elementos de "Social Proof" (testimonios, logos de clientes, certificaciones) con estética premium.

### B. SEO Semántico & Estructura
* **Cumplimiento de Estándares:** Análisis de `index.html` y componentes para asegurar el cumplimiento de jerarquía de encabezados (H1-H6).
* **Metadatos:** Estrategia de metadatos dinámicos para redes sociales (Open Graph) y buscadores.
* **Accesibilidad (A11y):** Verificación de estándares WCAG para garantizar una web inclusiva y profesional.

### C. Conversión (CRO) y Estrategia Comercial
* **Análisis de Embudos:** Evaluación de los flujos de navegación hacia los puntos de contacto.
* **Efectividad de CTAs:** Revisión técnica y visual de los botones de llamada a la acción (Call to Action).
* **Propuesta de Valor:** Análisis de cómo se presentan los servicios para asegurar que la ventaja competitiva sea clara y atractiva.

### D. Rendimiento & Performance
* **Core Web Vitals:** Revisión de `vite.config.js` y `package.json` para detectar cuellos de botella.
* **Optimización de Carga:** Identificación de activos pesados y sugerencias de Lazy Loading o Tree-shaking de dependencias.

---

## 2. Prompt para Copiar y Pegar en Antigravity

> **Instrucción:** Analizá el proyecto "PSMaria" bajo una lente de Ingeniería de Producto y Negocio.
>
> **Tareas:**
> 1. **Diseño:** Revisá la consistencia de Tailwind. ¿Es el diseño lo suficientemente limpio y profesional para vender servicios B2B/Premium? Proponé ajustes de UI.
> 2. **SEO:** Auditá la semántica HTML. Asegurá que la estructura sea rastreable y competitiva en rankings de servicios industriales/profesionales.
> 3. **Ventas (CRO):** Evaluá el flujo de usuario. ¿Es fácil comprar o contratar? ¿Qué falta para que la web sea una máquina de ventas?
> 4. **Performance:** Revisá dependencias en `package.json`. Optimizá para que la carga sea instantánea, especialmente en móviles.
>
> **Entregable:** Presentá un diagnóstico técnico, una lista de "Quick Wins" inmediatos y una hoja de ruta estratégica.
