function encrypt()
{
     entre = window.prompt("Entrée : ");
     cle = window.prompt("Clé : ");
     console.log("Entrée : " + entre);
     console.log("Clé : " + cle);

     let longueur = entre.length;
     let compteur = 0;
     let produit = "";
     while (compteur != longueur)
     {
          let separateEntre = entre[compteur];
          let separateCle = cle[compteur];
          compteur++;
          if (separateEntre == separateCle)
          {
               produit += "1";
          }
          else
          {
               produit += "0";
          }
     }
     console.log("Produit : " + produit);
}

encrypt();