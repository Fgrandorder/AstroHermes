# TRI-HERMES W/ Astro Starlight

## 🚀 Project Structure

```
docs
├── index.mdx
├── fgo/
│   ├── main-story/
│   ├── events/
│   └── servants/
├── source/
│   ├── anime-manga/
│   ├── drama-cd/
│   ├── games/
│   ├── light-novels/
│   ├── visual-novels/
├── meta/
│   ├── bamboo broom diary.md
│   ├── community/
│   ├── materials/
│   ├── interviews/
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

The landing page uses a Splash template that can be edited in `node_modules/starlight/components/Hero.astro`.

Similarly, you can edit Astro's built-in components in `node_modules/starlight/user_components` and go to the respective component found.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Documentation Resources

* [Starlight Docs](https://starlight.astro.build/)
* [Astro Docs](https://docs.astro.build)
