# Ecran RATP Web

Cet écran de la RATP codé en HTML/CSS/JS correspond à la représentation graphique fidèle d'un écran d'information en gare du réseau RATP.

## Installation

Pour installer ce site, copiez tout ces fichiers dans votre hébergement web.

## Utilisation
Pour modifier les stations et la direction du traffic, cela se trouve dans le fichier js/ratp.js et il s'agit des variables suivantes :
```
var schedules_url = 'https://api-ratp.pierre-grimaud.fr/v4/schedules/rers/(lettre_rer)/(nom_de_la_station)/'+config;
var traffic_url   = 'https://api-ratp.pierre-grimaud.fr/v4/traffic/rers/(lettre_rer)';
station     : '(nom_de_la_station)',
```
Pour modifier le nom de la station dans l'URL de l'API merci de se référer au super travail qu'à fait @pgrimaud à l'adresse suivante : https://api-ratp.pierre-grimaud.fr/v4/

## Contribution
Les contributions et avis sont les bienvenus.

## Démonstration
 ![Démo](https://perso-etudiant.u-pem.fr/~tlefeb08/demo.png "Capture d'écran du site")
 
 Démo <https://perso-etudiant.u-pem.fr/~tlefeb08/>

## Remerciements
Grand remerciement à @pgrimaud qui a partagé l'entièreté de l'API et une bonne base du site.
