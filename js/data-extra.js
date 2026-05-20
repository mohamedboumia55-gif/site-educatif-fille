// ============================================================
// EXERCICES SUPPLÉMENTAIRES — vient s'ajouter à data.js
// S'exécute après que NIVEAUX soit défini
// ============================================================
(function () {
  const push = (levelId, themeId, ...exos) => {
    const themes = NIVEAUX[levelId].matieres.francais.themes;
    const t = themes.find(t => t.id === themeId);
    if (t) t.exercices.push(...exos);
  };

  // ══════════════════════════════════════════════════════════
  // CP — Phonèmes et syllabes (+5)
  // ══════════════════════════════════════════════════════════
  push('cp', 'phonemes',
    { question: "Combien de syllabes dans 'PAPILLON' ?", choix: ["2", "3", "4"], bonne: "3",
      rappel: "Frappe dans tes mains : pa-pil-lon.", expl_bravo: "Bravo ! pa-pil-lon = 3 syllabes !",
      expl_erreur: "Pa-PII-LON → frappe : PA / PIL / LON = 3 syllabes." },
    { question: "Quel mot contient le son [ou] ?", choix: ["chat", "loup", "lit"], bonne: "loup",
      rappel: "Le son [ou] comme dans 'roue' ou 'boue'.", expl_bravo: "Parfait ! LOUP contient le son [ou].",
      expl_erreur: "Le son [ou] est dans LOUP. Chat = [a], Lit = [i]." },
    { question: "Quel mot commence par le son [f] ?", choix: ["vélo", "photo", "bateau"], bonne: "photo",
      rappel: "Le son [f] peut s'écrire 'f' ou 'ph'.", expl_bravo: "Excellent ! PHOTO commence par le son [f]. PH = le son [f].",
      expl_erreur: "PH fait le son [f]. PHOTO commence par [f]." },
    { question: "Combien de syllabes dans 'ÉLÉPHANT' ?", choix: ["2", "3", "4"], bonne: "3",
      rappel: "É-lé-phant — compte les parties.", expl_bravo: "Bravo ! É-LÉ-PHANT = 3 syllabes.",
      expl_erreur: "E-LÉ-PHANT = 3 parties = 3 syllabes." },
    { question: "Quelle lettre est une consonne ?", choix: ["i", "o", "m"], bonne: "m",
      rappel: "Les voyelles sont : a, e, i, o, u, y. Tout le reste = consonnes.", expl_bravo: "Parfait ! 'm' est une consonne. Les voyelles sont a, e, i, o, u, y.",
      expl_erreur: "'i' et 'o' sont des voyelles. 'm' est une CONSONNE (pas dans a,e,i,o,u,y)." }
  );

  // ══════════════════════════════════════════════════════════
  // CP — Mots fréquents (+5)
  // ══════════════════════════════════════════════════════════
  push('cp', 'mots_freq',
    { question: "Quel mot manque ? : ___ mangeons ensemble.", choix: ["Je", "Nous", "Il"], bonne: "Nous",
      rappel: "NOUS = moi + d'autres. Nous mangeons = plusieurs personnes.", expl_bravo: "Bravo ! NOUS mangeons = le groupe qui inclut moi.",
      expl_erreur: "NOUS = moi + d'autres personnes. NOUS mangeons ensemble." },
    { question: "Complète : Le chat est ___ le canapé.", choix: ["sur", "dans", "avec"], bonne: "sur",
      rappel: "Sur = au-dessus de. Le chat est posé dessus.", expl_bravo: "Exact ! SUR = au-dessus. Le chat est SUR le canapé.",
      expl_erreur: "SUR = au-dessus de. Dans = à l'intérieur. Le chat est SUR (au-dessus du) le canapé." },
    { question: "Quel mot signifie 'appartient à moi' ?", choix: ["ton", "son", "mon"], bonne: "mon",
      rappel: "MON = à moi. TON = à toi. SON = à lui/elle.", expl_bravo: "Parfait ! MON = à moi. Mon cahier = le cahier qui m'appartient.",
      expl_erreur: "MON = à moi. TON = à toi. SON = à lui/elle. MON sac = le sac qui m'appartient." },
    { question: "Complète : ___ est une jolie fleur.", choix: ["Ce", "Se", "Si"], bonne: "Ce",
      rappel: "CE = ce… (désigne quelque chose). C'est une jolie fleur.", expl_bravo: "Bien joué ! CE est un démonstratif qui désigne quelque chose.",
      expl_erreur: "CE désigne quelque chose. CE est une jolie fleur → C'est la bonne réponse." },
    { question: "Quel mot manque ? : ___ adore jouer.", choix: ["Il", "À", "Et"], bonne: "Il",
      rappel: "Il = un garçon ou un animal. Le pronom de sujet.", expl_bravo: "Bravo ! IL adore jouer. IL est le pronom sujet masculin.",
      expl_erreur: "IL est le pronom sujet masculin (= un garçon, un animal). IL adore jouer." }
  );

  // ══════════════════════════════════════════════════════════
  // CP — Lecture et compréhension (+5)
  // ══════════════════════════════════════════════════════════
  push('cp', 'lecture_cp',
    { question: "C'est quel jeu préféré de Léo et Rex ?", choix: ["Courir ensemble", "Léo lance une balle et Rex la rapporte", "Nager dans la rivière"], bonne: "Léo lance une balle et Rex la rapporte",
      rappel: "Cherche 'jeu préféré' dans le texte.", expl_bravo: "Parfait ! Le texte dit : 'Léo lui lance une balle et Rex la rapporte. C'est leur jeu préféré.'",
      expl_erreur: "Le texte dit : 'C'est leur JEU PRÉFÉRÉ' → Léo lance une balle et Rex la rapporte." },
    { question: "Qui est Rex ?", choix: ["Un chat", "Le petit frère de Léo", "Le chien de Léo"], bonne: "Le chien de Léo",
      rappel: "Relis le début du texte.", expl_bravo: "Exact ! Rex est le CHIEN de Léo. 'Léo a un petit chien. Il s'appelle Rex.'",
      expl_erreur: "Le texte dit : 'Léo a un petit CHIEN. Il s'appelle Rex.' Rex est le chien de Léo." },
    { question: "Comment s'appelle le garçon du texte ?", choix: ["Rex", "Léo", "Max"], bonne: "Léo",
      rappel: "C'est le premier mot du texte.", expl_bravo: "Bravo ! Le garçon s'appelle LÉO. 'Léo a un petit chien.'",
      expl_erreur: "Le texte commence par : 'LÉO a un petit chien.' → le garçon s'appelle Léo. Rex est le chien." },
    { question: "Que fait Rex avec la balle ?", choix: ["Il la mange", "Il la rapporte", "Il la cache"], bonne: "Il la rapporte",
      rappel: "Que fait Rex après avoir reçu la balle ?", expl_bravo: "Parfait ! Rex LA RAPPORTE. Léo lance et Rex rapporte.",
      expl_erreur: "Le texte dit : 'Léo lui lance une balle et Rex la RAPPORTE.' → Rex rapporte la balle." },
    { question: "Ce texte parle d'un garçon et :", choix: ["d'un chat", "de son chien", "de son ami"], bonne: "de son chien",
      rappel: "Rex est quel type d'animal ?", expl_bravo: "Bravo ! Ce texte parle de Léo et SON CHIEN Rex.",
      expl_erreur: "Rex est un CHIEN (pas un chat). Ce texte parle de Léo et de son chien Rex." }
  );

  // ══════════════════════════════════════════════════════════
  // CE1 — Nom et verbe (+4)
  // ══════════════════════════════════════════════════════════
  push('ce1', 'nom_verbe',
    { question: "Dans 'La pluie tombe fort.', quel est le VERBE ?", choix: ["La", "pluie", "tombe"], bonne: "tombe",
      rappel: "Le verbe dit ce que fait le sujet. Hier, la pluie... ?", expl_bravo: "Exact ! 'tombe' est le verbe. Hier la pluie TOMBAIT → verbe confirmé.",
      expl_erreur: "'tombe' = action de la pluie. Hier la pluie TOMBAIT → c'est le VERBE." },
    { question: "Lequel est un nom commun (pas un nom propre) ?", choix: ["Éiffel", "enfant", "Lundi"], bonne: "enfant",
      rappel: "Un nom commun = pas de majuscule obligatoire. Il désigne une chose en général.", expl_bravo: "Parfait ! 'enfant' est un nom commun. Il désigne n'importe quel enfant.",
      expl_erreur: "ENFANT = nom commun (désigne n'importe quel enfant). Éiffel = nom propre. Lundi = nom propre (jour)." },
    { question: "Dans 'Les oiseaux chantent dans l'arbre.', le NOM est :", choix: ["oiseaux", "chantent", "dans"], bonne: "oiseaux",
      rappel: "Le nom désigne des êtres vivants ou des choses.", expl_bravo: "Bravo ! 'oiseaux' est le nom. Il désigne des animaux.",
      expl_erreur: "OISEAUX = nom (désigne des animaux). CHANTENT = verbe (action). DANS = préposition." },
    { question: "Le mot 'soleil' est :", choix: ["un verbe", "un nom commun", "un nom propre"], bonne: "un nom commun",
      rappel: "Soleil désigne une chose (pas une personne unique). Il n'a pas de majuscule obligatoire.", expl_bravo: "Exact ! SOLEIL est un nom commun. Il désigne un astre, pas quelque chose d'unique.",
      expl_erreur: "SOLEIL est un nom commun (désigne un astre en général). Il brille = verbe. Le Soleil (avec majuscule) peut être nom propre en astronomie, mais ici = commun." }
  );

  // ══════════════════════════════════════════════════════════
  // CE1 — Présent 1er groupe (+4)
  // ══════════════════════════════════════════════════════════
  push('ce1', 'present_1er',
    { question: "Ils ___ (danser) ensemble.", choix: ["dansent", "dansez", "danse"], bonne: "dansent",
      rappel: "Avec 'ils/elles', terminaison -ent.", expl_bravo: "Bravo ! DANS + ent = ils DANSENT. Avec 'ils/elles' → -ent.",
      expl_erreur: "Avec 'ils/elles', terminaison -ENT → ils DANSENT." },
    { question: "J'___ (aimer) les fraises.", choix: ["aimes", "aime", "aimons"], bonne: "aime",
      rappel: "J'aime = je + aime. Avec 'je/j'', terminaison -e.", expl_bravo: "Parfait ! J'AIME = je + aime. Avec 'je', terminaison -e.",
      expl_erreur: "Avec 'je', terminaison -e → j'AIME les fraises." },
    { question: "On ___ (manger) à midi.", choix: ["mangons", "mangeons", "mange"], bonne: "mangeons",
      rappel: "On = il/elle. Manger : nous mangeons (on garde le e). Avec 'on' = mange. Attention : avec 'nous' = mangeons !", expl_bravo: "Excellent ! Manger est spécial : NOUS MANGEONS (on garde le 'e' pour faire le son doux).",
      expl_erreur: "Attention : avec 'on' → on MANGE. Avec 'nous' → nous MANGEONS (le e est nécessaire pour garder le son doux du g)." },
    { question: "Tu ___ (fermer) la porte.", choix: ["fermes", "ferme", "fermez"], bonne: "fermes",
      rappel: "Avec 'tu', terminaison -es.", expl_bravo: "Bravo ! FERM + es = tu FERMES. Avec 'tu' → -es.",
      expl_erreur: "Avec 'tu', terminaison -ES → tu FERMES." }
  );

  // ══════════════════════════════════════════════════════════
  // CE1 — Pluriel (+4)
  // ══════════════════════════════════════════════════════════
  push('ce1', 'pluriel',
    { question: "Pluriel de 'un genou' ?", choix: ["des genoux", "des genous", "des genouxs"], bonne: "des genoux",
      rappel: "Genou fait partie des 7 mots en -ou qui font -oux au pluriel.", expl_bravo: "Excellent ! GENOU → GENOUX. Les 7 exceptions en -ou : bijou, caillou, chou, genou, hibou, joujou, pou.",
      expl_erreur: "GENOU est une exception : pluriel = GENOUX. Les 7 mots en -ou qui font -oux : bijou, caillou, chou, genou, hibou, joujou, pou." },
    { question: "Pluriel de 'un animal' ?", choix: ["des animals", "des animaux", "des animauxs"], bonne: "des animaux",
      rappel: "Les mots en -al font -aux au pluriel.", expl_bravo: "Parfait ! ANIMAL → ANIMAUX. -AL → -AUX.",
      expl_erreur: "ANIMAL se termine en -AL → pluriel en -AUX : des ANIMAUX." },
    { question: "Pluriel de 'une croix' ?", choix: ["des croixs", "des croix", "des croixx"], bonne: "des croix",
      rappel: "Les mots déjà terminés par -x ne changent pas au pluriel.", expl_bravo: "Bravo ! CROIX → CROIX. Les mots en -x ne changent pas au pluriel.",
      expl_erreur: "CROIX se termine par -x → pas de changement au pluriel : des CROIX." },
    { question: "Pluriel de 'un pneu' ?", choix: ["des pneus", "des pneaux", "des pneux"], bonne: "des pneus",
      rappel: "Les mots en -eu font -eus sauf quelques exceptions (feux, jeux, vœux).", expl_bravo: "Exact ! PNEU → PNEUS. Règle générale pour les mots en -eu : on ajoute -s.",
      expl_erreur: "PNEU → PNEUS. Les mots en -eu prennent -s au pluriel (sauf quelques exceptions : feux, jeux, vœux)." }
  );

  // ══════════════════════════════════════════════════════════
  // CE2 — Adjectif (+4)
  // ══════════════════════════════════════════════════════════
  push('ce2', 'adjectif',
    { question: "Accorde : La nuit ___ (froid)", choix: ["froid", "froide", "froids"], bonne: "froide",
      rappel: "La nuit = féminin singulier. Froid + e = froide.", expl_bravo: "Parfait ! Nuit = féminin → froid + e = FROIDE. La nuit FROIDE.",
      expl_erreur: "NUIT est féminin → adjectif froid + e = FROIDE. La nuit FROIDE." },
    { question: "Accorde : Les tableaux ___ (beau)", choix: ["beau", "beaux", "belles"], bonne: "beaux",
      rappel: "Beau est irrégulier. Masculin pluriel = beaux.", expl_bravo: "Excellent ! BEAU est irrégulier. Masculin pluriel = BEAUX. Les tableaux BEAUX.",
      expl_erreur: "BEAU est irrégulier : masculin singulier = beau, masculin pluriel = BEAUX, féminin = belle/belles." },
    { question: "Accorde : Des robes ___ (rouge)", choix: ["rouge", "rouges", "rougees"], bonne: "rouges",
      rappel: "Rouge se termine déjà par -e. Au pluriel, on ajoute juste -s.", expl_bravo: "Bravo ! ROUGE se termine par -e → pluriel = ROUGES. Des robes ROUGES.",
      expl_erreur: "ROUGE finit déjà en -e → pas besoin d'en ajouter un. Pluriel : ROUGE + s = ROUGES." },
    { question: "Accorde : Une chanson ___ (doux)", choix: ["doux", "douce", "douces"], bonne: "douce",
      rappel: "Doux est irrégulier. Féminin = douce.", expl_bravo: "Parfait ! DOUX est irrégulier. Féminin = DOUCE. Une chanson DOUCE.",
      expl_erreur: "DOUX est irrégulier. Féminin = DOUCE (pas douxx !). Une chanson DOUCE." }
  );

  // ══════════════════════════════════════════════════════════
  // CE2 — Présent tous groupes (+4)
  // ══════════════════════════════════════════════════════════
  push('ce2', 'present_tous',
    { question: "Nous ___ (venir) demain.", choix: ["venons", "viennent", "venez"], bonne: "venons",
      rappel: "Venir est irrégulier (3e groupe). Nous VENONS.", expl_bravo: "Bravo ! VENIR est irrégulier. Nous VENONS.",
      expl_erreur: "VENIR est irrégulier. Avec 'nous' : nous VENONS." },
    { question: "Tu ___ (savoir) la réponse ?", choix: ["savis", "sais", "sait"], bonne: "sais",
      rappel: "Savoir est irrégulier. Je SAIS, tu SAIS, il SAIT.", expl_bravo: "Parfait ! SAVOIR est irrégulier : tu SAIS.",
      expl_erreur: "SAVOIR est irrégulier. Je sais, tu SAIS, il sait. Avec 'tu' → SAIS." },
    { question: "Ils ___ (prendre) le bus.", choix: ["prendons", "prennent", "prends"], bonne: "prennent",
      rappel: "Prendre est irrégulier. Ils PRENNENT (deux n).", expl_bravo: "Excellent ! PRENDRE est irrégulier. Ils PRENNENT.",
      expl_erreur: "PRENDRE est irrégulier. Avec 'ils' : ils PRENNENT (avec deux 'n')." },
    { question: "Elle ___ (grandir).", choix: ["grandit", "grande", "grandissons"], bonne: "grandit",
      rappel: "Grandir = 2e groupe (-IR). Avec 'elle' : elle GRANDIT.", expl_bravo: "Parfait ! Grandir = 2e groupe. Elle GRANDIT.",
      expl_erreur: "Grandir est du 2e groupe. Avec 'elle' : GRAND + it → elle GRANDIT." }
  );

  // ══════════════════════════════════════════════════════════
  // CE2 — Homophones (+4)
  // ══════════════════════════════════════════════════════════
  push('ce2', 'homophones_ce2',
    { question: "Complète : Nous allons ___ la piscine. (a ou à)", choix: ["a", "à"], bonne: "à",
      rappel: "Essaie 'avait' : Nous allons AVAIT la piscine ? Non ✗ → c'est 'à' (préposition).", expl_bravo: "Parfait ! On ne peut pas dire 'avait' ✗ → À la piscine. C'est une préposition.",
      expl_erreur: "On ne peut pas remplacer par 'avait' ✗ → c'est À (préposition). Nous allons À la piscine." },
    { question: "Complète : Elle ___ une sœur. (a ou à)", choix: ["a", "à"], bonne: "a",
      rappel: "Elle AVAIT une sœur ? Oui ✓ → c'est 'a' (verbe avoir).", expl_bravo: "Bravo ! Elle A une sœur. On peut dire 'elle AVAIT une sœur' ✓ → verbe avoir = A.",
      expl_erreur: "Elle AVAIT une sœur ✓ → c'est le verbe avoir = A sans accent." },
    { question: "Complète : Marie ___ Tom sont amis. (est ou et)", choix: ["est", "et"], bonne: "et",
      rappel: "Marie ÉTAIT Tom ? Non ✗ → c'est 'et' (liaison entre deux noms).", expl_bravo: "Parfait ! ET relie Marie ET Tom (liaison). On ne peut pas dire 'était' ici ✗.",
      expl_erreur: "On ne peut pas dire 'Marie ÉTAIT Tom' ✗ → c'est ET (mot de liaison). Marie ET Tom." },
    { question: "Complète : Le ciel ___ nuageux. (est ou et)", choix: ["est", "et"], bonne: "est",
      rappel: "Le ciel ÉTAIT nuageux ? Oui ✓ → c'est 'est' (verbe être).", expl_bravo: "Excellent ! EST = verbe être. Le ciel ÉTAIT nuageux ✓ → EST.",
      expl_erreur: "Le ciel ÉTAIT nuageux ✓ → c'est EST, le verbe être. Le ciel EST nuageux." }
  );

  // ══════════════════════════════════════════════════════════
  // CM1 — Compléments du verbe (+4)
  // ══════════════════════════════════════════════════════════
  push('cm1', 'complements_cm1',
    { question: "Dans 'Léa lit un roman.', quel est le COD ?", choix: ["Léa", "lit", "un roman"], bonne: "un roman",
      rappel: "COD = répond à 'lit QUOI ?' sans préposition.", expl_bravo: "Parfait ! 'un roman' = COD. Lit QUOI ? → un roman. Pas de préposition.",
      expl_erreur: "LIT QUOI ? → un roman. Pas de préposition entre le verbe et ce mot → COD." },
    { question: "Dans 'Il pense à sa famille.', quel est le COI ?", choix: ["Il", "pense", "à sa famille"], bonne: "à sa famille",
      rappel: "COI = répond à 'pense À QUI ?' avec la préposition 'à'.", expl_bravo: "Bravo ! 'à sa famille' = COI. Pense À QUI ? La préposition 'à' est présente.",
      expl_erreur: "Pense À QUI ? → à sa famille. La préposition 'à' est présente → COI." },
    { question: "Dans 'Elle chante merveilleusement.', 'merveilleusement' est :", choix: ["COD", "CC de manière", "CC de temps"], bonne: "CC de manière",
      rappel: "CC de manière = répond à 'comment ?'.", expl_bravo: "Exact ! 'Merveilleusement' répond à 'chante COMMENT ?' → CC de MANIÈRE.",
      expl_erreur: "COMMENT chante-t-elle ? Merveilleusement → CC de MANIÈRE. On peut le supprimer sans changer le sens de base." },
    { question: "Lequel est un CC de temps ?", choix: ["dans le jardin", "gentiment", "depuis trois jours"], bonne: "depuis trois jours",
      rappel: "CC de temps = répond à 'quand ?' ou 'depuis combien de temps ?'.", expl_bravo: "Excellent ! 'depuis trois jours' répond à 'depuis combien de temps ?' → CC de TEMPS.",
      expl_erreur: "'dans le jardin' = CC de lieu. 'gentiment' = CC de manière. 'depuis trois jours' répond à 'quand/depuis combien de temps ?' → CC de TEMPS." }
  );

  // ══════════════════════════════════════════════════════════
  // CM1 — Passé composé (+4)
  // ══════════════════════════════════════════════════════════
  push('cm1', 'passe_compose_cm1',
    { question: "Il ___ (descendre) les escaliers.", choix: ["a descendu", "est descendu", "descendait"], bonne: "est descendu",
      rappel: "Descendre fait partie des verbes qui se conjuguent avec ÊTRE.", expl_bravo: "Parfait ! DESCENDRE = ÊTRE (verbe de déplacement). Il EST DESCENDU.",
      expl_erreur: "DESCENDRE = ÊTRE. Il EST DESCENDU (verbe de déplacement/changement)." },
    { question: "Nous ___ (lire) ce livre hier.", choix: ["avons lu", "sommes lus", "lisions"], bonne: "avons lu",
      rappel: "Lire se conjugue avec AVOIR. Participe passé irrégulier : lu.", expl_bravo: "Bravo ! LIRE → AVOIR + lu = nous AVONS LU. Participe passé irrégulier : LU.",
      expl_erreur: "Lire = AVOIR. Participe passé irrégulier = LU → nous AVONS LU." },
    { question: "Elle ___ (se lever) tôt ce matin.", choix: ["a levé", "est levée", "s'est levée"], bonne: "s'est levée",
      rappel: "Se lever = verbe pronominal → ÊTRE. Elle = féminin → accord du participe : levée.", expl_bravo: "Excellent ! SE LEVER = ÊTRE (pronominal). Elle S'EST LEVÉE (accord féminin).",
      expl_erreur: "Se lever est pronominal → ÊTRE. Elle s'est = elle se est. Accord féminin : levée → elle S'EST LEVÉE." },
    { question: "Ils ___ (prendre) le train.", choix: ["ont pris", "sont pris", "prenaient"], bonne: "ont pris",
      rappel: "Prendre se conjugue avec AVOIR. Participe passé irrégulier : pris.", expl_bravo: "Parfait ! Prendre → AVOIR + pris = ils ONT PRIS. Participe irrégulier : PRIS.",
      expl_erreur: "Prendre = AVOIR. Participe passé irrégulier = PRIS → ils ONT PRIS." }
  );

  // ══════════════════════════════════════════════════════════
  // CM2 — Phrase complexe (+5)
  // ══════════════════════════════════════════════════════════
  push('cm2', 'grammaire_cm2',
    { question: "Quel mot relie les propositions dans 'Je viendrai car j'ai envie.' ?", choix: ["je", "car", "envie"], bonne: "car",
      rappel: "CAR est un mot de coordination qui exprime la cause.", expl_bravo: "Parfait ! CAR est un mot de coordination (= parce que). Il exprime la cause.",
      expl_erreur: "CAR est un mot de COORDINATION qui exprime la cause. Retiens : mais, ou, et, donc, or, ni, CAR." },
    { question: "C'est une phrase :", choix: ["simple", "complexe", "injonctive"], bonne: "complexe",
      rappel: "Compte les verbes dans : 'Il part quand le soleil se lève.'", expl_bravo: "Exact ! 2 verbes (part, se lève) → phrase COMPLEXE.",
      expl_erreur: "'Il part quand le soleil se lève.' = 2 verbes conjugués (PART et SE LÈVE) → phrase COMPLEXE." },
    { question: "Dans 'La fille qui chante est ma sœur.', 'qui chante' est :", choix: ["proposition principale", "proposition subordonnée relative", "proposition coordonnée"], bonne: "proposition subordonnée relative",
      rappel: "Qui chante précise 'la fille'. Introduit par 'qui' → relative.", expl_bravo: "Bravo ! 'qui chante' est une subordonnée RELATIVE. Elle précise 'la fille'. Introduite par QUI.",
      expl_erreur: "'qui chante' est introduite par QUI et précise le nom 'fille' → proposition subordonnée RELATIVE." },
    { question: "Quel est le mot de subordination dans 'Il est rentré lorsque j'ai appelé.' ?", choix: ["il", "lorsque", "appelé"], bonne: "lorsque",
      rappel: "Lorsque est une conjonction de subordination qui exprime le temps.", expl_bravo: "Exact ! LORSQUE est une conjonction de subordination (temps). Il peut être remplacé par 'quand'.",
      expl_erreur: "LORSQUE = conjonction de subordination de temps (= quand). C'est lui qui relie les deux propositions." },
    { question: "Combien de propositions dans 'Le chat dort, le chien joue et les oiseaux chantent.' ?", choix: ["2", "3", "4"], bonne: "3",
      rappel: "Compte les verbes conjugués : dort, joue, chantent.", expl_bravo: "Bravo ! 3 verbes (dort, joue, chantent) = 3 propositions reliées par ',' et 'et'.",
      expl_erreur: "Il y a 3 verbes conjugués : DORT, JOUE, CHANTENT → 3 propositions." }
  );

  // ══════════════════════════════════════════════════════════
  // CM2 — Tous les temps (+4)
  // ══════════════════════════════════════════════════════════
  push('cm2', 'conj_cm2',
    { question: "Conjugue à l'imparfait : Nous ___ (jouer) tous les jours.", choix: ["jouons", "jouerons", "jouions"], bonne: "jouions",
      rappel: "Imparfait de 'nous' : -ions. Jouer → radical JOU + ions.", expl_bravo: "Parfait ! JOUER à l'imparfait, nous : JOU + ions = nous JOUIONS.",
      expl_erreur: "Imparfait de 'nous' = radical + -IONS → nous JOUIONS." },
    { question: "Lequel est au futur simple ?", choix: ["Tu finissais.", "Tu finiras.", "Tu as fini."], bonne: "Tu finiras.",
      rappel: "Le futur se reconnaît à ses terminaisons : -ai, -as, -a, -ons, -ez, -ont.", expl_bravo: "Bravo ! 'Tu FINIRAS' = futur simple. Terminaison -as = futur.",
      expl_erreur: "Finissais = imparfait. As fini = passé composé. FINIRAS = futur simple (terminaison -as)." },
    { question: "Conjugue au conditionnel : Ils ___ (vouloir) partir.", choix: ["voudraient", "voudraient", "voulaient"], bonne: "voudraient",
      rappel: "Conditionnel de vouloir : voudr- + terminaison -aient (ils).", expl_bravo: "Exact ! VOULOIR au conditionnel : radical voudr- + -aient = ils VOUDRAIENT.",
      expl_erreur: "Conditionnel de VOULOIR = radical irrégulier VOUDR + terminaisons de l'imparfait → ils VOUDRAIENT." },
    { question: "À quel temps est : 'Demain, elle viendra.'", choix: ["Présent", "Imparfait", "Futur simple"], bonne: "Futur simple",
      rappel: "Demain = futur. Venir au futur : viendra. Terminaison -a = futur 3e personne.", expl_bravo: "Parfait ! VIENDRA = futur simple (terminaison -a + indice 'demain').",
      expl_erreur: "'Demain' indique l'avenir → futur. VIENDRA = futur simple de VENIR. Terminaison -a = futur." }
  );

  // ══════════════════════════════════════════════════════════
  // CM2 — Orthographe avancée (+4)
  // ══════════════════════════════════════════════════════════
  push('cm2', 'ortho_cm2',
    { question: "Complète : Elle a rangé ___ affaires. (ses/ces)", choix: ["ses", "ces", "c'est"], bonne: "ses",
      rappel: "SES = appartient à elle (ses affaires = les affaires de elle).", expl_bravo: "Parfait ! SES affaires = les affaires qui lui appartiennent. Ses = déterminant possessif.",
      expl_erreur: "SES affaires = les affaires qui appartiennent à elle. SES = possessif. CES = démonstratif (ces livres = ces livres-là)." },
    { question: "Complète : Je ___ entraîne chaque matin. (m'est/me suis/m')", choix: ["m'est", "me suis", "m'"], bonne: "m'",
      rappel: "Je M'entraîne = je me entraîne. M' = pronom réfléchi devant voyelle.", expl_bravo: "Exact ! Je M'entraîne = je me entraîne. M' est le pronom réfléchi devant voyelle.",
      expl_erreur: "Je M'entraîne = pronom réfléchi ME + entraîne. Devant voyelle, ME devient M'." },
    { question: "Complète : Ils ont rangé ___ chambres. (leur/leurs)", choix: ["leur", "leurs"], bonne: "leurs",
      rappel: "Ici 'leurs' précède 'chambres' (plusieurs chambres). C'est un déterminant possessif → accord.", expl_bravo: "Bravo ! LEURS chambres = le déterminant possessif qui s'accorde avec 'chambres' (pluriel).",
      expl_erreur: "LEURS chambres = déterminant possessif (les chambres d'eux). Il s'accorde : chambres est pluriel → LEURS." },
    { question: "Complète : ___ le monde est arrivé. (Tout/Tous/Toute)", choix: ["Tout", "Tous", "Toute"], bonne: "Tout",
      rappel: "Tout le monde = expression figée. Le monde est masculin singulier.", expl_bravo: "Parfait ! TOUT le monde = expression figée au masculin singulier.",
      expl_erreur: "TOUT le monde = expression figée. 'Le monde' est masculin singulier → TOUT (masculin singulier)." }
  );

  // ══════════════════════════════════════════════════════════
  // CM2 — Lecture et compréhension (+5)
  // ══════════════════════════════════════════════════════════
  push('cm2', 'lecture_cm2',
    { question: "Dans quel pays se passe cette histoire ?", choix: ["Iran", "Irak", "France"], bonne: "Irak",
      rappel: "Cherche le nom du pays dans le texte.", expl_bravo: "Exact ! Le texte dit 'pendant la guerre en IRAK'.",
      expl_erreur: "Relis le texte : 'pendant la guerre en IRAK'. C'est en Irak que l'histoire se passe." },
    { question: "Quel est le prénom de la bibliothécaire ?", choix: ["Amina", "Alia", "Aicha"], bonne: "Alia",
      rappel: "Son nom complet est donné dans le texte.", expl_bravo: "Bravo ! La bibliothécaire s'appelle ALIA Muhammad Baker.",
      expl_erreur: "Le texte dit : 'ALIA Muhammad Baker était bibliothécaire'. Son prénom est Alia." },
    { question: "Qui a aidé Alia à sauver les livres ?", choix: ["Des soldats", "Ses voisins", "La police"], bonne: "Ses voisins",
      rappel: "Cherche 'avec l'aide de' dans le texte.", expl_bravo: "Parfait ! 'Avec l'aide de ses VOISINS, elle transporta 30 000 livres.'",
      expl_erreur: "Le texte dit : 'Avec l'aide de ses VOISINS, elle transporta 30 000 livres.' Ce sont ses voisins qui l'ont aidée." },
    { question: "Qu'est-il arrivé à la bibliothèque selon le texte ?", choix: ["Elle a été construite", "Elle risquait d'être détruite", "Elle a déménagé"], bonne: "Elle risquait d'être détruite",
      rappel: "Qu'est-ce que la guerre allait faire à la bibliothèque ?", expl_bravo: "Exact ! 'la guerre allait DÉTRUIRE sa bibliothèque' → elle risquait d'être détruite.",
      expl_erreur: "Le texte dit : 'la guerre allait DÉTRUIRE sa bibliothèque' → la bibliothèque risquait d'être détruite." },
    { question: "Quel mot du texte montre qu'Alia a agi avec force et détermination ?", choix: ["transporta", "courage", "voisins"], bonne: "courage",
      rappel: "Quel mot décrit la qualité d'Alia ?", expl_bravo: "Bravo ! 'Grâce à son COURAGE' → ce mot montre qu'Alia a agi avec force et détermination.",
      expl_erreur: "Le texte dit 'Grâce à son COURAGE' → c'est le mot courage qui décrit la force d'Alia." }
  );

  // ══════════════════════════════════════════════════════════
  // Enrichir les leçons trop courtes
  // ══════════════════════════════════════════════════════════

  // CP lecture_cp — enrichir la leçon avec méthode
  const lectureCp = NIVEAUX.cp.matieres.francais.themes.find(t => t.id === 'lecture_cp');
  if (lectureCp) {
    lectureCp.lecon = `<h3>Lire et comprendre un texte</h3>
<p>Quand tu lis un texte, pose-toi ces 4 questions :</p>
<br>
<p><strong>❓ QUI ?</strong> → De qui parle le texte ? (les personnages)<br>
<strong>❓ QUOI ?</strong> → Que se passe-t-il ? (l'action)<br>
<strong>❓ OÙ ?</strong> → Où ça se passe ? (le lieu)<br>
<strong>❓ QUAND ?</strong> → À quel moment ? (le temps)</p>
<br>
<p>💡 <strong>Méthode :</strong></p>
<ul>
<li>1. Lis le texte <strong>une première fois</strong> en entier.</li>
<li>2. <strong>Relis</strong> lentement en cherchant les informations.</li>
<li>3. Pour répondre, <strong>retrouve</strong> la phrase exacte dans le texte.</li>
</ul>
<br>
<p>📖 <em>Texte : "Léo a un petit chien. Il s'appelle Rex. Rex adore courir dans le jardin. Léo lui lance une balle et Rex la rapporte. C'est leur jeu préféré."</em></p>
<br>
<p>→ QUI ? <strong>Léo et Rex</strong> (un garçon et son chien)<br>
→ QUOI ? <strong>Ils jouent ensemble</strong><br>
→ OÙ ? <strong>Dans le jardin</strong></p>`;
  }

  // CM2 grammaire_cm2 — enrichir la leçon
  const gramCm2 = NIVEAUX.cm2.matieres.francais.themes.find(t => t.id === 'grammaire_cm2');
  if (gramCm2) {
    gramCm2.lecon = `<h3>La phrase complexe et les propositions</h3>
<p>Une phrase peut contenir une ou plusieurs <strong>propositions</strong> (= groupes avec un verbe conjugué).</p>
<br>
<p>🔵 <strong>Phrase simple</strong> = 1 seul verbe conjugué<br>
→ Le chat dort.</p>
<br>
<p>🔵 <strong>Phrase complexe</strong> = plusieurs verbes, reliés par :</p>
<br>
<p><strong>1. Coordination</strong> (=mots qui relient) : <em>mais, ou, et, donc, or, ni, car</em><br>
→ Il pleut <u>mais</u> je sors quand même. (opposition)<br>
→ Il est fatigué <u>car</u> il a couru. (cause)</p>
<br>
<p><strong>2. Juxtaposition</strong> (=virgule ou point-virgule) :<br>
→ Il pleut<u>,</u> je prends mon parapluie.</p>
<br>
<p><strong>3. Subordination</strong> (=une proposition dépend de l'autre) :<br>
→ Je sais <u>que</u> tu viendras. (que = conjonction)<br>
→ Le livre <u>que tu m'as prêté</u> est beau. (relative)<br>
→ Elle mange <u>parce qu'</u>elle a faim. (cause)<br>
→ Il part <u>quand</u> il veut. (temps)</p>
<br>
<p>💡 <strong>Astuce pour compter les propositions :</strong><br>
Compte les verbes conjugués → autant de propositions !</p>`;
  }

})();
