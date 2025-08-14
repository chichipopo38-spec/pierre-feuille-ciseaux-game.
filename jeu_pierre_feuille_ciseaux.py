import random

def jouer_pierre_feuille_ciseaux():
    # Définir les options du jeu
    options = ["pierre", "feuille", "ciseaux"]
    
    # Initialiser les scores
    score_joueur = 0
    score_ordinateur = 0
    
    print("--- Bienvenue à Pierre, Feuille, Ciseaux ! ---")
    print("Le premier à 3 points gagne la partie.")
    
    # La boucle principale du jeu continue tant que personne n'a atteint 3 points
    while score_joueur < 3 and score_ordinateur < 3:
        # Afficher le score actuel
        print(f"\n--- Score actuel : Vous {score_joueur} - {score_ordinateur} Ordinateur ---")
        
        # Demander au joueur de faire son choix et s'assurer qu'il est valide
        choix_joueur = ""
        while choix_joueur not in options:
            choix_joueur = input("Choisissez : pierre, feuille ou ciseaux ? ").lower()
            
        # L'ordinateur fait son choix de manière aléatoire
        choix_ordinateur = random.choice(options)
        print(f"L'ordinateur a choisi : {choix_ordinateur}")
        
        # Comparer les choix et déterminer le vainqueur de la manche
        if choix_joueur == choix_ordinateur:
            print("Égalité pour cette manche !")
        elif (choix_joueur == "pierre" and choix_ordinateur == "ciseaux") or \
             (choix_joueur == "feuille" and choix_ordinateur == "pierre") or \
             (choix_joueur == "ciseaux" and choix_ordinateur == "feuille"):
            print("Vous avez gagné cette manche !")
            # Incrémenter le score du joueur
            score_joueur += 1
        else:
            print("Vous avez perdu cette manche !")
            # Incrémenter le score de l'ordinateur
            score_ordinateur += 1
            
    # Une fois que la boucle est terminée, annoncer le vainqueur final
    print("\n--- Fin de la partie ! ---")
    if score_joueur == 3:
        print("Félicitations, vous avez gagné la partie !")
    else:
        print("L'ordinateur a gagné la partie.")

# Lancer le jeu
jouer_pierre_feuille_ciseaux()