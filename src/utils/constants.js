export const TRANSLATION_FILE_PATH =
  process.env.REACT_APP_TRANSLATION_FILE_PATH;
  console.log(TRANSLATION_FILE_PATH);

export const languages = [
    {
        code: 'en',
        name: 'English',
        country_code: 'gb'
    },
    {
        code: 'hi',
        name: 'Hindi',
        country_code: 'in'
    },
    {
        code: 'es',
        name: 'Español',
        country_code: 'es'
    },
    {
        code: 'ar',
        name: 'العربية',
        country_code: 'sa',
        dir: 'rtl'
    },
]