'use client';
import Link from 'next/link';
import { useForm } from '@formspree/react';

const FieldErrorCodeEnum = {
  REQUIRED_FIELD_EMPTY: 'REQUIRED_FIELD_EMPTY',
  REQUIRED_FIELD_MISSING: 'REQUIRED_FIELD_MISSING',
  STRIPE_CLIENT_ERROR: 'STRIPE_CLIENT_ERROR',
  STRIPE_SCA_ERROR: 'STRIPE_SCA_ERROR',
  TYPE_EMAIL: 'TYPE_EMAIL',
  TYPE_NUMERIC: 'TYPE_NUMERIC',
  TYPE_TEXT: 'TYPE_TEXT',
};

// Armenian translations for error messages
const errorMessages = {
  [FieldErrorCodeEnum.REQUIRED_FIELD_EMPTY]: 'Դաշտը պարտադիր է',
  [FieldErrorCodeEnum.REQUIRED_FIELD_MISSING]: 'Դաշտը բացակայում է',
  [FieldErrorCodeEnum.STRIPE_CLIENT_ERROR]: 'STRIPE հաճախորդի սխալ',
  [FieldErrorCodeEnum.STRIPE_SCA_ERROR]: 'STRIPE SCA սխալ',
  [FieldErrorCodeEnum.TYPE_EMAIL]: 'Մուտքագրեք վավեր էլ. հասցե',
  [FieldErrorCodeEnum.TYPE_NUMERIC]: 'Մուտքագրեք թիվ',
  [FieldErrorCodeEnum.TYPE_TEXT]: 'Մուտքագրեք տեքստ',
};

// Function to get the appropriate Armenian message
const getErrorMessage = (error) => {
  return errorMessages[error.code] || 'Սխալ է տեղի ունեցել։';
};
const Contact = () => {
  const [state, handleSubmit, reset] = useForm('myzgwvnj');

  const fieldErrors = state.errors?.fieldErrors || new Map();
  return (
    <div>
      {/* breadcrumb */}
      {/*====================  breadcrumb area ====================*/}
      <div
        className='breadcrumb-area breadcrumb-bg'
        style={{
          backgroundImage: `url(assets/img/backgrounds/funfact-bg.jpg)`,
        }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className='page-banner text-center'>
                <h1>Հետադարձ կապ</h1>
                <ul className='page-breadcrumb'>
                  <li>
                    <Link href='/'>Գլխավոր</Link>
                  </li>
                  <li>Հետադարձ կապ</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*====================  End of breadcrumb area  ====================*/}

      {/*====================  content page content ====================*/}
      <div className='page-wrapper section-space--inner--120'>
        {/*Contact section start*/}
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
                  <h3>Կոնտակտային տվյալներ</h3>
                  <ul>
                    <li>
                      <span className='icon'>
                        <i className='ion-android-map' />
                      </span>
                      <span className='text'>
                        <span>Վահրամ Փափազյան 8</span>
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
                  <h3>Թողեք Ձեր հաղորդագրությունը</h3>
                  {state.succeeded ? (
                    <div>
                      <p>Շնորհակալություն, Ձեզ հաղորդագրությունը հաջողությամբ ուղարկվեց!</p>
                      <button onClick={reset}>Կրկին լրացնել</button>
                    </div>
                  ) : (
                    <form id='contact-form' onSubmit={handleSubmit}>
                      <div className='row row-10'>
                        <div className='col-md-6 col-12 section-space--bottom--20'>
                          <input id='name' name='name' type='text' placeholder='Ձեր անունը' />
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
                            placeholder='Ձեր էլ. հասցեն'
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
                            placeholder='Ձեր հաղորդագրությունը'
                            defaultValue={''}
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
                            Ուղարկել
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
        {/*Contact section end*/}
      </div>
      {/*====================  End of content page content  ====================*/}
    </div>
  );
};

export default Contact;