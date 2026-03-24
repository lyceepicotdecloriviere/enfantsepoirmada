import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Utensils, Heart, ChefHat, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

const mealsImages = [
  {
    url: "https://customer-assets.emergentagent.com/job_enfants-espoir-mg/artifacts/pu3st1t3_1D299A1C-7FCE-4518-89E7-380024AA6D4E.jpeg",
    alt: "Cuisinier préparant le riz",
    caption: "Notre cuisinier prépare le riz quotidien",
    contain: true
  },
  {
    url: "https://customer-assets.emergentagent.com/job_enfants-espoir-mg/artifacts/9jy0cscq_4E79E3C3-1CEF-4307-B970-59A41A5FC97D.jpeg",
    alt: "Cuisinières préparant les repas",
    caption: "L'équipe en cuisine",
    contain: false
  },
  {
    url: "https://customer-assets.emergentagent.com/job_enfants-espoir-mg/artifacts/bhpb2y9x_D146B6EF-FE67-45DA-88EB-429378A4CC65.jpeg",
    alt: "Portions de riz et haricots",
    caption: "Les portions quotidiennes",
    contain: false
  },
  {
    url: "https://customer-assets.emergentagent.com/job_enfants-espoir-mg/artifacts/kdnjh6mt_DB168735-C043-462C-8E0E-A3E5FC678FCC.jpeg",
    alt: "Enfants avec leurs portions",
    caption: "Distribution aux enfants",
    contain: false
  },
  {
    url: "https://customer-assets.emergentagent.com/job_enfants-espoir-mg/artifacts/ottdu1w9_4D2024C6-E53B-415D-9B53-476E03B0FCB4.jpeg",
    alt: "Distribution du riz aux enfants",
    caption: "Chaque enfant reçoit sa portion",
    contain: false
  },
];

export const MealsSection = () => {
  const { i18n } = useTranslation();
  
  const content = {
    fr: {
      badge: "Nourrir l'avenir",
      title: "Repas & Cuisine",
      subtitle: "Les enfants mangent le midi et repartent avec du riz le soir",
      description: "Chaque jour, notre équipe de cuisine prépare les repas du midi pour les 1295 élèves. Le soir, chaque enfant emporte une portion de riz chez lui pour nourrir sa famille. C'est souvent le seul repas de la journée pour ces familles défavorisées.",
      highlight: "Repas du midi + une portion de riz à emporter le soir",
      kitchen: "Notre cuisine a besoin d'être améliorée pour continuer à nourrir tous ces enfants.",
      cta: "Aider la cuisine"
    },
    en: {
      badge: "Feeding the future",
      title: "Meals & Kitchen",
      subtitle: "Children eat at noon and take rice home in the evening",
      description: "Every day, our kitchen team prepares lunch for 1295 students. In the evening, each child takes a portion of rice home to feed their family. It is often the only meal of the day for these disadvantaged families.",
      highlight: "Lunch + a portion of rice to take home in the evening",
      kitchen: "Our kitchen needs improvement to continue feeding all these children.",
      cta: "Help the kitchen"
    },
    mg: {
      badge: "Mamelona ny ho avy",
      title: "Sakafo & Lakozia",
      subtitle: "Misakafo amin'ny atoandro ny ankizy ary mitondra vary rehefa hariva",
      description: "Isan'andro, ny ekipan'ny lakozia dia manomana sakafo atoandro ho an'ny mpianatra 1295. Rehefa hariva, ny ankizy tsirairay dia mitondra vary ho an'ny fianakaviany.",
      highlight: "Sakafo atoandro + anjara vary ho entina hariva",
      kitchen: "Mila fanatsarana ny lakozia mba hanohizana mamelona ireo ankizy rehetra ireo.",
      cta: "Ampio ny lakozia"
    },
    de: {
      badge: "Die Zukunft ernähren",
      title: "Mahlzeiten & Küche",
      subtitle: "Kinder essen mittags und nehmen abends Reis mit nach Hause",
      description: "Jeden Tag bereitet unser Küchenteam das Mittagessen für 1295 Schüler zu. Abends nimmt jedes Kind eine Portion Reis mit nach Hause.",
      highlight: "Mittagessen + eine Portion Reis zum Mitnehmen am Abend",
      kitchen: "Unsere Küche muss verbessert werden, um weiterhin alle diese Kinder zu ernähren.",
      cta: "Der Küche helfen"
    },
    es: {
      badge: "Alimentar el futuro",
      title: "Comidas & Cocina",
      subtitle: "Los niños comen al mediodía y se llevan arroz por la noche",
      description: "Cada día, nuestro equipo de cocina prepara el almuerzo para 1295 estudiantes. Por la noche, cada niño se lleva una porción de arroz a casa.",
      highlight: "Almuerzo + una porción de arroz para llevar por la noche",
      kitchen: "Nuestra cocina necesita mejoras para seguir alimentando a todos estos niños.",
      cta: "Ayudar a la cocina"
    }
  };

  const t = content[i18n.language] || content.fr;

  return (
    <section
      id="meals"
      data-testid="meals-section"
      className="py-24 md:py-32 bg-background"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground text-sm font-medium px-4 py-2 rounded-full mb-4">
            <Utensils className="w-4 h-4" />
            <span>{t.badge}</span>
          </div>
          <h2
            data-testid="meals-title"
            className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-neutral-900 mb-4"
          >
            {t.title}
          </h2>
          <p className="text-neutral-600 text-base md:text-lg">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-accent to-accent/80 rounded-2xl p-6 md:p-8 mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <ChefHat className="w-8 h-8 text-white" />
            <p className="font-heading font-bold text-xl md:text-2xl text-white">
              {t.highlight}
            </p>
          </div>
        </motion.div>

        {/* Photos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
          {mealsImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-2xl shadow-lg ${
                index === 0 ? 'col-span-2 md:col-span-1 row-span-2' : ''
              } ${index === 0 ? 'bg-neutral-100' : ''}`}
            >
              <img
                src={image.url}
                alt={image.alt}
                className={`w-full h-full ${image.contain ? 'object-contain' : 'object-cover'} aspect-square transition-transform duration-500 group-hover:scale-110`}
              />
              {/* Caption overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/40 to-transparent p-4">
                <p className="text-white text-sm font-medium">{image.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Description Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-10 shadow-xl max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-20 h-20 bg-accent/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Utensils className="w-10 h-10 text-accent" />
            </div>
            <div className="text-center md:text-left flex-1">
              <p className="text-neutral-700 leading-relaxed mb-4">
                {t.description}
              </p>
              <p className="text-sm text-neutral-500 italic mb-6">
                {t.kitchen}
              </p>
              <Button
                asChild
                data-testid="meals-whatsapp-btn"
                className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 shadow-lg shadow-accent/20 hover:-translate-y-1 active:scale-95 transition-all"
              >
                <a
                  href="https://wa.me/261348185069?text=Bonjour,%20je%20souhaite%20aider%20%C3%A0%20am%C3%A9liorer%20la%20cuisine%20de%20l%27%C3%A9cole."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Heart className="w-4 h-4 mr-2" />
                  {t.cta}
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
