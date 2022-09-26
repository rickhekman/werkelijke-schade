/**
 * Infographic class.
 */

function WrklkSchdClass() {

  let root;
  const steps = {
    step1: {
      title: 'Stap 1',
      subTitle: 'U hebt een definitieve beschikking gekregen van UHT',
      body: `
          <p>U kunt zich alleen aanmelden bij de CWS als uw zaak integraal is behandeld door UHT en u een definitieve compensatiebeschikking hebt gekregen. Tijdens de integrale behandeling zoekt UHT samen met u uit wat er is misgegaan met de kinderopvangtoeslag. Daarna bepaalt UHT op hoeveel schadevergoeding u recht hebt op basis van de bestaande <a href='https://services.belastingdienst.nl/toeslagen-herstel/kinderopvangtoeslag-herstelregelingen/' target='_blank' rel='noopener noreferrer'>herstelregelingen</a>. U krijgt dan een definitieve compensatiebeschikking. Dit is een officiële brief waarin precies staat op welk bedrag u recht hebt, en hoe dat bedrag is opgebouwd.</p>
          <p>Let op: Hebt u €30.000 gekregen vanuit de Catshuisregeling Kinderopvangtoeslag maar is uw zaak nog niet integraal behandeld door UHT? Dan kunt u zich nog niet aanmelden bij de CWS. U kunt zich pas aanmelden bij de CWS als u na de integrale behandeling een definitieve compensatiebeschikking hebt gekregen van UHT.</p>
          <p>U komt alleen in aanmerking voor aanvullende schadevergoeding als u meer schade hebt geleden dan de vergoeding die u hebt gekregen van UHT. Het is niet nodig om een verzoek in te dienen bij de CWS als al uw schade al helemaal is vergoed door UHT.</p>`,
      next: 'step2',
      icon: 'wrklk-schd-icon-stap-1.svg',
    },
    step2: {
      title: 'Stap 2',
      subTitle: 'U vraagt hulp bij uw aanmelding bij de CWS',
      body: `
          <p>Het kan moeilijk zijn om het verzoekformulier zelf in te vullen. Ook in het proces daarna is het fijn om hulp te krijgen. Daarom is het voor ouders mogelijk om gebruik te maken van gratis onafhankelijke juridische hulp.<br>
          Lees hierover meer op de pagina <a href='https://www.werkelijkeschade.nl/aanmelden/juridische-hulp' target='_blank' rel='noopener noreferrer'>‘Juridische hulp’</a>.
          </p>`,
      next: 'step3',
      icon: 'wrklk-schd-icon-stap-2.svg',
    },
    step3: {
      title: 'Stap 3',
      subTitle: 'U vult het verzoekformulier in en stuurt het op',
      body: `
          <p>In het <a href='https://www.werkelijkeschade.nl/aanmelden/documenten/formulieren/2022/01/31/verzoekformulier' target='_blank' rel='noopener noreferrer'>verzoekformulier</a> van de CWS kunt u alle schade opgeven die u hebt geleden door de problemen met de kinderopvangtoeslag.</p>
          <p>U hoeft niet alle schade te bewijzen met bonnetjes en papieren. Het moet voor de CWS wel aannemelijk zijn dat u de schade die u opgeeft hebt geleden en dat deze is veroorzaakt door de problemen met de kinderopvangtoeslag. Dat wil zeggen dat u soms wel moet uitleggen hoe de schade is ontstaan. Ook zal de CWS u soms vragen om bepaalde stukken op te sturen.</p>
          <p>Het is daarom belangrijk dat u uw situatie al zo goed mogelijk uitlegt in het verzoekformulier. Het helpt de CWS ook als u meteen al zoveel mogelijk informatie geeft en documenten meestuurt om uw verzoek uit te leggen. Brieven, documenten en nota’s die u al eerder naar UHT hebt gestuurd, zitten al in uw dossier. Die hoeft u dus niet opnieuw op te sturen.</p>
          <p>Op het verzoekformulier kunt u ook aangeven of u een persoonlijk gesprek wilt met de CWS om uw verhaal te vertellen. Dit noemen wij een toelichtingsgesprek. Op die manier krijgt de CWS een compleet beeld van uw situatie. Dit helpt de CWS bij het beoordelen van uw verzoek.</p>
          <p>Het ingevulde verzoekformulier kunt u per post of per e-mail opsturen aan de CWS.</p>
          <p><a href='https://www.werkelijkeschade.nl/aanmelden/documenten/formulieren/2022/01/31/verzoekformulier' target='_blank' rel='noopener noreferrer'>Ga naar het verzoekformulier</a>.</p>`,
      next: 'step4',
      icon: 'wrklk-schd-icon-stap-3.svg',
    },
    step4: {
      title: 'Stap 4',
      subTitle: 'U krijgt een ontvangstbevestiging',
      body: `<p>Als de CWS uw verzoek heeft ontvangen, kijkt zij eerst of u al een definitieve compensatiebeschikking hebt gekregen van UHT en of uw verzoekformulier voldoende informatie bevat. Als dat het geval is, krijgt u een ontvangstbevestiging van de CWS. Daarin staat het nummer dat de CWS aan uw verzoek heeft gegeven. Dit nummer gebruikt u bij uw verdere contacten met de CWS.</p>`,
      next: 'step5',
      icon: 'wrklk-schd-icon-stap-4.svg',
    },
    step5: {
      title: 'Stap 5',
      subTitle: 'De CWS neemt uw verzoek in behandeling',
      body: `
          <p>De CWS probeert uw verzoek zo snel mogelijk in behandeling te nemen. Omdat de CWS veel verzoeken binnenkrijgt, kan het op dit moment enkele weken tot maanden duren voordat uw verzoek in behandeling wordt genomen. U krijgt een bericht zodra de CWS uw verzoek in behandeling heeft genomen.</p>`,
      next: 'step6',
      icon: 'wrklk-schd-icon-stap-5.svg',
    },
    step6: {
      title: 'Stap 6',
      subTitle: 'Als u uw verhaal persoonlijk wilt toelichten (toelichtingsgesprek)',
      body: `
          <p>Als u wilt, kunt u uw verhaal persoonlijk toelichten in een gesprek met de CWS. Dit noemen wij een toelichtingsgesprek. Op die manier krijgt de CWS een compleet beeld van uw situatie. Dit helpt de CWS bij het beoordelen van uw verzoek. De CWS maakt een verslag van het toelichtingsgesprek voor uw dossier. U krijgt dit verslag ook toegestuurd.</p>
          <p>U mag één of twee personen meenemen naar het toelichtingsgesprekgesprek. U kunt bijvoorbeeld uw advocaat of een familielid meenemen.</p>
          <p>Een toelichtingsgesprek is niet verplicht. U bepaalt zelf of u uw verzoek persoonlijk wilt toelichten of niet.</p>`,
      next: 'step7',
      icon: 'wrklk-schd-icon-stap-6.svg',
    },
    step7: {
      title: 'Stap 7',
      subTitle: 'De CWS brengt een advies uit aan UHT',
      body: `<p>Nadat de CWS uw verzoek heeft behandeld, stelt zij een advies op voor UHT. In dat advies staat of u volgens de CWS wel of geen recht hebt op een aanvullende schadevergoeding. Als de CWS vindt dat u wel recht heeft op een aanvullende schadevergoeding, dan staat ook in het advies hoe hoog deze volgens de CWS zou moeten zijn.</p>`,
      next: 'step8',
      icon: 'wrklk-schd-icon-stap-7.svg',
    },
    step8: {
      title: 'Stap 8',
      subTitle: 'UHT besluit of ze het advies overneemt',
      body: `<p>UHT beoordeelt het advies van de CWS en neemt daarna een besluit. In principe volgt UHT daarbij het advies van de CWS. Zodra UHT heeft besloten, krijgt u een beschikking. Hierin staat of u aanvullende schadevergoeding ontvangt, en zo ja, hoeveel.</p>`,
      next: 'step1',
      icon: 'wrklk-schd-icon-stap-8.svg',
    },
  };
  let nextStep = 'start';

  /**
   *
   */
  function generateStep() {

    const currentStep = steps[nextStep];

    // Change content.
    const content = root.querySelector('#wrklkschdStepsContent');
    const tmpl = `<header class="wrklk-schd__steps-header">
        <div class="wrklk-schd__steps-titles">
            <h3 class="wrklk-schd__steps-titles_steps">
              ${currentStep.title}
            </h3>
            <h3 class="wrklk-schd__steps-titles_main">
              ${currentStep.subTitle}
            </h3>
        </div>
        <figure class="wrklk-schd__steps-icon">
            <img id="wrklkschdIconSvg" src="${currentStep.icon}">
        </figure>
    </header>
    <div class="wrklk-schd__steps-body">
      ${currentStep.body}
    </div>`;
    content.innerHTML = tmpl;

    // Button.
    const btnNext = root.querySelector('#wrklkschdBtnNextStep');
    btnNext.setAttribute('data-target', currentStep.next);
  }

  /**
   *
   */
  function switchView(view) {
    const start = root.querySelector('#wrklkschdRoadmap');
    const steps = root.querySelector('#wrklkschdSteps');

    // console.log('Switch view: '+view);

    if ('start' === view) {
      start.style.display = 'block';
      steps.style.display = 'none';
    } else {
      start.style.display = 'none';
      steps.style.display = 'block';
    }
  }

  /**
   * Capture click events.
   */
  function clickEvent(e) {
    const svgLink = e.target.closest('.wrklk-schd__svg-btn');
    const htmlLink = e.target.closest('a');

    // If the clicked element doesn't have the right selector, bail.
    if (!htmlLink && !svgLink) return;
    let target = '';

    if ( svgLink ) {
      target = svgLink.getAttribute('data-target');
    } else {
      target = e.target.getAttribute('data-target');
    }

    if ('start' === target) {
      e.preventDefault();
      switchView(target);
    } else if (target) {
      nextStep = target;
      e.preventDefault();
      switchView(target);
      generateStep();
    }
  }

  /**
   * Event listeners.
   */
  function initListeners() {
    root.addEventListener('click', clickEvent);
    root.addEventListener('keydown', function (e) {
      if (e.key === ' ' || e.key === 'Enter' || e.key === 'Spacebar') {
          clickEvent(e);
      }
  }, false);
  }

  /**
   * Constuctor.
   */
  this.construct = function () {
    root = document.querySelector('#wrklkschd');
    initListeners();
    switchView(nextStep);
  };
}
const wrklkSchdClass = new WrklkSchdClass();
wrklkSchdClass.construct();
