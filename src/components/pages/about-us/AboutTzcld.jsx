import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import pct1 from "../../../img/tzcld-slogans.png";
import pct2 from "../../../img/tzcld-experiment.png";
import pct3 from "../../../img/tzcld-team.png";
import Picture from "../../elements/Picture";
import TitleTwo from "../../elements/Titles/TitleTwo";
import pctJob01 from "../../../img/about/job-01.jpg";
import pctJob02 from "../../../img/about/job-02.jpg";
import pctJob03 from "../../../img/about/job-03.JPG";

const AboutDedc = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className="container pt-5 rounded-1">
        {/* <TitleOne txt1="Territoire Zéro Chômeur de Longue Durée" /> */}

        <div
          className={`
            ${theme ? `text-light` : `text-dark`}`}
        >
          <TitleTwo txt="Faire de l’emploi un droit pour tous" />
          {/* <TitleThree txt="un droit pour tous" /> */}
          <h2 className="pt-2  text-start">
            Le texte du préambule de la Constitution donne à chacun, « le droit
            d’obtenir un emploi ».
            <br />
          </h2>
          <p className="pt-2 lh-1 Texte1 text-start">
            Pourtant, c’est encore loin d’être une réalité pour le million de
            chômeurs et chômeuses de longue durée en France.
          </p>

          <h5 className="py-2 pt-lg-2 pb-lg-5 Texte1 text-start">
            Le projet expérimental Territoires zéro chômeur de longue durée a
            pour objectif de démontrer que l’exclusion sociale due à la «
            privation d’emploi », n’est pas une fatalité.
          </h5>
          <div className="row">
            <div className="mb-4 mb-lg-0  col-12  col-lg-3 mt-lg-4">
              <Picture
                classe="rounded-5 img-fluid"
                pct={pctJob01}
                alt="Photo affichage"
              />
            </div>
            <div className="mb-4 mb-lg-0 col-12 col-lg-6">
              <Picture
                classe="rounded-5 img-fluid"
                pct={pctJob03}
                alt="Photo affichage"
              />
            </div>
            <div className="col-12 col-lg-3 mt-lg-4">
              <Picture
                classe="rounded-5 img-fluid"
                pct={pctJob02}
                alt="Photo affichage"
              />
            </div>
          </div>

          <TitleTwo
            txt="Une loi pour lutter"
            subtxt="contre le chômage de longue durée"
          />
          {/* <TitleThree txt="contre le chômage de longue durée" /> */}

          <h2 className="pt-2  text-start">
            Cette hypothèse et ces constats ont inspiré la loi adopté à
            l’unanimité en 2016.
          </h2>

          <p className="pt-2 lh-1 Texte1 text-start">
            La loi a donné au Fonds d’expérimentation, également appelé
            l’association Expérimentation territoriale contre le chômage de
            longue durée (ETCLD), les moyens d’une expérimentation qui puisse
            ouvrir la voie d’une résorption du chômage de longue durée, ou plus
            précisément de la suppression de la privation d’emploi.
          </p>
          <h5 className="py-2 pt-lg-2 pb-lg-5 Texte1 text-start">
            10 Entreprises à But d’Emploi sont nées, elles sont plus de 80
            aujourd’hui !
          </h5>

          <div>
            {/* Image à améliorer */}
            <Picture
              classe="mx-auto col-12 w-50 col-md-6 "
              pct={pct1}
              alt="Slogans TZCLD"
            />
          </div>

          <TitleTwo
            txt="Mobiliser les compétences"
            subtxt="et répondre aux besoins non couverts"
          />
          {/* <TitleThree txt="et répondre aux besoins non couverts" /> */}

          <h2 className="pt-2  text-start">
            Par une approche territorialisée innovante qui consiste à créer des
            emplois supplémentaires en valorisant les compétences des
            chercheur·euse·s d’emploi volontaires dans le cadre d’activités
            répondant aux besoins locaux non couverts, l’expérimentation
            poursuit l’objectif ambitieux de résorber le chômage de longue durée
            sur le territoire ciblé.
            <br />
          </h2>
          <p className="pt-2 lh-1 Texte1 text-start">
            L’optique est d’atteindre l’ « exhaustivité », c’est-à-dire
            permettre à chaque personne privée d’emploi, dès lors qu’elle se
            mobilise dans le cadre de la démarche, d’accéder à un emploi
            pérenne.
          </p>
          <h5 className="pt-2 Texte1 text-start">
            Une ambition atteignable ! Face aux défis complexes de notre
            société, de nombreuses solutions sont à inventer à l’échelle des
            territoires. Partout, il existe des gisements d’activités utiles qui
            peuvent être transformées en emplois pérennes et non délocalisables.
          </h5>
          <TitleTwo txt="Activer les dépenses passives" />
          <h2 className="pt-2  text-start">
            Le modèle économique de l’expérimentation part d’un constat initial
            simple :
            <br />
          </h2>
          <p className="pt-2 lh-1 Texte1 text-start">
            le chômage de longue durée a un coût économique et social important
            pour la collectivité au sens large (allocations chômage, manque à
            gagner fiscal, …).
          </p>
          <div className="row">
            <h5 className="col-12 col-lg-4 pt-2 Texte1 text-start">
              <strong>C’est le coût de la privation d’emploi. </strong>
              Mais si tou·te·s les chômeur·euse·s de longue durée désirant
              travailler sont en emploi, alors l’État et la collectivité
              réalisent des économies et engrangent de nouveaux bénéfices. De
              fait, un autre équilibre de société est possible si l’on aborde le
              coût de privation d’emploi différemment : cette masse financière
              peut être un levier pour impulser une création d’emploi et
              d’activités qui créent localement de la valeur.
            </h5>
            <h5 className="col-12 col-lg-4 pt-2 Texte1 text-start">
              Pendant la durée de l’expérimentation, la loi prévoit ainsi le
              versement aux Entreprises à But d’Emploi d’une “Contribution au
              développement de l’emploi”, équivalente au coût théorique du
              chômage de longue durée, pour tout CDI qu’elles créent au profit
              d’une personne anciennement chercheuse d’emploi de longue durée.
            </h5>
            <h5 className="col-12 col-lg-4 pt-2 Texte1 text-start">
              Avec cette mécanique financière, les Entreprises à But d’Emploi
              peuvent développer des activités et des emplois à un rythme
              soutenu, elles complètent leurs recettes par du chiffres
              d’affaires générés grâce à la facturation de prestations de
              produits ou de services. Le bénéfice est général, tant pour les
              personnes qui retrouvent un emploi que pour les usager·e·s des
              services produits.
            </h5>
          </div>
          <div>
            {/* Image à améliorer */}
            <Picture
              classe="mx-auto w-75 col-12 rounded-5 "
              pct={pct2}
              alt="Eperimentation TZCLD"
            />
          </div>

          <TitleTwo
            txt="La gouvernance du projet à l’échelle locale"
            subtxt="Le Comité Local pour
              l’Emploi"
          />
          {/* <TitleThree
            txt="à l’échelle locale - Le Comité Local pour
              l’Emploi"
          /> */}
          <h2 className="pt-2  text-start">
            Localement, l’expérimentation ne peut réussir que si tous les
            acteurs du territoire (élus, institutions publiques, acteurs publics
            de l’emploi, entreprises, associations, habitant·e·s, …) s’engagent
            et coopèrent pour créer le plein emploi. C’est le rôle du « Comité
            Local pour l’emploi » (CLE).
            <br />
          </h2>
          <p className="pt-2 lh-1 Texte1 text-start">
            Au Teil, cette instance co-présidée par Olivier PEVERELLI, Maire du
            Teil, et Laetitia BOURJAT, Conseillère départementale en charge de
            l’économie, de l’insertion et de l’emploi, réunit la diversité des
            partenaires locaux.
          </p>
          <div className="row">
            <h5 className="pt-2 Texte1 text-start">
              <strong>
                <u>Le CLE a pour objectif de</u> :
              </strong>
            </h5>
            <h5 className="col-12 pt-2 col-lg-6  pt-lg-0  Texte1 text-start">
              ● Permettre à toute personne en recherche d’emploi depuis plus
              d’un an, volontaire pour mobiliser ses compétences sur son
              territoire, d’avoir accès sans sélection à un emploi adapté, en
              phase avec ses savoir-faire et ses motivations ;
              {/* </h5>
            <h5 className="col-12 pt-2  col-lg-4 pt-lg-0  Texte1 text-start"> */}
              <br /> ● Repérer les besoins non-satisfaits autour desquels
              imaginer de nouvelles activités ;
            </h5>
            <h5 className="col-12 pt-2  col-lg-6 pt-lg-0 Texte1 text-start">
              ● Garantir la bonne insertion des activités créées dans le tissu
              économique local. En résumé, son rôle est de créer les conditions
              pour avancer vers le plein emploi local en facilitant l’émergence
              de d’activités nouvelles qui enrichissent le tissu économique et
              améliorent la vie de tous les usager·e·s du territoire.
            </h5>
          </div>
          <div>
            {/* Image à améliorer */}
            <Picture
              classe="w-50 mx-auto col-12  col-md-6  rounded-5 "
              pct={pct3}
              alt="Organnigramme TZCLD"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutDedc;
