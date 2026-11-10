// ENDRE DISSE: bilde og Snapchat-brukernavn som vises i «Single i ditt område»-popupen.
// Bytt bilde ved å legge en ny fil i src/images og endre importen under.
import image from '@images/bilde.jpg';

export const SINGLE_AD = {
  name: 'Oskar',
  age: 19,
  distance: '1,2 km unna',
  image,
  snap: 'oskar_hel321', // vises bare som tekst, lenker ikke til Snapchat
  adUrl: 'http://singler-i-ditt-omrade.example/chat',
};
