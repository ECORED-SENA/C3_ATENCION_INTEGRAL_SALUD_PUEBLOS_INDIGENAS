export default {
  global: {
    componenteFormativo:
      'Dinámica social y cultural de los pueblos indígenas en aislamiento',
    descripcionCurso:
      'Los pueblos indígenas tienen una dinámica social y cultural propia transmitida de generación en generación que se expresa en su cultura, sus tradiciones y su lenguaje. El desarrollo del conocimiento ancestral responde a su cosmovisión y armonía con su territorio. La colonización, generó una ruptura, etnocidio, exclusión y vulneración de los derechos económicos, políticos, sociales y culturales de los pueblos indígenas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Características generales de la dinámica social y cultural',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Pautas de crianza',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Lenguas propias',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Mecanismos de interacción y comunicación',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Bilingüismo',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Estructuras organizativas',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Territorio',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Colonización',
            hash: 't_1_7',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Afectaciones y acciones sin daño',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Apropiaciones y enajenaciones',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Afectación de la pervivencia y supervivencia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Dinámica sistema de salud tradicional',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
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
  referencias: [
    {
      referencia:
        'Alarcón, D. (2007). Bilingüismo indígena en Colombia. Gist: Education and Learning Research Journal, 1, 24-38.',
    },
    {
      referencia:
        'Bonfil Batalla, G. (1978). Campesinado e indigenismo en América Latina. Celats.',
    },
    {
      referencia:
        'Carvajal, J. J. (2015). El plan de vida de los pueblos indígenas de Colombia, una construcción de etnoecodesarrollo. Luna Azul.',
    },
    {
      referencia:
        'Cepal. (2013). Los pueblos indígenas en América Latina, avances en el último decenio y retos pendientes para la garantía de sus derechos. Ford Foundation.',
    },
    {
      referencia:
        'CIDH. (2013). Pueblos indígenas en aislamiento voluntario y contacto inicial en las Américas. OEA.',
    },
    {
      referencia:
        'Declaración acerca de la Doctrina del Descubrimiento. (2012). Caucus Latinoamericano ante el Foro Permanente.',
      link:
        'https://repositorio.cepal.org/bitstream/handle/11362/37222/S1420521_es.pdf',
    },
    {
      referencia:
        'Departamento Nacional de Planeación, DNP. (2004). Pueblos indígenas. DNP.',
      link:
        'https://www.dnp.gov.co/programas/desarrollo-territorial/Paginas/pueblos-indigenas.aspx',
    },
    {
      referencia:
        'Duque, J. (2016). La implementación del concepto de acción sin daño, en la estructuración de las condiciones que garantizan la observancia del principio de planeación de la contratación estatal. Revista de Derecho Público, 37, 82-100.',
      link:
        'https://vlex.com.co/vid/implementacion-concepto-accion-dano-685885137',
    },
    {
      referencia:
        'Mahecha, D., y Franky, C. (2011). Los nukak. El último pueblo de tradición nómada contactado oficialmente en Colombia. Iwgia.',
    },
    {
      referencia:
        'Ministerio de Cultura de Colombia. (2021). Pueblos indígenas y primera infancia. Ministerio de Cultura de Colombia.',
      link: 'https://maguared.gov.co/pueblos-indigenas-y-primera-infancia/',
    },
    {
      referencia:
        'Ministerio del Interior. (1995). Decreto 2164 de 1995. Por el cual se reglamenta parcialmente el capítulo XIV de la Ley 160 de 1994 en lo relacionado con la dotación y titulación de tierras a las comunidades indígenas para la constitución, reestructuración, ampliación y saneamiento de los Resguardos Indígenas en el territorio nacional.',
    },
    {
      referencia:
        'Ossa, C. A. (s.f.). El proceso de colonización en la amazonia colombiana y su incidencia sobre el uso de los recursos naturales. Icanh.',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2018). Prácticas de cuidado y crianza. Bogotá D.C: Imprenta Nacional.',
    },
    {
      referencia:
        'Zimmermann, M. (2016). Los Nukak Makú: un pueblo nómada a punto de desaparecer. Revista Semana.',
      link:
        'https://www.semana.com/medio-ambiente/articulo/los-nukak-maku-un-pueblo-nomada-a-punto-de-desaparecer/36648/',
    },
    {
      referencia:
        'Varesse, S. (1992). Límites y posibilidades del desarrollo de las etnias en el marco del Estado nacional. Nuevos Mundos.',
    },
  ],
  glosario: [
    {
      termino: 'Indigenismo',
      significado:
        'movimiento político y cultural que defiende la identidad política y social y el valor de la cultura amerindia.',
    },
    {
      termino: 'Colonización',
      significado:
        'acción de establecerse en un territorio extranjero. Esto, usualmente mediante la fuerza o amenaza militar.',
    },
    {
      termino: 'Control cultural',
      significado:
        'capacidad social de decisión que tiene un grupo sobre los elementos culturales (vistos como recursos) que son necesarios para formular y realizar un propósito social, la cual tiene implícita una dimensión política relacionada con la mayor o la menor capacidad que tiene ese grupo subalterno para el ejercicio del poder.',
    },
    {
      termino: 'Pauta de crianza',
      significado:
        'usos y costumbres, así como valores, actitudes, roles y hábitos que se transmiten de generación en generación para cuidar, criar y educar. Depende de lo vivido, aprendido y de su contexto sociocultural.',
    },
    {
      termino: 'Medicina tradicional indígena',
      significado:
        'suma de conocimientos, tradiciones, prácticas y creencias de una cultura, utilizados para mantener la salud y prevenir, diagnosticar o tratar la enfermedad, a partir de un sistema que presenta roles y recursos terapéuticos propios.',
    },
  ],
  complementario: [
    {
      texto:
        'Departamento Nacional de Planeación, DNP. (2004). Pueblos indígenas. DNP.',
      tipo: 'Documento oficial',
      link:
        'https://www.dnp.gov.co/programas/desarrollo-territorial/Paginas/pueblos-indigenas.aspx',
    },
    {
      texto:
        'Bonfil, B., G. (1978). Lo propio y lo ajeno: una aproximación al problema del control cultural. Revista Mexicana de Ciencias Políticas y Sociales, 27(103).',
      tipo: 'Libro',
      link: 'http://www.revistas.unam.mx/index.php/rmcpys/article/view/72329',
    },
    {
      texto:
        'Cepal. (2013). Los pueblos indígenas en América Latina, avances en el último decenio y retos pendientes para la garantía de sus derechos. Ford Foundation.',
      tipo: 'Documento Informe oficial',
      link:
        'https://www.cepal.org/es/publicaciones/37050-pueblos-indigenas-america-latina-avances-ultimo-decenio-retos-pendientes-la',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Cesar Jaramillo',
        cargo: 'Experto Temático',
        centro: 'Distrito Capital - Ministerio de Salud y Protección Social',
      },
      {
        nombre: 'Paula Andrea Taborda Ortiz',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Diseño y Metrología - Regional distrito capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor Metodológico y Pedagógico',
        centro: 'Centro de Diseño y Metrología - Regional distrito capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Anllelo Andres Reina Montañez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
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
