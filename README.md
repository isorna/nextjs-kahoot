# NextJS practice

This repository is meant for practicing with the following technologies:
* [React](https://react.dev/learn) & [NextJS](https://nextjs.org/).
* [GraphQL](https://graphql.org/learn/) & [Apollo GraphQL](https://www.apollographql.com/docs/react/get-started/).
* [Jest](https://jestjs.io/es-ES/).
* [Cypress](https://www.cypress.io/).
* [Storybook](https://storybook.js.org/).

## Features

The project will host a game of questions and answers, similar to [kahoot.com](kahoot.com) but more simple (according to the limited time of the practice), including the following roughly defined features.
* [ ] User OAuth identification (gmail).
* [ ] Using GraphQL:
  * Tests creation and sharing.
  * Questions and answers database.
* [ ] Responsive UI, using [chakra-ui](chakra-ui.com).
* [x] Presentation / Application / Domain / Infrastructure architecture.
* [ ] Components documented with Storybook.
* [ ] Unit tests with Jest and end2end with Cypress.
* [ ] Make PWA installable packages.
* [ ] Hosted at firebase (or vercel), so that PR can be previewed on a different channel before deploying to production.
* [ ] Update project lifecycle with linting and automation.

## Git Hooks

Documented here for easy distribution.

### commit-msg
```yaml
#!/usr/bin/env sh

echo COMMIT-MSG GIT HOOK commitlint
npx --no -- commitlint --edit ${1}
```

### pre-commit
```yaml
#!/usr/bin/env sh

echo PRE-COMMIT GIT HOOK lint-staged
npx lint-staged
```

### pre-push
```yaml
#!/usr/bin/env sh

echo PRE-PUSH GIT HOOK test
npm run test
```
