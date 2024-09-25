# ft_transcendence

## STACK

- FRONTEND : Vanilla JS
- CSS library : Bootstrap toolkit
- BACKEND : Django (Python)

## OBLIGATIONS

- SPA (single-page-application)
- Compatible with ***Google Chrome***
- Everything must be launched with a single command line (Docker)


## GAME

The main purpose of this website is to play Pong versus other players :

1. Therefore, users must have the ability to participate in a live Pong game against
another player directly on the website. Both players will use the same keyboard.
The Remote players module can enhance this functionality with remote players.
2. A player must be able to play against another player, but it should also be possible
to propose a tournament. This tournament will consist of multiple players who
can take turns playing against each other. You have flexibility in how you implement
the tournament, but it must clearly display who is playing against whom and the
order of the players.
3. A registration system is required: at the start of a tournament, each player
must input their alias name. The aliases will be reset when a new tournament
begins. However, this requirement can be modified using the Standard User
Management module.
4. There must be a matchmaking system: the tournament system organize the
matchmaking of the participants, and announce the next fight.
5. All players must adhere to the same rules, which includes having identical paddle
speed. This requirement also applies when using AI; the AI must exhibit the same
speed as a regular player.
6. The game itself must be developed in accordance with the default frontend con-
straints (as outlined above), or you may choose to utilize the FrontEnd module,
or you have the option to override it with the Graphics module. While the visual
aesthetics can vary, it must still capture the essence of the original Pong (1972).

## SECURITY

1. Any password stored in your database, if applicable, must be hashed.
2. Your website must be protected against SQL injections/XSS.
3. If you have a backend or any other features, it is mandatory to enable an HTTPS
connection for all aspects (Utilize wss instead of ws...).
4. You must implement some form of validation for forms and any user input, either
within the base page if no backend is used or on the server side if a backend is
employed.
5. Regardless of whether you choose to implement the JWT Security module with
2FA, it’s crucial to prioritize the security of your website. For instance, if you opt
to create an API, ensure your routes are protected. Remember, even if you decide
not to use JWT tokens, securing the site remains essential.


## Modules

For 100% : 7 major modules required
> Two Minor Modules are equivalent to one Major Module.

Bonus :
> Five points will be awarded for each minor module

> Ten points will be awarded for each major module.

// need to concert with everyone for that
