# Contributing

## Reporting Bugs

1. Always update to the most recent master release; the bug may already be resolved.
2. Search for similar issues in the issues list for this repo; it may already be an identified problem.
3. If this is a bug or problem that is clear, simple, and is unlikely to require any discussion -- it is OK to open an issue on GitHub with a reproduction of the bug including workflows and screenshots. If possible, submit a Pull Request with a failing test, entire application or module. If you'd rather take matters into your own hands, fix the bug yourself (jump down to the [Submitting a PR](#submitting-a-pr) section).

## Requesting Features

1. Use Github Issues to submit feature requests.
2. First, search for a similar request and extend it if applicable. This way it would be easier for the community to track the features.
3. When requesting a new feature, please provide as much detail as possible about why you need the feature in your apps. We prefer that you explain a need rather than explain a technical solution for it. That might trigger a nice conversation on finding the best and broadest technical solution to a specific need.

## Submitting a PR

Before you begin make sure there is an issue for the bug or feature you will be working on.

Following these steps is the best way to get your code included in the project:

1. Fork and clone the @nativescript-community/my-plugin repo:

```bash
git clone https://github.com/<your-git-username>/@nativescript-community/my-plugin.git

# Navigate to the newly cloned directory
cd @nativescript-community/my-plugin

# Add an "upstream" remote pointing to the original repo.
git remote add upstream https://github.com/nativescript-community/my-plugin.git
```

2. Create a branch for your PR

```bash
git checkout -b <my-fix-branch> master
```

3. The fun part! Make your code changes. Make sure you:

    - Follow the [commit message guidelines](https://www.conventionalcommits.org/en/v1.0.0/)
    - If you changed a demo, update it across all of the demos.
    - Update the README if you make changes to the plugin API

4. Before you submit your PR:

    - Rebase your changes to the latest master: `git pull --rebase upstream master`.

5. Push your fork. If you have rebased you might have to use force-push your branch:

```
git push origin <my-fix-branch> --force
```

7. Submit your pull request. Please, fill in the Pull Request template - it will help us better understand the PR and increase the chances of it getting merged quickly.

It's our turn from there on! We will review the PR and discuss changes you might have to make before merging it! Thanks!
