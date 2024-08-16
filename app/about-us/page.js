'use client';
import Link from 'next/link';
import AboutText from '@/components/AboutText';

const About = () => {
  return (
    <div>
      {/* breadcrumb */}
      {/*====================  breadcrumb area ====================*/}
      <div
        className='breadcrumb-area breadcrumb-bg'
        style={{
          backgroundImage: `url(/assets/img/backgrounds/about.jpg)`,
        }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className='page-banner text-center'>
                <h1>Մեր մասին</h1>
                <ul className='page-breadcrumb'>
                  <li>
                    <Link href='/'>Գլխավոր</Link>
                  </li>
                  <li>Մեր մասին</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*====================  End of breadcrumb area  ====================*/}

      {/*About section start*/}
      <div className='about-section section-space--inner--120'>
        <div className='container'>
          <div className='about-wrapper row'>
            <div className='col-sm-6 col-12 order-1 order-lg-2'>
              <div className='about-image about-image-1'>
                <img src='/assets/img/about/about-1.jpg' alt='' />
              </div>
            </div>
            <div className='col-sm-6 col-12 order-2 order-lg-3'>
              <div className='about-image about-image-2'>
                <img src='/assets/img/about/about-2.jpg' alt='' />
              </div>
            </div>
            <div className='col-lg-6 col-12 order-3 order-lg-1'>
              <div className='about-content about-content-1'>
                <h1>Մեր մասին</h1>
                <p>
                  «Ինտեկո Էներգո» ՓԲԸ-ն հիմնադրվել է 2017թ մարտ ամսին եւ հանդիսանում է Հայաստանում
                  գործող խոշորագույն շինարարական ընկերություններից մեկը։ Մենք իրականացնում ենք
                  բազմաբնույթ շինարարական աշխատանքներ բնակելի, հասարակական եւ էներգետիկ ոլորտում։
                  Տեւական ժամանակ, հանդիսանալով Հայստանի Էլեկտրական Ցանցերի հիմնական կապալառուներից
                  մեկը, մենք իրականացրել ենք ՀՀ-ում եւ Արցախում էներգետիկ ենթակառուցվածքների
                  կառուցման, վերակառուցման եւ վերազինման լայնածավալ աշխատանքներ։
                </p>
              </div>
            </div>
            <div className='col-lg-6 col-12 order-4'>
              <div className='about-content about-content-2'>
                <h1>Մեր Առաքելությունը</h1>
                <ul>
                  <li>
                    <strong>Հուսալի Էլեկտրամատակարարում.</strong>
                    Մենք պարտավորվում ենք ապահովել հուսալի եւ անխափան էլեկտրամատակարարում մեր
                    հաճախորդների համար:
                  </li>
                  <li>
                    <strong>Ավելի Բարձր Կայունություն.</strong>
                    Մեր նախագծերը նպաստում են էներգետիկ համակարգի կայունության բարձրացմանը:
                  </li>
                  <li>
                    <strong>Էներգիայի Կորուստների Նվազեցում.</strong>
                    Նվազեցնում ենք էներգիայի կորուստները՝ օգտագործելով ամենաժամանակակից
                    տեխնոլոգիաները։
                  </li>
                </ul>
                <Link
                  href='/contact-us'
                  className='ht-btn ht-btn--round ht-btn--default--dark-hover section-space--top--20'
                >
                  Կապ մեզ հետ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*About section end*/}
    </div>
  );
};

export default About;