# GeekHaven Shop

GeekHaven Shop es una tienda web ficticia creada como proyecto final de **Interacción Humano-Computador (IHC)**.  
El enfoque principal está en **accesibilidad**, **experiencia de usuario** y **estética gamer/geek** con tecnologías web base (HTML, CSS y JavaScript).

## ✨ Características

- 🎨 **Temas acessíveis**:
  - Tema padrão (dark gamer)
  - Fundo claro
  - Modo dessaturado
  - Modo daltônico (paleta amigable para daltonismo vermelho–verde)

- ♿ **Foco en accesibilidad**:
  - Uso de `localStorage` para recordar las preferencias de tema
  - Contraste ajustado por tema
  - Navegación consistente en todas las páginas
  - Clases auxiliares como `.sr-only` para lectores de pantalla
  - Respeto a `prefers-reduced-motion` para reducir animaciones si el sistema lo pide

- 🪄 **Microinteracciones y animaciones**:
  - “Reveal on scroll” usando `IntersectionObserver`
  - Hover suave en tarjetas de producto
  - Glow animado en la sección hero
  - Transición entre páginas (fade-in / fade-out) sin frameworks

- 🛒 **Estructura de la tienda**:
  - `index.html` — Inicio / Destaques
  - `products.html` — Catálogo de productos
  - `product.html` — Página de detalle (modelo)
  - `cart.html` — Carrito (layout y tabla)
  - `about.html` — Información y notas de accesibilidad

## 🧰 Tecnologías utilizadas

- HTML semántico
- CSS (variables, media queries, temas, animações)
- JavaScript vanilla (DOM, eventos, `localStorage`, `IntersectionObserver`)

## 🚀 Cómo ejecutar

No requiere backend ni build:

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/<tu-usuario>/Geek-Haven-Shop.git