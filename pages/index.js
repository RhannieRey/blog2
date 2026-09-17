import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>
          Hi, I'm Rhannie Rey Bagsik. I chose Web Development because of the growing need for engaging digital experiences. As more industries move online, building responsive and accessible websites has become essential. I’m passionate about creating platforms that connect people and make technology seamless in daily life.  

          The rise of e-commerce showed me how well‑designed sites can help small businesses reach global audiences. That inspired me to pursue web development—not just as a career, but as a creative journey to shape tomorrow’s digital world.
        </p>

        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}