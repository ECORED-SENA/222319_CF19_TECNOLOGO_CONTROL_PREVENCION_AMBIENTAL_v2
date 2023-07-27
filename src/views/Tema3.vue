<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0
      .titulo-principal__numero
        span 3
      h1 Equipos de monitoreo de contaminación atmosférica

    
    .row.mb-5
      .fondo-tema3img.p-4(data-aos="fade-down")
        .row.justify-content-center
          .col-md-10.bg-white.p-4.p-md-4.my-md-5
            p La contaminación atmosférica debe ser medida, en gran medida, por el impacto que genera en el aire que se respira.
            p.mb-0 Por ende, el seguimiento y el monitoreo es fundamental para cuantificar las concentraciones de contaminantes expuestos en el aire; para ello, identificar los equipos y técnicas asociadas es importante y, entonces, tomar decisiones ambientales en la empresa, proyecto, región o país, según sea el caso.


    h3.subt.text-white.mb-4(data-aos="fade") El muestreo

    .row.mb-md-4
      .col-md-7.mb-4(data-aos="fade-right")
        p El concepto de muestreo se define, en lo que a calidad del aire se refiere, como “la medición de la contaminación del aire por medio de la toma de muestras, de forma discontinua”.
        p Actualmente, el muestreo se utiliza principalmente para determinar la concentración de partículas suspendidas, en sus diferentes fracciones:
        ul.lista-ul--color.color-secundario.ps-3.mb-0.fa-ul
          li
            i.fas.fa-check
            | Totales (PST).
          li
            i.fas.fa-check
            | Partículas menores de 10 micrómetros de diámetro aerodinámico (PM10).
          li
            i.fas.fa-check
            | Partículas menores de 2.5 micrómetros de diámetro aerodinámico (PM2.5).
          li
            i.fas.fa-check
            | La muestra tomada deberá ser sometida a análisis posterior, donde se detecta su concentración y caracterización.
      .col-md-5.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema3/img2.png' alt='')


    .row.fondo-tema3.align-items-center.py-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-md-12
            h3.subt.text-white.mb-4(data-aos="fade") Métodos de medición de la calidad del aire
          
          .col-md-3.mb-4(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema3/img3.png' alt='')
          .col-md-9.mb-4(data-aos="fade-left")
            p Para la medición de los contaminantes atmosféricos, también se pueden establecer diversos métodos.
            p.mb-0 Según el Manual 1 (INE, 2020, p. 16-17), se pueden agrupar en principios de muestreo pasivo, muestreo activo y muestreo automático.

          .col-md-12
            h4.t-green2.mb-4(data-aos="fade") A. Muestreo pasivo
          
          .col-md-7.mb-4(data-aos="fade-right")
            p Este método de muestreo colecta un contaminante específico por medio de su adsorción y/o absorción en un sustrato químico seleccionado.
            p Después de su exposición por un periodo adecuado de muestreo, que puede variar desde una hora hasta meses o inclusive un año, la muestra se regresa al laboratorio, donde se realiza la desorción del contaminante para ser analizado cuantitativamente. Los equipos utilizados se conocen como muestreadores pasivos, que se presentan en diversas formas y tamaños, principalmente, en forma de tubos o discos. (INE, 2020, p. 17)
          .col-md-5.mb-4(data-aos="fade-left")
            img(src='@/assets/curso/temas/tema3/img4.png' alt='')

          .col-md-12
            h4.t-green2.mb-4(data-aos="fade") B. Muestreo activo
            p El muestreo activo requiere de energía eléctrica para succionar el aire a muestrear, a través de un medio de colección físico o químico. El volumen adicional de aire muestreado incrementa la sensibilidad, por lo que pueden obtenerse mediciones diarias promedio.
            p.mb-4 A continuación, se amplía información y elementos clave del activo:

          .tarjeta.fondo-sliderA.p-4.p-md-5.pb-md-3.mb-5
            SlyderA(tipo="b" data-aos="fade-down")
              .row.justify-content-center
                .col-md-6.mb-4.mb-md-0
                  h4 Muestreadores de alto volumen  
                  p Mejor conocidos como los muestreadores HIVOL, son equipos diseñados para la toma de muestras de material particulado, estos equipos toman grandes volúmenes de aire con el fin de captar la mayor cantidad de partículas, las cuales son atrapadas en filtros de fibra de vidrio, los cuales posteriormente se analizan gravimétricamente en el laboratorio para cuantificar la cantidad de material particulado presente en el aire.
                .col-md-5
                    img(src='@/assets/curso/temas/tema3/slide-img1.png', alt='')
              .row.justify-content-center
                .col-md-6.mb-4.mb-md-0
                  h4 Funcionamiento de muestreador de alto volumen 
                  p Un muestreador de aire arrastra aire ambiente a una velocidad de flujo constante hacia una entrada de forma especial donde el material particulado se separa por inercia en uno o más fracciones dentro del intervalo de tamaño de PM10. Cada fracción dentro del intervalo de tamaño de PM10 se recolecta en un filtro separado en un periodo de muestreo específico. Cada filtro se pesa (después de equilibrar la humedad) antes y después de usarlo para determinar el peso neto (masa) ganado debido al PM10 colectado.
                .col-md-5
                    img(src='@/assets/curso/temas/tema3/slide-img2.png', alt='')
              .row.justify-content-center
                .col-md-6.mb-4.mb-md-0
                  h4 Muestreadores HIVOL se caracterizan por 
                  ul.lista-ul--color.color-secundario.mb-0.fa-ul
                    li
                      i.fas.fa-check
                      | Arrastrar la muestra de aire hacia la entrada del muestreador y a través del filtro de recolección de partículas a una velocidad de fase uniforme. 
                    li
                      i.fas.fa-check
                      | Mantener y sellar el filtro en una posición horizontal, de forma tal que la muestra de aire sea arrastrada en forma descendente a través del filtro. 
                    li
                      i.fas.fa-check
                      | Permitir que el filtro se instale y remueva convenientemente.
                    li
                      i.fas.fa-check
                      | Proteger el filtro y el muestreador de las precipitaciones y prevenir que insectos y otros desechos sean muestreados. 
                    li
                      i.fas.fa-check
                      | Minimizar las fugas de aire que puedan causar error en la medición del volumen de aire que pasa a través del filtro.
                    li
                      i.fas.fa-check
                      | Descargar el aire de salida a una distancia suficiente de la entrada del muestreador para minimizar el muestreo del aire de salida. 
                    li
                      i.fas.fa-check
                      | Minimizar la recolección de polvo de la superficie de soporte.  
                .col-md-5
                    img(src='@/assets/curso/temas/tema3/slide-img3.png', alt='')
              .row.justify-content-center
                .col-md-8.mb-4.mb-md-0
                  h4 Muestreador de tres gases RAC3 
                  p Para la determinación de gases tipo criterio, como los SO<sub>x</sub>,NO<sub>x</sub>,O<sub>3</sub>, se emplea el muestreador de tres gases, mejor conocido como muestreador RACK 3. Esta clase de equipos consta de un sistema de impactación y una bomba de vacío cuya función es captar una muestra de aire ambiente con el fin de solubilizar en reactivos selectivos cada uno de estos contaminantes, para luego llevar las muestras al laboratorio y cuantificar su contenido y así determinar la concentración contaminante presente en la atmósfera.
                .col-md-3
                    img(src='@/assets/curso/temas/tema3/slide-img4.png', alt='')
              .row.justify-content-center
                .col-md-6.mb-4.mb-md-0
                  h4 Particularidades de muestreadores RAC
                  ul.lista-ul--color.color-secundario.mb-0.fa-ul
                    li
                      i.fas.fa-check
                      | Recolectan las muestras de contaminantes por métodos físicos o químicos para su posterior análisis en un laboratorio.
                    li
                      i.fas.fa-check
                      | Generalmente, toman un volumen conocido de aire y lo bombean a través de un colector por un periodo de tiempo determinado.
                    li
                      i.fas.fa-check
                      | Es una técnica muy popularizada en el mundo.
                    li
                      i.fas.fa-check
                      | Demanda una logística diaria para su operación.
                    li
                      i.fas.fa-check
                      | Se denominan activos porque requieren energía eléctrica para su funcionamiento.
                  
                .col-md-5
                    img(src='@/assets/curso/temas/tema3/slide-img5.png', alt='')


    h4.t-green2.mb-4(data-aos="fade") C. Método automático

    .row.mb-4
      .col-md-7.mb-4(data-aos="fade-right")
        p Estos métodos son los mejores en términos de la alta resolución de sus mediciones, permitiendo llevar a cabo mediciones de forma continua para concentraciones horarias y menores.
        p El espectro de contaminantes que se pueden determinar va desde los contaminantes criterio (PM10-PM2.5, CO, SO<sub>2</sub>, NO<sub>2</sub>, O<sub>3</sub>) hasta tóxicos en el aire, como mercurio y algunos compuestos orgánicos volátiles. Las muestras colectadas se analizan utilizando una variedad de métodos, los cuales incluyen la espectroscopía y cromatografía de gases. Además, estos métodos tienen la ventaja de que, una vez que se carga la muestra al sistema, dan las lecturas de las concentraciones de manera automática y en tiempo real. (INE, 2020, p. 18)
        p Dentro del muestreo automático encontramos:
        .bg-blue.p-4
          h4.t-green2 Analizadores automáticos
          p.mb-0 Según el Protocolo de Calidad del Aire (MAVDT, 2010, p.79), los analizadores automáticos permiten evaluar el comportamiento de los contaminantes atmosféricos, tanto en el tiempo como en el espacio.
      .col-md-5(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema3/img5.png' alt='')

    .row.mb-4
      .col-md-3.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema3/img6.png' alt='')
      .col-md-9(data-aos="fade-left")
        TabsA.tema6.color-acento-contenido
          .tarjeta.bg-green3.p-4(titulo="Enfoques de uso")
            h4 Enfoques de uso
            p Además, por la confiabilidad y oportunidad de los datos que genera, se emplean para definir políticas y estrategias de prevención y control de la contaminación, al igual que para evaluar la eficacia de los programas que se implanten.
          .tarjeta.bg-green3.p-4(titulo="Niveles de confiabilidad")
            h4 Niveles de confiabilidad
            p Pueden proporcionar mediciones de tipo puntual, con alta resolución (promedios horarios o cada 10 minutos), para la mayoría de los contaminantes criterio (SO<sub>2</sub>, NO<sub>2</sub>, CO, PST, PM10, PM2.5), como para otras especies importantes (HCT, HCM/HCNM, COV, etc.).
          .tarjeta.bg-green3.p-4(titulo="Practicidad")
            h4 Practicidad
            p Estas muestras pueden ser analizadas en línea, usualmente por métodos electro-ópticos (Absorción UV, infrarrojo no dispersivo, fluorescencia o quimioluminiscencia) y los datos pueden ser transmitidos en tiempo real.
          .tarjeta.bg-green3.p-4(titulo="Aseguramiento y control de calidad")
            h4 Aseguramiento y control de calidad
            p Para obtener datos exactos, precisos y confiables con esta técnica, debe alcanzarse un estándar alto de mantenimiento y de operación, además de un adecuado programa de aseguramiento y control de calidad.
        
    .row.fondo-green.align-items-center.py-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-md-12
            h4.t-green2.mb-4(data-aos="fade") Equipos automáticos para medición de gases

          .col-md-7.mb-4(data-aos="fade-right")
            p Estos equipos funcionan bajo principios ópticos y eléctricos basados en características físicas y químicas del gas. Es la tecnología de medición puntual más avanzada en este campo. Estos equipos son generalmente instalados en cabinas, bajo condiciones controladas de humedad y temperatura. (MAVDT, 2010, p. 80).
            p Sus características principales son:
            ul.lista-ul--color.color-secundario.mb-0.ps-3.fa-ul
              li.mb-4
                i.fas.fa-check
                | Mediciones en tiempo real.
              li.mb-4
                i.fas.fa-check
                | Proporcionan mediciones de tipo puntual, con alta resolución (promedios horarios o cada diez minutos).
              li.mb-4
                i.fas.fa-check
                | La concentración del contaminante es analizada en línea, usualmente por métodos ópticos y eléctricos (absorción UV, infrarrojo no dispersivo, fluorescencia o quimioluminiscencia).
              li.mb-4
                i.fas.fa-check
                | Capacidad de transmitir datos.
              li.mb-4
                i.fas.fa-check
                | Necesita logística de mantenimiento.
              li.mb-4
                i.fas.fa-check
                | Deben ser dispuestos en cabinas especialmente diseñadas.
              li.mb-4
                i.fas.fa-check
                | Necesitan gases patrón de calibración.
          .col-md-5(data-aos="fade-left")
            img(src='@/assets/curso/temas/tema3/img7.png' alt='')


    .row.fondo-green.align-items-center.py-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-md-12
            h4.t-green2.mb-4(data-aos="fade") Equipos automáticos para medición de partículas
            p.mb-4(data-aos="fade") Para la medición del material particulado, el Protocolo de Calidad del Aire recomienda los equipos tipo <em>Beta Gauge</em> (atenuación de radiación beta) o <em>Tapered Element Oscillating Microbalance</em> (microbalanza oscilante de elemento cónico). El analizador beta toma las partículas suspendidas en un filtro y calcula el peso de las partículas por absorbancia de rayos beta. El coeficiente de absorción depende únicamente de la fuente de rayos beta, no del tipo de material, tamaños o colores de las partículas. Por consiguiente, el peso es determinado por la absorbancia únicamente.
          
          .col-md-5.mb-4(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema3/img8.png' alt='')
          .col-md-7(data-aos="fade-left")
            ul.lista-ul--color.color-secundario.mb-0.ps-3.fa-ul
              li.mb-4
                i.fas.fa-check
                span.mb-0 Los equipos basados en el método 
                  <em>Tapered Element Oscillating Microbalance</em> utilizan un filtro intercambiable montado al final de un tubo hueco afilado.
              li.mb-4
                i.fas.fa-check
                | El extremo ancho del tubo es fijo.
              li.mb-4
                i.fas.fa-check
                | El elemento afilado vibra en su frecuencia natural, el aire de muestreo se pasa a través del filtro donde se depositan las partículas.
              li.mb-4
                i.fas.fa-check
                | La frecuencia de vibración natural disminuye conforme aumenta la masa de material particulado en el filtro, mientras la electrónica del equipo monitorea esta frecuencia.
              li.mb-4
                i.fas.fa-check
                | Este equipo basado en la relación física entre la masa depositada y la frecuencia de vibración del instrumento calcula la masa de material particulado acumulado en el filtro.
              li.mb-4
                i.fas.fa-check
                | El cambio de masa en tiempo real es combinado con la exactitud del flujo controlado, con el ánimo de garantizar una medición precisa de la concentración de material particulado. (MAVDT, 2010, p. 80).




    .row.fondo2-tema3.align-items-center.py-5.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-md-12
            h3.subt.text-white.mb-4(data-aos="fade") Sistema de Vigilancia de Calidad del Aire SVCA

          .col-md-3.mb-4(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema3/img9.png' alt='')
          .col-md-9.mb-4(data-aos="fade-left")
            p.mb-0 Los Sistemas de Vigilancia de Calidad del Aire son la integración entre redes de equipos de muestreo de contaminantes, tipo criterio, y sistemas de información, los cuales se encargan de tomar muestras compuestas y/o puntuales de aire con el fin de cuantificar en tiempo real las concentraciones de los compuestos que son factores de afectación a la salud humana; para ello, el Ministerio de Ambiente de Colombia, en conjunto con organizaciones gubernamentales como el IDEAM, establece las condiciones que se deben tener en cuenta para el diseño, implementación y puesta en marcha de las estrategias que promueven el seguimiento y control de la calidad del aire en el país.
          
          p.mb-4(data-aos="fade") Para establecer la necesidad de implementar un SVCA en determinada zona, el Protocolo de Calidad del Aire (MAVDT, 2010, p. 13) establece las siguientes características a tener en cuenta:

          .col-md-11
            SlyderF.text-center.mb-5(columnas="col-lg-6 col-xl-4" data-aos="fade-down")
              .tarjeta.color-acento-contenido.fondo-tarjetas.p-4
                .row.justify-content-center.mb-3
                  .col-md-5.col-6
                    img.px-md-1(src='@/assets/curso/temas/tema3/ico1.svg' alt='')
                p Evaluación de las principales problemáticas de la calidad del aire en la jurisdicción de la autoridad ambiental competente, realizada a partir de la experiencia de la entidad y consulta con otras instituciones (de salud, académicas, ONG, entes territoriales, entre otras).
              .tarjeta.color-acento-contenido.fondo-tarjetas.p-4
                .row.justify-content-center.mb-3
                  .col-md-5.col-6
                    img.px-md-1(src='@/assets/curso/temas/tema3/ico2.svg' alt='')
                p Estudio de quejas reportadas a la autoridad ambiental, haciendo una recopilación estadística de las quejas y evaluando su posible origen y ubicación geográfica en la jurisdicción.
              .tarjeta.color-acento-contenido.fondo-tarjetas.p-4
                .row.justify-content-center.mb-3
                  .col-md-5.col-6
                    img.px-md-1(src='@/assets/curso/temas/tema3/ico3.svg' alt='')
                p Evaluación del dominio del Programa de Prevención y Control de la Contaminación Atmosférica (PPCCA), definiendo el área o áreas de medición en la jurisdicción de la autoridad ambiental y su interés puntual en el campo de gestión de la calidad del aire.
              .tarjeta.color-acento-contenido.fondo-tarjetas.p-4
                .row.justify-content-center.mb-3
                  .col-md-5.col-6
                    img.px-md-1(src='@/assets/curso/temas/tema3/ico1.svg' alt='')
                p Tamaño de las mayores áreas urbanas de la jurisdicción. Luego de una evaluación de los principales centros urbanos, se definirá si es necesario la implementación de un SVCA.
              .tarjeta.color-acento-contenido.fondo-tarjetas.p-4
                .row.justify-content-center.mb-3
                  .col-md-5.col-6
                    img.px-md-1(src='@/assets/curso/temas/tema3/ico2.svg' alt='')
                p No será necesario la implementación de un SVCA en poblaciones con número de habitantes menor a 50.000, a no ser que se presenten problemáticas ambientales específicas relacionadas con calidad del aire.
              .tarjeta.color-acento-contenido.fondo-tarjetas.p-4
                .row.justify-content-center.mb-3
                  .col-md-5.col-6
                    img.px-md-1(src='@/assets/curso/temas/tema3/ico3.svg' alt='')
                p Se debe implementar un SVCA en sitios con problemáticas ambientales especiales (zonas industriales, mineras u otras con fuentes de gran influencia), sin importar su densidad poblacional.

          .col-md-12
            h4.t-green2.mb-4(data-aos="fade") Escalas de monitoreo del SVCA     
            p.mb-4(data-aos="fade") El protocolo de calidad del aire define una escala de monitoreo para establecer su pertinencia y proyección de acuerdo con el área de jurisdicción, estableciendo una cobertura tanto del SVCA como de sus estaciones de calidad del aire asociadas. (MAVDT, 2010, p. 14).

          .row.justify-content-center
            .col-md-9
              .titulo-sexto.color-acento-contenido
                p.mb-0 #[b Tabla 1] Escala de monitoreo del SVCA
              .tabla-a.tema3.color-secundario.mb-5 
                table.box-shadow
                  caption.bg-white.mt-3 
                    p.mb-0 #[b Nota.] Tomado de MAVDT (2010).
                  thead
                    tr.bg-secundario
                      th Escala
                      th Descripción
                      th Escala
                  tbody.bg-white 
                    tr
                      td.fw-bold.text-center Micro
                      td Típica de áreas como cañones urbanos y corredores de tráfico, donde el público puede estar expuesto a altas concentraciones de contaminantes provenientes de las emisiones de fuentes móviles o fuentes puntuales. Responde a estudios puntuales de un grupo de fuentes y receptores específicos y/o estudios epidemiológicos. Las mediciones tomadas a esta escala no deben tomarse como representativas de un área mayor.
                      td.text-center 2 m – 100 m
                    tr.bg-green
                      td.fw-bold.text-center Media
                      td Representa concentraciones típicas de zonas limitadas en un área urbana.
                      td.text-center 100 m - 0.5 Km
                    tr
                      td.fw-bold.text-center Vecindario
                      td Las mediciones en esta categoría pueden representar las condiciones en un área específica al interior de un área urbana.
                      td.text-center 0.5 Km – 3 Km
                    tr.bg-green
                      td.fw-bold.text-center Urbana
                      td Condiciones de un área urbana.
                      td.text-center 3 Km – 20 Km
                    tr
                      td.fw-bold.text-center Regional
                      td Áreas rurales o conjunto de áreas urbanas y rurales. Incluye la interacción de varias jurisdicciones de diferentes autoridades ambientales.
                      td.text-center Más de 20 Km hasta el área total de la jurisdicción
                    tr.bg-green
                      td.fw-bold.text-center Nacional
                      td Estudio del país. Incluye la integración de varios SVCA y jurisdicciones de diferentes autoridades ambientales.
                      td.text-center Todo el país

          .col-md-12
            h4.t-green2.mb-4(data-aos="fade") Objetivos para los SVCA
            p.mb-4(data-aos="fade") Es importante establecer cuáles son los objetivos que se deben definir para el establecimiento de un sistema de vigilancia. El Protocolo de Calidad del Aire argumenta que los objetivos para la vigilancia de la calidad del aire deben definirse de una forma concisa y clara; deben ser congruentes con las posibilidades técnicas y económicas de la entidad. Es así como objetivos de vigilancia difusos, muy restringidos o demasiados ambiciosos resultarían en programas poco efectivos y costosos, con información poco relevante, con mínima utilización de los datos y, por ende, con uso inadecuado de los recursos disponibles. Una vez la autoridad ambiental haya definido la necesidad de implementar un SVCA, se pasará a definir sus objetivos, los cuales especificarán aspectos importantes para el diseño. (MAVDT, 2010, p. 14)

          .row
            .col-md-4.mb-4.mb-md-0(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema3/img10.png' alt='')     
            .col-md-8(data-aos="fade-left")
              p Estos serían los posibles objetivos de los SVCA
              ul.lista-ul--color.color-secundario.ps-3.mb-0.fa-ul
                li.mb-4
                  i.fas.fa-check
                  | Determinar el cumplimiento de las normas nacionales de la calidad del aire.
                li.mb-4
                  i.fas.fa-check
                  | Evaluar las estrategias de control de las autoridades ambientales.
                li.mb-4
                  i.fas.fa-check
                  | Observar las tendencias a mediano y largo plazo.
                li.mb-4
                  i.fas.fa-check
                  | Evaluar el riesgo para la salud humana.
                li.mb-4
                  i.fas.fa-check
                  | Determinar posibles riesgos para el medio ambiente.
                li.mb-4
                  i.fas.fa-check
                  | Activar los procedimientos de control en episodios de contaminación.
                li.mb-4
                  i.fas.fa-check
                  | Estudiar fuentes de contaminación e investigar quejas concretas.
                li
                  i.fas.fa-check
                  | Validar modelos de dispersión de la calidad del aire.
              


    h3.subt.text-white.mb-4(data-aos="fade") Métodos de medición de fuentes fijas

    .row.mb-4
      .col-md-7.mb-4(data-aos="fade-right")
        p Cuando se realizan mediciones de contaminantes en las fuentes fijas puntuales, estas se aplican directamente a los ductos de emisión, mejor conocidos como chimeneas. Este tipo de mediciones emplea técnicas tanto directas como indirectas. Sin embargo, los muestreos en chimeneas son los procedimientos más complejos y de más alto riesgo ocupacional que existen en el campo ambiental. La medición de las fuentes fijas en Colombia depende específicamente de tres factores importantes a tener en cuenta:
        ul.lista-ul--color.color-secundario.ps-3.mb-0.fa-ul
          li
            i.fas.fa-check
            | Infraestructura de las instalaciones (fuente de emisión o chimenea).
          li
            i.fas.fa-check
            | Tipos de contaminantes para monitorear.
          li
            i.fas.fa-check
            |  Metodología por emplear.
      .col-md-5(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema3/img11.png' alt='')

    p.mb-4(data-aos="fade") En este mismo sentido, y según lo establecido en el protocolo para el control y vigilancia de la contaminación atmosférica generada por fuentes fijas, versión II, los procedimientos para la medición de las emisiones atmosféricas:

    .row.mb-4
      .col-md-5.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema3/img12.svg' alt='')
      .col-md-7.mb-4(data-aos="fade-left")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-blue2")
          .row.justify-content-center(titulo="Incluyen")
            .col-md-11
              p Medición directa, balance de masas y factores de emisión. Durante la evaluación de emisiones contaminantes, se puede emplear una única metodología o se pueden emplear dos o más de ellas, para determinar la confiabilidad de la información obtenida en la cuantificación de las emisiones.
          .row.justify-content-center(titulo="Cumplimiento de estándares")
            .col-md-11
              p De acuerdo con lo establecido en el Artículo 76 de la Resolución 909 del 5 de junio de 2008, o la que la adicione, modifique o sustituya, el cumplimiento de los estándares se debe determinar mediante medición directa de las emisiones, a través del ducto o chimenea que se debe construir en cada fuente fija puntual.
          .row.justify-content-center(titulo="Balance de masas")
            .col-md-11
              p En aquellos casos en que, por las condiciones físicas de los equipos que hacen parte del proceso que genera la emisión de los contaminantes al aire, no sea posible la construcción de un ducto para la descarga de los contaminantes o cuando la construcción del ducto no permita contar con las condiciones para realizar la medición directa, se deberá aplicar balance de masas.
          .row.justify-content-center(titulo="Factores de emisión")
            .col-md-11
              p En caso de que no se cuente con la información necesaria para realizar el cálculo de las emisiones por balance de masas (cantidades y caracterización de materiales, consumo de combustibles y la demás información que establece el presente protocolo para la aplicación de dicha metodología) y que se demuestre técnicamente que dicha información no se pueda hallar para el desarrollo de la evaluación de emisiones, se deberán aplicar factores de emisión.


    .row.mb-4.mb-md-5
      .col-md-7.mb-4(data-aos="fade-right")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-blue2")
          .row.justify-content-center(titulo="Equipos muestreadores en chimenea")
            .col-md-11
              p Los principales componentes empleados en la determinación de los contaminantes son el muestreador isocinético, el Orzar y el de tren de muestras de óxidos de nitrógeno. 
          .row.justify-content-center(titulo="Constitución")
            .col-md-11
              p Cada uno de estos componentes está constituido por varios elementos.
          .row.justify-content-center(titulo="Muestreo isocinético")
            .col-md-11
              p Los muestreos isocinéticos son herramientas de gran utilidad, que permiten determinar fácilmente el flujo de los contaminantes que se emite a la atmósfera a través de chimeneas o ductos y sistemas de extracción.
          .row.justify-content-center(titulo="Métodos estandarizados")
            .col-md-11
              p Su estructura modular está diseñada para el análisis de un amplio rango de compuestos químicos por medio de métodos estandarizados. 
      .col-md-5.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema3/img13.svg' alt='')
        


    h4.t-green2.mb-4(data-aos="fade") Equipo de muestreo isocinético
    p(data-aos="fade") El muestreador isocinético es un equipo dotado con múltiples componentes e instrumentos de medición que garantizan la lectura de variables como la temperatura, la presión, la humedad o la velocidad de los gases en la chimenea.
    p.mb-5(data-aos="fade") Este equipo tiene la propiedad de tomar las muestras isocinéticamente, constituyéndose en una herramienta indispensable para poder caracterizar las emisiones de una fuente estacionaria. Este equipo se divide en 2 partes, una se denomina tren de muestreo y la complementaria se llama unidad de control; ambas constituyen el equipo que mide las concentraciones de contaminantes en las chimeneas.

    .row.mb-4
      .col-md-3.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema3/img14.png' alt='')
      .col-md-9.mb-4(data-aos="fade-left")
        p Estas son algunas particularidades del equipo de muestreo isocinético:
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-blue2")
          .row.justify-content-center(titulo="Tren de muestreo")
            .col-md-11
              p Partes principales:
              ol.lista-ol.fa-ul
                li.mb-1 
                  span 1.
                  | Sonda.
                li.mb-1 
                  span 2.
                  | Boquilla.
                li.mb-1 
                  span 3.
                  | Tubo Pitot.
                li.mb-1 
                  span 4.
                  | Caja caliente.
                li.mb-1 
                  span 5.
                  | Caja fría.
                li.mb-1 
                  span 6.
                  | Unidad de control.
                li.mb-1 
                  span 7.
                  | Bomba de vacío.
                li.mb-1 
                  span 8.
                  | Línea de muestra o cordón.
          .row.justify-content-center(titulo="Unidad de control")
            .col-md-11
              p Esta parte del equipo es la más importante, en ella se monitorean las diferentes variables de medición en la chimenea.
          .row.justify-content-center(titulo="Conformación del controlador")
            .col-md-11
              p Este controlador básicamente consta de un sistema mecánico y automático que permite ajustar y monitorear temperaturas y rutas de flujo de la muestra de gas, para alcanzar una condición de muestreo isocinético. Dentro de la unidad, se encuentran un manómetro diferencial de presión, un indicador y controlador de temperatura, un medidor de gas seco (DGM), capaz de medir volúmenes dentro del 2 por ciento, y un orificio crítico, que componen el sistema de medición para chimeneas.
          .row.justify-content-center(titulo="Medición de fuentes móviles")
            .col-md-11
              p Las fuentes móviles se constituyen en el sector más representativo en la generación de contaminantes criterio que afectan considerablemente la atmósfera respirable. Las fuentes móviles se establecen como parte del control: “El monitoreo de vehículos en las vías es una actividad de control, realizada con el fin de verificar y corroborar el impacto de las normas y resoluciones establecidas por el Ministerio del Medio Ambiente, Vivienda y Desarrollo Territorial, así como su cumplimiento por parte de los conductores”. (Área Metropolitana de Bucaramanga, 2020)
          .row.justify-content-center(titulo="Control a fuentes móviles")
            .col-md-11
              p “Las pruebas realizadas durante el operativo permiten el análisis de emisión de gases estipulado en las normas colombianas en lo que a fuentes móviles respecta, donde se miden las condiciones normales de operación del automotor, como son: las revoluciones por minuto, la temperatura de operación en el Carter del motor y las concentraciones de monóxido de carbono (CO), dióxido de carbono (CO<sub>2</sub>), hidrocarburos (HC) y oxígeno (O<sub>2</sub>) en los productos de la combustión interna del motor. Evaluando a su vez que se encuentren dentro de los niveles de óptimo funcionamiento del motor, siguiendo los lineamientos y metodologías planteadas en las normas NTC 4983, NTC 4231, NTC 5365, así también como en la Resolución 0910 de 2008 y los preceptos exigidos por el Protocolo del IDEAM”
      

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
