

1. **Install Git and Set Up GitHub Account:**
   - Install Git on your machine
   - Set up a GitHub account

2. **Choose an Existing Project and Initialize a Git Repository:**
   - Open a terminal in the project directory.
   - Run the following commands:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     ```

3. **Create a New Repository on GitHub and Link it:**
   - Go to [GitHub](https://github.com/) and log in.
   - Click on the "+" sign in the upper right corner and select "New repository."
   - Follow the instructions to create a new repository.
   - After creating the repository, follow the instructions under "…or push an existing repository from the command line" to link your local repository to the GitHub repository.

4. **Commit the Project and Push it to GitHub:**
   - In your terminal, run:
     ```bash
     git remote add origin <repository-url>
     git branch -M main
     git push -u origin main
     ```

### Branching and Creating Merge Conflicts:

5. **Create at Least Two Branches:**
   - Run the following commands to create and switch to new branches:
     ```bash
     git checkout -b branch1
     # Make changes in files
     git add .
     git commit -m "Changes in branch1"
     
     git checkout -b branch2
     # Make different changes in the same file
     git add .
     git commit -m "Changes in branch2"
     ```

6. **Merge These Branches into the Main Branch:**
   - Switch back to the main branch:
     ```bash
     git checkout main
     ```
   - Merge the branches into the main branch:
     ```bash
     git merge branch1
     git merge branch2
     ```
   - This will create a merge conflict.

### Resolving Merge Conflicts:

7. **Identify the Conflicting Changes:**
   - Git will notify you about the merge conflict. Open the conflicted file(s) in a text editor.

8. **Choose the Correct Version or Integrate Changes:**
   - Manually resolve the conflicts in the file(s). Choose the correct changes or integrate changes from both branches.

9. **Commit and Push the Resolved Changes to GitHub:**
   - After resolving conflicts, run:
     ```bash
     git add .
     git commit -m "Merge conflict resolved"
     git push origin main
     ```

Now, project with branches and resolved merge conflicts is pushed to GitHub.

Manish Mishra