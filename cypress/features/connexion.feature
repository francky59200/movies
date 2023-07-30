
  Feature: Login connexion

    Scenario: test connexion user
      Given I load ('/')
      When I enter 'francky' in the text input with label 'Nom du compte'
      And text input have value 'francky'
      And I enter 'monpasse' in the password input with label 'Mot de passe'
      And Password input have value 'monpasse'
      And I click a button with name 'Connexion'
      Then I redirect to dashboard account
