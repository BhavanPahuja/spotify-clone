# Angular Spotify

A simple Spotify client built with Angular, Nx workspace, ngrx, TailwindCSS and ng-zorro.

**Spotify premium** is required for the Web Playback SDK to play music. If you are using a free account, you can still browse the app, but it couldn't play the music.

## Tech stack

- [Angular 15][angular]
- [Nx Workspace][nx]
- [ngneat][] packages includes: `ngneat/svg-icon` and `ngneat/until-destroy`
- [ngrx][ngrx] and [ngrx/component-store][component-store]
- [ng-zorro][ng-zorro] UI component: `tooltip`, `modal`, `slider`, `switch` and more.
- [TailwindCSS][tailwind]
- [Netlify][netlify] for deployment

[angular]: https://angular.io/
[ngrx]: https://ngrx.io/
[component-store]: https://ngrx.io/guide/component-store
[tailwind]: https://tailwindcss.com/
[ng-zorro]: https://ng.ant.design/docs/introduce/en
[netlify]: http://netlify.com/
[ngneat]: https://github.com/ngneat

## High-level design

### Principles

All components are following:

- OnPush Change Detection and async pipes: all components use observable and async pipe for rendering data without any single manual subscribe.
- SCAMs (single component Angular modules) for tree-shakable components, meaning each component will have a respective module. For example, a RegisterComponent will have a corresponding RegisterModule.
- Mostly, everything will stay in the `libs` folder. New modules, new models, new configurations, new components etc... are in libs. libs should be separated into different directories based on existing apps.



### Authentication Flow

This project follows `Implicit Grant Flow` that Spotify recommended for client-side only applications and does not involve secret keys. The issued access tokens are short-lived, and there are no refresh tokens to extend them when they expire.

View the [Spotify Authorization Guide](https://developer.spotify.com/documentation/general/guides/authorization-guide/)

- Upon opening Angular Spotify, it will redirect you to Spotify to get access to your data. Angular Spotify only uses the data purely for displaying on the UI.
- Angular Spotify only keeps the access token in the browser memory without even storing it into browser local storage. If you do a hard refresh on the browser, it will ask for a new access token from Spotify. One access token is only valid for **one hour**.

![Angular Spotify Web Playback SDK flow][sdk-flow]

### Dependency Graph

Nx provides an [dependency graph][dep-graph-nx] out of the box. To view it on your browser, clone the repository and run:

```bash
npm run dep-graph
```

A simplified graph looks like the following. It gives you insightful information for your mono repo and is especially helpful when multiple projects depend on each other.

![Angular Spotify Dependency Graph][dep-graph]

### Nx Computation Cache

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Visit [Nx Cloud](https://nx.app/) to learn more.

![Nx cloud][nx-cloud]

## Features

### 1.0 - Simple Spotify client

- [x] Proven, scalable, and easy to understand the structure with Nx workspace
- [x] Play music using Spotify SDK
- [x] Load a maximum of 50 save playlists and top 100 songs per playlist.
- [x] Cool visualization

### Accessibility ♿

Not all components have properly defined [aria attributes](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA), visual focus indicators, etc.

## Setting up the development environment 🛠

- `git clone` this repository
- `cd angular-spotify`
- `npm install`
- `npm start` for starting Angular web application
- The app should run on `http://localhost:4200/`

### Unit/Integration tests 🧪

Tests are not included in this project.

## Compatibility

Web Playback SDK supports Chrome, Firefox, Edge, IE 11, or above running on Mac/Windows/Linux.

It **doesn't support** Safari or any mobile browser on **Android** or **iOS**

View [completed list of supported browsers](https://developer.spotify.com/documentation/web-playback-sdk/#supported-browsers)
