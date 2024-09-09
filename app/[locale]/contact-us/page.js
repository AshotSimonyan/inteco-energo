'use client';
import Link from 'next/link';
import { useForm } from '@formspree/react';
import { useTranslations, useLocale } from 'next-intl';

const Contact = () => {
  const [state, handleSubmit, reset] = useForm('myzgwvnj');
  const t = useTranslations('contactPage'); // Use translations from contactPage namespace
  const lang = useLocale(); // Fetch the current language

  // Fetch error messages from the translations
  const getErrorMessage = (error) => {
    const errorCode = error.code || 'GENERIC_ERROR';
    return t(`errors.${errorCode}`, { default: t('errors.GENERIC_ERROR') });
  };

  const fieldErrors = state.errors?.fieldErrors || new Map();

  return (
    <div>
      <div
        className='breadcrumb-area breadcrumb-bg'
        style={{
          backgroundImage: `url(/assets/img/backgrounds/contact-bg.jpg)`,
        }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className='page-banner text-center'>
                <h1>{t('breadcrumb.contact')}</h1>
                <ul className='page-breadcrumb'>
                  <li>
                    <Link href={`/${lang}`}>{t('breadcrumb.home')}</Link>
                  </li>
                  <li>{t('breadcrumb.contact')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content page */}
      <div className='page-wrapper section-space--inner--120'>
        <div className='conact-section'>
          <div className='container'>
            <div className='row section-space--bottom--50'>
              <div className='col'>
                <div className='contact-map'>
                  <iframe
                    title='google-map'
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3269.661726631744!2d44.50479787623913!3d40.1990139714755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd3e9d09acbb%3A0x69055f3d417cb5c4!2s8%20Vahram%20Papazyan%20St%2C%20Yerevan%200012%2C%20Armenia!5e1!3m2!1sen!2sus!4v1722844407477!5m2!1sen!2sus'
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-4 col-12'>
                <div className='contact-information'>
                  <h3>{t('contactDetails.title')}</h3>
                  <ul>
                    <li>
                      <span className='icon'>
                        <i className='ion-android-map' />
                      </span>
                      <span className='text'>
                        <span>{t('contactDetails.address')}</span>
                      </span>
                    </li>
                    <li>
                      <span className='icon'>
                        <i className='ion-ios-telephone-outline' />
                      </span>
                      <span className='text'>
                        <a href='tel:+37444001496'>+374 44 001 496</a>
                      </span>
                    </li>
                    <li>
                      <span className='icon'>
                        <i className='ion-ios-email-outline' />
                      </span>
                      <span className='text'>
                        <a href='mailto:info@intecoenergo.am'>info@intecoenergo.am</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-lg-8 col-12'>
                <div className='contact-form'>
                  <h3>{t('contactDetails.leaveMessage')}</h3>
                  {state.succeeded ? (
                    <div>
                      <p>{t('contactDetails.successMessage')}</p>
                      <button onClick={reset}>{t('contactDetails.retryButton')}</button>
                    </div>
                  ) : (
                    <form id='contact-form' onSubmit={handleSubmit}>
                      <div className='row row-10'>
                        <div className='col-md-6 col-12 section-space--bottom--20'>
                          <input
                            id='name'
                            name='name'
                            type='text'
                            placeholder={t('contactDetails.placeholders.name')}
                          />
                          {fieldErrors.has('name') && (
                            <div className='error-message'>
                              {fieldErrors.get('name').map((error, index) => (
                                <p key={index}>{getErrorMessage(error)}</p>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className='col-md-6 col-12 section-space--bottom--20'>
                          <input
                            id='email'
                            name='email'
                            type='email'
                            placeholder={t('contactDetails.placeholders.email')}
                          />
                          {fieldErrors.has('email') && (
                            <div className='error-message'>
                              {fieldErrors.get('email').map((error, index) => (
                                <p key={index}>{getErrorMessage(error)}</p>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className='col-12'>
                          <textarea
                            id='message'
                            name='message'
                            placeholder={t('contactDetails.placeholders.message')}
                          />
                          {fieldErrors.has('message') && (
                            <div className='error-message'>
                              {fieldErrors.get('message').map((error, index) => (
                                <p key={index}>{getErrorMessage(error)}</p>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className='col-12'>
                          <button id='send_message' type='submit' disabled={state.submitting}>
                            {t('contactDetails.submitButton')}
                          </button>
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;