<p align="center"><img src="./public/favicon.png" alt="The logo of A Calendar" width="84" height="84"></p>

<h3 align="center">A Calendar</h3>

<p align="center">A Calendar is a calendar with new photos everyday.</p>

<p align="center"><a href="https://a-calendar.vercel.app/">🌏 Visit</a> | <a href="#development">🧑‍💻 Develop</a> | <a href="https://open.vscode.dev/MrWillCom/a-calendar">⌨️ Open in VS Code</a></p>

## Development

Install dependencies:

```sh
$ yarn install
```

This project is based on a DIY framework, so currently it doesn't provide a development server. You can use [serve](https://github.com/vercel/serve) as a static site server:

```sh
# Build the project
$ yarn build

# Install `serve` if you haven't
$ yarn global add serve

# Start the server
$ serve ./output/
```

You can run `serve` in another terminal, so that you can build without restarting the server.
