# ft_transcendence

Make a fullstack website to play Pong (Youpi...)

## STACK

- FRONTEND : Vanilla JS [Documentation](https://www.w3schools.com/js/DEFAULT.asp)
- CSS library : Bootstrap toolkit [Documentation](https://getbootstrap.com/)
- BACKEND : Django (Python) [Documentation](https://docs.djangoproject.com/en/5.1/)

## OBLIGATIONS

- SPA (single-page-application) 
- Compatible with ***Google Chrome***
- Everything must be launched with a single command line (Docker, like in *Inception*)

## GAME

The primary objective of this website is to facilitate Pong gameplay between users. Here are the key features:

- **Live Pong Gameplay**: Users should be able to engage in a live Pong game against another player directly on the website. Both players will use the same keyboard. The functionality can be enhanced with the Remote players module.

- **Tournament Mode**: Besides one-on-one games, users should also have the option to propose a tournament. This tournament will involve multiple players taking turns to play against each other. The implementation of the tournament is flexible, but it should clearly display the match-ups and the player order.

- **Registration System**: A registration system is necessary. At the start of a tournament, each player must input their alias. These aliases will be reset when a new tournament begins. The Standard User Management module can modify this requirement.

- **Matchmaking System**: The tournament system should organize the matchmaking of the participants and announce the upcoming match.

- **Uniform Game Rules**: All players must follow the same rules, including having identical paddle speed. This rule also applies to AI players; the AI must operate at the same speed as a human player.

- **Game Development**: The game must be developed in accordance with the default frontend constraints (as outlined above). Alternatively, the FrontEnd module can be used, or it can be overridden with the Graphics module. Regardless of the visual aesthetics, the game must retain the essence of the original Pong (1972).

## SECURITY

1. **Password Hashing**: If your database stores passwords, ensure they are hashed.
2. **Protection Against Attacks**: Your website should be safeguarded against SQL injections and XSS.
3. **HTTPS Connection**: If your site features a backend or other elements, activating an HTTPS connection for all components is compulsory. Use wss instead of ws.
4. **Input Validation**: Implement a validation system for forms and user input. This can be done on the base page if there's no backend, or server-side if a backend is present.
5. **Website Security**: Prioritizing your website's security is crucial, whether or not you choose to implement the JWT Security module with 2FA. For example, if you decide to develop an API, make sure your routes are secure. Even if you choose not to use JWT tokens, the security of your site remains paramount.

## Modules

To achieve 100% completion, you need to complete 7 major modules.

**Note** : Please note that two minor modules are equivalent to one major module.

### Bonus Points

- Each minor module completed will earn you an additional five points.
- Each major module completed will earn you an additional ten points.
