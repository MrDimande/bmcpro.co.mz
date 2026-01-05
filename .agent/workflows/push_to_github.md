---
description: Verify build and push changes to GitHub
---

1. Check the current git status to confirm changes.
   `git status`

2. Run a build to ensure no errors were introduced.
   `npm run build`

3. Stage all changes.
   // turbo
   `git add .`

4. Commit the changes with a descriptive message.
   `git commit -m "feat: elevate service pages with interactive elements and premium UI"`

5. Push the changes to the remote repository.
   // turbo
   `git push`
