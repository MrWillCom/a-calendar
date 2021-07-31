<p align="center"><img src="./public/favicon.png" alt="The logo of A Calendar" width="84" height="84"></p>

<h3 align="center">A Calendar</h3>

<p align="center">A Calendar is a calendar with new photos everyday.</p>

<p align="center"><a href="https://a-calendar.vercel.app/"><img src="https://img.shields.io/badge/%F0%9F%8C%8F-Visit-lightgreen?style=flat"></a> ¯ <a href="#development"><img src="https://img.shields.io/badge/%E2%8C%A8-Develop-41ccff?style=flat"></a> ¯ <a href="https://open.vscode.dev/MrWillCom/a-calendar"><img src="https://open.vscode.dev/badges/open-in-vscode.svg"></a></p>

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
