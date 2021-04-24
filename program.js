function encrypt()
{
     console.clear();
     entre = window.prompt("Message à crypter : ");
     cle = window.prompt("Clé : ");
     if (entre.length != 6 || cle.length !=6)
     {
          console.log("Erreur utilisateur");
          return;
     }
     console.log("Message à crypter : " + entre);
     console.log("Clé : " + cle);

     let longueur = entre.length;
     let compteur = 0;
     let produit = "";
     while (compteur != longueur)
     {
          let separateEntre = entre[compteur];
          let separateCle = cle[compteur];
          compteur++;
          if (separateEntre != 0 || separateEntre !=1)
          {
               console.clear();
               console.log("Erreur utilisateur");
               return;
          }
          if (separateCle != 0 || separateCle !=1)
          {
               console.clear();
               console.log("Erreur utilisateur");
               return;
          }
          if (separateEntre == separateCle)
          {
               produit += "1";
          }
          else
          {
               produit += "0";
          }
     }
     console.log("Message crypté : " + produit);
}

function decrypt()
{
     console.clear();
     entre = window.prompt("Message à décrypter : ");
     cle = window.prompt("Clé : ");
     if (entre.length != 6 || cle.length !=6)
     {
          console.log("Erreur utilisateur");
          return;
     }
     console.log("Message à décrypter : " + entre);
     console.log("Clé : " + cle);

     let longueur = entre.length;
     let compteur = 0;
     let produit = "";
     while (compteur != longueur)
     {
          let separateEntre = entre[compteur];
          let separateCle = cle[compteur];
          compteur++;
          if (separateEntre != 0 || separateEntre !=1)
          {
               console.clear();
               console.log("Erreur utilisateur");
               return;
          }
          if (separateCle != 0 || separateCle !=1)
          {
               console.clear();
               console.log("Erreur utilisateur");
               return;
          }
          if (separateEntre == separateCle)
          {
               produit += "0";
          }
          else
          {
               produit += "1";
          }
     }
     console.log("Message décrypté : " + produit);
}