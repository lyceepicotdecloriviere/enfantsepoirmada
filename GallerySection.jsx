import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const galleryImages = [
  {
    url: "https://customer-assets.emergentagent.com/job_enfants-espoir-mg/artifacts/ndziy6fd_2A6A4111-336F-4981-ABC3-2B37A374AB1A.png",
    alt: "Élèves du Lycée Picot de Clorivière en uniforme bleu",
    span: "col-span-2 row-span-2"
  },
  {
    url: "https://customer-assets.emergentagent.com/job_enfants-espoir-mg/artifacts/f3uprshz_E8784F01-634D-4C94-B319-B29BBD33AACB.jpeg",
    alt: "Vue aérienne de l'établissement",
    span: "col-span-2 row-span-1"
  },
  {
    url: "https://customer-assets.emergentagent.com/job_enfants-espoir-mg/artifacts/07vhvhgv_9CFA2D58-EB27-4D52-84C3-D9F2D98746F3.jpeg",
    alt: "Cour intérieure et bâtiments",
    span: "col-span-1 row-span-1"
  },
  {
    url: "https://customer-assets.emergentagent.com/job_enfants-espoir-mg/artifacts/obabvjp1_0F21E928-7541-474B-8769-739046B0325F.jpeg",
    alt: "Bâtiment principal avec escaliers",
    span: "col-span-1 row-span-1"
  },
  {
    url: "https://customer-assets.emergentagent.com/job_enfants-espoir-mg/artifacts/q5grkiw1_251C4209-A8DA-46C1-A8AD-B969D98ABCD4.jpeg",
    alt: "Terrain de sport et bâtiments",
    span: "col-span-1 row-span-1"
  },
  {
    url: "https://customer-assets.emergentagent.com/job_enfants-espoir-mg/artifacts/srgwx0tx_AA4C3239-15DC-4CE6-B54A-F825F35D9D5E.jpeg",
    alt: "Élèves dans la cour sous les arbres",
    span: "col-span-1 row-span-1"
  },
  {
    url: "https://customer-assets.emergentagent.com/job_enfants-espoir-mg/artifacts/84qrgk4s_CD612B02-9FAD-46C8-A35D-D3C5A71FC78C.jpeg",
    alt: "Élèves en classe souriants",
    span: "col-span-2 row-span-1"
  },
];

export const GallerySection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="gallery"
      data-testid="gallery-section"
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
          <span className="font-handwriting text-2xl md:text-3xl text-primary-600 mb-2 block">
            Galerie Photos
          </span>
          <h2
            data-testid="gallery-title"
            className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-neutral-900 mb-4"
          >
            {t('gallery.title')}
          </h2>
          <p className="text-neutral-600 text-base md:text-lg">
            {t('gallery.subtitle')}
          </p>
        </motion.div>

        {/* Gallery Grid - Bento Style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[180px] md:auto-rows-[200px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              data-testid={`gallery-image-${index}`}
              className={`${image.span} relative group overflow-hidden rounded-2xl md:rounded-3xl shadow-lg`}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Decorative corner */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Decorative Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 md:mt-16 text-center"
        >
          <p className="font-handwriting text-2xl md:text-3xl text-primary-700 italic">
            "Fahavononana • Asa • Kalitao"
          </p>
          <p className="text-sm text-neutral-500 mt-2">Détermination • Action • Qualité</p>
        </motion.div>
      </div>
    </section>
  );
};
