import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Shirt, Heart, Package, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

const clothesImages = [
  {
    url: "https://customer-assets.emergentagent.com/job_enfants-espoir-mg/artifacts/hbfs2sx7_6DDB4A54-3726-4FEB-BDAC-E17DB1932CBE.jpeg",
    alt: "Distribution d'habits - Équipe souriante"
  },
  {
    url: "https://customer-assets.emergentagent.com/job_enfants-espoir-mg/artifacts/yyaw98br_4730595A-5FE1-4AC0-A131-8416C4235F45.jpeg",
    alt: "Distribution d'habits - Personnel heureux"
  },
  {
    url: "https://customer-assets.emergentagent.com/job_enfants-espoir-mg/artifacts/5pu76mcz_E13E062F-C4E5-4584-98EA-F4D9E783196C.jpeg",
    alt: "Distribution d'habits - Tri des vêtements"
  },
  {
    url: "https://customer-assets.emergentagent.com/job_enfants-espoir-mg/artifacts/13erj8pj_59F03140-7636-4396-AF23-3FBEC60536CD.jpeg",
    alt: "Distribution d'habits - Organisation"
  },
  {
    url: "https://customer-assets.emergentagent.com/job_enfants-espoir-mg/artifacts/4qlxl1dq_97E6F9E8-9C2C-462E-A1A5-4F7B92F67FA3.jpeg",
    alt: "Distribution d'habits - Équipe au travail"
  },
];

export const ClothesSection = () => {
  const { i18n } = useTranslation();
  
  const content = {
    fr: {
      badge: "Vos dons en action",
      title: "Distribution d'habits",
      subtitle: "Grâce à vos envois, les enfants reçoivent des vêtements",
      description: "Chaque don d'habits que vous envoyez est trié avec soin par notre équipe et distribué aux enfants qui en ont le plus besoin. Ces photos montrent nos équipes lors des distributions.",
      cta: "Envoyer des habits",
      contact: "Contactez-nous pour organiser un envoi de vêtements"
    },
    en: {
      badge: "Your donations in action",
      title: "Clothes Distribution",
      subtitle: "Thanks to your shipments, children receive clothing",
      description: "Every clothing donation you send is carefully sorted by our team and distributed to the children who need it most. These photos show our teams during distributions.",
      cta: "Send clothes",
      contact: "Contact us to organize a clothing shipment"
    },
    mg: {
      badge: "Ny fanomezanao miasa",
      title: "Fizarana akanjo",
      subtitle: "Noho ny fandefasanao dia mahazo akanjo ny ankizy",
      description: "Ny fanomezana akanjo rehetra alefanao dia sokajina tsara amin'ny ekipanay ary zaraina amin'ny ankizy mila azy indrindra.",
      cta: "Handefa akanjo",
      contact: "Mifandraisa aminay handamina fandefasana akanjo"
    },
    de: {
      badge: "Ihre Spenden in Aktion",
      title: "Kleiderverteilung",
      subtitle: "Dank Ihrer Sendungen erhalten die Kinder Kleidung",
      description: "Jede Kleiderspende, die Sie senden, wird von unserem Team sorgfältig sortiert und an die bedürftigsten Kinder verteilt.",
      cta: "Kleidung senden",
      contact: "Kontaktieren Sie uns, um eine Kleidersendung zu organisieren"
    },
    es: {
      badge: "Sus donaciones en acción",
      title: "Distribución de ropa",
      subtitle: "Gracias a sus envíos, los niños reciben ropa",
      description: "Cada donación de ropa que envía es cuidadosamente clasificada por nuestro equipo y distribuida a los niños que más la necesitan.",
      cta: "Enviar ropa",
      contact: "Contáctenos para organizar un envío de ropa"
    }
  };

  const t = content[i18n.language] || content.fr;

  return (
    <section
      id="clothes"
      data-testid="clothes-section"
      className="py-24 md:py-32 bg-background-alt"
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
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 text-sm font-medium px-4 py-2 rounded-full mb-4">
            <Shirt className="w-4 h-4" />
            <span>{t.badge}</span>
          </div>
          <h2
            data-testid="clothes-title"
            className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-neutral-900 mb-4"
          >
            {t.title}
          </h2>
          <p className="text-neutral-600 text-base md:text-lg">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Photos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 mb-12">
          {clothesImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-2xl shadow-lg ${
                index === 0 ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
            <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Package className="w-10 h-10 text-primary-600" />
            </div>
            <div className="text-center md:text-left flex-1">
              <p className="text-neutral-700 leading-relaxed mb-6">
                {t.description}
              </p>
              <p className="text-sm text-neutral-500 mb-4">
                {t.contact}
              </p>
              <Button
                asChild
                data-testid="clothes-whatsapp-btn"
                className="bg-primary-600 hover:bg-primary-700 text-white rounded-full px-8 shadow-lg shadow-primary-600/20 hover:-translate-y-1 active:scale-95 transition-all"
              >
                <a
                  href="https://wa.me/261348185069?text=Bonjour,%20je%20souhaite%20organiser%20un%20envoi%20d%27habits%20pour%20les%20enfants."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
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
