// ============================================================
// CONTENU PÉDAGOGIQUE — FRANÇAIS CP à CM2
// Conforme aux programmes officiels Eduscol
// ============================================================

const NIVEAUX = {
  cp: {
    id: "cp", nom: "CP", emoji: "🌱",
    couleur: "#ec4899", couleurDark: "#be185d", bg: "from-pink-500 to-rose-600",
    description: "Cours Préparatoire — 6 ans",
    matieres: {
      francais: {
        nom: "Français", emoji: "📖",
        themes: [
          {
            id: "phonemes", nom: "Phonèmes et syllabes", emoji: "🔤",
            lecon: `<h3>Les sons et les syllabes</h3>
<p>Un mot est formé de <strong>syllabes</strong>. Chaque syllabe contient un son (phonème).</p>
<br>
<p>🔵 On peut découper les mots en frappant dans les mains :</p>
<ul>
<li><strong>ma-man</strong> → 2 syllabes</li>
<li><strong>pa-pa</strong> → 2 syllabes</li>
<li><strong>ca-na-pé</strong> → 3 syllabes</li>
<li><strong>é-lé-phant</strong> → 3 syllabes</li>
</ul>
<br>
<p>🔵 Les voyelles : <strong>a, e, i, o, u, y</strong></p>
<p>🔵 Les consonnes : toutes les autres lettres (b, c, d, f, g...)</p>
<br>
<p>💡 Dans une syllabe, il y a toujours au moins une voyelle !</p>`,
            exercices: [
              { question: "Combien de syllabes dans le mot 'MAISON' ?", choix: ["1", "2", "3"], bonne: "2",
                rappel: "Frappe dans tes mains : mai-son.", expl_bravo: "Oui ! mai-son = 2 syllabes. Très bien !",
                expl_erreur: "Frappe dans tes mains en disant le mot : MAI-SON. Il y a 2 parties = 2 syllabes." },
              { question: "Quel mot a 3 syllabes ?", choix: ["chat", "lapin", "papillon"], bonne: "papillon",
                rappel: "Compte les syllabes de chaque mot en frappant dans les mains.", expl_bravo: "Parfait ! pa-pil-lon = 3 syllabes !",
                expl_erreur: "Chat = 1 syllabe. Lapin = la-pin = 2 syllabes. Pa-pil-lon = 3 syllabes." },
              { question: "Quelle lettre est une voyelle ?", choix: ["b", "a", "t"], bonne: "a",
                rappel: "Les voyelles sont : a, e, i, o, u, y.", expl_bravo: "Excellent ! 'a' est bien une voyelle.",
                expl_erreur: "Les voyelles sont : a, e, i, o, u, y. 'b' et 't' sont des consonnes." },
              { question: "Combien de syllabes dans 'CHOCOLAT' ?", choix: ["2", "3", "4"], bonne: "3",
                rappel: "Dis le mot lentement : cho-co-lat.", expl_bravo: "Bravo ! cho-co-lat = 3 syllabes.",
                expl_erreur: "Dis le mot lentement : CHO-CO-LAT = 3 parties = 3 syllabes." },
              { question: "Quel mot commence par le son [ch] ?", choix: ["soleil", "chapeau", "lapin"], bonne: "chapeau",
                rappel: "Le son [ch] s'écrit avec les lettres c et h ensemble.", expl_bravo: "Oui ! 'chapeau' commence par le son [ch]. Bien joué !",
                expl_erreur: "Le son [ch] s'écrit 'ch'. Chapeau commence bien par le son [ch]." }
            ]
          },
          {
            id: "mots_freq", nom: "Mots fréquents", emoji: "📝",
            lecon: `<h3>Les mots fréquents</h3>
<p>Certains mots s'utilisent très souvent. Il faut les <strong>reconnaître</strong> et les <strong>écrire sans hésiter</strong> !</p>
<br>
<p>🔵 <strong>Mots à connaître par cœur :</strong></p>
<ul>
<li>le, la, les, un, une, des</li>
<li>et, est, à, a</li>
<li>dans, sur, sous, avec, pour</li>
<li>il, elle, ils, elles</li>
<li>mon, ton, son, ma, ta, sa</li>
<li>je, tu, nous, vous</li>
<li>ce, se, si, qui, que</li>
</ul>
<br>
<p>💡 Astuce : lis ces mots tous les jours pour les mémoriser !</p>`,
            exercices: [
              { question: "Quel mot manque ? : ___ chat est gris.", choix: ["Un", "Est", "Dans"], bonne: "Un",
                rappel: "'Un' est un article indéfini. Il précède un nom masculin.", expl_bravo: "Oui ! 'Un chat est gris.' Un est un article devant un nom masculin.",
                expl_erreur: "Devant 'chat' (nom masculin), on met l'article 'Un'. → Un chat est gris." },
              { question: "Complète : Le chien ___ grand.", choix: ["est", "et", "à"], bonne: "est",
                rappel: "'est' = verbe être. On peut remplacer par 'était' pour vérifier.", expl_bravo: "Parfait ! 'est' est le verbe être. Le chien EST grand.",
                expl_erreur: "'est' = verbe être (il était). 'et' relie deux mots. Ici, on a besoin du verbe → est." },
              { question: "Quel mot signifie 'à l'intérieur' ?", choix: ["sur", "dans", "sous"], bonne: "dans",
                rappel: "Dans = à l'intérieur. Sur = au-dessus. Sous = en-dessous.", expl_bravo: "Bravo ! 'dans' signifie à l'intérieur.",
                expl_erreur: "Dans = à l'intérieur de quelque chose. Ex : Le chat est DANS la boîte." },
              { question: "Complète : ___ jouons au foot.", choix: ["Je", "Nous", "Tu"], bonne: "Nous",
                rappel: "'Nous' s'utilise quand on parle d'un groupe qui inclut soi-même.", expl_bravo: "Excellent ! 'Nous jouons' est correct. Nous = moi + d'autres personnes.",
                expl_erreur: "NOUS jouons = moi + d'autres personnes. Je = moi seul. Tu = la personne à qui je parle." }
            ]
          },
          {
            id: "lecture_cp", nom: "Lire et comprendre", emoji: "📚",
            lecon: `<h3>Lire et comprendre un texte</h3>
<p>Quand tu lis un texte, tu dois comprendre <strong>qui fait quoi, où et quand</strong>.</p>
<br>
<p>🔵 <strong>Les questions importantes :</strong></p>
<ul>
<li>❓ <strong>Qui ?</strong> → De qui parle le texte ?</li>
<li>❓ <strong>Quoi ?</strong> → Que se passe-t-il ?</li>
<li>❓ <strong>Où ?</strong> → Où ça se passe ?</li>
<li>❓ <strong>Quand ?</strong> → À quel moment ?</li>
</ul>
<br>
<p>📖 <em>Texte : Léo a un petit chien. Il s'appelle Rex. Rex adore courir dans le jardin. Léo lui lance une balle et Rex la rapporte. C'est leur jeu préféré.</em></p>`,
            exercices: [
              { question: "Comment s'appelle le chien de Léo ?", choix: ["Max", "Rex", "Fido"], bonne: "Rex",
                rappel: "Relis le texte : 'Il s'appelle...'", expl_bravo: "Oui ! Le chien s'appelle REX. Tu lis bien !",
                expl_erreur: "Relis le texte : 'Il s'appelle Rex.' → Le chien s'appelle Rex." },
              { question: "Où Rex aime-t-il courir ?", choix: ["Dans la maison", "Dans le jardin", "Dans la rue"], bonne: "Dans le jardin",
                rappel: "Cherche dans le texte où Rex court.", expl_bravo: "Parfait ! Rex adore courir DANS LE JARDIN.",
                expl_erreur: "Le texte dit : 'Rex adore courir dans le jardin.' → Dans le jardin." },
              { question: "Que fait Léo avec Rex ?", choix: ["Il lui donne à manger", "Il lui lance une balle", "Il lui lit une histoire"], bonne: "Il lui lance une balle",
                rappel: "Cherche ce que Léo 'lui lance'.", expl_bravo: "Bravo ! Léo lance une balle à Rex et Rex la rapporte.",
                expl_erreur: "Le texte dit : 'Léo lui lance une balle et Rex la rapporte.' → Il lui lance une balle." }
            ]
          }
        ]
      }
    }
  },

  ce1: {
    id: "ce1", nom: "CE1", emoji: "🌿",
    couleur: "#f97316", couleurDark: "#c2410c", bg: "from-orange-500 to-amber-600",
    description: "Cours Élémentaire 1 — 7 ans",
    matieres: {
      francais: {
        nom: "Français", emoji: "📖",
        themes: [
          {
            id: "nom_verbe", nom: "Le nom et le verbe", emoji: "🔤",
            lecon: `<h3>Le nom et le verbe</h3>
<p>Dans une phrase, les mots ont des <strong>rôles différents</strong>.</p>
<br>
<p>🔵 <strong>Le nom</strong> désigne une personne, un animal, une chose ou une idée.</p>
<ul><li>Nom commun : <em>chat, maison, livre, soleil</em></li>
<li>Nom propre : <em>Marie, Paris, France</em> (avec une majuscule !)</li></ul>
<br>
<p>🔵 <strong>Le verbe</strong> dit ce que fait ou ce qu'est le sujet.</p>
<ul><li>Action : <em>courir, manger, jouer, lire</em></li>
<li>État : <em>être, avoir, sembler, paraître</em></li></ul>
<br>
<p>💡 Astuce pour trouver le verbe : change le temps de la phrase.<br>
→ "Le chat <u>court</u>." → hier, le chat <u>courait</u>. ✓ → 'court' est le verbe !</p>`,
            exercices: [
              { question: "Dans 'Le chien court.', quel est le NOM ?", choix: ["Le", "chien", "court"], bonne: "chien",
                rappel: "Le nom désigne un être vivant, un animal ou une chose.", expl_bravo: "Exact ! 'chien' est un nom commun. Il désigne un animal.",
                expl_erreur: "'Chien' désigne un animal → c'est un NOM commun. 'court' est le verbe (action). 'Le' est un article." },
              { question: "Dans 'Marie chante une chanson.', quel est le VERBE ?", choix: ["Marie", "chante", "chanson"], bonne: "chante",
                rappel: "Le verbe dit ce que fait Marie. Essaie : hier, Marie... ?", expl_bravo: "Parfait ! 'chante' est le verbe. Hier Marie CHANTAIT → c'est bien le verbe.",
                expl_erreur: "Le verbe exprime l'action. 'chante' → hier Marie CHANTAIT → c'est le VERBE. 'Marie' est un nom propre." },
              { question: "Lequel est un NOM PROPRE ?", choix: ["lapin", "ville", "Paris"], bonne: "Paris",
                rappel: "Un nom propre désigne quelque chose d'unique. Il prend une majuscule.", expl_bravo: "Bravo ! 'Paris' est un nom propre. C'est une ville unique. Il prend une majuscule.",
                expl_erreur: "Les noms propres désignent des choses uniques et prennent une MAJUSCULE. Paris est une ville unique → nom propre." },
              { question: "Dans 'Les oiseaux volent.', quel est le verbe ?", choix: ["Les", "oiseaux", "volent"], bonne: "volent",
                rappel: "Le verbe exprime l'action. Hier, les oiseaux... ?", expl_bravo: "Excellent ! 'volent' est le verbe d'action. Hier ils VOLAIENT → verbe confirmé !",
                expl_erreur: "'volent' = l'action des oiseaux. Hier ils VOLAIENT → c'est bien le VERBE." },
              { question: "Lequel est un nom commun ?", choix: ["Léa", "courir", "maison"], bonne: "maison",
                rappel: "Le nom commun désigne une chose en général (pas de majuscule).", expl_bravo: "Parfait ! 'Maison' désigne une chose en général → nom commun.",
                expl_erreur: "Léa = nom propre (prénom). Courir = verbe. Maison = nom commun (désigne une chose en général)." }
            ]
          },
          {
            id: "present_1er", nom: "Présent du 1er groupe", emoji: "✍️",
            lecon: `<h3>Le présent des verbes du 1er groupe (-ER)</h3>
<p>Les verbes du <strong>1er groupe</strong> se terminent par <strong>-ER</strong> à l'infinitif.</p>
<p>Ex : chanter, parler, jouer, manger, aimer...</p>
<br>
<p>🔵 <strong>Terminaisons au présent :</strong></p>
<table style="width:100%;border-collapse:collapse;margin:8px 0;">
<tr style="background:rgba(99,102,241,0.2)"><th style="padding:6px;text-align:left">Pronom</th><th style="padding:6px;text-align:left">Terminaison</th><th style="padding:6px;text-align:left">Exemple (CHANTER)</th></tr>
<tr><td style="padding:5px">je / j'</td><td style="padding:5px">-<strong>e</strong></td><td style="padding:5px">je chant<u>e</u></td></tr>
<tr style="background:rgba(255,255,255,0.05)"><td style="padding:5px">tu</td><td style="padding:5px">-<strong>es</strong></td><td style="padding:5px">tu chant<u>es</u></td></tr>
<tr><td style="padding:5px">il / elle</td><td style="padding:5px">-<strong>e</strong></td><td style="padding:5px">il chant<u>e</u></td></tr>
<tr style="background:rgba(255,255,255,0.05)"><td style="padding:5px">nous</td><td style="padding:5px">-<strong>ons</strong></td><td style="padding:5px">nous chant<u>ons</u></td></tr>
<tr><td style="padding:5px">vous</td><td style="padding:5px">-<strong>ez</strong></td><td style="padding:5px">vous chant<u>ez</u></td></tr>
<tr style="background:rgba(255,255,255,0.05)"><td style="padding:5px">ils / elles</td><td style="padding:5px">-<strong>ent</strong></td><td style="padding:5px">ils chant<u>ent</u></td></tr>
</table>
<p>💡 Attention : <strong>manger → nous mangeons</strong> (on garde le e pour le son doux)</p>`,
            exercices: [
              { question: "Tu ___ (aimer) le chocolat.", choix: ["aime", "aimes", "aimons"], bonne: "aimes",
                rappel: "Aimer = 1er groupe. Avec 'tu' → radical AIM + terminaison -es.", expl_bravo: "Parfait ! tu AIM + es = tu AIMES. Avec 'tu', terminaison -es.",
                expl_erreur: "Aimer → 1er groupe. Avec 'tu', on ajoute -es au radical AIM → tu AIMES." },
              { question: "Nous ___ (jouer) au parc.", choix: ["jouons", "jouez", "jouent"], bonne: "jouons",
                rappel: "Avec 'nous', la terminaison est -ons.", expl_bravo: "Bravo ! JOU + ons = nous JOUONS. Avec 'nous' → -ons.",
                expl_erreur: "Avec 'nous', la terminaison est -ONS → nous JOUONS." },
              { question: "Il ___ (parler) à son ami.", choix: ["parles", "parle", "parlons"], bonne: "parle",
                rappel: "Avec 'il/elle', la terminaison est -e.", expl_bravo: "Exact ! PARL + e = il PARLE. Avec 'il/elle' → -e.",
                expl_erreur: "Avec 'il/elle', terminaison -e → il PARLE." },
              { question: "Vous ___ (chanter) très bien.", choix: ["chantez", "chantes", "chantent"], bonne: "chantez",
                rappel: "Avec 'vous', la terminaison est -ez.", expl_bravo: "Super ! CHANT + ez = vous CHANTEZ. Avec 'vous' → -ez.",
                expl_erreur: "Avec 'vous', terminaison -EZ → vous CHANTEZ." },
              { question: "Elles ___ (regarder) la télévision.", choix: ["regardes", "regarde", "regardent"], bonne: "regardent",
                rappel: "Avec 'ils/elles', la terminaison est -ent.", expl_bravo: "Parfait ! REGARD + ent = elles REGARDENT. Avec 'ils/elles' → -ent.",
                expl_erreur: "Avec 'ils/elles', terminaison -ENT → elles REGARDENT." },
              { question: "Je ___ (manger) une pomme.", choix: ["mange", "manges", "mangeons"], bonne: "mange",
                rappel: "Avec 'je', la terminaison est -e.", expl_bravo: "Bravo ! MANG + e = je MANGE. Avec 'je' → -e.",
                expl_erreur: "Avec 'je', terminaison -e → je MANGE." }
            ]
          },
          {
            id: "pluriel", nom: "Le pluriel", emoji: "📊",
            lecon: `<h3>Le pluriel des noms et des adjectifs</h3>
<p>En français, on accorde les mots en genre (masculin/féminin) et en nombre (singulier/pluriel).</p>
<br>
<p>🔵 <strong>Règle générale :</strong> on ajoute un <strong>-s</strong> au pluriel.</p>
<ul><li>un chat → des chat<u>s</u></li>
<li>une maison → des maison<u>s</u></li></ul>
<br>
<p>🔵 <strong>Exceptions importantes :</strong></p>
<ul>
<li>Mots en -<strong>eau</strong> → <strong>eaux</strong> : bateau → bateaux</li>
<li>Mots en -<strong>al</strong> → <strong>aux</strong> : cheval → chevaux, journal → journaux</li>
<li>Mots en -<strong>ou</strong> → <strong>ous</strong> (sauf : bijou, caillou, chou, genou, hibou, joujou, pou → <strong>x</strong>)</li>
<li>Mots déjà en -<strong>s, -x, -z</strong> → ne changent pas : bras, voix</li>
</ul>
<br>
<p>💡 L'article change aussi : <strong>un/une → des</strong>, <strong>le/la → les</strong></p>`,
            exercices: [
              { question: "Quel est le pluriel de 'un cheval' ?", choix: ["des chevals", "des chevaux", "des chevales"], bonne: "des chevaux",
                rappel: "Les mots en -al font leur pluriel en -aux.", expl_bravo: "Excellent ! cheval → chevaux. Les mots en -AL font -AUX au pluriel.",
                expl_erreur: "Cheval se termine en -AL → pluriel en -AUX : des CHEVAUX." },
              { question: "Pluriel de 'un bateau' ?", choix: ["des bateaux", "des bateaus", "des bateux"], bonne: "des bateaux",
                rappel: "Les mots en -eau font leur pluriel en -eaux.", expl_bravo: "Parfait ! bateau → bateaux. Les mots en -EAU font -EAUX au pluriel.",
                expl_erreur: "Bateau se termine en -EAU → pluriel en -EAUX : des BATEAUX." },
              { question: "Pluriel de 'un bras' ?", choix: ["des bras", "des brass", "des brases"], bonne: "des bras",
                rappel: "Les mots déjà terminés par -s ne changent pas au pluriel.", expl_bravo: "Bravo ! 'bras' se termine déjà par -s, donc il ne change pas au pluriel.",
                expl_erreur: "Les mots terminés par -S ne changent pas au pluriel : un bras → des BRAS." },
              { question: "Pluriel de 'une voix' ?", choix: ["des voixs", "des voix", "des voixes"], bonne: "des voix",
                rappel: "Les mots terminés par -x ne changent pas au pluriel.", expl_bravo: "Exact ! 'voix' se termine par -x et ne change pas : des VOIX.",
                expl_erreur: "Les mots terminés par -X ne changent pas au pluriel : une voix → des VOIX." },
              { question: "Pluriel de 'le journal' ?", choix: ["les journaux", "les journals", "les journauxs"], bonne: "les journaux",
                rappel: "Journal se termine en -al → pluriel en -aux.", expl_bravo: "Super ! journal → journaux. -AL → -AUX.",
                expl_erreur: "Journal se termine en -AL → pluriel en -AUX : les JOURNAUX." }
            ]
          }
        ]
      }
    }
  },

  ce2: {
    id: "ce2", nom: "CE2", emoji: "🌳",
    couleur: "#10b981", couleurDark: "#047857", bg: "from-emerald-500 to-green-600",
    description: "Cours Élémentaire 2 — 8 ans",
    matieres: {
      francais: {
        nom: "Français", emoji: "📖",
        themes: [
          {
            id: "adjectif", nom: "L'adjectif qualificatif", emoji: "🎨",
            lecon: `<h3>L'adjectif qualificatif</h3>
<p>L'adjectif qualificatif <strong>décrit</strong> ou <strong>précise</strong> un nom. Il s'accorde avec le nom qu'il qualifie en genre et en nombre.</p>
<br>
<p>🔵 <strong>L'accord de l'adjectif :</strong></p>
<ul>
<li>Masculin singulier : le chat <u>noir</u></li>
<li>Féminin singulier : la chatte <u>noire</u> (+e)</li>
<li>Masculin pluriel : les chats <u>noirs</u> (+s)</li>
<li>Féminin pluriel : les chattes <u>noires</u> (+es)</li>
</ul>
<br>
<p>🔵 <strong>Exceptions :</strong></p>
<ul>
<li>Adjectifs déjà terminés par -e : <em>rouge, jaune, triste</em> → pas de -e supplémentaire au féminin</li>
<li>Doublement de la consonne : <em>bon → bonne, gros → grosse, vieux → vieille</em></li>
</ul>
<br>
<p>💡 Pour trouver le genre du nom, remplace-le par 'il' ou 'elle' et écoute si ça sonne bien.</p>`,
            exercices: [
              { question: "Accorde l'adjectif : Une fille ___ (intelligent)", choix: ["intelligent", "intelligente", "intelligents"], bonne: "intelligente",
                rappel: "Fille est féminin singulier. On ajoute -e à l'adjectif.", expl_bravo: "Parfait ! Fille = féminin → intelligent + e = INTELLIGENTE.",
                expl_erreur: "Fille est féminin → on ajoute -e à l'adjectif : une fille INTELLIGENTE." },
              { question: "Accorde : Des maisons ___ (grand)", choix: ["grand", "grande", "grandes"], bonne: "grandes",
                rappel: "Maisons est féminin pluriel. On ajoute -e + s.", expl_bravo: "Excellent ! Maisons = féminin pluriel → grand + es = GRANDES.",
                expl_erreur: "Maisons = féminin pluriel → grand + es = GRANDES." },
              { question: "Accorde : Un garçon ___ (courageux)", choix: ["courageuse", "courageux", "courageux"], bonne: "courageux",
                rappel: "Courageux se termine déjà par -x, pas de changement au masculin singulier.", expl_bravo: "Bravo ! Courageux ne change pas au masculin singulier. Il se termine déjà par -x.",
                expl_erreur: "Courageux se termine par -x → il ne change pas au masculin singulier : un garçon COURAGEUX." },
              { question: "Accorde : La fleur ___ (beau)", choix: ["beau", "belle", "beaux"], bonne: "belle",
                rappel: "Beau est un adjectif irrégulier. Au féminin : belle.", expl_bravo: "Parfait ! Beau est irrégulier → féminin = BELLE. La fleur belle.",
                expl_erreur: "Beau est irrégulier : masculin = beau, féminin = BELLE. La fleur BELLE." },
              { question: "Accorde : Des enfants ___ (heureux)", choix: ["heureuses", "heureux", "heureuxes"], bonne: "heureux",
                rappel: "Heureux se termine par -x → au masculin pluriel, pas de changement.", expl_bravo: "Très bien ! Heureux ne change pas au pluriel masculin : des enfants HEUREUX.",
                expl_erreur: "Heureux se termine par -x → pas de changement au masculin pluriel : des enfants HEUREUX." }
            ]
          },
          {
            id: "present_tous", nom: "Présent (tous les groupes)", emoji: "✍️",
            lecon: `<h3>Le présent de l'indicatif — Tous les groupes</h3>
<p><strong>3 groupes de verbes</strong> en français :</p>
<br>
<p>🟢 <strong>1er groupe (-ER)</strong> : chanter, parler, jouer...<br>
→ Terminaisons : -e, -es, -e, -ons, -ez, -ent</p>
<br>
<p>🔵 <strong>2e groupe (-IR)</strong> : finir, choisir, grandir...<br>
→ Terminaisons : -is, -is, -it, -issons, -issez, -issent</p>
<br>
<p>🔴 <strong>3e groupe (irréguliers)</strong> : être, avoir, aller, faire, prendre, dire, venir...<br>
→ À apprendre par cœur !</p>
<br>
<table style="width:100%;border-collapse:collapse;font-size:0.85em">
<tr style="background:rgba(99,102,241,0.2)"><th style="padding:5px">Pronom</th><th style="padding:5px">ÊTRE</th><th style="padding:5px">AVOIR</th><th style="padding:5px">ALLER</th><th style="padding:5px">FAIRE</th></tr>
<tr><td style="padding:4px">je</td><td style="padding:4px">suis</td><td style="padding:4px">ai</td><td style="padding:4px">vais</td><td style="padding:4px">fais</td></tr>
<tr style="background:rgba(255,255,255,0.05)"><td style="padding:4px">tu</td><td style="padding:4px">es</td><td style="padding:4px">as</td><td style="padding:4px">vas</td><td style="padding:4px">fais</td></tr>
<tr><td style="padding:4px">il/elle</td><td style="padding:4px">est</td><td style="padding:4px">a</td><td style="padding:4px">va</td><td style="padding:4px">fait</td></tr>
<tr style="background:rgba(255,255,255,0.05)"><td style="padding:4px">nous</td><td style="padding:4px">sommes</td><td style="padding:4px">avons</td><td style="padding:4px">allons</td><td style="padding:4px">faisons</td></tr>
<tr><td style="padding:4px">vous</td><td style="padding:4px">êtes</td><td style="padding:4px">avez</td><td style="padding:4px">allez</td><td style="padding:4px">faites</td></tr>
<tr style="background:rgba(255,255,255,0.05)"><td style="padding:4px">ils/elles</td><td style="padding:4px">sont</td><td style="padding:4px">ont</td><td style="padding:4px">vont</td><td style="padding:4px">font</td></tr>
</table>`,
            exercices: [
              { question: "Elle ___ (finir) ses devoirs.", choix: ["fini", "finit", "finissez"], bonne: "finit",
                rappel: "Finir = 2e groupe. Avec 'elle' : FIN + it.", expl_bravo: "Parfait ! Finir = 2e groupe. Elle FIN-IT.",
                expl_erreur: "Finir est du 2e groupe. Avec 'elle' : radical FIN + terminaison -it → elle FINIT." },
              { question: "Je ___ (être) content.", choix: ["suis", "es", "est"], bonne: "suis",
                rappel: "Être est irrégulier. Je SUIS — à apprendre par cœur.", expl_bravo: "Excellent ! ÊTRE est irrégulier : je SUIS.",
                expl_erreur: "ÊTRE est irrégulier. Avec 'je' : je SUIS. Retiens : je suis, tu es, il est, nous sommes..." },
              { question: "Nous ___ (avoir) faim.", choix: ["avons", "avez", "ont"], bonne: "avons",
                rappel: "Avoir est irrégulier. Nous AVONS — à apprendre.", expl_bravo: "Bravo ! AVOIR : nous AVONS.",
                expl_erreur: "AVOIR est irrégulier. Avec 'nous' : nous AVONS." },
              { question: "Il ___ (aller) à l'école.", choix: ["allons", "vais", "va"], bonne: "va",
                rappel: "Aller est irrégulier. Il/elle VA.", expl_bravo: "Parfait ! ALLER est irrégulier : il VA.",
                expl_erreur: "ALLER est très irrégulier. Avec 'il' : il VA (pas 'ille'!)." },
              { question: "Vous ___ (faire) du sport.", choix: ["faites", "faisez", "font"], bonne: "faites",
                rappel: "Faire est irrégulier. Vous FAITES (attention : pas 'faisez' !).", expl_bravo: "Super ! FAIRE est irrégulier : vous FAITES.",
                expl_erreur: "FAIRE est irrégulier. Avec 'vous' : vous FAITES (et pas 'faisez', qui n'existe pas !)." },
              { question: "Ils ___ (choisir) un livre.", choix: ["choisit", "choisissent", "choisis"], bonne: "choisissent",
                rappel: "Choisir = 2e groupe. Avec 'ils' : CHOISISS + ent.", expl_bravo: "Excellent ! Choisir = 2e groupe. Ils CHOISISSENT.",
                expl_erreur: "Choisir est du 2e groupe. Avec 'ils' : radical CHOISISS + -ent → ils CHOISISSENT." }
            ]
          },
          {
            id: "homophones_ce2", nom: "Homophones : a/à, est/et", emoji: "🔡",
            lecon: `<h3>Les homophones grammaticaux : a/à et est/et</h3>
<p>Certains mots se prononcent pareil mais s'écrivent différemment. Ce sont des <strong>homophones</strong>.</p>
<br>
<p>🔵 <strong>a / à</strong></p>
<ul>
<li><strong>a</strong> = verbe AVOIR (on peut remplacer par "avait") : Il <u>a</u> faim. → Il avait faim ✓</li>
<li><strong>à</strong> = préposition (on NE peut PAS remplacer par "avait") : Je vais <u>à</u> l'école.</li>
</ul>
<p>💡 Astuce : Si on peut dire "avait" → c'est <strong>a</strong> (sans accent). Sinon → <strong>à</strong> (avec accent).</p>
<br>
<p>🔵 <strong>est / et</strong></p>
<ul>
<li><strong>est</strong> = verbe ÊTRE (on peut remplacer par "était") : Il <u>est</u> grand. → Il était grand ✓</li>
<li><strong>et</strong> = mot de liaison (= "ainsi que") : Le chat <u>et</u> le chien jouent.</li>
</ul>
<p>💡 Astuce : Si on peut dire "était" → c'est <strong>est</strong>. Sinon → <strong>et</strong>.</p>`,
            exercices: [
              { question: "Choisis : Il ___ un beau chien. (a ou à)", choix: ["a", "à"], bonne: "a",
                rappel: "Remplace par 'avait' : Il AVAIT un beau chien ✓ → c'est 'a' (verbe avoir).", expl_bravo: "Parfait ! Il A → on peut dire 'il AVAIT' ✓ → c'est le verbe avoir = a (sans accent).",
                expl_erreur: "Il A un beau chien. On peut dire 'il AVAIT un beau chien' ✓ → c'est le verbe avoir → A sans accent." },
              { question: "Choisis : Elle va ___ l'école. (a ou à)", choix: ["a", "à"], bonne: "à",
                rappel: "Essaie 'avait' : Elle va AVAIT l'école ? Non ✗ → c'est 'à' (préposition).", expl_bravo: "Exact ! 'Elle va À l'école.' On ne peut pas dire 'elle va AVAIT' ✗ → c'est À avec accent.",
                expl_erreur: "À l'école = préposition. On ne peut pas dire 'elle va AVAIT l'école' ✗ → donc À avec accent." },
              { question: "Choisis : Le ciel ___ bleu. (est ou et)", choix: ["est", "et"], bonne: "est",
                rappel: "Remplace par 'était' : Le ciel ÉTAIT bleu ✓ → c'est 'est' (verbe être).", expl_bravo: "Parfait ! Le ciel EST bleu → on peut dire 'le ciel ÉTAIT bleu' ✓ → verbe être = est.",
                expl_erreur: "EST = verbe être. On peut dire 'le ciel ÉTAIT bleu' ✓ → c'est EST." },
              { question: "Choisis : Le chat ___ le chien jouent. (est ou et)", choix: ["est", "et"], bonne: "et",
                rappel: "Essaie 'était' : Le chat ÉTAIT le chien ? Non ✗ → c'est 'et' (liaison).", expl_bravo: "Excellent ! 'Le chat ET le chien' = liaison entre deux noms. On ne peut pas dire 'était' ici ✗ → ET.",
                expl_erreur: "ET = liaison. On ne peut pas dire 'le chat ÉTAIT le chien' ✗ → c'est ET." },
              { question: "Choisis : Papa ___ rentré tard. (est ou et)", choix: ["est", "et"], bonne: "est",
                rappel: "Remplace par 'était' : Papa ÉTAIT rentré tard ✓ → c'est 'est'.", expl_bravo: "Bravo ! Papa EST rentré → on peut dire 'papa ÉTAIT rentré' ✓ → verbe être = EST.",
                expl_erreur: "Papa EST rentré → on peut dire 'papa ÉTAIT rentré' ✓ → c'est EST, verbe être." }
            ]
          }
        ]
      }
    }
  },

  cm1: {
    id: "cm1", nom: "CM1", emoji: "🎓",
    couleur: "#3b82f6", couleurDark: "#1d4ed8", bg: "from-blue-500 to-indigo-600",
    description: "Cours Moyen 1 — 9 ans",
    matieres: {
      francais: {
        nom: "Français", emoji: "📖",
        themes: [
          {
            id: "complements_cm1", nom: "COD, COI et compléments", emoji: "🧩",
            lecon: `<h3>Les compléments du verbe</h3>
<p>Le verbe peut être complété par différents compléments.</p>
<br>
<p>🔵 <strong>Le Complément d'Objet Direct (COD)</strong></p>
<p>Il répond à la question "Verbe <strong>quoi ?</strong>" ou "Verbe <strong>qui ?</strong>" sans préposition.</p>
<p>→ Léa mange <u>une pomme</u>. → Mange QUOI ? Une pomme = COD</p>
<br>
<p>🔵 <strong>Le Complément d'Objet Indirect (COI)</strong></p>
<p>Il répond à la question "Verbe <strong>à qui ?</strong>", "<strong>de quoi ?</strong>" etc. avec une préposition (à, de...).</p>
<p>→ Elle parle <u>à sa maman</u>. → Parle À QUI ? À sa maman = COI</p>
<br>
<p>🔵 <strong>Compléments Circonstanciels</strong></p>
<ul>
<li>De <strong>lieu</strong> (où ?) : Il joue <u>dans le jardin</u>.</li>
<li>De <strong>temps</strong> (quand ?) : Elle part <u>demain</u>.</li>
<li>De <strong>manière</strong> (comment ?) : Il marche <u>lentement</u>.</li>
</ul>
<br>
<p>💡 Les CC peuvent souvent être déplacés ou supprimés sans changer le sens de base.</p>`,
            exercices: [
              { question: "Dans 'Le chien mange un os.', quel est le COD ?", choix: ["Le chien", "mange", "un os"], bonne: "un os",
                rappel: "COD = répond à 'mange QUOI ?'. Pas de préposition.", expl_bravo: "Parfait ! 'un os' = COD. Mange QUOI ? Un os → pas de préposition → COD.",
                expl_erreur: "Pour trouver le COD : 'mange QUOI ?' → un os. Pas de préposition entre le verbe et ce mot → COD." },
              { question: "Dans 'Elle écrit à sa cousine.', quel est le COI ?", choix: ["Elle", "écrit", "à sa cousine"], bonne: "à sa cousine",
                rappel: "COI = répond à 'écrit À QUI ?' avec la préposition 'à'.", expl_bravo: "Excellent ! 'à sa cousine' = COI. Il y a la préposition 'à' → COI.",
                expl_erreur: "Écrit À QUI ? → à sa cousine. La préposition 'à' est présente → c'est un COI." },
              { question: "Dans 'Paul court dans le parc.', quel est le CC de lieu ?", choix: ["Paul", "court", "dans le parc"], bonne: "dans le parc",
                rappel: "CC de lieu = répond à 'où ?'. On peut le déplacer.", expl_bravo: "Bravo ! 'dans le parc' = CC de lieu. Court OÙ ? Dans le parc.",
                expl_erreur: "'Dans le parc' répond à 'court OÙ ?' → c'est un complément circonstanciel de LIEU." },
              { question: "Lequel est un COD ?", choix: ["Il parle de son voyage.", "Elle mange une orange.", "Nous allons à Paris."], bonne: "Elle mange une orange.",
                rappel: "Le COD répond à 'verbe quoi ?' sans préposition.", expl_bravo: "Parfait ! 'une orange' = COD (mange QUOI ?). Les autres utilisent des prépositions.",
                expl_erreur: "'une orange' répond à 'mange QUOI ?' sans préposition → COD. 'de son voyage' = COI. 'à Paris' = CC de lieu." },
              { question: "Dans 'Hier, il a plu.', 'hier' est :", choix: ["COD", "CC de temps", "CC de lieu"], bonne: "CC de temps",
                rappel: "Hier répond à 'quand ?' → complément circonstanciel de temps.", expl_bravo: "Exact ! 'Hier' répond à 'quand ?' → CC de TEMPS.",
                expl_erreur: "'Hier' répond à la question 'QUAND ?' → c'est un CC de TEMPS." }
            ]
          },
          {
            id: "passe_compose_cm1", nom: "Le passé composé", emoji: "⏮️",
            lecon: `<h3>Le passé composé</h3>
<p>Le passé composé exprime une <strong>action terminée dans le passé</strong>.</p>
<br>
<p>🔵 <strong>Formation :</strong> auxiliaire (AVOIR ou ÊTRE) au présent + <strong>participe passé</strong></p>
<br>
<p>🔵 <strong>Avec AVOIR :</strong> la majorité des verbes</p>
<ul>
<li>chanter → chanté &nbsp;|&nbsp; finir → fini &nbsp;|&nbsp; faire → <strong>fait</strong> &nbsp;|&nbsp; dire → <strong>dit</strong></li>
<li>Ex : J'ai chanté. Tu as fini. Il a fait. Nous avons dit.</li>
</ul>
<br>
<p>🔵 <strong>Avec ÊTRE :</strong> verbes de déplacement et de changement d'état</p>
<p>👉 Astuce : <em>Dr. & Mrs. Vandertramp</em><br>
<strong>D</strong>evenir, <strong>R</strong>evenir / <strong>M</strong>onter, <strong>R</strong>ester, <strong>S</strong>ortir / <strong>V</strong>enir, <strong>A</strong>ller, <strong>N</strong>aître / <strong>D</strong>escendre, <strong>E</strong>ntrer, <strong>R</strong>entrer / <strong>T</strong>omber, <strong>R</strong>etourner, <strong>A</strong>rriver / <strong>M</strong>ourir, <strong>P</strong>artir, <strong>P</strong>asser</p>
<br>
<p>⚠️ <strong>Accord du participe passé avec ÊTRE :</strong></p>
<ul>
<li>Il est parti. / Elle est parti<u>e</u>. / Ils sont parti<u>s</u>. / Elles sont parti<u>es</u>.</li>
</ul>`,
            exercices: [
              { question: "Elle ___ (chanter) une chanson hier.", choix: ["est chantée", "a chanté", "chantait"], bonne: "a chanté",
                rappel: "Chanter se conjugue avec AVOIR au passé composé. Participe passé : chanté.", expl_bravo: "Parfait ! Chanter → AVOIR + chanté = elle A CHANTÉ.",
                expl_erreur: "Chanter se conjugue avec AVOIR. Elle A CHANTÉ. Le participe passé de chanter est CHANTÉ." },
              { question: "Il ___ (aller) au marché ce matin.", choix: ["a allé", "est allé", "allait"], bonne: "est allé",
                rappel: "Aller fait partie des verbes qui se conjuguent avec ÊTRE.", expl_bravo: "Bravo ! ALLER se conjugue avec ÊTRE → il EST ALLÉ.",
                expl_erreur: "ALLER se conjugue avec ÊTRE (verbe de déplacement). Il EST ALLÉ." },
              { question: "Elles ___ (partir) tôt ce matin.", choix: ["ont parti", "sont partis", "sont parties"], bonne: "sont parties",
                rappel: "Partir = ÊTRE. Elles = féminin pluriel → participe accordé : parties.", expl_bravo: "Excellent ! PARTIR + ÊTRE + accord féminin pluriel = elles SONT PARTIES.",
                expl_erreur: "Partir = ÊTRE. Elles = féminin pluriel → accord du participe : parti + es = PARTIES → elles SONT PARTIES." },
              { question: "Tu ___ (faire) une erreur.", choix: ["as fait", "es fait", "faisais"], bonne: "as fait",
                rappel: "Faire se conjugue avec AVOIR. Participe passé irrégulier : fait.", expl_bravo: "Parfait ! Faire → AVOIR + fait = tu AS FAIT. Participe irrégulier : FAIT.",
                expl_erreur: "Faire se conjugue avec AVOIR. Participe passé irrégulier = FAIT → tu AS FAIT." },
              { question: "Nous ___ (naître) en France.", choix: ["avons nés", "sommes nés", "naissions"], bonne: "sommes nés",
                rappel: "Naître se conjugue avec ÊTRE. Nous = masculin pluriel → nés.", expl_bravo: "Excellent ! Naître = ÊTRE. Nous SOMMES NÉS. (nés = masculin pluriel)",
                expl_erreur: "Naître est dans la liste des verbes avec ÊTRE. Nous SOMMES NÉS (accord au masculin pluriel)." }
            ]
          }
        ]
      }
    }
  },

  cm2: {
    id: "cm2", nom: "CM2", emoji: "🏆",
    couleur: "#7c3aed", couleurDark: "#5b21b6", bg: "from-violet-500 to-purple-600",
    description: "Cours Moyen 2 — 10-11 ans",
    matieres: {
      francais: {
        nom: "Français", emoji: "📖",
        themes: [
          {
            id: "grammaire_cm2", nom: "La phrase complexe", emoji: "🔗",
            lecon: `<h3>La phrase complexe et les propositions</h3>
<p>Une phrase peut contenir une ou plusieurs <strong>propositions</strong>.</p>
<br>
<p>🔵 <strong>Phrase simple</strong> = 1 seul verbe conjugué</p>
<p>→ Le chat dort.</p>
<br>
<p>🔵 <strong>Phrase complexe</strong> = plusieurs verbes conjugués, reliés par :</p>
<ul>
<li><strong>Coordination</strong> (mais, ou, et, donc, or, ni, car) :<br>→ Il pleut <u>mais</u> je sors quand même.</li>
<li><strong>Juxtaposition</strong> (virgule, point-virgule) :<br>→ Il pleut<u>,</u> je prends mon parapluie.</li>
<li><strong>Subordination</strong> (que, qui, quand, parce que, si, lorsque...) :<br>→ Je sais <u>que</u> tu viendras.<br>→ Elle mange <u>parce qu'</u>elle a faim.</li>
</ul>
<br>
<p>💡 <strong>Proposition subordonnée relative</strong> : introduite par <em>qui, que, dont, où</em> — elle précise un nom.</p>
<p>→ Le livre <u>que tu m'as prêté</u> est intéressant.</p>`,
            exercices: [
              { question: "Combien de verbes dans 'Il chante et elle danse.' ?", choix: ["1", "2", "3"], bonne: "2",
                rappel: "Compte les verbes conjugués : chante, danse.", expl_bravo: "Exact ! 2 verbes : 'chante' et 'danse' → phrase complexe par coordination.",
                expl_erreur: "Il y a 2 verbes conjugués : CHANTE et DANSE → phrase complexe." },
              { question: "Quel mot de coordination relie les deux propositions dans 'Je voudrais venir, mais je suis fatigué.' ?", choix: ["que", "mais", "parce que"], bonne: "mais",
                rappel: "Les mots de coordination : mais, ou, et, donc, or, ni, car.", expl_bravo: "Parfait ! 'mais' est un mot de coordination (opposition).",
                expl_erreur: "MAIS est un mot de coordination. Il exprime une opposition. Retiens : mais, ou, et, donc, or, ni, car." },
              { question: "Dans 'Le chien que j'aime est gentil.', la proposition soulignée est :", choix: ["principale", "subordonnée relative", "coordonnée"], bonne: "subordonnée relative",
                rappel: "Une subordonnée relative est introduite par qui, que, dont, où. Elle précise un nom.", expl_bravo: "Excellent ! 'que j'aime' est une proposition subordonnée RELATIVE. Elle précise 'le chien'.",
                expl_erreur: "'que j'aime' est introduite par 'que' et précise le nom 'chien' → c'est une proposition subordonnée RELATIVE." },
              { question: "Quel est le mot subordonnant dans 'Il sort parce qu'il fait beau.' ?", choix: ["il", "sort", "parce que"], bonne: "parce que",
                rappel: "'Parce que' est une conjonction de subordination qui exprime la cause.", expl_bravo: "Bravo ! 'parce que' est le mot subordonnant. Il introduit la cause.",
                expl_erreur: "'parce que' introduit une proposition subordonnée de cause. C'est le mot subordonnant." }
            ]
          },
          {
            id: "conj_cm2", nom: "Tous les temps — révision", emoji: "⏱️",
            lecon: `<h3>Révision des temps de l'indicatif</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.85em">
<tr style="background:rgba(99,102,241,0.3)"><th style="padding:6px">Temps</th><th style="padding:6px">Usage</th><th style="padding:6px">Exemple</th></tr>
<tr><td style="padding:5px"><strong>Présent</strong></td><td style="padding:5px">Action en cours ou habitude</td><td style="padding:5px">Je chante.</td></tr>
<tr style="background:rgba(255,255,255,0.05)"><td style="padding:5px"><strong>Imparfait</strong></td><td style="padding:5px">Action passée qui durait</td><td style="padding:5px">Je chantais.</td></tr>
<tr><td style="padding:5px"><strong>Passé composé</strong></td><td style="padding:5px">Action passée et terminée</td><td style="padding:5px">J'ai chanté.</td></tr>
<tr style="background:rgba(255,255,255,0.05)"><td style="padding:5px"><strong>Futur simple</strong></td><td style="padding:5px">Action à venir</td><td style="padding:5px">Je chanterai.</td></tr>
<tr><td style="padding:5px"><strong>Conditionnel présent</strong></td><td style="padding:5px">Action hypothétique</td><td style="padding:5px">Je chanterais.</td></tr>
</table>
<br>
<p>💡 <strong>Conditionnel présent :</strong> infinitif + -ais, -ais, -ait, -ions, -iez, -aient<br>
→ Si j'avais le temps, je lirais plus. (condition imaginaire)</p>`,
            exercices: [
              { question: "Quel temps est utilisé dans 'Hier, il neigeait.' ?", choix: ["Présent", "Imparfait", "Passé composé"], bonne: "Imparfait",
                rappel: "L'imparfait décrit une action passée qui durait. 'Neigeait' = imparfait.", expl_bravo: "Parfait ! 'neigeait' = imparfait. Action passée qui durait dans le temps.",
                expl_erreur: "'Neigeait' = imparfait. C'est une action passée qui durait. Hier il neigeait = description d'une situation passée." },
              { question: "Quel temps dans 'Si j'avais de l'argent, j'achèterais une maison.' ?", choix: ["Futur", "Conditionnel présent", "Passé composé"], bonne: "Conditionnel présent",
                rappel: "Le conditionnel exprime une hypothèse. Terminaisons : -ais, -ais, -ait...", expl_bravo: "Exact ! 'achèterais' = conditionnel présent. Il exprime une hypothèse (si...alors).",
                expl_erreur: "'achèterais' = conditionnel présent. Il exprime une hypothèse. Terminaison -ais = conditionnel ou imparfait, mais ici c'est une condition imaginaire." },
              { question: "Conjugue au futur : Demain, nous ___ (partir).", choix: ["partions", "sommes partis", "partirons"], bonne: "partirons",
                rappel: "Futur de PARTIR (irrégulier) : je partirai, tu partiras, il partira, nous PARTIRONS...", expl_bravo: "Bravo ! PARTIR au futur + nous = nous PARTIRONS.",
                expl_erreur: "PARTIR au futur : infinitif + -ons → partirons. Nous PARTIRONS demain." },
              { question: "Lequel est au passé composé ?", choix: ["Il chantait.", "Il a chanté.", "Il chantera."], bonne: "Il a chanté.",
                rappel: "Passé composé = auxiliaire AVOIR ou ÊTRE au présent + participe passé.", expl_bravo: "Parfait ! 'Il a chanté' = passé composé (a = avoir présent + chanté = participe).",
                expl_erreur: "Passé composé = avoir/être + participe passé. 'Il A CHANTÉ' ✓. 'Il chantait' = imparfait. 'Il chantera' = futur." },
              { question: "Conjugue au conditionnel : Je ___ (aimer) voyager.", choix: ["aimais", "aimerais", "aimerai"], bonne: "aimerais",
                rappel: "Conditionnel = infinitif + terminaison -ais (je). Ne pas confondre avec l'imparfait.", expl_bravo: "Exact ! AIMER + ais = j'AIMERAIS. Conditionnel présent.",
                expl_erreur: "Conditionnel = infinitif + terminaison d'imparfait. Aimer + ais = j'AIMERAIS. Différence avec imparfait : 'j'aimais' (action passée) vs 'j'aimerais' (hypothèse)." }
            ]
          },
          {
            id: "ortho_cm2", nom: "Orthographe avancée", emoji: "🔡",
            lecon: `<h3>Orthographe — Homophones et accords complexes</h3>
<p>🔵 <strong>Ses / Ces / C'est / S'est</strong></p>
<ul>
<li><strong>ses</strong> = déterminant possessif (ses livres = les livres de lui/elle)</li>
<li><strong>ces</strong> = déterminant démonstratif (ces livres = les livres dont on parle)</li>
<li><strong>c'est</strong> = ce + est (c'était possible ? → oui ✓)</li>
<li><strong>s'est</strong> = pronom se + est (il s'est blessé = action réfléchie)</li>
</ul>
<br>
<p>🔵 <strong>Leur / Leurs</strong></p>
<ul>
<li><strong>leur</strong> (invariable) = pronom : Je leur parle. (= à eux/elles)</li>
<li><strong>leurs</strong> (variable) = déterminant : leurs livres (= les livres d'eux)</li>
</ul>
<br>
<p>🔵 <strong>Tout / Toute / Tous / Toutes</strong></p>
<ul>
<li>Adjectif : s'accorde avec le nom → tout le monde, toute la classe, tous les élèves, toutes les filles</li>
<li>Adverbe (= très) : invariable → Il est tout petit. (Attention : tout petit, mais toute petite !)</li>
</ul>`,
            exercices: [
              { question: "Complète : ___ livres sont à moi. (Ses/Ces)", choix: ["Ses", "Ces", "C'est"], bonne: "Ces",
                rappel: "Ces = déterminant démonstratif (= ces choses-là). Ses = appartient à quelqu'un.", expl_bravo: "Parfait ! 'CES livres' = on désigne ces livres précis (démonstratif).",
                expl_erreur: "CES = déterminant démonstratif (montre des choses). SES = appartient à lui/elle. Ici on parle 'de ces livres' → CES." },
              { question: "Complète : Il ___ blessé en tombant. (s'est/c'est)", choix: ["s'est", "c'est", "ses"], bonne: "s'est",
                rappel: "S'est = pronom se + verbe être. Il SE blessé lui-même.", expl_bravo: "Exact ! 'il S'EST blessé' = action que le sujet fait sur lui-même (verbe pronominal).",
                expl_erreur: "S'EST = pronom se + est (il se est blessé). C'EST = ce + est. Ici il s'est blessé lui-même → S'EST." },
              { question: "Complète : Je ___ parle chaque jour. (leur/leurs)", choix: ["leur", "leurs"], bonne: "leur",
                rappel: "LEUR pronom = invariable. Il remplace 'à eux/elles'. On ne peut pas le remplacer par un nom.", expl_bravo: "Bravo ! 'je LEUR parle' = pronom, invariable (= je parle à eux).",
                expl_erreur: "Je LEUR parle = pronom invariable (à eux). LEURS livres = adjectif possessif qui s'accorde." },
              { question: "Complète : ___ les élèves ont réussi.", choix: ["Tout", "Tous", "Toutes"], bonne: "Tous",
                rappel: "Tout s'accorde avec le nom. Élèves = masculin pluriel → TOUS.", expl_bravo: "Parfait ! TOUS les élèves = masculin pluriel. Tout s'accorde : tout/toute/tous/toutes.",
                expl_erreur: "TOUT s'accorde avec le nom. Élèves = masculin pluriel → TOUS les élèves." },
              { question: "Complète : ___ beau, ce tableau ! (C'est/S'est/Ces)", choix: ["C'est", "S'est", "Ces"], bonne: "C'est",
                rappel: "C'est = ce + est. On peut dire 'c'était beau' ✓.", expl_bravo: "Excellent ! C'EST beau → on peut dire 'c'ÉTAIT beau' ✓ → C'EST.",
                expl_erreur: "C'EST beau → remplace par 'c'était beau' ✓ → C'EST. S'est s'utilise avec un pronom (il s'est...). Ces est un déterminant devant un nom." }
            ]
          },
          {
            id: "lecture_cm2", nom: "Compréhension de texte", emoji: "📚",
            lecon: `<h3>Comprendre un texte — Méthode</h3>
<p>Pour bien comprendre un texte, suis ces étapes :</p>
<br>
<p>1️⃣ <strong>Lis le texte une première fois</strong> en entier, sans t'arrêter.</p>
<p>2️⃣ <strong>Identifie les personnages</strong> : Qui sont-ils ? Que font-ils ?</p>
<p>3️⃣ <strong>Repère le lieu et le temps</strong> : Où et quand l'histoire se passe-t-elle ?</p>
<p>4️⃣ <strong>Identifie le problème</strong> : Qu'est-ce qui se passe ? Quel est l'enjeu ?</p>
<p>5️⃣ <strong>Lis les questions</strong>, puis relis le texte en cherchant les réponses.</p>
<br>
<p>📖 <em>Texte : La bibliothécaire de Bagdad</em></p>
<p><em>En 2003, pendant la guerre en Irak, Alia Muhammad Baker était bibliothécaire à Bassora. Quand elle comprit que la guerre allait détruire sa bibliothèque, elle décida d'agir. Avec l'aide de ses voisins, elle transporta 30 000 livres chez elle et chez ses amis pour les sauver. Grâce à son courage, ces trésors furent préservés.</em></p>`,
            exercices: [
              { question: "Quel est le métier d'Alia Muhammad Baker ?", choix: ["Professeure", "Bibliothécaire", "Directrice"], bonne: "Bibliothécaire",
                rappel: "Cherche dans la première phrase du texte.", expl_bravo: "Exact ! Le texte dit : 'Alia Muhammad Baker était bibliothécaire'.",
                expl_erreur: "Relis le texte : 'Alia Muhammad Baker était BIBLIOTHÉCAIRE à Bassora.'" },
              { question: "Combien de livres Alia a-t-elle sauvés ?", choix: ["3 000", "13 000", "30 000"], bonne: "30 000",
                rappel: "Cherche le nombre dans le texte.", expl_bravo: "Parfait ! Le texte dit : 'elle transporta 30 000 livres'.",
                expl_erreur: "Le texte précise : 'elle transporta 30 000 livres chez elle et chez ses amis.'" },
              { question: "Pourquoi Alia a-t-elle agi ?", choix: ["Pour vendre les livres", "Pour sauver les livres de la guerre", "Pour déménager"], bonne: "Pour sauver les livres de la guerre",
                rappel: "Quel danger menaçait les livres ?", expl_bravo: "Bravo ! Elle a agi parce que la guerre allait détruire sa bibliothèque.",
                expl_erreur: "Le texte dit : 'Quand elle comprit que la guerre allait DÉTRUIRE sa bibliothèque, elle décida d'agir.' → pour sauver les livres." },
              { question: "Que montre cette histoire ?", choix: ["La force de la guerre", "Le courage d'une femme pour protéger la culture", "L'importance des voisins"], bonne: "Le courage d'une femme pour protéger la culture",
                rappel: "Quel est le message principal du texte ?", expl_bravo: "Excellent ! Cette histoire montre le courage d'Alia pour préserver des trésors culturels malgré la guerre.",
                expl_erreur: "Le texte célèbre le COURAGE d'Alia qui a risqué sa vie pour sauver des livres = protéger la culture." }
            ]
          }
        ]
      }
    }
  }
};
