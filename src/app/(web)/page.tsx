import { Scene0Preloader } from '@/components/ui/Scene0Preloader';
import { Scene1Genesis } from '@/components/ui/Scene1Genesis';
import { Scene2Monoculture } from '@/components/ui/Scene2Monoculture';
import { Scene3Awakening } from '@/components/ui/Scene3Awakening';
import { Scene4SpecimenBay } from '@/components/ui/Scene4SpecimenBay';
import { GlobalHUD } from '@/components/ui/GlobalHUD';
import { buildWebPageJsonLd } from '@/lib/seo/json-ld';
import { siteConfig } from '@/lib/site-config';

export default function HomePage() {
  const webPageJsonLd = buildWebPageJsonLd({
    path: '/',
    title: siteConfig.title,
    description: siteConfig.description,
  });

  return (
    <>
      <Scene0Preloader />
      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
        />
        <Scene1Genesis />
        <Scene2Monoculture />
        <Scene3Awakening />
        <Scene4SpecimenBay />
      </main>
      <GlobalHUD />
    </>
  );
}
