export default {
  global: {
    componenteFormativo:
      'Verificación de las emisiones resultantes de proceso y operaciones productivas',
    descripcionCurso:
      'En este componente formativo, se identificarán todos los términos y conceptos asociados a la supervisión del funcionamiento de los sistemas de control y monitoreo de emisiones, de acuerdo con la normativa ambiental, con el fin de brindar las herramientas necesarias para el control de las emisiones que son generadas por fuentes antrópicas relacionadas, en el proceso productivo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Conceptos generales',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Calidad del aire',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Equipos de monitoreo de contaminación atmosférica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Procedimientos de monitoreo a fuentes móviles y fijas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Trámites de permisos de emisiones atmosféricas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Equipos para control de emisiones y de olores ofensivos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Normatividad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Informe de resultados',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Mantenimiento de equipos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema10',
        numero: '10',
        titulo: 'Plan de contingencia',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Conceptos generales',
      referencia:
        'EcologíaVerde. (2018). <em>CONTAMINACIÓN ATMOSFÉRICA - Contaminación ambiental</em> [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ZzxyIuzjbms',
    },
    {
      tema: 'Calidad del aire',
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible – Colombia. (2017). <em>Todo lo que debes saber sobre la calidad del aire</em> [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=FtKg9zJ6oNQ',
    },
    {
      tema: 'Equipos de monitoreo de contaminación atmosférica',
      referencia:
        'Green Group. (2019). <em>Estación de Monitoreo de Calidad de Aire </em>[Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=PLtLsbNzgg4&pbjreload=101',
    },
    {
      tema: 'Equipos de monitoreo de contaminación atmosférica',
      referencia:
        'CORANTIOQUIAOFICIAL. (2014). <em>Seguimiento y Control a Fuentes Fijas</em> [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=fNBy6k4EKHo',
    },
    {
      tema: 'Procedimientos de monitoreo a fuentes móviles',
      referencia:
        'CORANTIOQUIAOFICIAL. (2016). <em>Control a Fuentes Móviles</em> [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=rvAYPKtN7mg-',
    },
    {
      tema: 'Procedimientos de monitoreo a fuentes fijas',
      referencia:
        'Ministerio de Ambiente, Vivienda y Desarrollo territorial [MAVDT]. (2010). <em>Protocolo para el control y vigilancia de la contaminación atmosférica generada por fuentes fijas.</em> ',
      tipo: 'Manual',
      link:
        'http://www.ideam.gov.co/documents/51310/527666/Protocolo+fuentes+fijas.pdf/65780586-e70d-434a-9da7-264d3649b2ba',
    },
    {
      tema: 'Procedimientos de monitoreo a fuentes fijas',
      referencia:
        'Resolución 909 de 2008. [Ministerio de Ambiente, Vivienda y Desarrollo Territorial].  Por la cual se establecen las normas y estándares de emisión admisibles de contaminantes a la atmósfera por fuentes fijas y se dictan otras disposiciones. Junio 5 de 2008.',
      tipo: 'Normativa',
      link:
        'http://www.ideam.gov.co/documents/51310/527650/Resolucion+909+de+2008.pdf/a3bcdf0d-f1ee-4871-91b9-18eac559dbd9',
    },
    {
      tema: 'Trámites de permisos de emisiones atmosféricas',
      referencia:
        'Autoridad Nacional de Licencias Ambientales [ANLA]. (2016). <em>Tutorial Permisos Ambientales</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=6haI_G35ED0&feature=emb_logo',
    },
    {
      tema: 'Trámites de permisos de emisiones atmosféricas',
      referencia:
        'Autoridad Nacional de Licencias Ambientales [ANLA]. (2020). <em>PEAFF Mecanismo de radicación dispuesto por la ANLA para realizar una solicitud de permiso de emisiones atmosféricas para fuentes fijas mediante vital - Paso a Paso. </em>',
      tipo: 'Documento',
      link:
        'https://www.anla.gov.co/01_anla/250-tramites-y-servicios/tramites/permisos-y-autorizaciones/emisiones-atmosfericas-fuentes-fijas',
    },
  ],
  glosario: [
    {
      termino: 'Compuestos Orgánicos Volátiles (COV)',
      significado:
        'proceden de distintas fuentes, como el transporte, industrias de disolventes, minería, vertederos, entre otros, además de fuentes biogénicas, como la vegetación. Muchos de estos compuestos interactúan con otros componentes para producir niebla y contaminación por aerosoles en presencia de radiación solar.',
    },
    {
      termino: 'Estratósfera',
      significado:
        'en esta capa, la temperatura comienza a aumentar con la altura, fenómeno que se le atribuye a la presencia del ozono (O&#8323;), puesto que es el gas que absorbe los rayos ultravioletas. Tanto la formación como la destrucción del ozono se hace por reacciones fotoquímicas.',
    },
    {
      termino: 'Material Particulado (MP)',
      significado:
        'Partículas que se encuentran principalmente en zonas urbanas y provienen de centrales térmicas, procesos industriales, tráfico de vehículos, combustión residencial de leña para calefacción y carbón e incineradores industriales. El material particulado (MP) se clasifica según su diámetro, característica de la cual depende la intensidad de sus impactos.',
    },
    {
      termino: 'Monóxido de carbono (CO)',
      significado:
        'gas producto de la combustión incompleta de los combustibles al existir una cantidad insuficiente de oxígeno, dando como resultado CO en vez de CO&#8322;. Los vehículos a motor y los procesos industriales son responsables de aproximadamente el 80% de estas emisiones a la atmósfera.',
    },
    {
      termino: 'Óxidos de azufre (SO&#8339;)',
      significado:
        'tanto el dióxido de azufre (SO&#8322;) y trióxido de azufre (SO&#8323;) son los óxidos dominantes del azufre presentes en la atmósfera. Son producto de la combustión de combustibles fósiles, principalmente derivados del petróleo y carbón. Los óxidos de azufre pueden acelerar la corrosión de los materiales al formar primero ácido sulfúrico en la atmósfera o sobre la superficie de los metales.',
    },
    {
      termino: 'Óxidos de nitrógeno (NO&#8339;)',
      significado:
        'se producen durante el quemado de maderas y combustibles fósiles, como gasolina, carbón y gas natural. El sector transporte constituye la fuente principal de emisión de NO&#8339;. El mayor desplazamiento en vehículos particulares por parte de la población en las grandes ciudades y el crecimiento sostenido del parque automotriz son una de las causas más importantes del aumento de las emisiones de este contaminante.',
    },
    {
      termino: 'Ozono troposférico (O&#8323;)',
      significado:
        'principal componente del esmog fotoquímico y uno de los más fuertes agentes oxidantes. El ozono se forma en la tropósfera y de la acción de esta en las moléculas de ozono en la estratósfera, como producto de la reacción entre los NO&#8339;, los COV y los hidrocarburos (HC) en presencia de radiación solar. Las fuentes de hidrocarburos y NO&#8339; en las zonas urbanas son primordialmente los vehículos.',
    },
    {
      termino: 'Tropósfera',
      significado:
        'capa de la atmósfera más cercana a la superficie terrestre, donde se forman las nubes y se desarrollan diversos procesos atmosféricos, tales como las lluvias y los frentes. La temperatura del aire disminuye con la altura. En esta capa se acumula la mayor parte del vapor de agua y el CO&#8322;.',
    },
  ],
  referencias: [
    {
      referencia:
        'Área Metropolitana de Bucaramanga. (2020). <em>Fuentes Móviles.</em> ',
      link: 'https://www.amb.gov.co/fuentes-moviles/',
    },
    {
      referencia:
        'Autoridad Nacional de Licencias Ambientales [ANLA]. (2020a). <em>PEAFF Mecanismo de radicación dispuesto por la ANLA para realizar una solicitud de permiso de emisiones atmosféricas para fuentes fijas mediante vital - Paso a Paso. </em>',
      link:
        'https://www.anla.gov.co/01_anla/250-tramites-y-servicios/tramites/permisos-y-autorizaciones/emisiones-atmosfericas-fuentes-fijas',
    },
    {
      referencia:
        'Autoridad Nacional de Licencias Ambientales [ANLA]. (2020b). <em>Permiso de emisiones atmosféricas para fuentes fijas</em>',
      link:
        'https://www.anla.gov.co/01_anla/permiso-y-autorizacion-emisiones-atmosfericas-fuentes-fijas',
    },
    {
      referencia:
        'Cansino, E. (2015). <em>Elaboración de un plan de mantenimiento preventivo y seguridad industrial para la fábrica minerosa.</em> Escuela Politécnica Nacional. ',
      link: 'https://bibdigital.epn.edu.ec/bitstream/15000/10469/1/CD-6192.pdf',
    },
    {
      referencia:
        'Instituto de Hidrología, Meteorología y Estudios Ambientales [IDEAM]. (2014). <em>Contaminación y calidad ambiental.</em> ',
      link: 'http://www.ideam.gov.co/web/contaminacion-y-calidad-ambiental',
    },
    {
      referencia:
        'Instituto de Hidrología, Meteorología y Estudios Ambientales [IDEAM]. (2020). <em>Calidad del aire.</em> Gov.co. ',
      link:
        'http://www.ideam.gov.co/web/contaminacion-y-calidad-ambiental/calidad-del-aire',
    },
    {
      referencia:
        'Instituto Nacional de Ecología [INE]. (2020). <em>Manual 1 Principios de medición de la calidad del aire.</em> ',
      link: 'https://docer.com.ar/doc/xnev5ce',
    },
    {
      referencia:
        'Ministerio de Ambiente, Vivienda y Desarrollo Territorial [MAVDT]. (2008). <em>Protocolo para el monitoreo y seguimiento de la Calidad del aire.</em> ',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2021/06/Protocolo_Calidad_del_Aire_-_Manual_Diseno.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente, Vivienda y Desarrollo Territorial [MAVDT]. (2010). <em>Protocolo para el control y vigilancia de la contaminación atmosférica generada por fuentes fijas.</em> ',
      link:
        'http://www.ideam.gov.co/documents/51310/527666/Protocolo+fuentes+fijas.pdf/65780586-e70d-434a-9da7-264d3649b2ba',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2014). <em>Protocolo para el monitoreo, control y vigilancia de olores ofensivos.</em> ',
      link:
        'https://www.catorce6.com/images/legal/Protocolo_Monitoreo_Control_y_Vigilancia_de_Olores_Ofensivos.pdf',
    },
    {
      referencia:
        'Ministerio del Medio Ambiente (2016). <em>Guía de Calidad del Aire y Educación Ambiental</em>. Gobierno de Chile. ',
      link:
        'https://mma.gob.cl/wp-content/uploads/2018/08/Guia-para-Docentes-Sobre-Calidad-del-Aire-003.pdf',
    },
    {
      referencia:
        'Sistema de Información Ambiental de Colombia [SIAC]. (2020). <em>Calidad del aire</em>. Ministerio de Ambiente y Desarrollo Sostenible. ',
      link: 'http://www.ideam.gov.co/web/siac/calidadaire',
    },
    {
      referencia:
        'Sprint Data S.R.L. (2020). <em>OPACÍMETROS para Control de Emisiones Vehiculares.</em> ',
      link:
        'https://www.sprintdata.com.py/informacion-tecnica/82-opacimetros-para-control-de-emisiones-vehiculares',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable ecosistema de producción de RED Santander',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Diana Carolina Triana Guarnizo',
          cargo: 'Instructor',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Juan Carlos Cárdenas Sánchez',
          cargo: 'Instructor',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Gloria Esperanza Ortiz Russi',
          cargo: 'Diseñador y evaluador instruccional',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Fabián Leonardo Correa Díaz',
          cargo: 'Diseñador Instruccional',
          centro: 'Centro agropecuario La Granja - Regional Tolima',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Evaluadora Instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrección de estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Desarrollo Curricular',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Storyboard e ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador web',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Álvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
